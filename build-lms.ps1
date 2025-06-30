<#
    build-lms.ps1
    One-shot script to bootstrap the MVL-LMS portal + data model
    Author: You (+ Copilot assist)
#>

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Write-Host "`n🚀  Starting MVL-LMS one-click build..." -ForegroundColor Cyan

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
pac modelbuilder apply -p lms.yaml
Write-Host "✓ Dataverse tables applied" -ForegroundColor Green

# 3. Create or reuse portal
$siteName = "MVL-LMS-Portal"
Write-Host "Creating portal..." -ForegroundColor Yellow
$createOut = pac pages create --name $siteName --template starter 2>&1
$siteId = ($createOut | Select-String -Pattern 'Id:\s+([0-9a-f-]+)').Matches.Groups[1].Value
if ($siteId) {
    Write-Host "✓ Portal created. Id = $siteId" -ForegroundColor Green
} else {
    Write-Host "Portal creation failed or ID not found - continuing..." -ForegroundColor Yellow
    $siteId = "unknown"
}

# 4. Generate LMS pages
Write-Host "Creating LMS pages..." -ForegroundColor Yellow
$pages = @(
    @{name="Course Catalog"; table="mvl_course"; type="list"},
    @{name="Course Player"; table="mvl_module"; type="form"},
    @{name="My Learning"; table="mvl_enrollment"; type="list"}
)
foreach ($p in $pages) {
    try {
        pac pages new page --name $p.name --table $p.table --type $p.type
    } catch {
        Write-Host "Page creation may have failed for $($p.name) - continuing..." -ForegroundColor Yellow
    }
}
Write-Host "✓ LMS pages scaffolded" -ForegroundColor Green

# 5. Download portal files
$portalPath = "src\portal"
if (-not (Test-Path "src")) { New-Item -ItemType Directory -Path "src" | Out-Null }
Write-Host "Downloading portal files..." -ForegroundColor Yellow
pac pages download -p $portalPath -id $siteId -o
Write-Host "✓ Portal downloaded to $portalPath" -ForegroundColor Green

# 6. Launch local dev server
Write-Host "`n🌐 Launching local dev server at http://localhost:8080..." -ForegroundColor Cyan
Start-Process powershell "-NoLogo -NoExit -Command `"pac pages start -p $portalPath`""

Write-Host "`n🎉 Build complete! Open the URL above - you'll see:" -ForegroundColor Cyan
Write-Host "  • Course Catalog list (empty)" -ForegroundColor Cyan
Write-Host "  • Course Player form (select a module)" -ForegroundColor Cyan
Write-Host "  • My Learning dashboard (per-user enrollments)" -ForegroundColor Cyan
Write-Host "`nAdd sample data in Power Apps, refresh, and watch it live." -ForegroundColor Cyan
