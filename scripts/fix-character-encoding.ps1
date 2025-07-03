#!/usr/bin/env pwsh
# Script to fix character encoding issues in MVL-LMS curriculum data

Write-Host "🔧 Fixing character encoding issues in MVL-LMS curriculum data..." -ForegroundColor Cyan
Write-Host ""

$rootDir = Split-Path $PSScriptRoot -Parent
$fixesApplied = 0
$filesProcessed = 0

# Define character replacements
$characterFixes = @{
    # Em dash encoding fix
    "â€"" = "—"
    
    # Bullet point encoding fix  
    "â€¢" = "•"
    
    # Right arrow encoding fix
    "â†'" = "→"
    
    # Emoji encoding fixes
    "ðŸš¨" = "🚨"
    "ðŸ"" = "📊"
    "ðŸ"'" = "📋"
    "âœ…" = "✅"
    "â¬†" = "⬆"
    "âž¡" = "➡"
    "â¬‡" = "⬇"
    "âœ¨" = "✨"
    "ðŸ"'" = "🔐"
    "ðŸ"'" = "🔑"
    "âš¡" = "⚡"
    "ðŸ›¡" = "🛡"
    "ðŸ"" = "📈"
    "â­" = "⭐"
    "âš ï¸" = "⚠️"
    "ðŸ"" = "🔍"
    "ðŸ'¡" = "💡"
    "ðŸŽ¯" = "🎯"
    "ðŸš€" = "🚀"
    "âœ‹" = "✋"
    "ðŸ'" = "📝"
}

function Fix-EncodingIssues {
    param($filePath)
    
    Write-Host "📄 Processing: $([System.IO.Path]::GetFileName($filePath))" -ForegroundColor Yellow
    
    if (-not (Test-Path $filePath)) {
        Write-Host "   ⚠️  File not found: $filePath" -ForegroundColor Red
        return
    }
    
    # Read file content
    $content = Get-Content $filePath -Raw -Encoding UTF8
    $originalContent = $content
    $fileFixCount = 0
    
    # Apply all character fixes
    foreach ($badChar in $characterFixes.Keys) {
        $goodChar = $characterFixes[$badChar]
        
        if ($content.Contains($badChar)) {
            $beforeCount = ($content.ToCharArray() | Where-Object { $_ -eq $badChar[0] }).Count
            $content = $content -replace [regex]::Escape($badChar), $goodChar
            $afterCount = ($content.ToCharArray() | Where-Object { $_ -eq $goodChar[0] }).Count
            
            if ($beforeCount -gt 0) {
                Write-Host "   ✅ Fixed: '$badChar' → '$goodChar' ($beforeCount instances)" -ForegroundColor Green
                $fileFixCount += $beforeCount
                $script:fixesApplied += $beforeCount
            }
        }
    }
    
    # Save the corrected content if changes were made
    if ($content -ne $originalContent) {
        try {
            $content | Out-File -FilePath $filePath -Encoding UTF8 -NoNewline
            Write-Host "   💾 File updated successfully ($fileFixCount fixes applied)" -ForegroundColor Green
        } catch {
            Write-Host "   ❌ Error saving file: $($_.Exception.Message)" -ForegroundColor Red
        }
    } else {
        Write-Host "   ✨ No encoding issues found" -ForegroundColor Gray
    }
    
    $script:filesProcessed++
}

# Process curriculum data files
Write-Host "=== Processing Curriculum Data Files ===" -ForegroundColor Green

$filesToProcess = @(
    "$rootDir\assets\js\curriculum-data.js",
    "$rootDir\assets\js\curriculum-data-backup.js"
)

foreach ($file in $filesToProcess) {
    if (Test-Path $file) {
        Fix-EncodingIssues $file
    } else {
        Write-Host "   ⚠️  File not found: $file" -ForegroundColor Yellow
    }
}

# Also check HTML files for encoding issues
Write-Host "`n=== Checking HTML Files ===" -ForegroundColor Green
$htmlFiles = @(
    "$rootDir\index.html",
    "$rootDir\courses.html",
    "$rootDir\course.html", 
    "$rootDir\lesson.html",
    "$rootDir\admin.html",
    "$rootDir\curriculum.html"
)

foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        Fix-EncodingIssues $file
    }
}

# Display results
$separator = "=" * 60
Write-Host "`n$separator" -ForegroundColor Cyan
Write-Host " 🔧 CHARACTER ENCODING FIX RESULTS" -ForegroundColor Cyan
Write-Host "$separator" -ForegroundColor Cyan

Write-Host "`n📊 Summary:" -ForegroundColor Cyan
Write-Host "   • Files processed: $filesProcessed" -ForegroundColor White
Write-Host "   • Total fixes applied: $fixesApplied" -ForegroundColor White

if ($fixesApplied -gt 0) {
    Write-Host "`n✅ Success!" -ForegroundColor Green
    Write-Host "   All character encoding issues have been fixed." -ForegroundColor Green
    Write-Host "   Your curriculum data now displays properly." -ForegroundColor Green
    
    Write-Host "`n💡 Fixed Characters:" -ForegroundColor Cyan
    foreach ($fix in $characterFixes.GetEnumerator()) {
        Write-Host "   '$($fix.Key)' → '$($fix.Value)'" -ForegroundColor White
    }
} else {
    Write-Host "`n✨ No encoding issues found!" -ForegroundColor Green
    Write-Host "   Your files are already properly encoded." -ForegroundColor Green
}

Write-Host "`n🚀 Next Steps:" -ForegroundColor Cyan
Write-Host "   1. Test the application to verify fixes" -ForegroundColor White
Write-Host "   2. Check that all text displays correctly" -ForegroundColor White
Write-Host "   3. Commit changes to version control" -ForegroundColor White

Write-Host "`n$separator" -ForegroundColor Cyan
