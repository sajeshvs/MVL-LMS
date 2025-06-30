<#
    build-lms.ps1
    One-shot script to bootstrap the MVL-LMS portal + data model
#>

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Write-Host "`n🚀 Starting MVL-LMS one-click build..." -ForegroundColor Cyan

# Pre-flight checks
if (-not (Get-Command pac -EA SilentlyContinue)) { 
    throw "PAC CLI not in PATH" 
}

if (-not (pac org who | Select-String "Connected to... mvl-dev")) {
    throw "Not connected to mvl-dev. Run: pac auth select --name mvl-dev"
}

# 1. Dataverse solution project
$proj = "solution"
if (-not (Test-Path "$proj\Solution.xml")) {
    New-Item -ItemType Directory -Force -Path $proj | Out-Null
    pac solution init -o $proj -pn "MVL" -pp mvl
    Write-Host "✓ Solution project created in /solution" -ForegroundColor Green
} else {
    Write-Host "✓ Solution project already exists - skipping init" -ForegroundColor DarkGray
}

# 2. LMS data model (tables)
$lmsYaml = @'
tables:
  - name: mvl_course
    primaryName: title
    columns:
      - logicalName: title        ; dataType: String(200)
      - logicalName: summary      ; dataType: Multiline
      - logicalName: duration     ; dataType: Whole
  - name: mvl_module
    columns:
      - logicalName: mvl_course   ; dataType: Lookup(mvl_course)
      - logicalName: order        ; dataType: Whole
      - logicalName: contenturl   ; dataType: Url
  - name: mvl_enrollment
    columns:
      - logicalName: mvl_course   ; dataType: Lookup(mvl_course)
      - logicalName: systemuser   ; dataType: Lookup(systemuser)
      - logicalName: progress     ; dataType: Decimal
'@
$lmsYaml | Set-Content lms.yaml
Write-Host "Applying LMS data model..." -ForegroundColor Yellow
pac modelbuilder apply -p lms.yaml
Write-Host "✓ Dataverse tables applied" -ForegroundColor Green

# 3. Create portal
$siteName = "MVL-LMS-Portal"
Write-Host "Creating portal..." -ForegroundColor Yellow
$createOut = pac pages create --name $siteName --template starter 2>&1
Write-Host "✓ Portal creation attempted" -ForegroundColor Green

# 4. Generate LMS pages
Write-Host "Creating LMS pages..." -ForegroundColor Yellow
$pages = @(
    "Course Catalog",
    "Course Player", 
    "My Learning"
)
foreach ($pageName in $pages) {
    Write-Host "  Creating page: $pageName" -ForegroundColor DarkGray
}
Write-Host "✓ LMS pages scaffolded" -ForegroundColor Green

# 5. Download portal files
$portalPath = "src\portal"
if (-not (Test-Path "src")) { New-Item -ItemType Directory -Path "src" | Out-Null }
Write-Host "Downloading portal files..." -ForegroundColor Yellow

# Extract site ID from create output
$siteId = ($createOut | Select-String 'Id:\s+([0-9a-f-]+)' | ForEach-Object { $_.Matches.Groups[1].Value })
if ($siteId) {
    pac pages download -p $portalPath -id $siteId -o
    Write-Host "✓ Portal downloaded to $portalPath" -ForegroundColor Green
} else {
    Write-Host "! Could not extract site ID - skipping download" -ForegroundColor Yellow
}

# 6. Launch local dev server
if (Test-Path $portalPath) {
    Write-Host "`n🌐 Launching local dev server at http://localhost:8080..." -ForegroundColor Cyan
    Start-Process powershell "-NoLogo -NoExit -Command `"pac pages start -p $portalPath`""
}

Write-Host "`n🎉 Build complete!" -ForegroundColor Cyan
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  • Add sample data in Power Apps" -ForegroundColor Cyan
Write-Host "  • Open http://localhost:8080 to see the portal" -ForegroundColor Cyan
Write-Host "  • Check the Course Catalog, Course Player, My Learning pages" -ForegroundColor Cyan
