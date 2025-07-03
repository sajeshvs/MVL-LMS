# NIST SP 800-171r3 Section Anchor Mapping and Update Script
# This script updates all NIST SP 800-171r3 references to point to specific control sections

$baseUrl = "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html"

# Complete mapping of control IDs to section anchors
$controlMapping = @{
    # Access Control (3.1)
    'AC.3.1.1' = @{ anchor = '#d30e734-Head3'; name = 'Account Management' }
    'AC.3.1.2' = @{ anchor = '#d30e924-Head3'; name = 'Access Enforcement' }
    'AC.3.1.3' = @{ anchor = '#d30e988-Head3'; name = 'Information Flow Enforcement' }
    'AC.3.1.4' = @{ anchor = '#d30e1025-Head3'; name = 'Separation of Duties' }
    'AC.3.1.5' = @{ anchor = '#d30e1064-Head3'; name = 'Least Privilege' }
    'AC.3.1.6' = @{ anchor = '#d30e1120-Head3'; name = 'Least Privilege – Privileged Accounts' }
    'AC.3.1.7' = @{ anchor = '#d30e1157-Head3'; name = 'Least Privilege – Privileged Functions' }
    'AC.3.1.8' = @{ anchor = '#d30e1199-Head3'; name = 'Unsuccessful Logon Attempts' }
    'AC.3.1.9' = @{ anchor = '#d30e1251-Head3'; name = 'System Use Notification' }
    'AC.3.1.10' = @{ anchor = '#d30e1275-Head3'; name = 'Device Lock' }
    'AC.3.1.11' = @{ anchor = '#d30e1321-Head3'; name = 'Session Termination' }
    'AC.3.1.12' = @{ anchor = '#d30e1347-Head3'; name = 'Remote Access' }
    'AC.3.1.16' = @{ anchor = '#d30e1443-Head3'; name = 'Wireless Access' }
    'AC.3.1.18' = @{ anchor = '#d30e1505-Head3'; name = 'Access Control for Mobile Devices' }
    'AC.3.1.20' = @{ anchor = '#d30e1563-Head3'; name = 'Use of External Systems' }
    'AC.3.1.22' = @{ anchor = '#d30e1636-Head3'; name = 'Publicly Accessible Content' }
    
    # Awareness and Training (3.2)
    'AT.3.2.1' = @{ anchor = '#d30e1671-Head3'; name = 'Literacy Training and Awareness' }
    'AT.3.2.2' = @{ anchor = '#d30e1747-Head3'; name = 'Role-Based Training' }
    
    # Audit and Accountability (3.3)
    'AU.3.3.1' = @{ anchor = '#d30e1823-Head3'; name = 'Event Logging' }
    'AU.3.3.2' = @{ anchor = '#d30e1864-Head3'; name = 'Audit Record Content' }
    'AU.3.3.3' = @{ anchor = '#d30e1920-Head3'; name = 'Audit Record Generation' }
    'AU.3.3.4' = @{ anchor = '#d30e1963-Head3'; name = 'Response to Audit Logging Process Failures' }
    'AU.3.3.5' = @{ anchor = '#d30e1998-Head3'; name = 'Audit Record Review, Analysis, and Reporting' }
    'AU.3.3.6' = @{ anchor = '#d30e2044-Head3'; name = 'Audit Record Reduction and Report Generation' }
    'AU.3.3.7' = @{ anchor = '#d30e2077-Head3'; name = 'Time Stamps' }
    'AU.3.3.8' = @{ anchor = '#d30e2109-Head3'; name = 'Protection of Audit Information' }
    
    # Configuration Management (3.4)
    'CM.3.4.1' = @{ anchor = '#d30e2160-Head3'; name = 'Baseline Configuration' }
    'CM.3.4.2' = @{ anchor = '#d30e2205-Head3'; name = 'Configuration Settings' }
    'CM.3.4.3' = @{ anchor = '#d30e2251-Head3'; name = 'Configuration Change Control' }
    'CM.3.4.4' = @{ anchor = '#d30e2295-Head3'; name = 'Impact Analyses' }
    'CM.3.4.5' = @{ anchor = '#d30e2335-Head3'; name = 'Access Restrictions for Change' }
    'CM.3.4.6' = @{ anchor = '#d30e2365-Head3'; name = 'Least Functionality' }
    'CM.3.4.8' = @{ anchor = '#d30e2432-Head3'; name = 'Authorized Software – Allow by Exception' }
    'CM.3.4.10' = @{ anchor = '#d30e2492-Head3'; name = 'System Component Inventory' }
    'CM.3.4.11' = @{ anchor = '#d30e2543-Head3'; name = 'Information Location' }
    'CM.3.4.12' = @{ anchor = '#d30e2573-Head3'; name = 'System and Component Configuration for High-Risk Areas' }
    
    # Identification and Authentication (3.5)
    'IA.3.5.1' = @{ anchor = '#d30e2620-Head3'; name = 'User Identification and Authentication' }
    'IA.3.5.2' = @{ anchor = '#d30e2659-Head3'; name = 'Device Identification and Authentication' }
    'IA.3.5.3' = @{ anchor = '#d30e2686-Head3'; name = 'Multi-Factor Authentication' }
    'IA.3.5.4' = @{ anchor = '#d30e2713-Head3'; name = 'Replay-Resistant Authentication' }
    'IA.3.5.5' = @{ anchor = '#d30e2737-Head3'; name = 'Identifier Management' }
    'IA.3.5.7' = @{ anchor = '#d30e2798-Head3'; name = 'Password Management' }
    'IA.3.5.11' = @{ anchor = '#d30e2879-Head3'; name = 'Authentication Feedback' }
    'IA.3.5.12' = @{ anchor = '#d30e2900-Head3'; name = 'Authenticator Management' }
    
    # Incident Response (3.6)
    'IR.3.6.1' = @{ anchor = '#d30e2975-Head3'; name = 'Incident Handling' }
    'IR.3.6.2' = @{ anchor = '#d30e3004-Head3'; name = 'Incident Monitoring, Reporting, and Response Assistance' }
    'IR.3.6.3' = @{ anchor = '#d30e3063-Head3'; name = 'Incident Response Testing' }
    'IR.3.6.4' = @{ anchor = '#d30e3090-Head3'; name = 'Incident Response Training' }
    'IR.3.6.5' = @{ anchor = '#d30e3154-Head3'; name = 'Incident Response Plan' }
    
    # Maintenance (3.7)
    'MA.3.7.4' = @{ anchor = '#d30e3255-Head3'; name = 'Maintenance Tools' }
    'MA.3.7.5' = @{ anchor = '#d30e3303-Head3'; name = 'Nonlocal Maintenance' }
    'MA.3.7.6' = @{ anchor = '#d30e3347-Head3'; name = 'Maintenance Personnel' }
    
    # Media Protection (3.8)
    'MP.3.8.1' = @{ anchor = '#d30e3393-Head3'; name = 'Media Storage' }
    'MP.3.8.2' = @{ anchor = '#d30e3421-Head3'; name = 'Media Access' }
    'MP.3.8.3' = @{ anchor = '#d30e3451-Head3'; name = 'Media Sanitization' }
    'MP.3.8.4' = @{ anchor = '#d30e3477-Head3'; name = 'Media Marking' }
    'MP.3.8.5' = @{ anchor = '#d30e3497-Head3'; name = 'Media Transport' }
    'MP.3.8.7' = @{ anchor = '#d30e3555-Head3'; name = 'Media Use' }
    'MP.3.8.9' = @{ anchor = '#d30e3605-Head3'; name = 'System Backup – Cryptographic Protection' }
    
    # Personnel Security (3.9)
    'PS.3.9.1' = @{ anchor = '#d30e3652-Head3'; name = 'Personnel Screening' }
    'PS.3.9.2' = @{ anchor = '#d30e3689-Head3'; name = 'Personnel Termination and Transfer' }
    
    # Physical Protection (3.10)
    'PE.3.10.1' = @{ anchor = '#d30e3757-Head3'; name = 'Physical Access Authorizations' }
    'PE.3.10.2' = @{ anchor = '#d30e3798-Head3'; name = 'Monitoring Physical Access' }
    'PE.3.10.6' = @{ anchor = '#d30e3866-Head3'; name = 'Alternate Work Site' }
    'PE.3.10.7' = @{ anchor = '#d30e3907-Head3'; name = 'Physical Access Control' }
    'PE.3.10.8' = @{ anchor = '#d30e3964-Head3'; name = 'Access Control for Transmission' }
    
    # Risk Assessment (3.11)
    'RA.3.11.1' = @{ anchor = '#d30e3992-Head3'; name = 'Risk Assessment' }
    'RA.3.11.2' = @{ anchor = '#d30e4041-Head3'; name = 'Vulnerability Monitoring and Scanning' }
    'RA.3.11.4' = @{ anchor = '#d30e4116-Head3'; name = 'Risk Response' }
    
    # Security Assessment and Monitoring (3.12)
    'CA.3.12.1' = @{ anchor = '#d30e4155-Head3'; name = 'Security Assessment' }
    'CA.3.12.2' = @{ anchor = '#d30e4193-Head3'; name = 'Plan of Action and Milestones' }
    'CA.3.12.3' = @{ anchor = '#d30e4253-Head3'; name = 'Continuous Monitoring' }
    'CA.3.12.5' = @{ anchor = '#d30e4307-Head3'; name = 'Information Exchange' }
    
    # System and Communications Protection (3.13)
    'SC.3.13.1' = @{ anchor = '#d30e4357-Head3'; name = 'Boundary Protection' }
    'SC.3.13.4' = @{ anchor = '#d30e4443-Head3'; name = 'Information in Shared System Resources' }
    'SC.3.13.6' = @{ anchor = '#d30e4476-Head3'; name = 'Network Communications – Deny by Default – Allow by Exception' }
    'SC.3.13.8' = @{ anchor = '#d30e4524-Head3'; name = 'Transmission and Storage Confidentiality' }
    'SC.3.13.9' = @{ anchor = '#d30e4615-Head3'; name = 'Network Disconnect' }
    'SC.3.13.10' = @{ anchor = '#d30e4640-Head3'; name = 'Cryptographic Key Establishment and Management' }
    'SC.3.13.11' = @{ anchor = '#d30e4694-Head3'; name = 'Cryptographic Protection' }
    'SC.3.13.12' = @{ anchor = '#d30e4723-Head3'; name = 'Collaborative Computing Devices and Applications' }
    'SC.3.13.13' = @{ anchor = '#d30e4757-Head3'; name = 'Mobile Code' }
    'SC.3.13.15' = @{ anchor = '#d30e4799-Head3'; name = 'Session Authenticity' }
    
    # System and Information Integrity (3.14)
    'SI.3.14.1' = @{ anchor = '#d30e4849-Head3'; name = 'Flaw Remediation' }
    'SI.3.14.2' = @{ anchor = '#d30e4893-Head3'; name = 'Malicious Code Protection' }
    'SI.3.14.3' = @{ anchor = '#d30e4954-Head3'; name = 'Security Alerts, Advisories, and Directives' }
    'SI.3.14.6' = @{ anchor = '#d30e5009-Head3'; name = 'System Monitoring' }
    'SI.3.14.8' = @{ anchor = '#d30e5088-Head3'; name = 'Information Management and Retention' }
    
    # Planning (3.15)
    'PL.3.15.1' = @{ anchor = '#d30e5116-Head3'; name = 'Policy and Procedures' }
    'PL.3.15.2' = @{ anchor = '#d30e5223-Head3'; name = 'System Security Plan' }
    'PL.3.15.3' = @{ anchor = '#d30e5292-Head3'; name = 'Rules of Behavior' }
    
    # System and Services Acquisition (3.16)
    'SA.3.16.1' = @{ anchor = '#d30e5341-Head3'; name = 'Security Engineering Principles' }
    'SA.3.16.2' = @{ anchor = '#d30e5376-Head3'; name = 'Unsupported System Components' }
    'SA.3.16.3' = @{ anchor = '#d30e5410-Head3'; name = 'External System Services' }
    
    # Supply Chain Risk Management (3.17)
    'SR.3.17.1' = @{ anchor = '#d30e5461-Head3'; name = 'Supply Chain Risk Management Plan' }
    'SR.3.17.2' = @{ anchor = '#d30e5512-Head3'; name = 'Acquisition Strategies, Tools, and Methods' }
    'SR.3.17.3' = @{ anchor = '#d30e5543-Head3'; name = 'Supply Chain Requirements and Processes' }
}

function Update-NISTReferences {
    param(
        [string]$FilePath
    )
    
    Write-Host "Reading curriculum data file..." -ForegroundColor Green
    $content = Get-Content $FilePath -Raw
    
    $updatedCount = 0
    
    foreach ($controlId in $controlMapping.Keys) {
        $mapping = $controlMapping[$controlId]
        $newUrl = $baseUrl + $mapping.anchor
        $newDescription = $mapping.name + " - Detailed implementation guidance for federal requirements"
        
        # Pattern to find NIST SP 800-171r3 Guide references for this control
        $oldPattern = '"title": "NIST SP 800-171r3 Guide",\s*"url": "' + [regex]::Escape($baseUrl) + '",\s*"description": "Detailed implementation guidance for federal requirements"'
        $newPattern = '"title": "NIST SP 800-171r3 Guide", "url": "' + $newUrl + '", "description": "' + $newDescription + '"'
        
        if ($content -match $oldPattern) {
            $content = $content -replace $oldPattern, $newPattern, 1  # Replace only first occurrence for this control
            $updatedCount++
            Write-Host "Updated $controlId -> $($mapping.name)" -ForegroundColor Yellow
        }
    }
    
    Write-Host "Writing updated content back to file..." -ForegroundColor Green
    Set-Content $FilePath -Value $content -Encoding UTF8
    
    Write-Host "Successfully updated $updatedCount NIST references with specific section anchors!" -ForegroundColor Green
}

# Main execution
$curriculumFile = "assets\js\curriculum-data.js"
if (Test-Path $curriculumFile) {
    Update-NISTReferences -FilePath $curriculumFile
} else {
    Write-Host "Curriculum data file not found: $curriculumFile" -ForegroundColor Red
}
