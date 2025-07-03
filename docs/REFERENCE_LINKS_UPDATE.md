# Reference Link Specificity Update

## Overview
Updated all reference links in the MVL-LMS curriculum data to ensure they point to specific, relevant content sections rather than generic homepages.

## Changes Made

### 1. Microsoft Documentation Updates
Updated all Microsoft documentation links from the deprecated `docs.microsoft.com` domain to the current `learn.microsoft.com` domain:

- Azure AD Conditional Access Policies
- Microsoft Intune Device Compliance
- Azure RBAC Documentation
- Azure Monitor Logs Overview
- Microsoft Sentinel SIEM Setup
- Windows Security Audit Policy
- Microsoft SCCM Configuration Baselines
- Azure Policy for Configuration Management
- Azure AD Multi-Factor Authentication
- Azure AD Account Management
- Azure Sentinel Documentation
- Microsoft Patch Management Guidance

### 2. Enhanced Resource Links with Specific Anchors
Added specific page anchors and sections to ensure users land on exactly the relevant content:

#### NIST Publications
- All NIST SP 800-53 links include specific page numbers (e.g., `#page=37`)
- NIST SP 800-92 Log Management guide with specific section
- NIST Cybersecurity Framework with targeted sections

#### CMMC Documentation
- All CMMC references include specific page anchors to relevant sections
- Direct links to implementation requirements for each control

#### CISA Resources
- Phishing guidance with specific page sections
- Zero Trust Maturity Model with targeted pages
- Insider Threat Mitigation Guide with specific sections

#### Microsoft Learn Documentation
- Links to specific concept pages and implementation guides
- Direct links to configuration and setup procedures
- Targeted documentation for Azure services and security features

### 3. Additional Specific Resources Added
Enhanced several resource sections with additional targeted links:

- Microsoft Entra ID Conditional Access Templates
- CISA Zero Trust Maturity Model (specific page)
- NIST Cybersecurity Framework Awareness sections
- Microsoft Update Compliance Dashboard
- NIST SP 800-92 Computer Security Log Management

## Link Structure Examples

### Before (Generic)
```
{ label: "Microsoft Documentation", url: "https://docs.microsoft.com" }
```

### After (Specific)
```
{ label: "Azure AD Conditional Access Policies", url: "https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/concept-conditional-access-policies" }
```

### With Page Anchors
```
{ label: "NIST SP 800-53 AC-2: Account Management", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf#page=37" }
```

## Benefits

1. **Improved User Experience**: Users land directly on relevant content, reducing search time
2. **Reduced Bounce Rate**: Users don't need to navigate through multiple pages to find information
3. **Enhanced Learning**: Direct access to specific sections improves comprehension
4. **Professional Appearance**: Demonstrates attention to detail and quality in resource curation
5. **Compliance Support**: Direct links to specific compliance requirements and implementation guidance

## Verification

All links have been updated and tested to ensure they:
- Use current, active domains (learn.microsoft.com instead of docs.microsoft.com)
- Include specific page anchors where possible (#page=X)
- Point to the most relevant sections for each lesson topic
- Provide comprehensive coverage of implementation guidance

## Next Steps

Resource links are now optimized for specificity and relevance. Future curriculum additions should follow this pattern of providing direct, specific links to exactly the content users need for each lesson topic.
