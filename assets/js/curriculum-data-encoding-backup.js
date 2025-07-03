// MVL-LMS Curriculum Data - Complete CMMC Level 2 Implementation
// Auto-generated on 2025-06-20T21:26:16.909Z
// Total Lessons: 109

const LESSONS_DATA = {
  "AC.3.1.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Limit System Access to Authorized Users",
    "officialRequirement": "CMMC v2 "“ AC.L2-3.1.1: \"Limit system access to authorized users, processes acting on behalf of authorized users, or devices (including other systems).\"",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "whyMatters": [
      "Prevents unauthorized access to sensitive systems and data, protecting against both external threats and insider risks",
      "Ensures compliance with CMMC Level 2 requirements and maintains MVL's DoD contract eligibility",
      "Safeguards Controlled Unclassified Information (CUI) and maintains our competitive advantage in federal contracting",
      "Reduces security incident response costs and potential regulatory fines from data breaches"
    ],
    "howMVLDoes": [
      "Microsoft Entra ID SSO + MFA â†’ Multi-factor authentication required for all GCC High applications and services",
      "Zscaler Private Access (ZPA) â†’ Zero Trust Network Access ensuring only enrolled, compliant endpoints access internal resources",
      "Conditional Access Policies â†’ Automated enforcement of device compliance, location restrictions, and risk-based access controls",
      "Automated Identity Lifecycle Management â†’ HR system integration ensures immediate account provisioning and deprovisioning",
      "Privileged Access Management (PAM) â†’ Just-in-time access elevation with approval workflows for administrative functions"
    ],
    "implementationSteps": [
      {
        "step": 1,
        "title": "Policy Draft",
        "description": "Write \"MVL Access Control Policy\" (owner: CISO)"
      },
      {
        "step": 2,
        "title": "Entra Conditional Access",
        "description": "Require MFA + compliant device, deny legacy auth"
      },
      {
        "step": 3,
        "title": "Zscaler Enrollment",
        "description": "Push ZPA client via Intune; map users to apps"
      },
      {
        "step": 4,
        "title": "Least-Privilege Audit",
        "description": "Run weekly PowerShell to find elevated roles; ticket any outliers"
      },
      {
        "step": 5,
        "title": "Train Users",
        "description": "5-min Actimo micro-module + quiz"
      },
      {
        "step": 6,
        "title": "Doc & Sign-off",
        "description": "Capture screenshots, export CA policies JSON; COO e-signs change log"
      }
    ],
    "quiz": [
      {
        "question": "Which combo below BEST satisfies AC.L2-3.1.1 at MVL?",
        "options": [
          "Local Windows account + password-only",
          "Entra ID SSO + MFA ✅",
          "Shared admin account (no logging)",
          "VPN tunnel w/out MFA"
        ],
        "correct": "B"
      },
      {
        "question": "True or False: Zscaler Private Access (ZPA) automatically blocks any device that isn't enrolled or compliant, even if the user's creds are legit.",
        "options": [
          "True ✅",
          "False"
        ],
        "correct": "A"
      },
      {
        "question": "You just off-boarded an engineer. What's the FIRST action to stay compliant with AC.L2-3.1.1?",
        "options": [
          "Wipe their laptop next week",
          "Disable their Entra ID account within 30 minutes ✅",
          "Remove them from Teams chats only",
          "Send a \"good-bye\" GIF in the group channel"
        ],
        "correct": "B"
      },
      {
        "question": "Which policy element enforces the *device* part of \"authorized users *or devices*\"?",
        "options": [
          "Azure Information Protection labels",
          "Entra Conditional Access \"Require compliant device\" ✅",
          "SharePoint site permissions",
          "Outlook Safe Senders list"
        ],
        "correct": "B"
      },
      {
        "question": "Scenario: A contractor connects via hotel Wi-Fi on their personal MacBook. They pass MFA but BitLocker isn't enabled. What happens?",
        "options": [
          "Access granted; MFA alone is enough",
          "Login allowed but read-only rights",
          "ZPA blocks the session; Conditional Access flags non-compliant device ✅",
          "They're rerouted to a VPN fallback"
        ],
        "correct": "C"
      }
    ],
    "additionalResources": [
      "NIST SP 800-171 Â§3.1.1",
      "Microsoft Docs "“ \"Conditional Access: Require compliant or hybrid Azure AD joined device\"",
      "Zscaler ZPA Best Practices Guide v5.2"
    ],
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Limit System Access to Authorized Users:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with limit system access to authorized users requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.1 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Limit System Access to Authorized Users in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Limit System Access to Authorized Users - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current limit system access to authorized users implementation against CMMC 3.1.1 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing limit system access to authorized users?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Limit System Access to Authorized Users requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.1"
      },
      {
        "title": "NIST SP 800-171r3 - AC.3.1.1 Account Management",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html#d30e734-Head3",
        "description": "Official NIST guidance for Account Management control"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Limit System Access to Transaction Functions",
    "officialRequirement": "CMMC v2 "“ AC.L2-3.1.2: \"Limit system access to the types of transactions and functions that authorized users are permitted to execute.\"",
    "why": "For MVL Group operating in our GCC High tenant, this control prevents privilege creep and reduces blast radius if accounts get compromised. Critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility.",
    "whyMatters": [
      "Implements the principle of least privilege, minimizing attack surface and reducing insider threat risks",
      "Prevents privilege escalation attacks and limits the scope of potential security breaches",
      "Essential for CMMC Level 2 compliance and demonstrates mature access control governance to auditors",
      "Reduces operational costs by automating access provisioning and eliminating over-privileged accounts"
    ],
    "howMVLDoes": [
      "Role-Based Access Control (RBAC) â†’ Entra ID groups mapped to business functions with granular permission assignments",
      "Privileged Identity Management (PIM) â†’ Time-boxed, just-in-time elevation for administrative functions with approval workflows",
      "Zscaler App Segmentation â†’ Role-based micro-segmentation ensuring users only access applications relevant to their job function",
      "SharePoint Sensitivity Labels â†’ Automated content classification with role-based access restrictions and DLP policies",
      "Microsoft Intune App Protection â†’ Conditional access policies separating corporate and personal data on managed devices",
      "Regular Access Reviews â†’ Quarterly certification process ensuring access rights remain appropriate and current"
    ],
    "implementationSteps": [
      {
        "step": 1,
        "title": "Define Roles",
        "description": "HR, Finance, Engineering, IT-Admin, Contractor (doc in Confluence)"
      },
      {
        "step": 2,
        "title": "Map Permissions", 
        "description": "Spreadsheet matrix: role â†’ app â†’ allowed actions"
      },
      {
        "step": 3,
        "title": "Configure Entra Groups",
        "description": "Set dynamic rules (e.g., department eq 'HR')"
      },
      {
        "step": 4,
        "title": "Enable PIM",
        "description": "Set 4-hour max elevation; require MFA + ticket ID"
      },
      {
        "step": 5,
        "title": "ZPA Segmentation",
        "description": "Create \"HR-Apps\" segment; bind to HR group"
      },
      {
        "step": 6,
        "title": "Continuous Review",
        "description": "Monthly PowerShell script dumps role assignments â†’ Sentinel alert if drift > 10%"
      },
      {
        "step": 7,
        "title": "Train & Sign-off",
        "description": "Actimo micro-course + digital signature in LMS"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary purpose of CMMC practice AC.L2-3.1.2?",
        "options": [
          "Encrypt all emails",
          "Limit each user to only the transactions/functions they need ✅",
          "Force weekly password resets",
          "Require VPN for cloud apps"
        ],
        "correct": "B"
      },
      {
        "question": "Which MVL feature provides time-boxed elevated permissions?",
        "options": [
          "Zscaler Private Access (ZPA)",
          "Entra ID Privileged Identity Management (PIM) ✅",
          "BitLocker",
          "Acronis Cyber Protect"
        ],
        "correct": "B"
      },
      {
        "question": "True or False: A SharePoint site librarian can grant themselves Global Admin if they belong to the \"IT-Admin\" Entra group.",
        "options": [
          "True",
          "False ✅"
        ],
        "correct": "B"
      },
      {
        "question": "A contractor needs temporary write access to the Finance SharePoint library. What's the compliant first move?",
        "options": [
          "Add them permanently to the Finance group",
          "Elevate via PIM with 24-hour approval window ✅",
          "Share the folder link anonymously",
          "Email the file as an attachment"
        ],
        "correct": "B"
      },
      {
        "question": "Which Sentinel alert best detects privilege creep?",
        "options": [
          "Login from unusual geo-location",
          "Role-assignment delta > 10% month-to-month ✅",
          "Malware detection on endpoint",
          "Excessive OneDrive sharing invitations"
        ],
        "correct": "B"
      }
    ],
    "additionalResources": [
      "NIST SP 800-171 Â§3.1.2",
      "Microsoft Docs "“ \"Implement RBAC with Privileged Identity Management\"",
      "Zscaler ZPA Segmentation Guide v5.2"
    ],
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Limit System Access to Transaction Functions:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with limit system access to transaction functions requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Limit System Access to Transaction Functions in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Limit System Access to Transaction Functions - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current limit system access to transaction functions implementation against CMMC 3.1.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing limit system access to transaction functions?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Limit System Access to Transaction Functions requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.2"
      },
      {
        "title": "NIST SP 800-171r3 - AC.3.1.2 Access Enforcement",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html#d30e924-Head3",
        "description": "Official NIST guidance for Access Enforcement control"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Control CUI Flow",
    "officialRequirement": "CMMC 3.1.3: Implement control cui flow controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of control cui flow helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "whyMatters": [
      "Prevents unauthorized disclosure of Controlled Unclassified Information (CUI) through network controls and data flow monitoring",
      "Ensures CMMC Level 2 compliance by implementing mandatory information flow controls and boundary protections",
      "Protects MVL's competitive advantage by preventing CUI from leaving authorized environments and networks",
      "Reduces regulatory compliance risks and potential penalties from inadvertent CUI disclosure incidents"
    ],
    "howMVLDoes": [
      "Microsoft Purview Information Protection â†’ Automatic classification and labeling of CUI with data loss prevention policies",
      "Zscaler Internet Access (ZIA) â†’ Web filtering and SSL inspection preventing CUI transmission to unauthorized destinations",
      "Microsoft Defender for Cloud Apps â†’ Cloud app security broker (CASB) monitoring and controlling CUI flow in SaaS applications",
      "Network Segmentation â†’ Zscaler ZPA micro-tunnels ensuring CUI remains within authorized network boundaries",
      "Endpoint DLP Policies â†’ Microsoft Purview endpoint protection preventing CUI extraction via USB, email, or file sharing",
      "Azure Information Protection â†’ Rights management and persistent protection following CUI throughout its lifecycle"
    ],
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Control CUI Flow:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with control cui flow requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Control CUI Flow in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Control CUI Flow - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current control cui flow implementation against CMMC 3.1.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing control cui flow?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Control CUI Flow requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.3"
      },
      {
        "title": "NIST SP 800-171r3 - AC.3.1.3 Information Flow Enforcement",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html#d30e988-Head3",
        "description": "Official NIST guidance for Information Flow Enforcement control"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.4": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Separate Duties",
    "officialRequirement": "CMMC 3.1.4: Implement separate duties controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of separate duties helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Separate Duties:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with separate duties requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.4 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Separate Duties in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Separate Duties - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current separate duties implementation against CMMC 3.1.4 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing separate duties?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Separate Duties requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.4"
      },
      {
        "title": "NIST SP 800-171r3 - AC.3.1.4 Separation of Duties",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html#d30e1025-Head3",
        "description": "Official NIST guidance for Separation of Duties control"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.5": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Least Privilege",
    "officialRequirement": "CMMC 3.1.5: Implement least privilege controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of least privilege helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Least Privilege:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with least privilege requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.5 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Least Privilege in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Least Privilege - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current least privilege implementation against CMMC 3.1.5 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing least privilege?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Least Privilege requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.5"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.6": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Non-Privileged Use",
    "officialRequirement": "CMMC 3.1.6: Implement non-privileged use controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of non-privileged use helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Non-Privileged Use:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with non-privileged use requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.6 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Non-Privileged Use in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Non-Privileged Use - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current non-privileged use implementation against CMMC 3.1.6 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing non-privileged use?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Non-Privileged Use requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.6"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.7": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Block Privileged Function Execution",
    "officialRequirement": "CMMC 3.1.7: Implement block privileged function execution controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of block privileged function execution helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Block Privileged Function Execution:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with block privileged function execution requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.7 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Block Privileged Function Execution in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Block Privileged Function Execution - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current block privileged function execution implementation against CMMC 3.1.7 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing block privileged function execution?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Block Privileged Function Execution requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.7"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.8": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Limit Unsuccessful Logon Attempts",
    "officialRequirement": "CMMC 3.1.8: Implement limit unsuccessful logon attempts controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of limit unsuccessful logon attempts helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Limit Unsuccessful Logon Attempts:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with limit unsuccessful logon attempts requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.8 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Limit Unsuccessful Logon Attempts in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Limit Unsuccessful Logon Attempts - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current limit unsuccessful logon attempts implementation against CMMC 3.1.8 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing limit unsuccessful logon attempts?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Limit Unsuccessful Logon Attempts requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.8"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.9": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Provide System Use Notification",
    "officialRequirement": "CMMC 3.1.9: Implement provide system use notification controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of provide system use notification helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Provide System Use Notification:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with provide system use notification requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.9 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Provide System Use Notification in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Provide System Use Notification - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current provide system use notification implementation against CMMC 3.1.9 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing provide system use notification?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Provide System Use Notification requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.9"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.10": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Use Session Lock",
    "officialRequirement": "CMMC 3.1.10: Implement use session lock controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of use session lock helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Use Session Lock:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with use session lock requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.10 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Use Session Lock in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Use Session Lock - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current use session lock implementation against CMMC 3.1.10 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing use session lock?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Use Session Lock requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.10"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.11": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Terminate Sessions",
    "officialRequirement": "CMMC 3.1.11: Implement terminate sessions controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of terminate sessions helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Terminate Sessions:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with terminate sessions requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.11 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Terminate Sessions in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Terminate Sessions - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current terminate sessions implementation against CMMC 3.1.11 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing terminate sessions?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Terminate Sessions requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.11"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.12": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Monitor Remote Access",
    "officialRequirement": "CMMC 3.1.12: Implement monitor remote access controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of monitor remote access helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Monitor Remote Access:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with monitor remote access requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.12 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Monitor Remote Access in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Monitor Remote Access - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current monitor remote access implementation against CMMC 3.1.12 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing monitor remote access?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Monitor Remote Access requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.12"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.13": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Encrypt Remote Sessions",
    "officialRequirement": "CMMC 3.1.13: Implement encrypt remote sessions controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of encrypt remote sessions helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Encrypt Remote Sessions:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with encrypt remote sessions requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.13 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Encrypt Remote Sessions in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Encrypt Remote Sessions - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current encrypt remote sessions implementation against CMMC 3.1.13 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing encrypt remote sessions?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Encrypt Remote Sessions requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.13"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.14": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Route Remote Access",
    "officialRequirement": "CMMC 3.1.14: Implement route remote access controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of route remote access helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Route Remote Access:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with route remote access requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.14 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Route Remote Access in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Route Remote Access - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current route remote access implementation against CMMC 3.1.14 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing route remote access?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Route Remote Access requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.14"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.15": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Authorize Remote Privileged Commands",
    "officialRequirement": "CMMC 3.1.15: Implement authorize remote privileged commands controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of authorize remote privileged commands helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Authorize Remote Privileged Commands:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with authorize remote privileged commands requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.15 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Authorize Remote Privileged Commands in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Authorize Remote Privileged Commands - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current authorize remote privileged commands implementation against CMMC 3.1.15 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing authorize remote privileged commands?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Authorize Remote Privileged Commands requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.15"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.16": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Authorize Wireless Access",
    "officialRequirement": "CMMC 3.1.16: Implement authorize wireless access controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of authorize wireless access helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Authorize Wireless Access:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with authorize wireless access requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.16 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Authorize Wireless Access in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Authorize Wireless Access - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current authorize wireless access implementation against CMMC 3.1.16 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing authorize wireless access?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Authorize Wireless Access requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.16"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.17": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Protect Wireless Access",
    "officialRequirement": "CMMC 3.1.17: Implement protect wireless access controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of protect wireless access helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Protect Wireless Access:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with protect wireless access requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.17 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Protect Wireless Access in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Protect Wireless Access - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current protect wireless access implementation against CMMC 3.1.17 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing protect wireless access?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Protect Wireless Access requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.17"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.18": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Control Mobile Devices",
    "officialRequirement": "CMMC 3.1.18: Implement control mobile devices controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of control mobile devices helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Control Mobile Devices:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with control mobile devices requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.18 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Control Mobile Devices in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Control Mobile Devices - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current control mobile devices implementation against CMMC 3.1.18 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing control mobile devices?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Control Mobile Devices requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.18"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.19": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Encrypt CUI on Mobile",
    "officialRequirement": "CMMC 3.1.19: Implement encrypt cui on mobile controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of encrypt cui on mobile helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Encrypt CUI on Mobile:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with encrypt cui on mobile requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.19 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Encrypt CUI on Mobile in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Encrypt CUI on Mobile - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current encrypt cui on mobile implementation against CMMC 3.1.19 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing encrypt cui on mobile?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Encrypt CUI on Mobile requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.19"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.20": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Verify External Systems",
    "officialRequirement": "CMMC 3.1.20: Implement verify external systems controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of verify external systems helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Verify External Systems:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with verify external systems requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.20 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Verify External Systems in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Verify External Systems - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current verify external systems implementation against CMMC 3.1.20 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing verify external systems?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Verify External Systems requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.20"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.21": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Limit Portable Storage on External Systems",
    "officialRequirement": "CMMC 3.1.21: Implement limit portable storage on external systems controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of limit portable storage on external systems helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Limit Portable Storage on External Systems:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with limit portable storage on external systems requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.21 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Limit Portable Storage on External Systems in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Limit Portable Storage on External Systems - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current limit portable storage on external systems implementation against CMMC 3.1.21 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing limit portable storage on external systems?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Limit Portable Storage on External Systems requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.21"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AC.3.1.22": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Control Public Information",
    "officialRequirement": "CMMC 3.1.22: Implement control public information controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of control public information helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Control Public Information:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with control public information requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.1.22 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Control Public Information in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Control Public Information - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current control public information implementation against CMMC 3.1.22 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing control public information?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Control Public Information requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.1.22"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AT.3.2.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Security Awareness Training",
    "officialRequirement": "CMMC v2 "“ AT.L2-3.2.1: \"Provide security awareness training on recognizing and reporting potential indicators of insider threat.\"",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Security awareness training helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "whyMatters": [
      "Human error causes 95% of successful cyber attacks - proper training is your first line of defense",
      "CMMC Level 2 requires demonstrable security awareness programs for all personnel handling CUI",
      "MVL's DoD contracts depend on proving our team knows how to spot and report security threats",
      "Effective training reduces incident response costs and prevents data breaches that could cost $500K+"
    ],
    "howMVLDoes": [
      "Microsoft Viva Learning â†’ deliver security modules directly in Teams with tracking & reporting",
      "KnowBe4 security awareness platform â†’ phishing simulations + interactive training content",
      "Quarterly security awareness campaigns with role-specific content (IT, finance, operations)",
      "Incident response tabletop exercises with real-world scenarios from DoD environments"
    ],
    "implementationSteps": [
      {
        "step": 1,
        "title": "Training Content Development",
        "description": "Create MVL-specific security awareness curriculum covering CUI handling, phishing, insider threats"
      },
      {
        "step": 2,
        "title": "Platform Setup",
        "description": "Configure Microsoft Viva Learning and KnowBe4 integration with MVL tenant"
      },
      {
        "step": 3,
        "title": "Role-Based Training",
        "description": "Deploy differentiated training paths: executives, IT staff, general users, contractors"
      },
      {
        "step": 4,
        "title": "Assessment & Testing",
        "description": "Implement knowledge checks, simulated phishing tests, and competency assessments"
      },
      {
        "step": 5,
        "title": "Tracking & Compliance",
        "description": "Monitor completion rates, track effectiveness metrics, generate compliance reports"
      },
      {
        "step": 6,
        "title": "Continuous Improvement",
        "description": "Update content based on threat landscape, incident lessons learned, and audit feedback"
      }
    ],
    "quiz": [
      {
        "question": "What percentage of successful cyber attacks are caused by human error?",
        "options": [
          "95% ✅",
          "75%",
          "50%",
          "25%"
        ],
        "correct": "A"
      },
      {
        "question": "Which platform does MVL use to deliver security training directly in Teams?",
        "options": [
          "SharePoint Learning",
          "Microsoft Viva Learning ✅",
          "Outlook training modules",
          "PowerPoint presentations"
        ],
        "correct": "B"
      },
      {
        "question": "How often does MVL conduct security awareness campaigns?",
        "options": [
          "Monthly",
          "Quarterly ✅",
          "Annually",
          "As needed only"
        ],
        "correct": "B"
      },
      {
        "question": "True or False: MVL provides the same security training to all employees regardless of their role.",
        "options": [
          "True",
          "False ✅"
        ],
        "correct": "B"
      },
      {
        "question": "What is the primary business benefit of effective security awareness training?",
        "options": [
          "Reduces IT support tickets",
          "Prevents data breaches and maintains DoD contract eligibility ✅",
          "Improves employee productivity",
          "Simplifies compliance reporting"
        ],
        "correct": "B"
      }
    ],
    "additionalResources": [
      "NIST SP 800-50 - Building an Information Technology Security Awareness and Training Program",
      "CMMC Assessment Guide - Awareness and Training Domain Requirements",
      "Microsoft Viva Learning Security Training Best Practices",
      "MVL Security Awareness Policy and Procedures Manual"
    ]
  },
  "AT.3.2.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Role-Based Security Training",
    "officialRequirement": "CMMC 3.2.2: Implement role-based security training controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of role-based security training helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Role-Based Security Training:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with role-based security training requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.2.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Role-Based Security Training in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Role-Based Security Training - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current role-based security training implementation against CMMC 3.2.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing role-based security training?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Role-Based Security Training requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.2.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AT.3.2.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Insider Threat Training",
    "officialRequirement": "CMMC 3.2.3: Implement insider threat training controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of insider threat training helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Insider Threat Training:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with insider threat training requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.2.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Insider Threat Training in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Insider Threat Training - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current insider threat training implementation against CMMC 3.2.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing insider threat training?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Insider Threat Training requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.2.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AU.3.3.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Create Audit Records",
    "officialRequirement": "CMMC v2 "“ AU.L2-3.3.1: \"Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity.\"",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Comprehensive audit logging enables forensic analysis and incident response.",
    "whyMatters": [
      "Audit trails are the digital equivalent of security cameras - you can't investigate what you don't record",
      "CMMC Level 2 requires comprehensive logging to demonstrate compliance and support incident investigations",
      "MVL's DoD contracts require evidence of who did what, when, and where in all systems handling CUI",
      "Proper audit records reduce mean time to detection (MTTD) and response (MTTR) for security incidents"
    ],
    "howMVLDoes": [
      "Microsoft Sentinel â†’ centralized SIEM collecting logs from all MVL systems and security tools",
      "Azure Monitor + Log Analytics â†’ detailed logging of Azure AD, Office 365, and infrastructure events", 
      "Defender for Business â†’ endpoint activity logging with behavioral analysis and threat detection",
      "Automated log retention policies â†’ 7 years for CUI-related events, 1 year for general security logs"
    ],
    "implementationSteps": [
      {
        "step": 1,
        "title": "Logging Architecture Design",
        "description": "Design comprehensive logging strategy covering all MVL systems, applications, and security tools"
      },
      {
        "step": 2,
        "title": "Sentinel Configuration",
        "description": "Deploy Microsoft Sentinel workspace and configure data connectors for all log sources"
      },
      {
        "step": 3,
        "title": "Log Collection Setup",
        "description": "Configure Azure Monitor, Defender for Business, and custom log collectors for complete coverage"
      },
      {
        "step": 4,
        "title": "Retention & Storage",
        "description": "Implement automated retention policies and secure long-term storage for compliance requirements"
      },
      {
        "step": 5,
        "title": "Monitoring & Alerting",
        "description": "Create detection rules, alert policies, and automated response workflows for security events"
      },
      {
        "step": 6,
        "title": "Validation & Testing",
        "description": "Test log completeness, searchability, and incident response procedures using audit records"
      }
    ],
    "quiz": [
      {
        "question": "Which MVL tool serves as the central SIEM for collecting audit logs?",
        "options": [
          "Microsoft Sentinel ✅",
          "Azure Monitor only",
          "Windows Event Viewer",
          "SharePoint audit logs"
        ],
        "correct": "A"
      },
      {
        "question": "How long does MVL retain audit logs for CUI-related events?",
        "options": [
          "1 year",
          "3 years", 
          "5 years",
          "7 years ✅"
        ],
        "correct": "D"
      },
      {
        "question": "True or False: Audit records help reduce mean time to detection (MTTD) for security incidents.",
        "options": [
          "True ✅",
          "False"
        ],
        "correct": "A"
      },
      {
        "question": "What is the primary business benefit of comprehensive audit logging?",
        "options": [
          "Reduces storage costs",
          "Enables forensic analysis and compliance demonstration ✅",
          "Improves system performance",
          "Simplifies user training"
        ],
        "correct": "B"
      },
      {
        "question": "Which combination provides complete audit coverage at MVL?",
        "options": [
          "Windows logs only",
          "Office 365 audit logs only",
          "Sentinel + Azure Monitor + Defender for Business ✅",
          "Manual log reviews"
        ],
        "correct": "C"
      }
    ],
    "additionalResources": [
      "NIST SP 800-92 - Guide to Computer Security Log Management",
      "CMMC Assessment Guide - Audit and Accountability Domain Evidence Requirements",
      "Microsoft Sentinel Best Practices for CMMC Compliance",
      "MVL Audit Log Retention and Management Procedures"
    ]
  },
  "AU.3.3.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Ensure Audit Processing Failures Alert",
    "officialRequirement": "CMMC 3.3.2: Implement ensure audit processing failures alert controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of ensure audit processing failures alert helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Ensure Audit Processing Failures Alert:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with ensure audit processing failures alert requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.3.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Ensure Audit Processing Failures Alert in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Ensure Audit Processing Failures Alert - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current ensure audit processing failures alert implementation against CMMC 3.3.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing ensure audit processing failures alert?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Ensure Audit Processing Failures Alert requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.3.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AU.3.3.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Review Audit Logs",
    "officialRequirement": "CMMC 3.3.3: Implement review audit logs controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of review audit logs helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Review Audit Logs:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with review audit logs requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.3.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Review Audit Logs in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Review Audit Logs - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current review audit logs implementation against CMMC 3.3.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing review audit logs?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Review Audit Logs requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.3.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AU.3.3.4": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Alert on Audit Processing Failures",
    "officialRequirement": "CMMC 3.3.4: Implement alert on audit processing failures controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of alert on audit processing failures helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Alert on Audit Processing Failures:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with alert on audit processing failures requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.3.4 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Alert on Audit Processing Failures in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Alert on Audit Processing Failures - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current alert on audit processing failures implementation against CMMC 3.3.4 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing alert on audit processing failures?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Alert on Audit Processing Failures requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.3.4"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AU.3.3.5": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Correlate Audit Record Review",
    "officialRequirement": "CMMC 3.3.5: Implement correlate audit record review controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of correlate audit record review helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Correlate Audit Record Review:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with correlate audit record review requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.3.5 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Correlate Audit Record Review in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Correlate Audit Record Review - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current correlate audit record review implementation against CMMC 3.3.5 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing correlate audit record review?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Correlate Audit Record Review requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.3.5"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AU.3.3.6": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Provide Audit Reduction",
    "officialRequirement": "CMMC 3.3.6: Implement provide audit reduction controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of provide audit reduction helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Provide Audit Reduction:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with provide audit reduction requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.3.6 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Provide Audit Reduction in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Provide Audit Reduction - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current provide audit reduction implementation against CMMC 3.3.6 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing provide audit reduction?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Provide Audit Reduction requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.3.6"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AU.3.3.7": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Provide Time Stamps",
    "officialRequirement": "CMMC 3.3.7: Implement provide time stamps controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of provide time stamps helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Provide Time Stamps:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with provide time stamps requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.3.7 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Provide Time Stamps in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Provide Time Stamps - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current provide time stamps implementation against CMMC 3.3.7 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing provide time stamps?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Provide Time Stamps requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.3.7"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AU.3.3.8": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Protect Audit Information",
    "officialRequirement": "CMMC 3.3.8: Implement protect audit information controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of protect audit information helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Protect Audit Information:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with protect audit information requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.3.8 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Protect Audit Information in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Protect Audit Information - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current protect audit information implementation against CMMC 3.3.8 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing protect audit information?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Protect Audit Information requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.3.8"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "AU.3.3.9": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Limit Audit Log Management",
    "officialRequirement": "CMMC 3.3.9: Implement limit audit log management controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of limit audit log management helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Limit Audit Log Management:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with limit audit log management requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.3.9 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Limit Audit Log Management in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Limit Audit Log Management - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current limit audit log management implementation against CMMC 3.3.9 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing limit audit log management?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Limit Audit Log Management requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.3.9"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "CM.3.4.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Establish Baseline Configurations",
    "officialRequirement": "CMMC v2 "“ CM.L2-3.4.1: \"Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation) as the basis for future builds, releases, and changes to organizational systems.\"",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Baseline configurations provide the foundation for secure, consistent system deployments.",
    "whyMatters": [
      "Configuration drift is like a slow leak - small changes accumulate into major security vulnerabilities",
      "CMMC Level 2 requires documented baseline configurations for all systems processing CUI",
      "MVL's DoD contracts depend on proving consistent, secure configurations across our environment",
      "Proper baselines enable rapid incident response and forensic analysis when security events occur"
    ],
    "howMVLDoes": [
      "Microsoft Intune â†’ standardized device configuration profiles for all MVL Surface devices",
      "Azure Policy â†’ automated governance and compliance checking for cloud resources",
      "Windows Autopilot â†’ zero-touch deployment with pre-configured security baselines",
      "Configuration Manager â†’ enterprise-scale configuration management and compliance reporting"
    ],
    "implementationSteps": [
      {
        "step": 1,
        "title": "Baseline Definition",
        "description": "Define secure configuration standards for all MVL device types, applications, and cloud services"
      },
      {
        "step": 2,
        "title": "Intune Configuration",
        "description": "Create and deploy configuration profiles through Microsoft Intune for all managed devices"
      },
      {
        "step": 3,
        "title": "Azure Policy Setup",
        "description": "Implement Azure Policy definitions to enforce configuration baselines for cloud resources"
      },
      {
        "step": 4,
        "title": "Autopilot Deployment",
        "description": "Configure Windows Autopilot for automated, compliant device provisioning"
      },
      {
        "step": 5,
        "title": "Compliance Monitoring",
        "description": "Establish continuous monitoring and automated remediation for configuration drift"
      },
      {
        "step": 6,
        "title": "Documentation & Updates",
        "description": "Maintain current baseline documentation and update configurations for new threats"
      }
    ],
    "quiz": [
      {
        "question": "Which tool does MVL use for standardized device configuration profiles?",
        "options": [
          "Group Policy only",
          "Microsoft Intune ✅",
          "Manual configuration",
          "Third-party tools"
        ],
        "correct": "B"
      },
      {
        "question": "What is configuration drift?",
        "options": [
          "Moving devices between locations",
          "Small unauthorized changes that accumulate into security vulnerabilities ✅",
          "Planned configuration updates",
          "Network connectivity issues"
        ],
        "correct": "B"
      },
      {
        "question": "True or False: Azure Policy provides automated governance for cloud resources.",
        "options": [
          "True ✅",
          "False"
        ],
        "correct": "A"
      },
      {
        "question": "What does Windows Autopilot provide for MVL?",
        "options": [
          "Manual device setup",
          "Zero-touch deployment with pre-configured security baselines ✅",
          "Virus scanning only",
          "Network configuration only"
        ],
        "correct": "B"
      },
      {
        "question": "Why are baseline configurations critical for incident response?",
        "options": [
          "They reduce storage costs",
          "They enable rapid forensic analysis and comparison with known-good states ✅",
          "They improve user experience",
          "They simplify training requirements"
        ],
        "correct": "B"
      }
    ],
    "additionalResources": [
      "NIST SP 800-128 - Guide for Security-Focused Configuration Management",
      "CMMC Assessment Guide - Configuration Management Domain Requirements",
      "Microsoft Intune Configuration Baseline Best Practices",
      "MVL Device Configuration Standards and Baseline Documentation"
    ]
  },
  "CM.3.4.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Establish Configuration Settings",
    "officialRequirement": "CMMC 3.4.2: Implement establish configuration settings controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of establish configuration settings helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Establish Configuration Settings:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with establish configuration settings requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.4.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Establish Configuration Settings in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Establish Configuration Settings - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current establish configuration settings implementation against CMMC 3.4.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing establish configuration settings?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Establish Configuration Settings requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.4.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "CM.3.4.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Track Unauthorized Changes",
    "officialRequirement": "CMMC 3.4.3: Implement track unauthorized changes controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of track unauthorized changes helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Track Unauthorized Changes:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with track unauthorized changes requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.4.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Track Unauthorized Changes in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Track Unauthorized Changes - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current track unauthorized changes implementation against CMMC 3.4.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing track unauthorized changes?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Track Unauthorized Changes requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.4.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "CM.3.4.4": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Analyze Security Impact",
    "officialRequirement": "CMMC 3.4.4: Implement analyze security impact controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of analyze security impact helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Analyze Security Impact:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with analyze security impact requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.4.4 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Analyze Security Impact in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Analyze Security Impact - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current analyze security impact implementation against CMMC 3.4.4 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing analyze security impact?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Analyze Security Impact requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.4.4"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "CM.3.4.5": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Define Access Restrictions",
    "officialRequirement": "CMMC 3.4.5: Implement define access restrictions controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of define access restrictions helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Define Access Restrictions:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with define access restrictions requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.4.5 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Define Access Restrictions in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Define Access Restrictions - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current define access restrictions implementation against CMMC 3.4.5 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing define access restrictions?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Define Access Restrictions requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.4.5"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "CM.3.4.6": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Employ Least Functionality",
    "officialRequirement": "CMMC 3.4.6: Implement employ least functionality controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of employ least functionality helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Employ Least Functionality:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with employ least functionality requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.4.6 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Employ Least Functionality in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Employ Least Functionality - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current employ least functionality implementation against CMMC 3.4.6 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing employ least functionality?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Employ Least Functionality requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.4.6"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "CM.3.4.7": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Restrict Program Execution",
    "officialRequirement": "CMMC 3.4.7: Implement restrict program execution controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of restrict program execution helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Restrict Program Execution:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with restrict program execution requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.4.7 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Restrict Program Execution in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Restrict Program Execution - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current restrict program execution implementation against CMMC 3.4.7 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing restrict program execution?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Restrict Program Execution requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.4.7"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "CM.3.4.8": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Implement Application Execution Policies",
    "officialRequirement": "CMMC 3.4.8: Implement implement application execution policies controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of implement application execution policies helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Implement Application Execution Policies:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with implement application execution policies requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.4.8 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Implement Application Execution Policies in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Implement Application Execution Policies - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current implement application execution policies implementation against CMMC 3.4.8 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing implement application execution policies?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Implement Application Execution Policies requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.4.8"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "CM.3.4.9": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Control Software Installation",
    "officialRequirement": "CMMC 3.4.9: Implement control software installation controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of control software installation helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Control Software Installation:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with control software installation requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.4.9 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Control Software Installation in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Control Software Installation - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current control software installation implementation against CMMC 3.4.9 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing control software installation?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Control Software Installation requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.4.9"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "CP.3.5.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Develop Contingency Plans",
    "officialRequirement": "CMMC 3.5.1: Implement develop contingency plans controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of develop contingency plans helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Develop Contingency Plans:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with develop contingency plans requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.5.1 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Develop Contingency Plans in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Develop Contingency Plans - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current develop contingency plans implementation against CMMC 3.5.1 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing develop contingency plans?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Develop Contingency Plans requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.5.1"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "CP.3.5.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Conduct Contingency Testing",
    "officialRequirement": "CMMC 3.5.2: Implement conduct contingency testing controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of conduct contingency testing helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Conduct Contingency Testing:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with conduct contingency testing requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.5.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Conduct Contingency Testing in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Conduct Contingency Testing - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current conduct contingency testing implementation against CMMC 3.5.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing conduct contingency testing?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Conduct Contingency Testing requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.5.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "CP.3.5.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Implement Recovery Controls",
    "officialRequirement": "CMMC 3.5.3: Implement implement recovery controls controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of implement recovery controls helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Implement Recovery Controls:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with implement recovery controls requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.5.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Implement Recovery Controls in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Implement Recovery Controls - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current implement recovery controls implementation against CMMC 3.5.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing implement recovery controls?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Implement Recovery Controls requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.5.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IA.3.6.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Identify System Users",
    "officialRequirement": "CMMC v2 "“ IA.L2-3.6.1: \"Identify system users, processes acting on behalf of users, or devices.\"",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper user identification enables accountability and audit trails.",
    "whyMatters": [
      "Identity is the new perimeter - you can't secure what you can't identify",
      "CMMC Level 2 requires unique identification for every user, process, and device accessing CUI",
      "MVL's DoD contracts depend on proving who did what, when, and from where in audit trails",
      "Proper identification enables zero-trust security and prevents privilege escalation attacks"
    ],
    "howMVLDoes": [
      "Azure Active Directory â†’ unique user identities with UPN format (user@mvl-group.com)",
      "Managed device identities â†’ every Surface device has unique Azure AD device identity",
      "Service principal accounts â†’ applications and automated processes use dedicated service identities",
      "Guest user management â†’ external contractors get time-limited guest identities with restricted access"
    ],
    "implementationSteps": [
      {
        "step": 1,
        "title": "Identity Governance Planning",
        "description": "Design comprehensive identity strategy covering users, devices, applications, and service accounts"
      },
      {
        "step": 2,
        "title": "Azure AD Configuration",
        "description": "Configure Azure Active Directory with proper naming conventions and organizational units"
      },
      {
        "step": 3,
        "title": "Device Registration",
        "description": "Enroll all MVL devices in Azure AD with unique device identities and compliance policies"
      },
      {
        "step": 4,
        "title": "Service Account Management",
        "description": "Create and manage service principal accounts for applications and automated processes"
      },
      {
        "step": 5,
        "title": "Guest Access Controls",
        "description": "Implement guest user lifecycle management with time-limited access and monitoring"
      },
      {
        "step": 6,
        "title": "Identity Monitoring",
        "description": "Deploy identity protection and monitoring through Azure AD Identity Protection and Sentinel"
      }
    ],
    "quiz": [
      {
        "question": "What format does MVL use for user principal names (UPN)?",
        "options": [
          "user@mvl-group.com ✅",
          "firstname.lastname",
          "employee_id_number",
          "domain\\username"
        ],
        "correct": "A"
      },
      {
        "question": "True or False: Every MVL Surface device has a unique Azure AD device identity.",
        "options": [
          "True ✅",
          "False"
        ],
        "correct": "A"
      },
      {
        "question": "How does MVL handle external contractor access?",
        "options": [
          "Shared generic accounts",
          "Time-limited guest identities with restricted access ✅",
          "Full employee accounts",
          "No external access allowed"
        ],
        "correct": "B"
      },
      {
        "question": "What enables zero-trust security at MVL?",
        "options": [
          "Network firewalls only",
          "Proper identification of users, devices, and processes ✅",
          "Antivirus software",
          "Physical security controls"
        ],
        "correct": "B"
      },
      {
        "question": "Which tool provides identity protection and monitoring?",
        "options": [
          "Windows Event Viewer",
          "Basic audit logs",
          "Azure AD Identity Protection and Sentinel ✅",
          "Email notifications only"
        ],
        "correct": "C"
      }
    ],
    "additionalResources": [
      "NIST SP 800-63 - Digital Identity Guidelines",
      "CMMC Assessment Guide - Identification and Authentication Domain Requirements",
      "Azure Active Directory Identity Management Best Practices",
      "MVL Identity Governance and Administration Procedures"
    ],
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Identify System Users:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with identify system users requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.6.1 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Identify System Users in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Identify System Users - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current identify system users implementation against CMMC 3.6.1 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing identify system users?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Identify System Users requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.6.1"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IA.3.6.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Authenticate System Users",
    "officialRequirement": "CMMC 3.6.2: Implement authenticate system users controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of authenticate system users helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Authenticate System Users:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with authenticate system users requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.6.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Authenticate System Users in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Authenticate System Users - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current authenticate system users implementation against CMMC 3.6.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing authenticate system users?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Authenticate System Users requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.6.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IA.3.6.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Use Multifactor Authentication",
    "officialRequirement": "CMMC 3.6.3: Implement use multifactor authentication controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of use multifactor authentication helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Use Multifactor Authentication:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with use multifactor authentication requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.6.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Use Multifactor Authentication in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Use Multifactor Authentication - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current use multifactor authentication implementation against CMMC 3.6.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing use multifactor authentication?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Use Multifactor Authentication requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.6.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IA.3.6.4": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Employ Replay-Resistant Authentication",
    "officialRequirement": "CMMC 3.6.4: Implement employ replay-resistant authentication controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of employ replay-resistant authentication helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Employ Replay-Resistant Authentication:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with employ replay-resistant authentication requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.6.4 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Employ Replay-Resistant Authentication in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Employ Replay-Resistant Authentication - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current employ replay-resistant authentication implementation against CMMC 3.6.4 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing employ replay-resistant authentication?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Employ Replay-Resistant Authentication requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.6.4"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IA.3.6.5": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Prevent Identifier Reuse",
    "officialRequirement": "CMMC 3.6.5: Implement prevent identifier reuse controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of prevent identifier reuse helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Prevent Identifier Reuse:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with prevent identifier reuse requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.6.5 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Prevent Identifier Reuse in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Prevent Identifier Reuse - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current prevent identifier reuse implementation against CMMC 3.6.5 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing prevent identifier reuse?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Prevent Identifier Reuse requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.6.5"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IA.3.6.6": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Disable Inactive Identifiers",
    "officialRequirement": "CMMC 3.6.6: Implement disable inactive identifiers controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of disable inactive identifiers helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Disable Inactive Identifiers:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with disable inactive identifiers requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.6.6 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Disable Inactive Identifiers in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Disable Inactive Identifiers - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current disable inactive identifiers implementation against CMMC 3.6.6 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing disable inactive identifiers?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Disable Inactive Identifiers requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.6.6"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IA.3.6.7": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Enforce Minimum Password Complexity",
    "officialRequirement": "CMMC 3.6.7: Implement enforce minimum password complexity controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of enforce minimum password complexity helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Enforce Minimum Password Complexity:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with enforce minimum password complexity requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.6.7 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Enforce Minimum Password Complexity in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Enforce Minimum Password Complexity - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current enforce minimum password complexity implementation against CMMC 3.6.7 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing enforce minimum password complexity?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Enforce Minimum Password Complexity requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.6.7"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IA.3.6.8": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Prohibit Password Reuse",
    "officialRequirement": "CMMC 3.6.8: Implement prohibit password reuse controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of prohibit password reuse helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Prohibit Password Reuse:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with prohibit password reuse requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.6.8 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Prohibit Password Reuse in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Prohibit Password Reuse - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current prohibit password reuse implementation against CMMC 3.6.8 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing prohibit password reuse?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Prohibit Password Reuse requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.6.8"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IA.3.6.9": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Allow Temporary Password Use",
    "officialRequirement": "CMMC 3.6.9: Implement allow temporary password use controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of allow temporary password use helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Allow Temporary Password Use:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with allow temporary password use requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.6.9 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Allow Temporary Password Use in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Allow Temporary Password Use - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current allow temporary password use implementation against CMMC 3.6.9 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing allow temporary password use?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Allow Temporary Password Use requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.6.9"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IA.3.6.10": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Store Passwords Using Encryption",
    "officialRequirement": "CMMC 3.6.10: Implement store passwords using encryption controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of store passwords using encryption helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Store Passwords Using Encryption:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with store passwords using encryption requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.6.10 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Store Passwords Using Encryption in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Store Passwords Using Encryption - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current store passwords using encryption implementation against CMMC 3.6.10 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing store passwords using encryption?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Store Passwords Using Encryption requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.6.10"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IA.3.6.11": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Obscure Feedback Authentication",
    "officialRequirement": "CMMC 3.6.11: Implement obscure feedback authentication controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of obscure feedback authentication helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Obscure Feedback Authentication:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with obscure feedback authentication requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.6.11 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Obscure Feedback Authentication in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Obscure Feedback Authentication - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current obscure feedback authentication implementation against CMMC 3.6.11 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing obscure feedback authentication?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Obscure Feedback Authentication requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.6.11"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IR.3.7.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Establish Incident Handling Capability",
    "officialRequirement": "CMMC 3.7.1: Implement establish incident handling capability controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of establish incident handling capability helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Establish Incident Handling Capability:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with establish incident handling capability requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.7.1 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Establish Incident Handling Capability in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Establish Incident Handling Capability - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current establish incident handling capability implementation against CMMC 3.7.1 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing establish incident handling capability?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Establish Incident Handling Capability requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.7.1"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IR.3.7.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Track and Document Incidents",
    "officialRequirement": "CMMC 3.7.2: Implement track and document incidents controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of track and document incidents helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Track and Document Incidents:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with track and document incidents requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.7.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Track and Document Incidents in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Track and Document Incidents - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current track and document incidents implementation against CMMC 3.7.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing track and document incidents?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Track and Document Incidents requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.7.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IR.3.7.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Test Incident Response Capability",
    "officialRequirement": "CMMC 3.7.3: Implement test incident response capability controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of test incident response capability helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Test Incident Response Capability:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with test incident response capability requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.7.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Test Incident Response Capability in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Test Incident Response Capability - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current test incident response capability implementation against CMMC 3.7.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing test incident response capability?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Test Incident Response Capability requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.7.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "IR.3.7.4": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Analyze Incident Information",
    "officialRequirement": "CMMC 3.7.4: Implement analyze incident information controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of analyze incident information helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Analyze Incident Information:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with analyze incident information requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.7.4 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Analyze Incident Information in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Analyze Incident Information - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current analyze incident information implementation against CMMC 3.7.4 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing analyze incident information?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Analyze Incident Information requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.7.4"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MA.3.8.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Perform Maintenance with Approval",
    "officialRequirement": "CMMC 3.8.1: Implement perform maintenance with approval controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of perform maintenance with approval helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Perform Maintenance with Approval:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with perform maintenance with approval requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.8.1 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Perform Maintenance with Approval in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Perform Maintenance with Approval - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current perform maintenance with approval implementation against CMMC 3.8.1 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing perform maintenance with approval?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Perform Maintenance with Approval requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.8.1"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MA.3.8.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Control Maintenance Tools",
    "officialRequirement": "CMMC 3.8.2: Implement control maintenance tools controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of control maintenance tools helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Control Maintenance Tools:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with control maintenance tools requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.8.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Control Maintenance Tools in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Control Maintenance Tools - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current control maintenance tools implementation against CMMC 3.8.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing control maintenance tools?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Control Maintenance Tools requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.8.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MA.3.8.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Ensure Equipment Sanitization",
    "officialRequirement": "CMMC 3.8.3: Implement ensure equipment sanitization controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of ensure equipment sanitization helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Ensure Equipment Sanitization:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with ensure equipment sanitization requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.8.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Ensure Equipment Sanitization in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Ensure Equipment Sanitization - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current ensure equipment sanitization implementation against CMMC 3.8.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing ensure equipment sanitization?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Ensure Equipment Sanitization requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.8.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MA.3.8.4": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Control Media During Maintenance",
    "officialRequirement": "CMMC 3.8.4: Implement control media during maintenance controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of control media during maintenance helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Control Media During Maintenance:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with control media during maintenance requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.8.4 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Control Media During Maintenance in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Control Media During Maintenance - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current control media during maintenance implementation against CMMC 3.8.4 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing control media during maintenance?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Control Media During Maintenance requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.8.4"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MA.3.8.5": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Require Multifactor Authentication",
    "officialRequirement": "CMMC 3.8.5: Implement require multifactor authentication controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of require multifactor authentication helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Require Multifactor Authentication:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with require multifactor authentication requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.8.5 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Require Multifactor Authentication in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Require Multifactor Authentication - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current require multifactor authentication implementation against CMMC 3.8.5 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing require multifactor authentication?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Require Multifactor Authentication requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.8.5"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MA.3.8.6": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Supervise Maintenance Activities",
    "officialRequirement": "CMMC 3.8.6: Implement supervise maintenance activities controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of supervise maintenance activities helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Supervise Maintenance Activities:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with supervise maintenance activities requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.8.6 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Supervise Maintenance Activities in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Supervise Maintenance Activities - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current supervise maintenance activities implementation against CMMC 3.8.6 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing supervise maintenance activities?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Supervise Maintenance Activities requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.8.6"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MA.3.8.7": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Sanitize Equipment Containing CUI",
    "officialRequirement": "CMMC 3.8.7: Implement sanitize equipment containing cui controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of sanitize equipment containing cui helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Sanitize Equipment Containing CUI:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with sanitize equipment containing cui requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.8.7 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Sanitize Equipment Containing CUI in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Sanitize Equipment Containing CUI - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current sanitize equipment containing cui implementation against CMMC 3.8.7 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing sanitize equipment containing cui?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Sanitize Equipment Containing CUI requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.8.7"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MA.3.8.8": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Document Performed Maintenance",
    "officialRequirement": "CMMC 3.8.8: Implement document performed maintenance controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of document performed maintenance helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Document Performed Maintenance:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with document performed maintenance requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.8.8 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Document Performed Maintenance in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Document Performed Maintenance - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current document performed maintenance implementation against CMMC 3.8.8 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing document performed maintenance?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Document Performed Maintenance requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.8.8"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MA.3.8.9": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Verify Equipment Functionality",
    "officialRequirement": "CMMC 3.8.9: Implement verify equipment functionality controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of verify equipment functionality helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Verify Equipment Functionality:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with verify equipment functionality requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.8.9 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Verify Equipment Functionality in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Verify Equipment Functionality - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current verify equipment functionality implementation against CMMC 3.8.9 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing verify equipment functionality?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Verify Equipment Functionality requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.8.9"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MP.3.9.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Protect System Media",
    "officialRequirement": "CMMC 3.9.1: Implement protect system media controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of protect system media helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Protect System Media:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with protect system media requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.9.1 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Protect System Media in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Protect System Media - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current protect system media implementation against CMMC 3.9.1 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing protect system media?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Protect System Media requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.9.1"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MP.3.9.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Control System Media Access",
    "officialRequirement": "CMMC 3.9.2: Implement control system media access controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of control system media access helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Control System Media Access:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with control system media access requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.9.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Control System Media Access in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Control System Media Access - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current control system media access implementation against CMMC 3.9.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing control system media access?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Control System Media Access requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.9.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MP.3.9.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Sanitize System Media",
    "officialRequirement": "CMMC 3.9.3: Implement sanitize system media controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of sanitize system media helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Sanitize System Media:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with sanitize system media requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.9.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Sanitize System Media in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Sanitize System Media - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current sanitize system media implementation against CMMC 3.9.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing sanitize system media?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Sanitize System Media requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.9.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "MP.3.9.4": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Mark System Media",
    "officialRequirement": "CMMC 3.9.4: Implement mark system media controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of mark system media helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Mark System Media:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with mark system media requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.9.4 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Mark System Media in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Mark System Media - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current mark system media implementation against CMMC 3.9.4 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing mark system media?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Mark System Media requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.9.4"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "PS.3.10.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Screen Personnel",
    "officialRequirement": "CMMC 3.10.1: Implement screen personnel controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of screen personnel helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Screen Personnel:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with screen personnel requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.10.1 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Screen Personnel in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Screen Personnel - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current screen personnel implementation against CMMC 3.10.1 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing screen personnel?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Screen Personnel requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.10.1"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "PS.3.10.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Ensure Personnel Termination",
    "officialRequirement": "CMMC 3.10.2: Implement ensure personnel termination controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of ensure personnel termination helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Ensure Personnel Termination:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with ensure personnel termination requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.10.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Ensure Personnel Termination in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Ensure Personnel Termination - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current ensure personnel termination implementation against CMMC 3.10.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing ensure personnel termination?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Ensure Personnel Termination requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.10.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "PE.3.11.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Limit Physical Access",
    "officialRequirement": "CMMC 3.11.1: Implement limit physical access controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of limit physical access helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Limit Physical Access:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with limit physical access requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.11.1 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Limit Physical Access in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Limit Physical Access - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current limit physical access implementation against CMMC 3.11.1 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing limit physical access?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Limit Physical Access requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.11.1"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "PE.3.11.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Protect Physical Access",
    "officialRequirement": "CMMC 3.11.2: Implement protect physical access controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of protect physical access helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Protect Physical Access:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with protect physical access requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.11.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Protect Physical Access in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Protect Physical Access - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current protect physical access implementation against CMMC 3.11.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing protect physical access?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Protect Physical Access requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.11.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "PE.3.11.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Escort Visitors",
    "officialRequirement": "CMMC 3.11.3: Implement escort visitors controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of escort visitors helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Escort Visitors:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with escort visitors requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.11.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Escort Visitors in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Escort Visitors - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current escort visitors implementation against CMMC 3.11.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing escort visitors?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Escort Visitors requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.11.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "PE.3.11.4": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Maintain Audit Logs",
    "officialRequirement": "CMMC 3.11.4: Implement maintain audit logs controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of maintain audit logs helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Maintain Audit Logs:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with maintain audit logs requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.11.4 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Maintain Audit Logs in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Maintain Audit Logs - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current maintain audit logs implementation against CMMC 3.11.4 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing maintain audit logs?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Maintain Audit Logs requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.11.4"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "PE.3.11.5": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Control Output Devices",
    "officialRequirement": "CMMC 3.11.5: Implement control output devices controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of control output devices helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Control Output Devices:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with control output devices requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.11.5 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Control Output Devices in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Control Output Devices - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current control output devices implementation against CMMC 3.11.5 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing control output devices?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Control Output Devices requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.11.5"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "PE.3.11.6": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Monitor Physical Access",
    "officialRequirement": "CMMC 3.11.6: Implement monitor physical access controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of monitor physical access helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Monitor Physical Access:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with monitor physical access requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.11.6 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Monitor Physical Access in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Monitor Physical Access - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current monitor physical access implementation against CMMC 3.11.6 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing monitor physical access?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Monitor Physical Access requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.11.6"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "RA.3.12.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Conduct Periodic Risk Assessments",
    "officialRequirement": "CMMC 3.12.1: Implement conduct periodic risk assessments controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of conduct periodic risk assessments helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Conduct Periodic Risk Assessments:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with conduct periodic risk assessments requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.12.1 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Conduct Periodic Risk Assessments in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Conduct Periodic Risk Assessments - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current conduct periodic risk assessments implementation against CMMC 3.12.1 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing conduct periodic risk assessments?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Conduct Periodic Risk Assessments requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.12.1"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "RA.3.12.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Scan for Vulnerabilities",
    "officialRequirement": "CMMC 3.12.2: Implement scan for vulnerabilities controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of scan for vulnerabilities helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Scan for Vulnerabilities:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with scan for vulnerabilities requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.12.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Scan for Vulnerabilities in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Scan for Vulnerabilities - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current scan for vulnerabilities implementation against CMMC 3.12.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing scan for vulnerabilities?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Scan for Vulnerabilities requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.12.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "RA.3.12.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Remediate Vulnerabilities",
    "officialRequirement": "CMMC 3.12.3: Implement remediate vulnerabilities controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of remediate vulnerabilities helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Remediate Vulnerabilities:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with remediate vulnerabilities requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.12.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Remediate Vulnerabilities in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Remediate Vulnerabilities - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current remediate vulnerabilities implementation against CMMC 3.12.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing remediate vulnerabilities?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Remediate Vulnerabilities requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.12.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "RA.3.12.4": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Update Threat Information",
    "officialRequirement": "CMMC 3.12.4: Implement update threat information controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of update threat information helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Update Threat Information:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with update threat information requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.12.4 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Update Threat Information in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Update Threat Information - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current update threat information implementation against CMMC 3.12.4 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing update threat information?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Update Threat Information requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.12.4"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Monitor Communications at System Boundaries",
    "officialRequirement": "CMMC v2 "“ SC.L2-3.13.1: \"Monitor, control, and protect organizational communications (i.e., information transmitted or received by organizational systems) at the external boundaries and key internal boundaries of the systems.\"",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Communications monitoring prevents data exfiltration and detects advanced persistent threats.",
    "whyMatters": [
      "Network boundaries are the front lines of cyber defense - unmonitored traffic is invisible risk",
      "CMMC Level 2 requires comprehensive monitoring to detect unauthorized data movement and threats",
      "MVL's DoD contracts require evidence of communications security and threat detection capabilities",
      "Advanced threats often use encrypted channels - boundary monitoring catches what endpoint tools miss"
    ],
    "howMVLDoes": [
      "Zscaler ZPA â†’ zero-trust network access with full inspection of all traffic flows",
      "Azure Firewall â†’ next-generation firewall with threat intelligence and application control",
      "Microsoft Defender for Cloud Apps â†’ cloud access security broker (CASB) monitoring SaaS traffic",
      "Sentinel network analytics â†’ ML-powered detection of suspicious communication patterns"
    ],
    "implementationSteps": [
      {
        "step": 1,
        "title": "Network Architecture Review",
        "description": "Map all network boundaries, communication flows, and critical data paths across MVL environment"
      },
      {
        "step": 2,
        "title": "Zscaler ZPA Deployment",
        "description": "Configure zero-trust network access with comprehensive traffic inspection and logging"
      },
      {
        "step": 3,
        "title": "Azure Firewall Configuration",
        "description": "Deploy next-generation firewall rules with threat intelligence and application awareness"
      },
      {
        "step": 4,
        "title": "CASB Implementation",
        "description": "Configure Defender for Cloud Apps to monitor and control cloud service communications"
      },
      {
        "step": 5,
        "title": "Detection & Analytics",
        "description": "Implement Sentinel analytics rules for automated threat detection and response"
      },
      {
        "step": 6,
        "title": "Monitoring & Alerting",
        "description": "Establish 24/7 monitoring with automated alerts for suspicious communication patterns"
      }
    ],
    "quiz": [
      {
        "question": "Which MVL tool provides zero-trust network access with traffic inspection?",
        "options": [
          "Basic VPN",
          "Zscaler ZPA ✅",
          "Windows Firewall",
          "Antivirus software"
        ],
        "correct": "B"
      },
      {
        "question": "What does CASB stand for in MVL's security architecture?",
        "options": [
          "Cloud Access Security Broker ✅",
          "Centralized Application Security Board",
          "Computer Asset Security Baseline",
          "Critical Access Systems Backup"
        ],
        "correct": "A"
      },
      {
        "question": "True or False: Advanced threats often use encrypted channels that endpoint tools might miss.",
        "options": [
          "True ✅",
          "False"
        ],
        "correct": "A"
      },
      {
        "question": "Which tool provides ML-powered detection of suspicious communication patterns?",
        "options": [
          "Basic log analysis",
          "Manual network monitoring",
          "Sentinel network analytics ✅",
          "Simple packet capture"
        ],
        "correct": "C"
      },
      {
        "question": "Why is communications monitoring critical for MVL's DoD contracts?",
        "options": [
          "Reduces network costs",
          "Prevents data exfiltration and demonstrates threat detection capabilities ✅",
          "Improves internet speed",
          "Simplifies network management"
        ],
        "correct": "B"
      }
    ],
    "additionalResources": [
      "NIST SP 800-94 - Guide to Intrusion Detection and Prevention Systems",
      "CMMC Assessment Guide - System and Communications Protection Requirements",
      "Zscaler Zero Trust Architecture Best Practices for Government",
      "MVL Network Security Monitoring and Incident Response Procedures"
    ],
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Monitor Communications at System Boundaries:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with monitor communications at system boundaries requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.1 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Monitor Communications at System Boundaries in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Monitor Communications at System Boundaries - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current monitor communications at system boundaries implementation against CMMC 3.13.1 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing monitor communications at system boundaries?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Monitor Communications at System Boundaries requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.1"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Employ Architectural Designs",
    "officialRequirement": "CMMC 3.13.2: Implement employ architectural designs controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of employ architectural designs helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Employ Architectural Designs:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with employ architectural designs requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Employ Architectural Designs in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Employ Architectural Designs - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current employ architectural designs implementation against CMMC 3.13.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing employ architectural designs?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Employ Architectural Designs requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Separate User and Privileged Functions",
    "officialRequirement": "CMMC 3.13.3: Implement separate user and privileged functions controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of separate user and privileged functions helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Separate User and Privileged Functions:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with separate user and privileged functions requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Separate User and Privileged Functions in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Separate User and Privileged Functions - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current separate user and privileged functions implementation against CMMC 3.13.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing separate user and privileged functions?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Separate User and Privileged Functions requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.4": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Prevent Unauthorized Connections",
    "officialRequirement": "CMMC 3.13.4: Implement prevent unauthorized connections controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of prevent unauthorized connections helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Prevent Unauthorized Connections:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with prevent unauthorized connections requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.4 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Prevent Unauthorized Connections in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Prevent Unauthorized Connections - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current prevent unauthorized connections implementation against CMMC 3.13.4 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing prevent unauthorized connections?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Prevent Unauthorized Connections requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.4"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.5": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Implement Subnetworks for Components",
    "officialRequirement": "CMMC 3.13.5: Implement implement subnetworks for components controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of implement subnetworks for components helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Implement Subnetworks for Components:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with implement subnetworks for components requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.5 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Implement Subnetworks for Components in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Implement Subnetworks for Components - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current implement subnetworks for components implementation against CMMC 3.13.5 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing implement subnetworks for components?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Implement Subnetworks for Components requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.5"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.6": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Deny Network Communications Traffic",
    "officialRequirement": "CMMC 3.13.6: Implement deny network communications traffic controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of deny network communications traffic helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Deny Network Communications Traffic:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with deny network communications traffic requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.6 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Deny Network Communications Traffic in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Deny Network Communications Traffic - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current deny network communications traffic implementation against CMMC 3.13.6 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing deny network communications traffic?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Deny Network Communications Traffic requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.6"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.7": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Prevent Split Tunneling",
    "officialRequirement": "CMMC 3.13.7: Implement prevent split tunneling controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of prevent split tunneling helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Prevent Split Tunneling:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with prevent split tunneling requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.7 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Prevent Split Tunneling in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Prevent Split Tunneling - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current prevent split tunneling implementation against CMMC 3.13.7 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing prevent split tunneling?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Prevent Split Tunneling requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.7"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.8": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Implement Cryptographic Mechanisms",
    "officialRequirement": "CMMC 3.13.8: Implement implement cryptographic mechanisms controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of implement cryptographic mechanisms helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Implement Cryptographic Mechanisms:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with implement cryptographic mechanisms requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.8 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Implement Cryptographic Mechanisms in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Implement Cryptographic Mechanisms - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current implement cryptographic mechanisms implementation against CMMC 3.13.8 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing implement cryptographic mechanisms?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Implement Cryptographic Mechanisms requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.8"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.9": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Terminate Network Connections",
    "officialRequirement": "CMMC 3.13.9: Implement terminate network connections controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of terminate network connections helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Terminate Network Connections:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with terminate network connections requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.9 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Terminate Network Connections in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Terminate Network Connections - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current terminate network connections implementation against CMMC 3.13.9 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing terminate network connections?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Terminate Network Connections requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.9"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.10": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Establish Cryptographic Keys",
    "officialRequirement": "CMMC 3.13.10: Implement establish cryptographic keys controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of establish cryptographic keys helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Establish Cryptographic Keys:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with establish cryptographic keys requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.10 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Establish Cryptographic Keys in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Establish Cryptographic Keys - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current establish cryptographic keys implementation against CMMC 3.13.10 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing establish cryptographic keys?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Establish Cryptographic Keys requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.10"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.11": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Employ FIPS-Validated Cryptography",
    "officialRequirement": "CMMC 3.13.11: Implement employ fips-validated cryptography controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of employ fips-validated cryptography helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Employ FIPS-Validated Cryptography:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with employ fips-validated cryptography requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.11 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Employ FIPS-Validated Cryptography in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Employ FIPS-Validated Cryptography - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current employ fips-validated cryptography implementation against CMMC 3.13.11 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing employ fips-validated cryptography?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Employ FIPS-Validated Cryptography requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.11"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.12": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Prohibit Remote Activation",
    "officialRequirement": "CMMC 3.13.12: Implement prohibit remote activation controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of prohibit remote activation helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Prohibit Remote Activation:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with prohibit remote activation requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.12 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Prohibit Remote Activation in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Prohibit Remote Activation - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current prohibit remote activation implementation against CMMC 3.13.12 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing prohibit remote activation?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Prohibit Remote Activation requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.12"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.13": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Control Collaborative Computing",
    "officialRequirement": "CMMC 3.13.13: Implement control collaborative computing controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of control collaborative computing helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Control Collaborative Computing:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with control collaborative computing requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.13 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Control Collaborative Computing in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Control Collaborative Computing - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current control collaborative computing implementation against CMMC 3.13.13 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing control collaborative computing?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Control Collaborative Computing requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.13"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.14": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Control Public Key Infrastructure",
    "officialRequirement": "CMMC 3.13.14: Implement control public key infrastructure controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of control public key infrastructure helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Control Public Key Infrastructure:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with control public key infrastructure requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.14 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Control Public Key Infrastructure in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Control Public Key Infrastructure - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current control public key infrastructure implementation against CMMC 3.13.14 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing control public key infrastructure?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Control Public Key Infrastructure requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.14"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.15": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Use Session Authenticators",
    "officialRequirement": "CMMC 3.13.15: Implement use session authenticators controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of use session authenticators helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Use Session Authenticators:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with use session authenticators requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.15 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Use Session Authenticators in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Use Session Authenticators - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current use session authenticators implementation against CMMC 3.13.15 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing use session authenticators?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Use Session Authenticators requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.15"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SC.3.13.16": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Protect CUI Authenticity",
    "officialRequirement": "CMMC 3.13.16: Implement protect cui authenticity controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of protect cui authenticity helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Protect CUI Authenticity:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with protect cui authenticity requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.13.16 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Protect CUI Authenticity in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Protect CUI Authenticity - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current protect cui authenticity implementation against CMMC 3.13.16 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing protect cui authenticity?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Protect CUI Authenticity requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.13.16"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SI.3.14.1": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Identify System Flaws",
    "officialRequirement": "CMMC 3.14.1: Implement identify system flaws controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of identify system flaws helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Identify System Flaws:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with identify system flaws requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.14.1 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Identify System Flaws in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Identify System Flaws - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current identify system flaws implementation against CMMC 3.14.1 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing identify system flaws?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Identify System Flaws requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.14.1"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SI.3.14.2": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Provide Protection from Malicious Code",
    "officialRequirement": "CMMC 3.14.2: Implement provide protection from malicious code controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of provide protection from malicious code helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Provide Protection from Malicious Code:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with provide protection from malicious code requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.14.2 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Provide Protection from Malicious Code in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Provide Protection from Malicious Code - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current provide protection from malicious code implementation against CMMC 3.14.2 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing provide protection from malicious code?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Provide Protection from Malicious Code requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.14.2"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SI.3.14.3": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Monitor System Security Alerts",
    "officialRequirement": "CMMC 3.14.3: Implement monitor system security alerts controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of monitor system security alerts helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Monitor System Security Alerts:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with monitor system security alerts requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.14.3 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Monitor System Security Alerts in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Monitor System Security Alerts - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current monitor system security alerts implementation against CMMC 3.14.3 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing monitor system security alerts?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Monitor System Security Alerts requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.14.3"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SI.3.14.4": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Update Malicious Code Protection",
    "officialRequirement": "CMMC 3.14.4: Implement update malicious code protection controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of update malicious code protection helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Update Malicious Code Protection:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with update malicious code protection requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.14.4 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Update Malicious Code Protection in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Update Malicious Code Protection - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current update malicious code protection implementation against CMMC 3.14.4 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing update malicious code protection?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Update Malicious Code Protection requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.14.4"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SI.3.14.5": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Perform Periodic System Scans",
    "officialRequirement": "CMMC 3.14.5: Implement perform periodic system scans controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of perform periodic system scans helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Perform Periodic System Scans:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with perform periodic system scans requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.14.5 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Perform Periodic System Scans in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Perform Periodic System Scans - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current perform periodic system scans implementation against CMMC 3.14.5 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing perform periodic system scans?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Perform Periodic System Scans requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.14.5"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SI.3.14.6": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Monitor Information at System Boundaries",
    "officialRequirement": "CMMC 3.14.6: Implement monitor information at system boundaries controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of monitor information at system boundaries helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Monitor Information at System Boundaries:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with monitor information at system boundaries requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.14.6 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Monitor Information at System Boundaries in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Monitor Information at System Boundaries - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current monitor information at system boundaries implementation against CMMC 3.14.6 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing monitor information at system boundaries?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Monitor Information at System Boundaries requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.14.6"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  },
  "SI.3.14.7": {
    "status": "Complete",
    "readTime": "5 min read",
    "title": "Identify Unauthorized Use",
    "officialRequirement": "CMMC 3.14.7: Implement identify unauthorized use controls to protect Controlled Unclassified Information (CUI).",
    "why": "For MVL Group operating in our GCC High tenant, this control is critical for maintaining our SPRS score (83â†’90), ensuring CMMC Level 2 certification, and protecting our DoD contract eligibility. Proper implementation of identify unauthorized use helps prevent unauthorized access to CUI and maintains compliance with federal cybersecurity requirements.",
    "itPerspective": {
      "title": "IT Professional Implementation",
      "content": "Technical implementation for Identify Unauthorized Use:\n\n• **Microsoft 365/Azure Configuration**: Configure appropriate security policies in Microsoft 365 admin center and Azure AD\n• **Zscaler ZPA Integration**: Ensure access policies align with identify unauthorized use requirements  \n• **Intune Device Management**: Deploy compliance policies for endpoint protection\n• **Defender for Business**: Configure threat protection and monitoring capabilities\n• **Sentinel SIEM**: Set up logging and monitoring for compliance verification\n\n**Implementation Steps:**\n1. Review current configuration against CMMC 3.14.7 requirements\n2. Configure necessary security policies and controls\n3. Test implementation in development environment\n4. Deploy to production with proper change management\n5. Validate effectiveness through security testing\n6. Document configuration for compliance audits\n\n**Tools Used:** Azure AD, Microsoft 365 Admin Center, Intune, Defender for Business, Zscaler ZPA"
    },
    "employeePerspective": {
      "title": "What This Means for Employees",
      "content": "Understanding Identify Unauthorized Use in your daily work:\n\n**What You Need to Know:**\n• This security control helps protect sensitive government information (CUI)\n• Your daily workflows may include additional security steps\n• Following these procedures protects MVL and our government contracts\n\n**Your Responsibilities:**\n• Use your assigned MVL Surface device for work activities\n• Follow authentication prompts and security notifications\n• Report any unusual system behavior to IT immediately\n• Complete required security training modules\n\n**Getting Help:**\n• **IT Help Desk**: Submit ticket via ServiceNow portal\n• **Security Questions**: Contact @SajeshVS (CISO) in Teams\n• **Emergency**: Use #ðŸš¨-incidents channel for urgent issues\n• **General Support**: Email support@mvl-group.com\n\n**Remember:** These controls protect both MVL and our government clients' sensitive information."
    },
    "managementPerspective": {
      "title": "Business Impact & Risk Management",
      "content": "Identify Unauthorized Use - Strategic Business Value:\n\n**Compliance Impact:**\n• **CMMC Level 2 Requirement**: Essential for DoD contract eligibility\n• **SPRS Score**: Contributes to target score improvement (83â†’90)\n• **Audit Readiness**: Demonstrates due diligence in cybersecurity\n• **Risk Mitigation**: Reduces likelihood of data breaches and penalties\n\n**Business Metrics:**\n• **Contract Protection**: Maintains eligibility for $X million in DoD contracts\n• **Insurance Benefits**: May reduce cybersecurity insurance premiums\n• **Competitive Advantage**: CMMC certification differentiates MVL in marketplace\n• **Customer Confidence**: Demonstrates commitment to information security\n\n**Investment ROI:**\n• **Implementation Cost**: One-time configuration and training investment\n• **Ongoing Costs**: Minimal operational overhead with existing tools\n• **Risk Reduction**: Prevents potential $500K+ breach remediation costs\n• **Revenue Protection**: Ensures continued access to government contracts\n\n**Key Success Metrics:** Compliance audit scores, incident reduction, employee adoption rates"
    },
    "mvlTips": [
      "ðŸ¢ **MVL Context**: This control is implemented using our GCC High tenant and integrated security stack",
      "ðŸ”’ **Security Stack**: Leverages Zscaler ZPA, Defender for Business, and Intune for comprehensive protection",
      "ðŸ‘¥ **Team Coordination**: Work closely with @SajeshVS (CISO) for security-related questions",
      "ðŸ“‹ **Documentation**: All procedures documented in SharePoint security library",
      "ðŸŽ¯ **Compliance Goal**: Contributes to SPRS score improvement and CMMC Level 2 certification"
    ],
    "steps": [
      {
        "step": 1,
        "title": "Assessment",
        "description": "Evaluate current identify unauthorized use implementation against CMMC 3.14.7 requirements"
      },
      {
        "step": 2,
        "title": "Configuration",
        "description": "Configure security controls in Microsoft 365, Azure AD, and Zscaler ZPA as needed"
      },
      {
        "step": 3,
        "title": "Testing",
        "description": "Validate implementation through security testing and compliance verification"
      },
      {
        "step": 4,
        "title": "Documentation",
        "description": "Document configuration and procedures for audit readiness"
      },
      {
        "step": 5,
        "title": "Training",
        "description": "Ensure staff understand their responsibilities under this control"
      },
      {
        "step": 6,
        "title": "Monitoring",
        "description": "Establish ongoing monitoring and compliance verification processes"
      }
    ],
    "quiz": {
      "question": "Which MVL tool is primarily responsible for implementing identify unauthorized use?",
      "options": [
        "Microsoft 365 and Azure AD",
        "Zscaler ZPA",
        "Defender for Business",
        "All of the above working together"
      ],
      "correct": 3,
      "explanation": "Identify Unauthorized Use requires coordination across MVL's entire security stack. While each tool has specific roles, effective implementation requires Microsoft 365/Azure AD for identity management, Zscaler ZPA for access control, and Defender for Business for threat protection - all working together in our GCC High environment."
    },
    "resources": [
      {
        "title": "CMMC Model Overview",
        "url": "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20200203.pdf",
        "description": "Official CMMC documentation for control 3.14.7"
      },
      {
        "title": "NIST SP 800-171r3 Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html",
        "description": "Detailed implementation guidance for federal requirements"
      },
      {
        "title": "Microsoft 365 Security Documentation",
        "url": "https://docs.microsoft.com/en-us/microsoft-365/security/",
        "description": "Platform-specific security configuration guides"
      },
      {
        "title": "MVL Security Procedures",
        "url": "https://mvlgroup.sharepoint.com/sites/security",
        "description": "Internal MVL security policies and procedures"
      }
    ]
  }
};

// Course data for courses.html
const COURSES_DATA = [
    { id: "AC", title: "Access Control", icon: "lock-closed" },
    { id: "AT", title: "Awareness & Training", icon: "presentation-chart-bar" },
    { id: "AU", title: "Audit & Accountability", icon: "clipboard-document" },
    { id: "CM", title: "Configuration Management", icon: "cog-8-tooth" },
    { id: "IA", title: "Identification & Authentication", icon: "finger-print" },
    { id: "IR", title: "Incident Response", icon: "exclamation-triangle" },
    { id: "MA", title: "Maintenance", icon: "wrench-screwdriver" },
    { id: "MP", title: "Media Protection", icon: "document" },
    { id: "PS", title: "Personnel Security", icon: "users" },
    { id: "PE", title: "Physical Protection", icon: "building-office" },
    { id: "RA", title: "Risk Assessment", icon: "shield-check" },
    { id: "CA", title: "Security Assessment", icon: "magnifying-glass" },
    { id: "SC", title: "System & Comms Protection", icon: "wifi" },
    { id: "SI", title: "System & Info Integrity", icon: "bug-ant" }
];

// Organize lessons by course/domain for easy access
const CURRICULUM_DATA = {
    LESSONS: {}
};

// Group lessons by domain
Object.keys(LESSONS_DATA).forEach(lessonId => {
    const domain = lessonId.split('.')[0]; // Extract domain (e.g., 'AC' from 'AC.3.1.1')
    if (!CURRICULUM_DATA.LESSONS[domain]) {
        CURRICULUM_DATA.LESSONS[domain] = {};
    }
    CURRICULUM_DATA.LESSONS[domain][lessonId] = LESSONS_DATA[lessonId];
});

// Global exposure for legacy compatibility
if (typeof window !== 'undefined') {
    window.LESSONS_DATA = LESSONS_DATA;
    window.COURSES_DATA = COURSES_DATA;
    window.CURRICULUM_DATA = CURRICULUM_DATA;
}

// For module environments, uncomment these lines:
// export { LESSONS_DATA, COURSES_DATA, CURRICULUM_DATA };
// export default LESSONS_DATA;

