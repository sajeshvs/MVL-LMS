#!/usr/bin/env pwsh
# Simple encoding fix using PowerShell

Write-Host "🔧 Fixing character encoding in curriculum data..." -ForegroundColor Cyan

$filePath = "assets\js\curriculum-data.js"

if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw -Encoding UTF8
    $originalContent = $content
    
    # Simple text replacements
    $content = $content -replace 'â€"', '-'
    $content = $content -replace 'â€¢', '*'  
    $content = $content -replace 'â†'', '->'
    
    if ($content -ne $originalContent) {
        Set-Content $filePath -Value $content -Encoding UTF8 -NoNewline
        Write-Host "✅ Fixed character encoding issues!" -ForegroundColor Green
    } else {
        Write-Host "ℹ️  No issues found to fix." -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ File not found: $filePath" -ForegroundColor Red
}

Write-Host "✨ Done!" -ForegroundColor Green
