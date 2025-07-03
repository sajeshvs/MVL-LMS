# Simplified NIST Anchor Update Script
# This script uses a more reliable replacement approach

$file = "assets\js\curriculum-data.js"
$content = Get-Content $file -Raw

# Define control mappings with simple patterns
$updates = @{
    "3.1.4" = @{ anchor = "#d30e1025-Head3"; name = "Separation of Duties" }
    "3.1.5" = @{ anchor = "#d30e1064-Head3"; name = "Least Privilege" }
    "3.1.6" = @{ anchor = "#d30e1120-Head3"; name = "Least Privilege – Privileged Accounts" }
    "3.1.7" = @{ anchor = "#d30e1157-Head3"; name = "Least Privilege – Privileged Functions" }
    "3.1.8" = @{ anchor = "#d30e1199-Head3"; name = "Unsuccessful Logon Attempts" }
    "3.1.9" = @{ anchor = "#d30e1251-Head3"; name = "System Use Notification" }
    "3.1.10" = @{ anchor = "#d30e1275-Head3"; name = "Device Lock" }
    "3.1.11" = @{ anchor = "#d30e1321-Head3"; name = "Session Termination" }
    "3.1.12" = @{ anchor = "#d30e1347-Head3"; name = "Remote Access" }
    "3.1.16" = @{ anchor = "#d30e1443-Head3"; name = "Wireless Access" }
    "3.1.18" = @{ anchor = "#d30e1505-Head3"; name = "Access Control for Mobile Devices" }
    "3.1.20" = @{ anchor = "#d30e1563-Head3"; name = "Use of External Systems" }
    "3.1.22" = @{ anchor = "#d30e1636-Head3"; name = "Publicly Accessible Content" }
    "3.2.1" = @{ anchor = "#d30e1671-Head3"; name = "Literacy Training and Awareness" }
    "3.2.2" = @{ anchor = "#d30e1747-Head3"; name = "Role-Based Training" }
    "3.3.1" = @{ anchor = "#d30e1823-Head3"; name = "Event Logging" }
    "3.3.2" = @{ anchor = "#d30e1864-Head3"; name = "Audit Record Content" }
    "3.3.3" = @{ anchor = "#d30e1920-Head3"; name = "Audit Record Generation" }
    "3.3.4" = @{ anchor = "#d30e1963-Head3"; name = "Response to Audit Logging Process Failures" }
    "3.3.5" = @{ anchor = "#d30e1998-Head3"; name = "Audit Record Review, Analysis, and Reporting" }
}

$updatedCount = 0

foreach ($controlRef in $updates.Keys) {
    $update = $updates[$controlRef]
    $anchor = $update.anchor
    $name = $update.name
    
    # Simple pattern: find "control X.X.X" followed by NIST reference
    $pattern = "Official CMMC documentation for control $controlRef`"[^}]+},[^{]+{[^`"]+`"title`": `"NIST SP 800-171r3 Guide`",[^`"]+`"url`": `"https://nvlpubs\.nist\.gov/nistpubs/SpecialPublications/800-171r3/NIST\.SP\.800-171r3\.html`",[^`"]+`"description`": `"Detailed implementation guidance for federal requirements`""
    
    $replacement = "Official CMMC documentation for control $controlRef`"`
      },
      {
        `"title`": `"NIST SP 800-171r3 Guide`",
        `"url`": `"https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html$anchor`",
        `"description`": `"$name - Detailed implementation guidance for federal requirements`""
    
    if ($content -match $pattern) {
        $content = $content -replace $pattern, $replacement
        Write-Host "✅ Updated control $controlRef -> $name" -ForegroundColor Green
        $updatedCount++
    } else {
        Write-Host "⚠️  Pattern not found for control $controlRef" -ForegroundColor Yellow
    }
}

if ($updatedCount -gt 0) {
    Set-Content $file -Value $content -Encoding UTF8
    Write-Host "🎉 Updated $updatedCount controls with section anchors!" -ForegroundColor Cyan
} else {
    Write-Host "ℹ️  No additional updates were made." -ForegroundColor Blue
}

Write-Host "📊 Summary: $updatedCount additional controls updated" -ForegroundColor Magenta
