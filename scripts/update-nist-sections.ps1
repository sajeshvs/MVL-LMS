# NIST SP 800-171r3 Anchor Update Script
# This script updates specific NIST references with section anchors

param(
    [string]$FilePath = "assets\js\curriculum-data.js"
)

# Define a subset of critical controls to update as a demonstration
$controlUpdates = @{
    "AC.3.1.4" = @{ anchor = "#d30e1025-Head3"; name = "Separation of Duties"; docRef = "3.1.4" }
    "AC.3.1.5" = @{ anchor = "#d30e1064-Head3"; name = "Least Privilege"; docRef = "3.1.5" }
    "IA.3.5.3" = @{ anchor = "#d30e2686-Head3"; name = "Multi-Factor Authentication"; docRef = "3.5.3" }
    "AU.3.3.1" = @{ anchor = "#d30e1823-Head3"; name = "Event Logging"; docRef = "3.3.1" }
    "CM.3.4.1" = @{ anchor = "#d30e2160-Head3"; name = "Baseline Configuration"; docRef = "3.4.1" }
}

Write-Host "🔗 Updating NIST SP 800-171r3 references with specific section anchors..." -ForegroundColor Green
Write-Host "📄 Processing: $FilePath" -ForegroundColor Yellow

if (-not (Test-Path $FilePath)) {
    Write-Host "❌ File not found: $FilePath" -ForegroundColor Red
    exit 1
}

$content = Get-Content $FilePath -Raw
$updatedCount = 0

foreach ($controlId in $controlUpdates.Keys) {
    $update = $controlUpdates[$controlId]
    $docRef = $update.docRef
    $anchor = $update.anchor
    $name = $update.name
    
    # Find the specific pattern for this control
    $oldPattern = "Official CMMC documentation for control $docRef`"[^}]+},[^{]+{[^`"]+`"title`": `"NIST SP 800-171r3 Guide`",[^`"]+`"url`": `"https://nvlpubs\.nist\.gov/nistpubs/SpecialPublications/800-171r3/NIST\.SP\.800-171r3\.html`",[^`"]+`"description`": `"Detailed implementation guidance for federal requirements`""
    
    $newUrl = "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html$anchor"
    $newDescription = "$name - Detailed implementation guidance for federal requirements"
    
    $newPattern = "Official CMMC documentation for control $docRef`"`
      },
      {
        `"title`": `"NIST SP 800-171r3 Guide`",
        `"url`": `"$newUrl`",
        `"description`": `"$newDescription`""
    
    if ($content -match $oldPattern) {
        $content = $content -replace $oldPattern, $newPattern
        $updatedCount++
        Write-Host "✅ Updated $controlId -> $name" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Pattern not found for $controlId" -ForegroundColor Yellow
    }
}

if ($updatedCount -gt 0) {
    Set-Content $FilePath -Value $content -Encoding UTF8
    Write-Host "🎉 Successfully updated $updatedCount NIST references!" -ForegroundColor Green
} else {
    Write-Host "ℹ️  No updates were made." -ForegroundColor Blue
}

Write-Host "📊 Summary: $updatedCount controls updated with specific section anchors" -ForegroundColor Cyan
