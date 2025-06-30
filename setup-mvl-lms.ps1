<# ───── pre-flight ───── #>
if (-not (Get-Command pac -ErrorAction SilentlyContinue)) {
    Write-Error "PAC CLI not found. Install Power Platform CLI before running."
    exit 1
}

# confirm the correct environment
$org = pac org who | Select-String "Connected to... mvl-dev"
if (-not $org) {
    Write-Error "Not connected to mvl-dev. Run 'pac auth select --name mvl-dev' first."
    exit 1
}

# Step 1: Initialize Power Apps solution
Write-Host "Step 1: Initializing Power Apps solution..." -ForegroundColor Yellow
pac solution init --name "MVLLMS" --publisher-name "MVL" --publisher-prefix mvl
if ($LASTEXITCODE) { Write-Error "Solution init failed"; exit 1 }


<# ───── Step 2: create portal ───── #>
Write-Host "Step 2: Creating Power Pages site 'MVL-LMS-Portal'..." -ForegroundColor Yellow
$createOut = pac pages create --name "MVL-LMS-Portal" --template starter
if ($LASTEXITCODE) { Write-Error "Site create failed"; exit 1 }

# grab webSiteId with simple regex
$webId = ($createOut | Select-String -Pattern "Id:\s+([0-9a-f-]+)").Matches.Groups[1].Value
if (-not $webId) { Write-Error "Could not parse webSiteId"; exit 1 }

<# ───── Step 3: ensure folder ───── #>
$portalPath = "src\portal"
if (-not (Test-Path $portalPath)) { New-Item -ItemType Directory -Path $portalPath | Out-Null }

<# ───── Step 4: download content ───── #>
Write-Host "Step 4: Downloading content to $portalPath ..." -ForegroundColor Yellow
pac pages download --path $portalPath --webSiteId $webId
if ($LASTEXITCODE) { Write-Error "Download failed"; exit 1 }

Write-Host "`n🎉  MVL-LMS portal scaffolded in $portalPath" -ForegroundColor Cyan
exit 0
