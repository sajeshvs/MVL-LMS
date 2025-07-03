#!/usr/bin/env pwsh
# Script to find and report empty or problematic links in MVL-LMS project

Write-Host "🔍 Searching for empty or problematic links in MVL-LMS..." -ForegroundColor Cyan
Write-Host ""

$rootDir = Split-Path $PSScriptRoot -Parent
$issuesFound = @()

# Function to check curriculum data for empty links
function Check-CurriculumData {
    param($filePath)
    
    Write-Host "📊 Checking curriculum data: $([System.IO.Path]::GetFileName($filePath))" -ForegroundColor Yellow
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        $lineNumber = 1
        
        # Split content into lines for line number tracking
        $lines = $content -split "`n"
        
        for ($i = 0; $i -lt $lines.Count; $i++) {
            $line = $lines[$i]
            $lineNum = $i + 1
            
            # Check for empty URLs
            if ($line -match '"url":\s*""') {
                $issuesFound += @{
                    File = $filePath
                    Line = $lineNum
                    Issue = "Empty URL"
                    Content = $line.Trim()
                }
            }
            
            # Check for placeholder URLs
            if ($line -match '"url":\s*"(#|TODO|PLACEHOLDER|FIXME|TBD)"') {
                $issuesFound += @{
                    File = $filePath
                    Line = $lineNum
                    Issue = "Placeholder URL"
                    Content = $line.Trim()
                }
            }
            
            # Check for empty titles
            if ($line -match '"title":\s*""') {
                $issuesFound += @{
                    File = $filePath
                    Line = $lineNum
                    Issue = "Empty title"
                    Content = $line.Trim()
                }
            }
            
            # Check for empty descriptions
            if ($line -match '"description":\s*""') {
                $issuesFound += @{
                    File = $filePath
                    Line = $lineNum
                    Issue = "Empty description"
                    Content = $line.Trim()
                }
            }
        }
    }
}

# Function to check HTML files for empty links
function Check-HtmlFiles {
    param($filePath)
    
    Write-Host "🌐 Checking HTML file: $([System.IO.Path]::GetFileName($filePath))" -ForegroundColor Yellow
    
    if (Test-Path $filePath) {
        $lines = Get-Content $filePath
        
        for ($i = 0; $i -lt $lines.Count; $i++) {
            $line = $lines[$i]
            $lineNum = $i + 1
            
            # Check for empty href attributes
            if ($line -match 'href\s*=\s*""') {
                $issuesFound += @{
                    File = $filePath
                    Line = $lineNum
                    Issue = "Empty href"
                    Content = $line.Trim()
                }
            }
            
            # Check for placeholder href attributes
            if ($line -match 'href\s*=\s*"(#|TODO|PLACEHOLDER|FIXME|TBD)"') {
                $issuesFound += @{
                    File = $filePath
                    Line = $lineNum
                    Issue = "Placeholder href"
                    Content = $line.Trim()
                }
            }
            
            # Check for broken anchor links (href="#" with no content after)
            if ($line -match 'href\s*=\s*"#"\s*>.*</a>' -and $line -notmatch 'href\s*=\s*"#[^"]*"') {
                $issuesFound += @{
                    File = $filePath
                    Line = $lineNum
                    Issue = "Empty anchor link"
                    Content = $line.Trim()
                }
            }
        }
    }
}

# Check curriculum data files
Write-Host "=== Checking Curriculum Data Files ===" -ForegroundColor Green
$curriculumFiles = @(
    "$rootDir\assets\js\curriculum-data.js",
    "$rootDir\assets\js\curriculum-data-backup.js"
)

foreach ($file in $curriculumFiles) {
    if (Test-Path $file) {
        Check-CurriculumData $file
    } else {
        Write-Host "   ⚠️  File not found: $file" -ForegroundColor Yellow
    }
}

# Check HTML files
Write-Host "`n=== Checking HTML Files ===" -ForegroundColor Green
$htmlFiles = @(
    "$rootDir\index.html",
    "$rootDir\courses.html",
    "$rootDir\course.html", 
    "$rootDir\lesson.html",
    "$rootDir\admin.html",
    "$rootDir\curriculum.html",
    "$rootDir\offline.html"
)

foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        Check-HtmlFiles $file
    } else {
        Write-Host "   ⚠️  File not found: $file" -ForegroundColor Yellow
    }
}

# Check component files
Write-Host "`n=== Checking Component Files ===" -ForegroundColor Green
$componentFiles = Get-ChildItem "$rootDir\components" -Filter "*.html" -ErrorAction SilentlyContinue

foreach ($file in $componentFiles) {
    Check-HtmlFiles $file.FullName
}

# Display results
Write-Host "`n$('='*60)" -ForegroundColor Cyan
Write-Host " 🔍 EMPTY LINKS DETECTION RESULTS" -ForegroundColor Cyan
Write-Host "$('='*60)" -ForegroundColor Cyan

if ($issuesFound.Count -eq 0) {
    Write-Host "`n✅ No empty or problematic links found!" -ForegroundColor Green
    Write-Host "   Your MVL-LMS project appears to have clean, valid links." -ForegroundColor Green
} else {
    Write-Host "`n❌ Found $($issuesFound.Count) issue(s):" -ForegroundColor Red
    
    # Group issues by file
    $groupedIssues = $issuesFound | Group-Object File
    
    foreach ($fileGroup in $groupedIssues) {
        Write-Host "`n📁 File: $($fileGroup.Name)" -ForegroundColor Yellow
        
        foreach ($issue in $fileGroup.Group) {
            Write-Host "   Line $($issue.Line): $($issue.Issue)" -ForegroundColor Red
            Write-Host "      $($issue.Content)" -ForegroundColor Gray
        }
    }
    
    Write-Host "`n💡 Recommended actions:" -ForegroundColor Cyan
    Write-Host "   1. Review and fix empty URLs/hrefs" -ForegroundColor White
    Write-Host "   2. Replace placeholder links with actual URLs" -ForegroundColor White
    Write-Host "   3. Remove or complete empty titles/descriptions" -ForegroundColor White
    Write-Host "   4. Test all links after fixing" -ForegroundColor White
}

Write-Host "`n📊 Summary:" -ForegroundColor Cyan
Write-Host "   • Files checked: $($curriculumFiles.Count + $htmlFiles.Count + $componentFiles.Count)" -ForegroundColor White
Write-Host "   • Issues found: $($issuesFound.Count)" -ForegroundColor White

Write-Host "`n$('='*60)" -ForegroundColor Cyan
