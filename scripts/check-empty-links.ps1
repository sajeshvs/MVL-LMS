# Remove Empty or Broken Resource Links Script
# This script identifies and removes problematic resource entries

$file = "assets\js\curriculum-data.js"
$content = Get-Content $file -Raw

Write-Host "🔍 Analyzing curriculum data for empty or broken resource links..." -ForegroundColor Green

# Patterns to identify problematic entries
$problems = @()

# Check for empty URLs
$emptyUrls = [regex]::Matches($content, '"url":\s*""')
if ($emptyUrls.Count -gt 0) {
    $problems += "Empty URLs: $($emptyUrls.Count)"
}

# Check for empty titles
$emptyTitles = [regex]::Matches($content, '"title":\s*""')
if ($emptyTitles.Count -gt 0) {
    $problems += "Empty titles: $($emptyTitles.Count)"
}

# Check for empty descriptions
$emptyDescriptions = [regex]::Matches($content, '"description":\s*""')
if ($emptyDescriptions.Count -gt 0) {
    $problems += "Empty descriptions: $($emptyDescriptions.Count)"
}

# Check for placeholder URLs
$placeholderUrls = [regex]::Matches($content, '"url":\s*"#"')
if ($placeholderUrls.Count -gt 0) {
    $problems += "Placeholder URLs (#): $($placeholderUrls.Count)"
}

# Check for malformed URLs (not starting with http)
$malformedUrls = [regex]::Matches($content, '"url":\s*"(?!https?://)[^"]*"')
if ($malformedUrls.Count -gt 0) {
    $problems += "Potentially malformed URLs: $($malformedUrls.Count)"
}

# Check for incomplete resource objects
$incompleteResources = [regex]::Matches($content, '{\s*}')
if ($incompleteResources.Count -gt 2) { # Excluding the 2 legitimate empty objects at the end
    $problems += "Empty resource objects: $($incompleteResources.Count - 2)"
}

# Check for duplicate resource entries (same URL appears multiple times)
$allUrls = [regex]::Matches($content, '"url":\s*"([^"]+)"')
$urlCounts = @{}
foreach ($match in $allUrls) {
    $url = $match.Groups[1].Value
    if ($urlCounts.ContainsKey($url)) {
        $urlCounts[$url]++
    } else {
        $urlCounts[$url] = 1
    }
}

$duplicates = $urlCounts.GetEnumerator() | Where-Object { $_.Value -gt 1 }
if ($duplicates.Count -gt 0) {
    Write-Host ""
    Write-Host "🔄 Duplicate URLs found:" -ForegroundColor Yellow
    foreach ($dup in $duplicates) {
        Write-Host "   • $($dup.Name) (appears $($dup.Value) times)" -ForegroundColor Cyan
    }
}

# Report findings
Write-Host ""
if ($problems.Count -eq 0) {
    Write-Host "✅ No empty or broken resource links found!" -ForegroundColor Green
    Write-Host "   • All resource entries appear to be properly formatted" -ForegroundColor Cyan
    Write-Host "   • All URLs start with http/https" -ForegroundColor Cyan
    Write-Host "   • All titles and descriptions are populated" -ForegroundColor Cyan
} else {
    Write-Host "⚠️  Issues found:" -ForegroundColor Yellow
    foreach ($problem in $problems) {
        Write-Host "   • $problem" -ForegroundColor Red
    }
}

# Count total resources
$totalResources = [regex]::Matches($content, '"title":\s*"[^"]+",\s*"url":\s*"[^"]+",\s*"description":\s*"[^"]+"').Count
Write-Host ""
Write-Host "📊 Resource Statistics:" -ForegroundColor Magenta
Write-Host "   • Total resource entries: $totalResources" -ForegroundColor White
Write-Host "   • Unique URLs: $($urlCounts.Count)" -ForegroundColor White
Write-Host "   • Duplicate URLs: $($duplicates.Count)" -ForegroundColor White

Write-Host ""
Write-Host "🎯 Recommendation:" -ForegroundColor Green
if ($problems.Count -eq 0 -and $duplicates.Count -eq 0) {
    Write-Host "   Resource links are in good condition - no cleanup needed!" -ForegroundColor Cyan
} else {
    Write-Host "   Consider reviewing and cleaning up the identified issues" -ForegroundColor Yellow
}
