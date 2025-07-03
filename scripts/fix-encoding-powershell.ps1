# PowerShell script to fix character encoding issues in curriculum-data.js
$filePath = "g:\WebAPP\MVL-LMS\assets\js\curriculum-data.js"

Write-Host "Reading file..." -ForegroundColor Green
$content = Get-Content $filePath -Raw -Encoding UTF8

Write-Host "Original file size: $($content.Length)" -ForegroundColor Yellow

# Create backup
$backupPath = $filePath -replace '\.js$', '-powershell-backup.js'
Copy-Item $filePath $backupPath
Write-Host "Backup created: $backupPath" -ForegroundColor Cyan

$totalReplacements = 0

# Fix double quotes first
$before = $content.Length
$content = $content -replace '""', '"'
$after = $content.Length
$doubleQuoteReplacements = [math]::Floor(($before - $after))
if ($doubleQuoteReplacements -gt 0) {
    Write-Host "Fixed $doubleQuoteReplacements double quote issues" -ForegroundColor Green
    $totalReplacements += $doubleQuoteReplacements
}

# Try to fix specific patterns that we know exist
$patterns = @{
    'CMMC v2 ""' = 'CMMC v2 -'
    'â€"' = '-'
    'â†'' = '->'
    'â€¢' = '*'
    'âœ…' = '[✓]'
    'â€œ' = '"'
    'â€' = '"'
    'â€™' = "'"
}

foreach ($pattern in $patterns.GetEnumerator()) {
    $beforeCount = ($content | Select-String -Pattern [regex]::Escape($pattern.Key) -AllMatches).Matches.Count
    if ($beforeCount -gt 0) {
        $content = $content -replace [regex]::Escape($pattern.Key), $pattern.Value
        Write-Host "Fixed $beforeCount instances of '$($pattern.Key)' -> '$($pattern.Value)'" -ForegroundColor Green
        $totalReplacements += $beforeCount
    }
}

Write-Host "`nTotal replacements made: $totalReplacements" -ForegroundColor Yellow

if ($totalReplacements -gt 0) {
    # Write the fixed content
    Set-Content -Path $filePath -Value $content -Encoding UTF8
    Write-Host "File updated successfully!" -ForegroundColor Green
    
    # Show sample
    Write-Host "`nSample fixed content:" -ForegroundColor Cyan
    $sampleLines = ($content -split "`n") | Where-Object { $_ -match "CMMC v2|MFA|Multi-factor" } | Select-Object -First 3
    foreach ($line in $sampleLines) {
        Write-Host "  $($line.Trim())" -ForegroundColor White
    }
} else {
    Write-Host "No encoding artifacts found to fix." -ForegroundColor Yellow
}

Write-Host "`nEncoding cleanup complete!" -ForegroundColor Green
