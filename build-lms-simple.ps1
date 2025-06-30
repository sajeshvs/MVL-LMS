# build-lms-simple.ps1
# One-shot script to bootstrap the MVL-LMS portal + data model

Write-Host "🚀 Starting MVL-LMS one-click build..." -ForegroundColor Cyan

# Pre-flight checks
if (-not (Get-Command pac -ErrorAction SilentlyContinue)) { 
    Write-Error "PAC CLI not in PATH"
    exit 1
}

$orgCheck = pac org who | Select-String "Connected to... mvl-dev"
if (-not $orgCheck) {
    Write-Error "Not connected to mvl-dev. Run: pac auth select --name mvl-dev"
    exit 1
}

# 1. Create solution project
$proj = "solution"
Write-Host "Creating solution project..." -ForegroundColor Yellow
if (-not (Test-Path "$proj/Solution.xml")) {
    New-Item -ItemType Directory -Force -Path $proj | Out-Null
    pac solution init -o $proj -pn "MVL" -pp mvl
    Write-Host "✓ Solution project created" -ForegroundColor Green
}

# 2. Create LMS data model
Write-Host "Creating LMS tables..." -ForegroundColor Yellow
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
Write-Host "✓ Tables created" -ForegroundColor Green

# 3. Create portal
Write-Host "Creating portal..." -ForegroundColor Yellow
$siteName = "MVL-LMS-Portal"
pac pages create --name $siteName --template starter
Write-Host "✓ Portal created" -ForegroundColor Green

# 4. Create directories
Write-Host "Setting up directories..." -ForegroundColor Yellow
$portalPath = "src\portal"
if (-not (Test-Path "src")) { 
    New-Item -ItemType Directory -Path "src" | Out-Null 
}
Write-Host "✓ Directories ready" -ForegroundColor Green

Write-Host "`n🎉 Build complete!" -ForegroundColor Cyan
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run: pac pages download -p src\portal" -ForegroundColor White
Write-Host "2. Run: pac pages start -p src\portal" -ForegroundColor White
Write-Host "3. Open: http://localhost:8080" -ForegroundColor White
