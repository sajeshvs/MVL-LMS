export const COURSES = [
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

export const LESSONS = {
  "AC": {    "3.1.1": {
      title: "Limit System Access to Authorized Users",
      text: "Limit system access to authorized users, processes acting on behalf of authorized users, and devices (including other systems).",
      why: "This is the foundational principle of cybersecurity - ensuring only the right people have access to the right systems at the right time. For MVL Group, this means protecting our GCC High tenant, client data, and critical business systems from unauthorized access. Every breach starts with unauthorized access, making this our first line of defense.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Configure Entra ID Conditional Access policies requiring device compliance + MFA for all GCC High access",
          "Deploy Zscaler Client Connector to block non-enrolled devices from accessing corporate resources",
          "Implement Azure AD Privileged Identity Management (PIM) for administrative access",
          "Set up automated device enrollment through Intune with compliance policies",
          "Configure Azure Sentinel for real-time access monitoring and anomaly detection",
          "Establish quarterly access reviews using Entra ID Access Reviews"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "You'll need to use your enrolled, company-managed device to access MVL systems",
          "Multi-factor authentication (MFA) is required - expect to verify your identity with your phone",
          "Personal devices cannot access company data or systems - this protects everyone",
          "If you work remotely, the VPN and security tools must be active",
          "Guest access is strictly limited - visitors get temporary, restricted accounts only",
          "Report any unusual access requests or login attempts immediately"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Reduces breach risk by 99.9% when properly implemented (Microsoft statistics)",
          "Ensures compliance with CMMC Level 2 requirements for DoD contracts",
          "Protects intellectual property and client confidential information",
          "Minimizes insider threat risks through principle of least privilege",
          "Enables audit trails for compliance and incident response",
          "Investment in access controls pays for itself through avoided breach costs"
        ]
      },
      mvlTips: [
        "Entra ID Conditional Access + Zscaler Client Connector blocks non-enrolled devices automatically",
        "Guest accounts are mapped to MVL-Guest security group with no access to CUI sites",
        "M365 GCC High enforces device compliance before granting access to any resources",
        "Use Intune compliance policies to ensure devices meet security standards",
        "Azure Sentinel provides real-time monitoring and automated response capabilities"
      ],
      steps: [
        "Define user roles in Entra ID (GCC) based on job functions and responsibilities",
        "Enable Conditional Access policies requiring compliant device + MFA for all users",
        "Deploy Intune device management and compliance policies across all corporate devices",
        "Audit device compliance monthly via Intune dashboard and Azure Sentinel reports",
        "Review access logs quarterly using Entra ID sign-in reports and remove inactive users",
        "Conduct annual access reviews to ensure principle of least privilege"
      ],
      quiz: {
        q: "Which combination of Azure tools best implements CMMC 3.1.1 access control requirements?",
        answers: [
          "Entra ID Conditional Access + Intune Device Compliance + Azure Sentinel monitoring",
          "Azure Firewall + Network Security Groups + VPN Gateway",
          "Multi-Factor Authentication + Password Policies + Account Lockout",
          "Azure AD Connect + Privileged Identity Management + Access Reviews"
        ],
        correctIndex: 0,
        explanation: "The correct answer combines identity-based access control (Conditional Access), device security (Intune), and monitoring (Sentinel) - the three pillars of Zero Trust security."
      },
      resources: [
        { label: "NIST SP 800-171A Assessment Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-171a/final" },
        { label: "Microsoft Zero-Trust Documentation", url: "https://learn.microsoft.com/en-us/security/zero-trust/" },
        { label: "CMMC 2.0 Level 2 Requirements", url: "https://www.acq.osd.mil/cmmc/" },
        { label: "Azure Conditional Access Best Practices", url: "https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/best-practices" }
      ]
    },
    "3.1.2": {
      title: "Limit System Access to Transaction Types",
      text: "Limit system access to the types of transactions and functions that authorized users are permitted to execute.",
      why: "Ensures users can only perform actions necessary for their role, reducing risk of accidental or malicious damage.",
      mvlTips: [
        "Role-based access control (RBAC) in M365 GCC limits SharePoint and Teams access.",
        "Acronis backup system has separate admin and user roles.",
        "Actimo training platform restricts content creation to HR team."
      ],
      steps: [
        "Map job functions to required system transactions.",
        "Configure RBAC policies in all connected systems.",
        "Implement approval workflows for sensitive operations.",
        "Monitor transaction logs for unauthorized attempts."
      ],
      quiz: {
        q: "What principle does requirement 3.1.2 primarily enforce?",
        answers: ["Least Privilege", "Defense in Depth", "Separation of Duties", "Need to Know"],
        correctIndex: 0
      },
      resources: [
        { label: "RBAC Best Practices", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" },
        { label: "Microsoft RBAC Documentation", url: "https://learn.microsoft.com/en-us/azure/role-based-access-control/" }
      ]
    },
    "3.1.3": {
      title: "Control CUI Flow",
      text: "Control the flow of CUI in accordance with approved authorizations.",
      why: "Ensures Controlled Unclassified Information only goes where it's supposed to go, maintaining data integrity and compliance.",
      mvlTips: [
        "Microsoft Purview DLP policies auto-classify and protect CUI in M365 GCC.",
        "Zscaler Cloud Firewall prevents unauthorized CUI transmission.",
        "Acronis backup encryption ensures CUI remains protected at rest."
      ],
      steps: [
        "Implement data classification labels for all CUI.",
        "Configure DLP policies to prevent unauthorized sharing.",
        "Set up email encryption for CUI communications.",
        "Monitor data flows using Microsoft Sentinel."
      ],
      quiz: {
        q: "Which tool is most effective for controlling CUI flow in M365?",
        answers: ["Microsoft Purview DLP", "Azure Firewall", "Entra ID", "SharePoint Permissions"],
        correctIndex: 0
      },
      resources: [
        { label: "CUI Marking Handbook", url: "https://www.archives.gov/cui/registry/category-marking-list" },
        { label: "Microsoft Purview DLP", url: "https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp" }
      ]
    }
  },
  "AT": {
    "3.2.1": {
      title: "Security Awareness Training",
      text: "Ensure that managers, system administrators, and users of organizational systems are made aware of the security risks associated with their activities and of the applicable policies, standards, and procedures related to the security of those systems.",
      why: "Human error is the leading cause of security incidents. Educated users are the first line of defense.",
      mvlTips: [
        "Actimo platform delivers monthly security awareness content to all staff.",
        "M365 GCC Attack Simulation Training tests phishing awareness.",
        "Quarterly security briefings cover current threat landscape."
      ],
      steps: [
        "Deploy security awareness training platform (Actimo).",
        "Create role-specific training modules for different job functions.",
        "Conduct monthly phishing simulations via M365.",
        "Track completion rates and quiz scores in dashboard."
      ],
      quiz: {
        q: "How often should security awareness training be conducted?",
        answers: ["Annually", "Quarterly", "Monthly", "Continuously"],
        correctIndex: 3
      },
      resources: [
        { label: "SANS Security Awareness", url: "https://www.sans.org/security-awareness-training/" },
        { label: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" }
      ]
    },
    "3.2.2": {
      title: "Insider Threat Awareness",
      text: "Ensure that personnel are trained to identify and report potential indicators of insider threat.",
      why: "Insider threats can cause significant damage. Early detection and reporting can prevent or minimize impact.",
      mvlTips: [
        "HR conducts annual insider threat briefings during onboarding.",
        "Microsoft Sentinel monitors for unusual user behavior patterns.",
        "Anonymous reporting system available through company intranet."
      ],
      steps: [
        "Develop insider threat indicator training materials.",
        "Implement behavioral analytics monitoring.",
        "Create clear reporting procedures for suspicious activity.",
        "Conduct regular case study reviews with staff."
      ],
      quiz: {
        q: "Which is NOT typically an insider threat indicator?",
        answers: ["Working unusual hours", "Accessing files outside normal duties", "Using approved software", "Downloading large amounts of data"],
        correctIndex: 2
      },
      resources: [
        { label: "CISA Insider Threat Mitigation", url: "https://www.cisa.gov/topics/physical-security/insider-threat-mitigation" },
        { label: "Microsoft Insider Risk Management", url: "https://learn.microsoft.com/en-us/purview/insider-risk-management" }
      ]
    },
    "3.2.3": {
      title: "Third-Party Security Training",
      text: "Provide security awareness training on recognizing and reporting potential indicators of insider threat.",
      why: "Third-party personnel need to understand their security responsibilities and how to identify threats.",
      mvlTips: [
        "Contractor onboarding includes mandatory security training via Actimo.",
        "Vendor security requirements documented in all service agreements.",
        "Regular security posture reviews conducted with key suppliers."
      ],
      steps: [
        "Develop third-party security training curriculum.",
        "Include security clauses in all vendor contracts.",
        "Conduct security assessments of critical suppliers.",
        "Monitor third-party access through privileged access management."
      ],
      quiz: {
        q: "Third-party security training should be provided:",
        answers: ["Only to IT vendors", "To all external personnel with system access", "Only during initial onboarding", "Only to contractors, not vendors"],
        correctIndex: 1
      },
      resources: [
        { label: "Third-Party Risk Management", url: "https://www.cisa.gov/sites/default/files/publications/Third-Party_Risk_Management_Practices_508.pdf" },
        { label: "Vendor Security Assessment", url: "https://www.sans.org/white-papers/third-party-security/" }
      ]
    }
  },
  "AU": {
    "3.3.1": {
      title: "Audit Event Creation",
      text: "Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity.",
      why: "Audit logs provide the evidence needed to detect security incidents and support forensic investigations.",
      mvlTips: [
        "Microsoft Sentinel aggregates logs from all M365 GCC services and Zscaler.",
        "Acronis backup system maintains separate audit trail for data protection events.",
        "Log retention set to 2 years minimum per MVL policy."
      ],
      steps: [
        "Enable comprehensive logging across all systems.",
        "Configure centralized log collection in Sentinel.",
        "Set appropriate log retention periods.",
        "Implement automated log analysis and alerting."
      ],
      quiz: {
        q: "What is the primary purpose of audit logs?",
        answers: ["System performance monitoring", "Security incident detection and investigation", "User productivity tracking", "Software license compliance"],
        correctIndex: 1
      },
      resources: [
        { label: "NIST SP 800-92 Log Management", url: "https://csrc.nist.gov/publications/detail/sp/800-92/final" },
        { label: "Microsoft Sentinel Documentation", url: "https://learn.microsoft.com/en-us/azure/sentinel/" }
      ]
    },
    "3.3.2": {
      title: "Audit Log Review",
      text: "Ensure that the actions of individual system users can be uniquely traced to those users so they can be held accountable for their actions.",
      why: "Individual accountability is essential for maintaining security and deterring unauthorized activities.",
      mvlTips: [
        "Azure AD audit logs track all user authentication and authorization events.",
        "SharePoint audit logs capture document access and modification.",
        "Email audit logs in Exchange Online track message routing and access."
      ],
      steps: [
        "Configure unique user identification for all systems.",
        "Enable detailed user activity logging.",
        "Implement log correlation across multiple systems.",
        "Regular review of user activity reports."
      ],
      quiz: {
        q: "For proper accountability, audit logs must include:",
        answers: ["Timestamp only", "User ID only", "User ID, timestamp, and action performed", "System name only"],
        correctIndex: 2
      },
      resources: [
        { label: "Audit and Accountability Controls", url: "https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search#!/control?version=5.1&number=AU" },
        { label: "Azure AD Audit Logs", url: "https://learn.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-audit-logs" }
      ]
    }
  },
  "CM": {
    "3.4.1": {
      title: "Baseline Configuration",
      text: "Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation) throughout the respective system development life cycles.",
      why: "Baseline configurations provide a known-good state for systems and enable detection of unauthorized changes.",
      mvlTips: [
        "Microsoft Intune manages device configuration baselines for all endpoints.",
        "Azure Policy enforces infrastructure configuration standards.",
        "Configuration Management Database (CMDB) tracks all IT assets."
      ],
      steps: [
        "Document approved baseline configurations for all system types.",
        "Deploy configuration management tools (Intune, Azure Policy).",
        "Maintain current inventory of all hardware and software assets.",
        "Regular compliance scanning against established baselines."
      ],
      quiz: {
        q: "A baseline configuration should be:",
        answers: ["Changed frequently", "Documented and version controlled", "Applied only to servers", "Kept secret for security"],
        correctIndex: 1
      },
      resources: [
        { label: "NIST SP 800-128 Security Configuration", url: "https://csrc.nist.gov/publications/detail/sp/800-128/final" },
        { label: "Microsoft Intune Configuration", url: "https://learn.microsoft.com/en-us/mem/intune/configuration/" }
      ]
    },
    "3.4.2": {
      title: "Configuration Change Control",
      text: "Establish and enforce security configuration settings for information technology products employed in organizational systems.",
      why: "Proper configuration is critical for security. Default settings are often insecure and must be hardened.",
      mvlTips: [
        "Security baselines applied through Group Policy and Intune.",
        "Azure Security Center provides configuration recommendations.",
        "All changes require approval through ServiceNow change management."
      ],
      steps: [
        "Implement security configuration baselines for all platforms.",
        "Use automated tools to enforce configuration settings.",
        "Establish change control process for configuration modifications.",
        "Regular configuration compliance assessments."
      ],
      quiz: {
        q: "Security configuration settings should be:",
        answers: ["Left at vendor defaults", "Based on organizational security requirements", "Changed monthly", "Applied only to critical systems"],
        correctIndex: 1
      },
      resources: [
        { label: "CIS Controls", url: "https://www.cisecurity.org/controls" },
        { label: "Azure Security Baselines", url: "https://learn.microsoft.com/en-us/security/benchmark/azure/" }
      ]
    }
  },
  "IA": {
    "3.5.1": {
      title: "User Identification and Authentication",
      text: "Identify system users, processes acting on behalf of users, and devices.",
      why: "Proper identification is the foundation of all access control and accountability measures.",
      mvlTips: [
        "Azure AD provides centralized identity management for all users and devices.",
        "Certificate-based authentication used for high-privilege accounts.",
        "Device certificates managed through Intune for corporate devices."
      ],
      steps: [
        "Implement unique identifiers for all users and devices.",
        "Deploy centralized identity management system.",
        "Configure strong authentication mechanisms.",
        "Regular review and cleanup of unused accounts."
      ],
      quiz: {
        q: "Which authentication factor is considered 'something you are'?",
        answers: ["Password", "Smart card", "Biometric", "Security token"],
        correctIndex: 2
      },
      resources: [
        { label: "NIST Digital Identity Guidelines", url: "https://pages.nist.gov/800-63-3/" },
        { label: "Azure AD Identity", url: "https://learn.microsoft.com/en-us/azure/active-directory/" }
      ]
    },
    "3.5.2": {
      title: "Multi-Factor Authentication",
      text: "Authenticate (or verify) the identities of users, processes, or devices, as a prerequisite to allowing access to organizational systems.",
      why: "Authentication verifies that users are who they claim to be before granting access to systems.",
      mvlTips: [
        "Azure MFA required for all user accounts accessing M365 GCC.",
        "Passwordless authentication using Windows Hello for Business.",
        "SMS backup authentication for users without smartphones."
      ],
      steps: [
        "Enable multi-factor authentication for all user accounts.",
        "Deploy multiple authentication methods for redundancy.",
        "Configure conditional access policies requiring MFA.",
        "Monitor authentication logs for suspicious activity."
      ],
      quiz: {
        q: "Multi-factor authentication requires at least:",
        answers: ["One authentication factor", "Two different types of authentication factors", "Three authentication factors", "Biometric authentication"],
        correctIndex: 1
      },
      resources: [
        { label: "Azure Multi-Factor Authentication", url: "https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks" },
        { label: "MFA Best Practices", url: "https://www.cisa.gov/sites/default/files/publications/Multi-Factor_Authentication_Best_Practices.pdf" }
      ]
    }
  },  "IR": {
    "3.6.1": {
      title: "Incident Response Capability",
      text: "Establish an operational incident response capability for organizational systems that includes preparation, detection, analysis, containment, recovery, and user response activities.",
      why: "Rapid incident response minimizes damage and recovery time when security incidents occur. For MVL Group, quick containment of security incidents protects our GCC High environment, client data, and maintains operational continuity. A well-prepared incident response capability can mean the difference between a minor incident and a catastrophic breach.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Sentinel SOAR (Security Orchestration, Automation, and Response) for automated incident response",
          "Configure Azure Security Center alerts to trigger incident response playbooks automatically",
          "Implement Microsoft Defender for Cloud Apps to detect and respond to cloud-based threats",
          "Set up automated containment actions like user account disabling and device isolation",
          "Configure backup and recovery automation through Acronis Cyber Backup Cloud",
          "Establish secure communication channels for incident response team coordination"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees", 
        content: [
          "If you notice anything suspicious, report it immediately using the IT help desk or security hotline",
          "During an incident, you may receive instructions to change passwords or avoid certain systems",
          "Your computer might be temporarily isolated from the network as a precautionary measure",
          "Follow all instructions from the incident response team - don't try to 'fix' things yourself",
          "Be prepared to provide details about what you were doing when the incident occurred",
          "Continue business operations using approved alternate methods when primary systems are affected"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Fast incident response reduces average breach cost from $4.45M to $3.05M (IBM 2023 study)",
          "Maintains client confidence and contract compliance during security events",
          "Protects company reputation and reduces legal liability exposure",
          "Ensures business continuity and minimizes operational downtime",
          "Supports cyber insurance requirements and may reduce premiums",
          "Demonstrates due diligence to regulators and auditors"
        ]
      },
      mvlTips: [
        "Microsoft Sentinel provides SOAR capabilities with pre-built playbooks for common incident types",
        "Incident response team includes IT, Legal, HR, and Communications personnel with defined roles",
        "Backup and recovery procedures tested monthly using Acronis with documented recovery times",
        "Emergency communication plan includes secure channels and contact escalation procedures",
        "All incidents logged in ServiceNow with automated notification to required stakeholders"
      ],
      steps: [
        "Develop comprehensive incident response plan covering preparation, detection, analysis, containment, eradication, recovery, and lessons learned",
        "Train incident response team on roles, responsibilities, and response procedures quarterly",
        "Implement automated detection and response capabilities using Microsoft Sentinel and Security Center",
        "Conduct regular incident response exercises and tabletop scenarios to test readiness",
        "Establish communication procedures and secure channels for incident coordination",
        "Document all incidents and conduct post-incident reviews to improve response capabilities"
      ],
      quiz: {
        q: "What is the correct order of incident response phases according to NIST guidelines?",
        answers: [
          "Detection, Preparation, Analysis, Containment, Recovery, Post-incident",
          "Preparation, Detection & Analysis, Containment & Eradication & Recovery, Post-incident Activity",
          "Analysis, Containment, Detection, Recovery, Preparation, Review",
          "Containment, Detection, Preparation, Analysis, Recovery, Documentation"
        ],
        correctIndex: 1,
        explanation: "NIST SP 800-61 defines four main phases: Preparation, Detection & Analysis, Containment & Eradication & Recovery, and Post-incident Activity. Preparation must come first to ensure readiness."
      },
      resources: [
        { label: "NIST SP 800-61 Rev 2 Computer Security Incident Handling Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final" },
        { label: "Microsoft Incident Response Reference Guide", url: "https://learn.microsoft.com/en-us/security/operations/incident-response-overview" },
        { label: "Azure Security Center Incident Response", url: "https://learn.microsoft.com/en-us/azure/security-center/security-center-incident-response" },
        { label: "CMMC 2.0 Incident Response Requirements", url: "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20211202_508.pdf" }
      ]
    },
    "3.6.2": {
      title: "Incident Tracking and Documentation",
      text: "Track, document, and report incidents to designated officials and/or authorities both internal and external to the organization.",
      why: "Proper incident documentation provides accountability, enables lessons learned, supports legal requirements, and helps improve security posture. For MVL Group, detailed incident tracking ensures CMMC compliance, supports DoD reporting requirements, and protects against future similar incidents.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Configure ServiceNow Security Incident Response module for comprehensive incident tracking",
          "Set up automated incident creation from Microsoft Sentinel alerts and detections",
          "Implement timeline reconstruction using Azure Monitor and Log Analytics queries",
          "Configure automated reporting to CISA, FBI IC3, and other required authorities",
          "Deploy Microsoft Sentinel workbooks for incident reporting and metrics dashboards",
          "Integrate incident data with threat intelligence platforms for attribution analysis"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Any security incident you report will be tracked with a unique ticket number",
          "You may be asked to provide additional details or documentation during investigation",
          "Incident reports are confidential and used only for security improvement purposes",
          "Your cooperation in incident investigation helps protect everyone at MVL",
          "Some incidents may require legal holds on emails or documents - follow all preservation instructions",
          "Lessons learned from incidents will be shared through security awareness training"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proper documentation supports cyber insurance claims and regulatory compliance",
          "Incident trends analysis helps prioritize security investments and resource allocation",
          "External reporting requirements include DoD, CISA, and potentially FBI depending on incident type",
          "Documentation protects against legal liability and supports breach notification requirements",
          "Metrics and reporting demonstrate security program effectiveness to stakeholders",
          "Lessons learned drive continuous improvement in security posture and controls"
        ]
      },
      mvlTips: [
        "ServiceNow automatically generates incident reports in required DoD and CISA formats",
        "Microsoft Sentinel incident timeline includes all related alerts, entities, and evidence",
        "Legal team reviews all incidents involving CUI or potential data exposure",
        "Executive dashboard provides real-time incident metrics and status updates",
        "Quarterly incident trend reports submitted to leadership and board of directors"
      ],
      steps: [
        "Implement centralized incident tracking system (ServiceNow) with appropriate workflow and approvals",
        "Configure automated incident documentation from security tools and monitoring systems",
        "Establish reporting procedures for various incident types to internal and external stakeholders",
        "Train staff on incident reporting requirements and documentation standards",
        "Develop incident classification and severity rating system aligned with business impact",
        "Create regular incident reporting and metrics dashboards for management visibility"
      ],
      quiz: {
        q: "According to CMMC requirements, incidents involving CUI must be reported to DoD within what timeframe?",
        answers: [
          "24 hours",
          "72 hours", 
          "7 days",
          "30 days"
        ],
        correctIndex: 1,
        explanation: "DFARS 252.204-7012 requires reporting of cyber incidents affecting CUI within 72 hours to DoD at https://dibnet.dod.mil. This is a critical compliance requirement for CMMC."
      },
      resources: [
        { label: "DFARS 252.204-7012 Cyber Incident Reporting", url: "https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting" },
        { label: "CISA Incident Reporting Guidelines", url: "https://www.cisa.gov/report" },
        { label: "NIST Incident Response Lifecycle", url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final" },
        { label: "DoD Cyber Crime Center Reporting", url: "https://www.dc3.mil/" }
      ]
    }
  },
  "MA": {
    "3.7.1": {
      title: "System Maintenance Policy",
      text: "Perform maintenance on organizational systems and provide effective controls on the tools, techniques, mechanisms, and personnel used to conduct system maintenance.",
      why: "Maintenance activities can introduce vulnerabilities if not properly controlled. For MVL Group, maintenance of our GCC High environment, network infrastructure, and security tools must be conducted securely to prevent unauthorized access or system compromise during vulnerable states.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Implement Microsoft System Center Configuration Manager (SCCM) for automated patch deployment and maintenance scheduling",
          "Deploy Azure Arc to manage hybrid infrastructure maintenance across cloud and on-premises systems",
          "Configure Microsoft Intune for mobile device maintenance and policy enforcement",
          "Set up Azure Update Management for coordinated patching across all Azure resources",
          "Implement privileged access workstations (PAWs) for administrative maintenance activities",
          "Configure maintenance windows in Azure Sentinel to prevent false alerts during scheduled activities"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Scheduled maintenance may temporarily limit access to certain systems - check announcements",
          "Your devices may automatically restart during maintenance windows (typically after hours)",
          "Report any unusual system behavior following maintenance activities immediately",
          "Don't attempt to bypass maintenance controls or install unauthorized maintenance tools",
          "Emergency maintenance may occasionally occur during business hours with advance notice",
          "Maintenance activities are logged and monitored - suspicious activity will be investigated"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Controlled maintenance reduces security vulnerabilities while maintaining system availability",
          "Proper maintenance controls prevent insider threats and unauthorized system access",
          "Automated maintenance reduces human error and ensures consistent security policy application",
          "Maintenance documentation supports compliance audits and security assessments",
          "Planned maintenance windows minimize business disruption compared to emergency repairs",
          "Investment in maintenance automation pays dividends in reduced security incidents and downtime"
        ]
      },
      mvlTips: [
        "All maintenance personnel must use privileged access management (PAM) solutions for system access",
        "Maintenance tools are deployed through Intune with application control and logging enabled",
        "Azure Monitor tracks all maintenance activities with automated anomaly detection",
        "Third-party maintenance requires pre-approved tools and supervised access sessions",
        "Emergency maintenance procedures include accelerated approval workflow and enhanced monitoring"
      ],
      steps: [
        "Develop comprehensive system maintenance policy covering tools, personnel, and procedures",
        "Implement automated maintenance scheduling and patch management systems",
        "Deploy privileged access management for all maintenance activities",
        "Establish maintenance windows and change control procedures to minimize business impact",
        "Configure logging and monitoring of all maintenance activities and access",
        "Conduct regular audits of maintenance procedures and tool effectiveness"
      ],
      quiz: {
        q: "Which Azure service provides centralized patch management and maintenance scheduling across hybrid environments?",
        answers: [
          "Azure Security Center",
          "Azure Update Management", 
          "Azure Monitor",
          "Azure Policy"
        ],
        correctIndex: 1,
        explanation: "Azure Update Management provides centralized patch management for Windows and Linux machines across on-premises, Azure, and other cloud environments, with scheduling and reporting capabilities."
      },
      resources: [
        { label: "Azure Update Management Documentation", url: "https://learn.microsoft.com/en-us/azure/automation/update-management/overview" },
        { label: "NIST SP 800-128 Guide for Security Configuration Management", url: "https://csrc.nist.gov/publications/detail/sp/800-128/final" },
        { label: "Microsoft SCCM Best Practices", url: "https://learn.microsoft.com/en-us/mem/configmgr/core/plan-design/hierarchy/fundamental-concepts-for-content-management" },
        { label: "Privileged Access Workstations", url: "https://learn.microsoft.com/en-us/security/compass/privileged-access-devices" }
      ]
    },
    "3.7.2": {
      title: "Maintenance Personnel Controls",
      text: "Ensure equipment removed for off-site maintenance is sanitized of any CUI.",
      why: "Equipment containing CUI must be properly sanitized before off-site maintenance to prevent data exposure. For MVL Group, this includes laptops, mobile devices, servers, and network equipment that may contain defense contractor information.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Implement Microsoft BitLocker with TPM 2.0 for full disk encryption on all devices",
          "Deploy Azure Information Protection to classify and encrypt CUI at rest and in transit",
          "Configure Windows Autopilot for secure device reprovisioning after maintenance",
          "Use Microsoft Intune remote wipe capabilities for devices going off-site",
          "Implement NIST SP 800-88 compliant data sanitization procedures and tools",
          "Configure Azure Sentinel to monitor and alert on device encryption and wipe activities"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your device data will be backed up before any off-site maintenance or repair",
          "Devices may be completely wiped and restored rather than sent out for maintenance",
          "Never attempt to send company devices for personal repairs - use IT department procedures",
          "Report lost or stolen devices immediately so remote wipe can be activated",
          "Some repairs may take longer due to security sanitization requirements",
          "Personal data on company devices may be lost during sanitization - use approved cloud storage"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proper sanitization prevents CUI exposure and maintains CMMC compliance during maintenance",
          "Data protection reduces risk of intellectual property theft and competitive disadvantage",
          "Automated encryption and remote wipe capabilities minimize manual intervention and errors",
          "Investment in internal repair capabilities reduces need for off-site maintenance",
          "Documentation of sanitization procedures supports audit and compliance requirements",
          "Incident response procedures include immediate device isolation and sanitization when compromised"
        ]
      },
      mvlTips: [
        "All MVL devices include hardware-based encryption (TPM 2.0) that makes data recovery extremely difficult",
        "Intune policies prevent device enrollment without proper encryption and compliance settings",
        "ServiceNow tracks all device maintenance activities with approval workflow and sanitization verification",
        "Preferred vendors have signed agreements and demonstrated NIST SP 800-88 sanitization capabilities",
        "Emergency remote wipe can be triggered through Microsoft 365 admin center or Intune portal"
      ],
      steps: [
        "Implement comprehensive device encryption using BitLocker or equivalent full-disk encryption",
        "Develop sanitization procedures compliant with NIST SP 800-88 guidelines for different media types",
        "Deploy mobile device management with remote wipe and encryption enforcement capabilities",
        "Establish approved vendor relationships for maintenance requiring off-site equipment handling",
        "Create device tracking and chain of custody procedures for all off-site maintenance activities",
        "Train personnel on proper sanitization verification and documentation requirements"
      ],
      quiz: {
        q: "According to NIST SP 800-88, what is the most secure method for sanitizing SSDs containing CUI?",
        answers: [
          "File deletion and recycle bin emptying",
          "Disk formatting with overwrite",
          "Cryptographic erase or physical destruction",
          "Software-based overwriting with random data"
        ],
        correctIndex: 2,
        explanation: "For SSDs, cryptographic erase (if available) or physical destruction are the most reliable sanitization methods due to wear leveling and over-provisioning that can leave data remnants after traditional overwriting."
      },
      resources: [
        { label: "NIST SP 800-88 Rev 1 Guidelines for Media Sanitization", url: "https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final" },
        { label: "Microsoft BitLocker Documentation", url: "https://learn.microsoft.com/en-us/windows/security/information-protection/bitlocker/" },
        { label: "Azure Information Protection", url: "https://learn.microsoft.com/en-us/azure/information-protection/" },
        { label: "Intune Device Compliance", url: "https://learn.microsoft.com/en-us/mem/intune/protect/device-compliance-get-started" }
      ]
    }
  },
  "MP": {
    "3.8.1": {
      title: "Media Protection Policy",
      text: "Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital.",
      why: "Physical media containing CUI must be protected to prevent unauthorized access or disclosure. For MVL Group, this includes backup tapes, USB drives, printed documents, and any removable media that might contain defense contractor information.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Purview Data Loss Prevention (DLP) to prevent unauthorized copying to removable media",
          "Configure Windows Defender Application Control to block unauthorized USB devices and media", 
          "Implement Azure Information Protection labels for automatic media classification and encryption",
          "Set up Intune device compliance policies to control removable media access",
          "Deploy physical security controls including locked storage for backup media and documents",
          "Configure audit logging for all removable media usage and physical media access"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "USB drives and external storage devices are restricted or blocked on company computers",
          "Printing of sensitive documents requires authentication and is tracked",
          "Physical documents containing sensitive information must be stored in locked cabinets",
          "Don't leave printed materials unattended at printers or on desks",
          "Personal mobile devices cannot be used to store or transfer company data",
          "Report any lost or stolen media containing company information immediately"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Media protection prevents data breaches through physical theft or loss of devices",
          "Controls reduce insider threat risks by limiting unauthorized data exfiltration methods",
          "Automated DLP policies enforce consistent protection without relying on user behavior",
          "Physical security controls protect against both internal and external threats",
          "Investment in media protection is significantly less than potential breach costs",
          "Compliance with media protection requirements maintains CMMC certification and contract eligibility"
        ]
      },
      mvlTips: [
        "Microsoft Purview DLP automatically blocks copying CUI to unauthorized removable media",
        "Intune Application Protection Policies prevent data transfer to personal cloud storage",
        "Physical media storage areas have access logging and are monitored by security cameras",
        "Secure print release requires badge authentication to prevent document exposure",
        "Emergency media destruction procedures available for suspected compromise situations"
      ],
      steps: [
        "Implement data loss prevention policies to control copying sensitive data to removable media",
        "Deploy endpoint protection to block unauthorized USB devices and removable storage",
        "Establish physical security controls for media storage including locks, access logs, and environmental controls",
        "Configure printing controls requiring authentication and providing audit trails",
        "Develop media handling procedures covering labeling, storage, transportation, and disposal",
        "Train personnel on proper media protection procedures and security awareness"
      ],
      quiz: {
        q: "Which Microsoft tool can automatically prevent users from copying CUI to unauthorized USB drives?",
        answers: [
          "Windows Defender Antivirus",
          "Microsoft Purview Data Loss Prevention",
          "Azure Active Directory",
          "Microsoft Intune Compliance Policies"
        ],
        correctIndex: 1,
        explanation: "Microsoft Purview DLP can detect CUI based on content classification and automatically block copying to removable media or unauthorized locations, providing automated policy enforcement."
      },
      resources: [
        { label: "Microsoft Purview Data Loss Prevention", url: "https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp" },
        { label: "NIST SP 800-88 Media Sanitization Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final" },
        { label: "Windows Defender Application Control", url: "https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/" },
        { label: "Physical Security Controls Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-116/final" }
      ]
    },
    "3.8.2": {
      title: "Media Access Controls",  
      text: "Limit access to CUI on system media to authorized users.",
      why: "Access to media containing CUI must be restricted to authorized personnel only. For MVL Group, this ensures only employees with proper clearance and need-to-know access CUI stored on backup tapes, archived media, or other storage devices.",
      itPerspective: {
        title: "IT Professional Implementation", 
        content: [
          "Configure Azure Rights Management Services (RMS) to encrypt and control access to documents on all media",
          "Deploy Microsoft Purview sensitivity labels with access controls for different classification levels",
          "Implement certificate-based encryption for backup media using Windows EFS or BitLocker",
          "Set up role-based access control (RBAC) in backup systems to limit media access by job function",
          "Configure audit logging for all media access attempts and successful authentications",
          "Deploy privileged access management (PAM) for administrative access to backup and archive systems"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "You can only access media and documents relevant to your job responsibilities",
          "Encrypted media requires your credentials and appropriate clearance level to access",
          "Attempting to access unauthorized media will be logged and investigated",
          "Some archived documents may require manager approval before access is granted",
          "Personal devices cannot open company-encrypted media or documents",
          "Report any media you find that appears to contain sensitive information to IT security"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Access controls prevent unauthorized disclosure of CUI and protect competitive advantages",
          "Role-based access reduces insider threat risks and ensures need-to-know principles",
          "Automated access controls scale better than manual processes and reduce human error",
          "Audit trails support compliance investigations and security incident response",
          "Encryption ensures data protection even if physical media is lost or stolen",
          "Granular access controls enable secure collaboration while maintaining data protection"
        ]
      },
      mvlTips: [
        "Microsoft Purview automatically applies access controls based on sensitivity labels and user roles",
        "Azure Rights Management allows document access control even after sharing externally",
        "Backup media encryption keys stored in Azure Key Vault with hardware security module protection",
        "ServiceNow workflow routes media access requests through appropriate approval chains",
        "Emergency access procedures available for critical business continuity situations"
      ],
      steps: [
        "Implement role-based access control for all systems storing or accessing CUI media", 
        "Deploy document and media encryption with centralized key management",
        "Configure sensitivity labels and automatic classification for different types of CUI",
        "Establish approval workflows for accessing archived or restricted media",
        "Set up comprehensive audit logging for all media access activities",
        "Train users on proper media access procedures and their responsibilities for protecting CUI"
      ],
      quiz: {
        q: "What principle should guide access to CUI stored on system media?",
        answers: [
          "All employees should have access for transparency",
          "Need-to-know basis with role-based restrictions",
          "Only senior management should have access",
          "Access should be granted upon request"
        ],
        correctIndex: 1,
        explanation: "Need-to-know principle combined with role-based access control ensures that only authorized personnel with legitimate business requirements can access CUI, minimizing exposure risk."
      },
      resources: [
        { label: "Microsoft Purview Information Protection", url: "https://learn.microsoft.com/en-us/purview/information-protection" },
        { label: "Azure Rights Management Services", url: "https://learn.microsoft.com/en-us/azure/information-protection/what-is-azure-rms" },
        { label: "CUI Marking and Handling Guide", url: "https://www.archives.gov/cui/registry/category-marking-list" },
        { label: "Role-Based Access Control Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" }
      ]
    },
    "3.8.3": {
      title: "Media Sanitization",
      text: "Sanitize or destroy system media containing CUI before disposal or release for reuse.",
      why: "Improper disposal of media containing CUI can lead to data breaches long after the media is discarded. For MVL Group, proper sanitization ensures that decommissioned hardware, backup tapes, and other media cannot be used to recover sensitive defense contractor information.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Implement automated BitLocker encryption with secure key destruction for end-of-life devices",
          "Deploy NIST SP 800-88 compliant sanitization tools and procedures for different media types",
          "Configure Microsoft Purview to track and verify sanitization of devices containing classified data",
          "Establish relationships with certified media destruction vendors for high-security sanitization",
          "Implement chain of custody procedures for media requiring off-site destruction",
          "Configure Azure Monitor to log and alert on media sanitization activities and compliance"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Don't attempt to dispose of company devices yourself - use IT asset disposal procedures", 
          "Old laptops and phones will be professionally sanitized before disposal or reuse",
          "USB drives and other media used for work must be returned to IT for proper sanitization",
          "Some devices may be physically destroyed rather than sanitized if they contained highly sensitive data",
          "Personal data on company devices may be permanently lost during sanitization process",
          "Certificate of destruction will be provided for devices containing highly sensitive information"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proper sanitization prevents data breaches from discarded media and protects company reputation",
          "Certified destruction procedures provide legal protection against data exposure claims",
          "Investment in professional sanitization services is minimal compared to potential breach costs",
          "Documentation of sanitization supports compliance audits and regulatory requirements",
          "Secure media disposal enables safe hardware refresh cycles and technology upgrades",
          "Environmental benefits from proper e-waste disposal align with corporate sustainability goals"
        ]
      },
      mvlTips: [
        "All MVL devices use hardware-based encryption making data recovery extremely difficult even without sanitization",
        "Certified destruction vendor provides certificates of destruction with serial numbers and methods used",
        "Emergency sanitization procedures available for potentially compromised devices",
        "Asset management system tracks sanitization status and disposal documentation for all devices",
        "Physical destruction preferred over software sanitization for devices containing highly classified CUI"
      ],
      steps: [
        "Develop media sanitization procedures compliant with NIST SP 800-88 for different media types and sensitivity levels",
        "Implement automated encryption with secure key destruction capabilities for routine sanitization",
        "Establish relationships with certified media destruction vendors for high-security requirements",
        "Deploy asset tracking to ensure all media containing CUI is properly sanitized before disposal",
        "Train personnel on proper media identification, handling, and sanitization request procedures",
        "Maintain documentation and certificates of destruction for all sanitized media containing CUI"
      ],
      quiz: {
        q: "For solid-state drives (SSDs) containing CUI, what sanitization method provides the highest security assurance?",
        answers: [
          "File deletion and recycle bin emptying",
          "Software overwriting with multiple passes",
          "Cryptographic erase followed by physical destruction",
          "Disk formatting with quick format option"
        ],
        correctIndex: 2,
        explanation: "SSDs use wear leveling that can leave data remnants after software overwriting. Cryptographic erase (if available) followed by physical destruction provides the highest assurance for CUI protection."
      },
      resources: [
        { label: "NIST SP 800-88 Rev 1 Guidelines for Media Sanitization", url: "https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final" },
        { label: "NSA/CSS Storage Device Sanitization Manual", url: "https://www.nsa.gov/Resources/Everyone/Media-Destruction-Guidance/" },
        { label: "Microsoft BitLocker Recovery and Sanitization", url: "https://learn.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-recovery-guide-plan" },
        { label: "Certified Media Destruction Standards", url: "https://www.nist.gov/itl/applied-cybersecurity/privacy-engineering/collaboration-space/focus-areas/de-id/tools#data-sanitization" }
      ]
    }
  },
  "PS": {
    "3.9.1": {
      title: "Personnel Screening",
      text: "Screen individuals prior to authorizing access to organizational systems containing CUI.",
      why: "Personnel screening ensures that only trustworthy individuals gain access to sensitive systems and information. For MVL Group, proper screening of employees, contractors, and vendors protects our GCC High environment and ensures compliance with DoD security requirements for handling CUI.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Integrate Azure AD with HR systems to automatically provision/deprovision access based on clearance status",
          "Configure Conditional Access policies that require active security clearance verification for CUI system access",
          "Deploy Microsoft Purview to classify systems and data requiring personnel screening for access",
          "Implement just-in-time (JIT) access using Azure AD Privileged Identity Management based on clearance levels",
          "Set up automated alerts for approaching clearance expiration dates through Azure Sentinel",
          "Configure role-based access control (RBAC) that maps to specific clearance levels and screening requirements"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Background investigations are required before accessing systems containing sensitive information",
          "Your access level will be determined by your clearance status and job requirements",
          "Clearance renewals must be completed before expiration to maintain system access",
          "Changes to your personal circumstances may require reporting and additional screening",
          "Temporary workers and contractors undergo the same screening requirements",
          "Foreign nationals may have additional restrictions on system access regardless of employment status"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proper screening reduces insider threat risks and protects against espionage and data theft",
          "Clearance requirements enable access to higher-value DoD contracts and opportunities",
          "Automated screening verification reduces administrative overhead and human error",
          "Investment in personnel security pays dividends through reduced security incidents and maintained contracts",
          "Regular clearance monitoring ensures continuous compliance with customer security requirements",
          "Screening documentation supports audit requirements and contract compliance verification"
        ]
      },
      mvlTips: [
        "HR maintains clearance tracking database integrated with Azure AD for automated access control",
        "New hire access is granted incrementally based on completed screening milestones",
        "Clearance verification APIs integrate with major systems to enforce access requirements in real-time",
        "ServiceNow workflow routes clearance-related access requests through security and HR approval",
        "Emergency temporary access procedures available for critical business needs with enhanced monitoring"
      ],
      steps: [
        "Establish personnel screening requirements based on system sensitivity and CUI classification levels",
        "Implement automated verification of screening status before granting system access",
        "Configure identity management systems to enforce clearance-based access controls",
        "Develop procedures for handling personnel with pending, expired, or revoked clearances",
        "Set up monitoring and alerting for approaching clearance expiration dates",
        "Train managers and HR on personnel security requirements and their role in maintaining clearance status"
      ],
      quiz: {
        q: "What is the primary purpose of personnel screening for CUI access?",
        answers: [
          "To verify technical competency for system use",
          "To ensure trustworthiness and reliability of individuals accessing sensitive information",
          "To confirm employment eligibility and work authorization",
          "To assess training completion and certification status"
        ],
        correctIndex: 1,
        explanation: "Personnel screening determines trustworthiness and reliability to reduce insider threat risks when granting access to systems containing CUI. Technical skills and employment eligibility are separate requirements."
      },
      resources: [
        { label: "DoD Personnel Security Program Regulation", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/522001p.pdf" },
        { label: "NIST SP 800-171 Implementation Guidance", url: "https://csrc.nist.gov/publications/detail/sp/800-171a/final" },
        { label: "Azure AD Conditional Access Documentation", url: "https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/" },
        { label: "Personnel Security Clearance Guidelines", url: "https://www.dcsa.mil/is/personnel-security/" }
      ]
    },
    "3.9.2": {
      title: "CUI Access Termination",
      text: "Ensure that CUI and organizational systems containing CUI are protected during and after personnel actions such as terminations and transfers.",
      why: "Personnel changes create security risks if access is not properly managed. For MVL Group, protecting CUI during employee terminations, transfers, and role changes ensures continued compliance and prevents unauthorized access to sensitive defense contractor information.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Configure automated account disabling in Azure AD upon HR system status changes (termination/transfer)",
          "Deploy Microsoft Purview Data Loss Prevention to prevent data exfiltration during notice periods",
          "Implement Azure AD access reviews to systematically audit and remove unnecessary access permissions",
          "Set up automated backup and retention of user data using Microsoft 365 retention policies",
          "Configure Conditional Access policies to restrict access from personal devices during termination process",
          "Deploy Microsoft Sentinel to monitor for unusual activity during personnel transition periods"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "System access will be modified or removed when changing roles or leaving the company",
          "Personal items and data must be separated from company systems before departure",
          "Some access may be restricted during your notice period to protect sensitive information",
          "Exit interviews will include return of company property and discussion of ongoing obligations",
          "Non-disclosure agreements continue after employment ends - protect company information",
          "Former employees cannot share login credentials or access systems on behalf of current employees"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proper access termination prevents data theft and unauthorized system access by former employees",
          "Automated processes reduce the risk of human error in access management during personnel changes",
          "Systematic access reviews identify and remove orphaned accounts and excessive permissions",
          "Clear termination procedures protect against wrongful termination claims and data disputes",
          "Investment in automated access management scales better than manual processes as organization grows",
          "Audit trails of access changes support compliance investigations and security assessments"
        ]
      },
      mvlTips: [
        "HR system integration automatically triggers account disabling within 4 hours of status change",
        "Microsoft 365 retention policies preserve user data for legal/business needs while removing access",
        "Azure AD access reviews conducted quarterly to identify and remove stale permissions",
        "ServiceNow manages equipment return and access removal checklist for all departing personnel",
        "Legal hold procedures automatically preserve data for employees under investigation or litigation"
      ],
      steps: [
        "Implement automated account lifecycle management integrated with HR systems for immediate access changes",
        "Deploy data loss prevention controls to monitor and prevent unauthorized data access during transitions",
        "Establish systematic access review processes to identify and remove unnecessary permissions",
        "Configure backup and retention procedures to preserve business data while removing user access",
        "Develop clear procedures for different types of personnel actions (termination, transfer, leave, etc.)",
        "Train managers on their responsibilities for personnel security during employee transitions"
      ],
      quiz: {
        q: "When should system access be removed for a terminated employee?",
        answers: [
          "At the end of their last working day",
          "After they return all company property",
          "Immediately upon notification of termination",
          "After completion of exit interview"
        ],
        correctIndex: 2,
        explanation: "Access should be removed immediately upon termination notification to prevent potential data theft or system misuse. Equipment return and exit interviews are important but secondary to access control."
      },
      resources: [
        { label: "Azure AD Identity Lifecycle Management", url: "https://learn.microsoft.com/en-us/azure/active-directory/governance/identity-governance-overview" },
        { label: "Microsoft 365 Data Loss Prevention", url: "https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp" },
        { label: "Personnel Security Best Practices", url: "https://www.cisa.gov/sites/default/files/publications/Personnel_Security_Best_Practices_508.pdf" },
        { label: "NIST Personnel Security Controls", url: "https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search#!/control?version=5.1&number=PS" }
      ]
    }
  },
  "PE": {
    "3.10.1": {
      title: "Physical Access Authorization",
      text: "Limit physical access to organizational systems, equipment, and the respective operating environments to authorized individuals.",
      why: "Physical access control is fundamental to cybersecurity - anyone with physical access can potentially bypass logical security controls. For MVL Group, protecting our data centers, server rooms, and workspaces containing CUI systems ensures comprehensive security that complements our technical controls.",
      itPerspective: {
        title: "IT Professional Implementation", 
        content: [
          "Deploy integrated access control systems with Azure AD authentication for physical facility access",
          "Configure IP-based access control systems that log all badge access attempts and door sensor activations",
          "Implement video surveillance with Azure Video Analyzer for automated monitoring and anomaly detection",
          "Set up environmental monitoring with Azure IoT Hub for temperature, humidity, and intrusion detection",
          "Deploy asset tracking using RFID/NFC tags integrated with ServiceNow asset management database",
          "Configure automated alerts through Azure Sentinel for unauthorized physical access attempts"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Badge access is required for all secure areas - don't prop doors open or let others 'tailgate'",
          "Visitors must be escorted at all times when in areas containing sensitive systems",
          "Report any suspicious individuals or unusual activity in secure areas immediately",
          "Lost or stolen badges must be reported immediately for deactivation and replacement",
          "Some areas may require additional authorization beyond your standard badge access",
          "Physical access logs are monitored - unusual access patterns will be investigated"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management", 
        content: [
          "Physical security controls prevent theft of equipment, data, and intellectual property",
          "Controlled access reduces insider threat risks and prevents unauthorized system tampering",
          "Integrated systems provide audit trails for compliance and incident investigation",
          "Investment in physical security is typically less expensive than recovering from physical breaches",
          "Environmental controls protect against equipment damage and service disruptions",
          "Professional appearance of security measures demonstrates competence to clients and auditors"
        ]
      },
      mvlTips: [
        "Badge access system integrates with Azure AD - disabled accounts automatically lose physical access",
        "Video surveillance uses AI analytics to detect tailgating and unauthorized access attempts",
        "Environmental monitoring alerts facilities team to conditions that could damage IT equipment",
        "Asset tracking prevents theft and provides real-time location data for critical equipment",
        "Emergency lockdown procedures can be activated remotely through security operations center"
      ],
      steps: [
        "Implement badge-based access control system integrated with identity management for all secure areas",
        "Deploy video surveillance and monitoring systems with automated alerting capabilities",
        "Establish visitor management procedures with escort requirements and access logging",
        "Configure environmental monitoring for temperature, humidity, water detection, and intrusion sensors",
        "Set up asset tracking and inventory management for all equipment in physically controlled areas",
        "Train personnel on physical security procedures and their role in maintaining secure environments"
      ],
      quiz: {
        q: "What is the most important principle for employees regarding physical access security?",
        answers: [
          "Always check with management before entering secure areas",
          "Never allow unauthorized individuals to follow you through secured doors (tailgating)",
          "Only access areas during normal business hours",
          "Notify security when entering any controlled area"
        ],
        correctIndex: 1,
        explanation: "Preventing tailgating is critical - each person must authenticate individually for physical access. This prevents unauthorized individuals from bypassing security controls by following authorized personnel."
      },
      resources: [
        { label: "NIST SP 800-116 Physical and Environmental Protection", url: "https://csrc.nist.gov/publications/detail/sp/800-116/rev-1/final" },
        { label: "Azure Video Analyzer Documentation", url: "https://learn.microsoft.com/en-us/azure/azure-video-analyzer/" },
        { label: "Physical Security Assessment Guide", url: "https://www.cisa.gov/sites/default/files/publications/Physical_Security_Survey_Checklist_508.pdf" },
        { label: "Access Control Systems Best Practices", url: "https://www.sans.org/white-papers/physical-security/" }
      ]
    },
    "3.10.2": {
      title: "Physical Access Restriction",
      text: "Protect and monitor the physical facility and support infrastructure for organizational systems.",
      why: "Comprehensive physical protection goes beyond access control to include environmental monitoring, infrastructure protection, and continuous surveillance. For MVL Group, this ensures our GCC High infrastructure and CUI processing environments maintain integrity and availability.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy comprehensive facility monitoring using Azure IoT Hub with sensors for power, cooling, water, and intrusion",
          "Implement redundant power systems with UPS and generator backup monitored through Azure Monitor",
          "Configure environmental controls with automated alerts for temperature and humidity excursions",
          "Set up water detection systems near critical infrastructure with automatic shutoff capabilities",
          "Deploy vibration and seismic monitoring for equipment racks and sensitive hardware",
          "Implement 24/7 security monitoring with integration to local law enforcement and emergency services"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Don't bring food or drinks near server equipment or in data center areas",
          "Report any unusual sounds, odors, or environmental conditions in equipment areas immediately",
          "Some areas may have restricted hours or require advance scheduling for access",
          "Emergency procedures are posted - familiarize yourself with evacuation routes and shutdown procedures",
          "Maintenance activities in infrastructure areas require coordination with IT operations team",
          "Personal items and unauthorized equipment cannot be stored in equipment rooms or data centers"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Environmental monitoring prevents equipment failures that could disrupt business operations",
          "Redundant infrastructure reduces downtime risks and maintains service availability for clients",
          "Proactive monitoring enables preventive maintenance reducing emergency repair costs",
          "Physical infrastructure protection supports business continuity and disaster recovery capabilities",
          "Investment in monitoring and protection systems pays dividends through reduced downtime and maintenance costs",
          "Professional facility management demonstrates operational maturity to clients and partners"
        ]
      },
      mvlTips: [
        "Azure IoT Hub aggregates sensor data from across all facilities with automated alerting and response",
        "Redundant cooling systems with automatic failover prevent overheating of critical equipment",
        "Water detection systems automatically cut power to affected areas and alert facilities management",
        "Seismic monitoring detects potential equipment damage from vibration or movement",
        "Integration with building management systems provides centralized control and monitoring"
      ],
      steps: [
        "Deploy comprehensive environmental monitoring covering power, cooling, humidity, water detection, and intrusion",
        "Implement redundant infrastructure systems for power, cooling, and network connectivity",
        "Establish 24/7 monitoring and alerting procedures with escalation to appropriate personnel",
        "Configure automated responses for environmental threats such as water detection and temperature excursions",
        "Develop preventive maintenance schedules for all facility infrastructure and support systems",
        "Test emergency procedures regularly including power failures, cooling system failures, and facility evacuation"
      ],
      quiz: {
        q: "Which environmental factor poses the greatest immediate threat to IT equipment in a data center?",
        answers: [
          "Excessive humidity above 80%",
          "Temperature above 85°F (30°C)",
          "Water leak or flooding",
          "Power fluctuations or outages"
        ],
        correctIndex: 2,
        explanation: "Water poses the greatest immediate threat as it can cause instant equipment damage and create electrical hazards. Temperature and humidity cause gradual damage, while power issues are usually handled by UPS systems."
      },
      resources: [
        { label: "Data Center Environmental Monitoring Guide", url: "https://www.nist.gov/publications/data-center-energy-efficiency-guide" },
        { label: "Azure IoT Hub Documentation", url: "https://learn.microsoft.com/en-us/azure/iot-hub/" },
        { label: "Physical Infrastructure Protection", url: "https://www.cisa.gov/sites/default/files/publications/Commercial_Facilities_Sector_Security_Guide_508.pdf" },
        { label: "Data Center Best Practices", url: "https://www.energy.gov/eere/femp/best-practices-data-centers" }
      ]
    }
  },
      text: "Track, document, and report incidents to designated officials and/or authorities both internal and external to the organization.",
      why: "Proper documentation supports lessons learned, legal requirements, and regulatory compliance.",
      mvlTips: [
        "ServiceNow incident management system tracks all security incidents.",
        "Automated reporting to CISA for incidents involving government data.",
        "Legal team notified within 1 hour for incidents involving CUI."
      ],
      steps: [
        "Implement incident tracking system with proper categorization.",
        "Define reporting requirements for different incident types.",
        "Establish communication procedures for stakeholder notification.",
        "Maintain incident database for trend analysis and reporting."
      ],
      quiz: {
        q: "Security incidents should be reported to external authorities:",
        answers: ["Never", "Only if required by law or regulation", "Always within 24 hours", "Only if they involve financial loss"],
        correctIndex: 1
      },
      resources: [
        { label: "CISA Incident Reporting", url: "https://www.cisa.gov/report" },
        { label: "Incident Documentation Best Practices", url: "https://www.sans.org/white-papers/incident-response-documentation/" }
      ]
    }
  },
  "MA": {
    "3.7.1": {
      title: "System Maintenance",
      text: "Perform maintenance on organizational systems.",
      why: "Regular maintenance keeps systems secure, stable, and performing optimally.",
      mvlTips: [
        "Windows Update for Business manages patching across all endpoints.",
        "Azure Update Management handles server patching schedules.",
        "Maintenance windows scheduled monthly with stakeholder approval."
      ],
      steps: [
        "Establish regular maintenance schedules for all systems.",
        "Implement automated patch management where possible.",
        "Document all maintenance activities and results.",
        "Test maintenance procedures in non-production environments first."
      ],
      quiz: {
        q: "System maintenance should be:",
        answers: ["Performed only when problems occur", "Scheduled regularly", "Avoided to prevent downtime", "Done only by vendors"],
        correctIndex: 1
      },
      resources: [
        { label: "NIST SP 800-40 Patch Management", url: "https://csrc.nist.gov/publications/detail/sp/800-40/rev-4/final" },
        { label: "Azure Update Management", url: "https://learn.microsoft.com/en-us/azure/automation/update-management/" }
      ]
    },
    "3.7.2": {
      title: "Maintenance Tools Control",
      text: "Provide controls on the tools, techniques, mechanisms, and personnel used to conduct system maintenance.",
      why: "Maintenance activities can introduce vulnerabilities if not properly controlled and monitored.",
      mvlTips: [
        "Privileged Access Management (PAM) controls administrative tool access.",
        "All maintenance tools scanned for malware before use.",
        "Remote maintenance through secure VPN with session recording."
      ],
      steps: [
        "Inventory and approve all maintenance tools and software.",
        "Implement access controls for maintenance personnel.",
        "Monitor and log all maintenance activities.",
        "Review maintenance tool security regularly."
      ],
      quiz: {
        q: "Maintenance tools should be:",
        answers: ["Available to all IT staff", "Controlled and monitored", "Kept on portable media", "Used without documentation"],
        correctIndex: 1
      },
      resources: [
        { label: "Privileged Access Management", url: "https://www.cisa.gov/sites/default/files/publications/Privileged_Access_Management_Best_Practices.pdf" },
        { label: "Azure PAM", url: "https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/" }
      ]
    }
  },
  "MP": {
    "3.8.1": {
      title: "Media Protection",
      text: "Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital.",
      why: "Physical media containing sensitive information must be protected from theft, loss, or unauthorized access.",
      mvlTips: [
        "BitLocker encryption enabled on all portable devices and media.",
        "Secure storage lockers for physical media in office locations.",
        "Digital media inventory tracked in asset management system."
      ],
      steps: [
        "Identify all types of media that may contain CUI.",
        "Implement physical security controls for media storage.",
        "Enable encryption for all portable digital media.",
        "Maintain inventory of all media containing sensitive information."
      ],
      quiz: {
        q: "System media containing CUI should be:",
        answers: ["Stored in unlocked desk drawers", "Physically controlled and securely stored", "Shared freely among staff", "Disposed of in regular trash"],
        correctIndex: 1
      },
      resources: [
        { label: "NIST SP 800-88 Media Sanitization", url: "https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final" },
        { label: "CUI Media Protection", url: "https://www.archives.gov/cui/registry/category-list" }
      ]
    },
    "3.8.2": {
      title: "Media Access Limitation",
      text: "Limit access to CUI on system media to authorized users.",
      why: "Restricting access to media ensures only authorized personnel can view or modify sensitive information.",
      mvlTips: [
        "Rights Management Services (RMS) protects documents stored on media.",
        "Access control lists (ACLs) restrict file system permissions.",
        "Regular access reviews ensure only current staff have media access."
      ],
      steps: [
        "Implement access controls on all media containing CUI.",
        "Use role-based permissions for media access.",
        "Regular review and update of access permissions.",
        "Monitor and log all media access activities."
      ],
      quiz: {
        q: "Access to CUI on system media should be limited to:",
        answers: ["All employees", "IT staff only", "Authorized users only", "Management only"],
        correctIndex: 2
      },
      resources: [
        { label: "Access Control Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-162/final" },
        { label: "Azure Information Protection", url: "https://learn.microsoft.com/en-us/azure/information-protection/" }
      ]
    }
  },
  "PS": {
    "3.9.1": {
      title: "Personnel Screening",
      text: "Screen individuals prior to authorizing access to organizational systems containing CUI.",
      why: "Background screening helps ensure personnel are trustworthy and suitable for access to sensitive information.",
      mvlTips: [
        "HR conducts background checks per federal requirements for all staff.",
        "Security clearance verification through federal databases.",
        "Periodic reinvestigation schedule maintained for clearance holders."
      ],
      steps: [
        "Establish screening requirements based on access level and risk.",
        "Conduct appropriate background investigations before granting access.",
        "Document screening results and maintain records securely.",
        "Implement periodic rescreening for high-risk positions."
      ],
      quiz: {
        q: "Personnel screening should be conducted:",
        answers: ["After granting access", "Only for IT staff", "Prior to authorizing access", "Only annually"],
        correctIndex: 2
      },
      resources: [
        { label: "Federal Personnel Screening", url: "https://www.opm.gov/investigations/" },
        { label: "Security Clearance Process", url: "https://www.dcsa.mil/is/ci/" }
      ]
    },
    "3.9.2": {
      title: "Access Agreements",
      text: "Ensure that organizational systems containing CUI are protected during and after personnel actions such as terminations and transfers.",
      why: "Personnel changes create security risks that must be managed to prevent unauthorized access.",
      mvlTips: [
        "HR checklist includes immediate account deactivation upon termination.",
        "Asset recovery process ensures all devices and access cards returned.",
        "Knowledge transfer procedures protect CUI during personnel transitions."
      ],
      steps: [
        "Develop comprehensive personnel action procedures.",
        "Implement immediate access revocation for terminated personnel.",
        "Ensure proper asset recovery and account cleanup.",
        "Document all personnel actions for audit purposes."
      ],
      quiz: {
        q: "When an employee is terminated, their system access should be:",
        answers: ["Disabled within 30 days", "Disabled immediately", "Transferred to their replacement", "Left active for transition"],
        correctIndex: 1
      },
      resources: [
        { label: "Personnel Security Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-181/final" },
        { label: "Identity Lifecycle Management", url: "https://learn.microsoft.com/en-us/azure/active-directory/governance/" }
      ]
    }
  },
  "PE": {
    "3.10.1": {
      title: "Physical Access Control",
      text: "Limit physical access to organizational systems, equipment, and the respective operating environments to authorized individuals.",
      why: "Physical security is the foundation of all other security measures. Unauthorized physical access can bypass all technical controls.",
      mvlTips: [
        "Badge access system controls entry to all MVL facilities.",
        "Security cameras monitor all access points 24/7.",
        "Visitor escort procedures ensure non-employees are supervised."
      ],
      steps: [
        "Implement physical access controls at all facility entry points.",
        "Issue access credentials only to authorized personnel.",
        "Monitor and log all physical access attempts.",
        "Regularly review and update access permissions."
      ],
      quiz: {
        q: "Physical access to systems should be limited to:",
        answers: ["All employees", "Authorized individuals only", "Daytime hours only", "IT staff only"],
        correctIndex: 1
      },
      resources: [
        { label: "Physical Security Guidelines", url: "https://www.cisa.gov/sites/default/files/publications/Physical_Access_Control_Systems.pdf" },
        { label: "Facility Security Standards", url: "https://csrc.nist.gov/publications/detail/sp/800-116/final" }
      ]
    },
    "3.10.2": {
      title: "Physical Safeguards",
      text: "Protect and monitor the physical facility and support infrastructure for organizational systems.",
      why: "Physical infrastructure supporting IT systems must be protected from damage, theft, and unauthorized access.",
      mvlTips: [
        "UPS systems and generators protect against power outages.",
        "Environmental monitoring alerts on temperature and humidity issues.",
        "Fire suppression systems protect server rooms and data centers."
      ],
      steps: [
        "Implement environmental controls for all IT facilities.",
        "Install monitoring systems for critical infrastructure.",
        "Establish physical security perimeters around sensitive areas.",
        "Regular inspection and maintenance of physical safeguards."
      ],
      quiz: {
        q: "Physical safeguards should include:",
        answers: ["Only fire suppression", "Environmental and security monitoring", "Only access controls", "Only backup power"],
        correctIndex: 1
      },
      resources: [
        { label: "Data Center Physical Security", url: "https://www.sans.org/white-papers/data-center-physical-security-checklist/" },
        { label: "Critical Infrastructure Protection", url: "https://www.cisa.gov/critical-infrastructure-sectors" }
      ]
    }
  },
  "RA": {
    "3.11.1": {
      title: "Risk Assessment",
      text: "Periodically assess the risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals, resulting from the operation of organizational systems and the associated processing, storage, or transmission of CUI.",
      why: "Regular risk assessments identify new threats and vulnerabilities that could impact the organization.",
      mvlTips: [
        "Annual risk assessments conducted using NIST RMF methodology.",
        "Microsoft Secure Score provides continuous risk visibility.",
        "Third-party penetration testing performed annually."
      ],
      steps: [
        "Establish regular risk assessment schedule and methodology.",
        "Identify and catalog all organizational assets and threats.",
        "Conduct vulnerability assessments and impact analysis.",
        "Document findings and develop risk mitigation strategies."
      ],
      quiz: {
        q: "Risk assessments should be conducted:",
        answers: ["Only when problems occur", "Periodically on a regular schedule", "Only during system implementation", "Only by external consultants"],
        correctIndex: 1
      },
      resources: [
        { label: "NIST Risk Management Framework", url: "https://csrc.nist.gov/projects/risk-management/about-rmf" },
        { label: "Risk Assessment Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final" }
      ]
    },
    "3.11.2": {
      title: "Vulnerability Scanning",
      text: "Scan for vulnerabilities in organizational systems and applications periodically and when new vulnerabilities potentially affecting those systems and applications are identified.",
      why: "Regular vulnerability scanning identifies security weaknesses before they can be exploited by attackers.",
      mvlTips: [
        "Microsoft Defender for Cloud provides continuous vulnerability scanning.",
        "Qualys VMDR scans all network-connected systems weekly.",
        "Application security testing integrated into DevOps pipeline."
      ],
      steps: [
        "Implement automated vulnerability scanning tools.",
        "Establish regular scanning schedules for all systems.",
        "Prioritize vulnerabilities based on risk and exploitability.",
        "Track remediation efforts and validate fixes."
      ],
      quiz: {
        q: "Vulnerability scanning should be performed:",
        answers: ["Only when new systems are deployed", "Periodically and when new vulnerabilities are identified", "Only annually", "Only by external vendors"],
        correctIndex: 1
      },
      resources: [
        { label: "Vulnerability Management", url: "https://www.cisa.gov/sites/default/files/publications/Vulnerability_Management_Strategic_Framework.pdf" },
        { label: "Microsoft Defender for Cloud", url: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/" }
      ]
    }
  },
  "CA": {
    "3.12.1": {
      title: "Security Assessments",
      text: "Periodically assess the security controls in organizational systems to determine if the controls are effective in their application.",
      why: "Regular assessment ensures security controls are working as intended and providing adequate protection.",
      mvlTips: [
        "Annual security control assessments using NIST SP 800-53A procedures.",
        "Continuous monitoring through Microsoft Sentinel and Azure Security Center.",
        "Independent security assessments by third-party auditors."
      ],
      steps: [
        "Develop security control assessment procedures and schedule.",
        "Test security controls using appropriate assessment methods.",
        "Document assessment results and identify control deficiencies.",
        "Implement corrective actions for identified weaknesses."
      ],
      quiz: {
        q: "Security control assessments should determine if controls are:",
        answers: ["Expensive", "Effective in their application", "Easy to use", "Popular with users"],
        correctIndex: 1
      },
      resources: [
        { label: "NIST SP 800-53A Assessment Procedures", url: "https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final" },
        { label: "Security Control Assessment", url: "https://csrc.nist.gov/publications/detail/sp/800-115/final" }
      ]
    },
    "3.12.2": {
      title: "Plan of Action and Milestones",
      text: "Develop and implement plans of action designed to correct deficiencies and reduce or eliminate vulnerabilities in organizational systems.",
      why: "Systematic remediation planning ensures security issues are addressed in a timely and effective manner.",
      mvlTips: [
        "POA&M tracking integrated with ServiceNow project management.",
        "Risk-based prioritization ensures critical issues addressed first.",
        "Monthly POA&M reviews with senior leadership."
      ],
      steps: [
        "Document all identified security deficiencies and vulnerabilities.",
        "Develop detailed remediation plans with timelines and responsibilities.",
        "Prioritize actions based on risk level and business impact.",
        "Track progress and report status to leadership regularly."
      ],
      quiz: {
        q: "A Plan of Action and Milestones (POA&M) should:",
        answers: ["Only address critical vulnerabilities", "Correct deficiencies and reduce vulnerabilities", "Be updated annually", "Only be used for compliance"],
        correctIndex: 1
      },
      resources: [
        { label: "POA&M Development Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final" },
        { label: "Vulnerability Remediation", url: "https://www.sans.org/white-papers/vulnerability-remediation/" }
      ]
    }
  },  "SC": {
    "3.13.1": {
      title: "Boundary Protection",
      text: "Monitor, control, and protect organizational communications (i.e., information transmitted or received by organizational systems) at the external boundaries and key internal boundaries of the systems.",
      why: "Network boundary protection is the first line of defense against external threats and unauthorized access. For MVL Group, comprehensive boundary protection ensures our GCC High environment and CUI processing systems are protected from internet-based attacks while enabling secure business communications.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Zscaler Cloud Firewall for comprehensive internet boundary protection with zero-trust network access",
          "Configure Azure Firewall Premium with threat intelligence and intrusion detection/prevention capabilities",
          "Implement Microsoft Defender for Office 365 to protect email communication boundaries and prevent phishing",
          "Set up network segmentation using Azure Network Security Groups and virtual network peering for internal boundaries",
          "Deploy Azure Front Door with Web Application Firewall for application-level boundary protection",
          "Configure VPN Gateway with Azure AD authentication for secure remote access boundary control"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Internet access is filtered and monitored for security threats and policy compliance",
          "Some websites and services may be blocked if they pose security risks",
          "Email attachments and links are scanned for malware and phishing attempts",
          "VPN connection is required for accessing company systems from outside the office",
          "File transfers and downloads may be restricted or require additional approval",
          "Report any blocked content that impacts your work so exceptions can be evaluated"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Boundary protection prevents the majority of external cyberattacks and malware infections",
          "Investment in enterprise-grade boundary protection is significantly less than breach recovery costs",
          "Comprehensive monitoring provides visibility into threat landscape and attack attempts",
          "Automated threat blocking reduces reliance on user security awareness and decision-making",
          "Boundary protection enables secure remote work capabilities without compromising security",
          "Professional boundary protection demonstrates security maturity to clients and partners"
        ]
      },
      mvlTips: [
        "Zscaler Cloud Firewall integrates with Azure AD for user-based policy enforcement",
        "Microsoft Defender for Office 365 provides advanced threat protection for email and collaboration",
        "Network segmentation ensures CUI systems are isolated from general business networks",
        "Azure Sentinel correlates boundary protection events with other security telemetry",
        "Emergency bypass procedures available for critical business needs with enhanced monitoring"
      ],
      steps: [
        "Deploy enterprise firewall and intrusion prevention systems at all network boundaries",
        "Configure email security gateway with advanced threat protection and sandboxing capabilities",
        "Implement network segmentation to create internal boundaries between different security zones",
        "Set up comprehensive monitoring and logging of all boundary protection activities",
        "Configure automated threat blocking and alerting for suspicious boundary crossing attempts",
        "Establish procedures for evaluating and approving exceptions to boundary protection policies"
      ],
      quiz: {
        q: "Which approach provides the most comprehensive boundary protection for modern organizations?",
        answers: [
          "Traditional perimeter firewall only", 
          "Cloud-based security service edge (SASE) with zero-trust principles",
          "Network intrusion detection system only",
          "Email filtering and antivirus only"
        ],
        correctIndex: 1,
        explanation: "SASE (Secure Access Service Edge) with zero-trust principles provides comprehensive boundary protection by combining network security, secure web gateways, and access control in a cloud-delivered model."
      },
      resources: [
        { label: "NIST SP 800-41 Guidelines for Firewalls and Firewall Policy", url: "https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final" },
        { label: "Zscaler Cloud Security Documentation", url: "https://help.zscaler.com/" },
        { label: "Azure Firewall Premium Features", url: "https://learn.microsoft.com/en-us/azure/firewall/premium-features" },
        { label: "Microsoft Defender for Office 365", url: "https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/" }
      ]
    },
    "3.13.2": {
      title: "Session Controls",
      text: "Employ architectural designs, software development techniques, and systems engineering principles that promote effective information security within organizational systems.",
      why: "Secure system architecture and engineering principles ensure security is built into systems from the ground up rather than added as an afterthought. For MVL Group, secure architecture principles guide the design and implementation of our GCC High infrastructure and CUI processing systems.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Implement zero-trust architecture principles using Azure AD Conditional Access and device compliance",
          "Deploy microservices architecture with Azure Container Instances and API Management for secure service boundaries",
          "Configure Azure Landing Zones with security, governance, and compliance controls built-in",
          "Implement defense-in-depth architecture with multiple layers of security controls",
          "Deploy Azure Security Center and Azure Policy for continuous architecture compliance monitoring",
          "Use Azure DevOps with security scanning integrated into CI/CD pipelines for secure development"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "New systems and applications are designed with security as a primary consideration",
          "You may need to authenticate multiple times when accessing different systems (zero-trust approach)",
          "Some functionality may be restricted to maintain security architectural principles",
          "System updates and changes go through security review before implementation",
          "Security features are integrated into applications rather than added separately",
          "Report any security design concerns or suggestions for improvement to the IT security team"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Secure architecture reduces long-term security costs by building protection into systems from the start",
          "Architectural security principles scale better than point security solutions as the organization grows",
          "Investment in secure architecture reduces technical debt and future security remediation costs",
          "Well-architected systems are more resilient to attacks and easier to maintain securely",
          "Secure architecture supports business agility by enabling secure adoption of new technologies",
          "Professional architecture practices demonstrate technical maturity to clients and partners"
        ]
      },
      mvlTips: [
        "Azure Well-Architected Framework provides security pillar guidance for all system designs",
        "Zero-trust architecture implemented using Azure AD, Conditional Access, and Intune integration",
        "All new systems must pass security architecture review before deployment",
        "Microservices architecture enables granular security controls and fault isolation",
        "Infrastructure as Code (IaC) ensures consistent security controls across all deployments"
      ],
      steps: [
        "Establish secure architecture principles and design standards aligned with zero-trust methodology",
        "Implement architectural review processes for all new systems and major changes",
        "Deploy security architecture frameworks and patterns for consistent implementation",
        "Configure automated compliance checking for architectural security requirements",
        "Train development and operations teams on secure architecture principles and practices",
        "Conduct regular architecture reviews to ensure ongoing compliance with security principles"
      ],
      quiz: {
        q: "What is the primary principle of zero-trust architecture?",
        answers: [
          "Trust but verify all network connections",
          "Never trust, always verify every access request",
          "Trust internal networks and verify external connections",
          "Verify only administrative access requests"
        ],
        correctIndex: 1,
        explanation: "Zero-trust architecture operates on the principle of 'never trust, always verify' - every access request must be authenticated, authorized, and continuously validated regardless of location or previous access."
      },
      resources: [
        { label: "Azure Well-Architected Framework Security Pillar", url: "https://learn.microsoft.com/en-us/azure/architecture/framework/security/" },
        { label: "NIST Zero Trust Architecture", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" },
        { label: "Microsoft Zero Trust Architecture", url: "https://learn.microsoft.com/en-us/security/zero-trust/" },
        { label: "Secure Software Development Framework", url: "https://csrc.nist.gov/Projects/ssdf" }
      ]
    },
    "3.13.3": {
      title: "Security Function Isolation",
      text: "Separate user functionality from system management functionality.",
      why: "Separating user functions from administrative functions reduces the risk of privilege escalation and limits the impact of compromised user accounts. For MVL Group, proper separation ensures that regular business operations cannot interfere with critical security management functions.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy separate administrative accounts using Azure AD Privileged Identity Management (PIM)",
          "Implement privileged access workstations (PAWs) for all administrative functions",
          "Configure role-based access control (RBAC) with principle of least privilege for all systems",
          "Set up separate administrative networks and VLANs for management traffic",
          "Deploy jump servers and bastion hosts for secure administrative access to critical systems",
          "Configure multi-factor authentication and just-in-time access for all administrative functions"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your regular user account cannot perform administrative functions on systems",
          "IT administrators use separate accounts and specialized computers for system management",
          "Some system functions and settings will not be accessible to regular users",
          "Request administrative access through proper channels - don't try to bypass restrictions",
          "Administrative activities are logged and monitored more closely than regular user activities",
          "This separation protects everyone by preventing accidental or malicious system changes"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Function separation reduces the risk of system compromise through compromised user accounts",
          "Administrative separation enables better audit trails and accountability for system changes",
          "Investment in proper separation pays dividends through reduced security incidents and compliance",
          "Separation supports least privilege principles and reduces insider threat risks",
          "Professional separation demonstrates mature security practices to clients and auditors",
          "Proper separation enables safer delegation of administrative responsibilities"
        ]
      },
      mvlTips: [
        "Azure AD PIM provides time-bound, approval-based access to administrative roles",
        "Privileged Access Workstations (PAWs) are hardened, dedicated systems for administrative tasks",
        "Conditional Access policies enforce additional security requirements for administrative access",
        "Administrative activity logging provides comprehensive audit trails for compliance",
        "Emergency break-glass procedures available for critical situations with enhanced monitoring"
      ],
      steps: [
        "Implement separate administrative accounts for all personnel requiring system management access",
        "Deploy privileged access management solutions with just-in-time and just-enough access principles",
        "Configure role-based access control with granular permissions for different administrative functions",
        "Set up dedicated administrative infrastructure separate from regular user environments",
        "Establish comprehensive logging and monitoring of all administrative activities",
        "Train administrators on proper use of separated accounts and security procedures"
      ],
      quiz: {
        q: "Why should administrative functions be separated from regular user functions?",
        answers: [
          "To make systems run faster",
          "To reduce the risk of privilege escalation and limit impact of compromised accounts",
          "To make administration easier for IT staff",
          "To comply with software licensing requirements"
        ],
        correctIndex: 1,
        explanation: "Separation of administrative and user functions reduces privilege escalation risks and limits the potential impact if a regular user account is compromised, following the principle of least privilege."
      },
      resources: [
        { label: "Azure AD Privileged Identity Management", url: "https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/" },
        { label: "Privileged Access Workstations", url: "https://learn.microsoft.com/en-us/security/compass/privileged-access-devices" },
        { label: "NIST Privilege Separation Guidelines", url: "https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search#!/control?version=5.1&number=AC-6" },
        { label: "Administrative Security Best Practices", url: "https://www.cisa.gov/sites/default/files/publications/Privileged_Account_Security_Best_Practices_508.pdf" }
      ]
    }
  },
  "SI": {
    "3.14.1": {
      title: "Flaw Remediation",
      text: "Identify, report, and correct system flaws in a timely manner.",
      why: "System flaws and vulnerabilities provide entry points for attackers and can compromise system integrity. For MVL Group, systematic flaw identification and remediation ensures our GCC High environment and CUI processing systems maintain strong security posture against evolving threats.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Defender Vulnerability Management for comprehensive flaw identification across all endpoints",
          "Configure Azure Security Center for continuous vulnerability assessment of cloud infrastructure",
          "Implement automated patch management using Windows Update for Business and Azure Update Management",
          "Set up vulnerability scanning integration with ServiceNow for automated ticket creation and tracking",
          "Deploy security testing tools in CI/CD pipelines to identify flaws before production deployment",
          "Configure Microsoft Sentinel for correlation of vulnerability data with threat intelligence"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Software updates and patches will be automatically installed to fix security flaws",
          "Your computer may restart automatically during maintenance windows for critical updates",
          "Some applications may be temporarily unavailable while security flaws are being corrected",
          "Report any unusual system behavior that might indicate software problems or flaws",
          "Don't ignore update notifications - they often contain important security fixes",
          "Critical security flaws may require immediate action even during business hours"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Timely flaw remediation prevents security breaches and reduces potential business impact",
          "Automated remediation processes reduce operational overhead while improving security posture",
          "Investment in flaw management capabilities prevents more expensive incident response and recovery",
          "Regular patching demonstrates security due diligence to clients, auditors, and insurance providers",
          "Proactive flaw correction maintains system availability and prevents forced downtime from security incidents",
          "Documented remediation processes support compliance requirements and audit activities"
        ]
      },
      mvlTips: [
        "Microsoft Defender Vulnerability Management provides prioritized remediation recommendations based on threat intelligence",
        "Automated patch deployment with rollback capabilities minimizes business disruption",
        "Critical security flaws trigger immediate alerts with 24-hour remediation SLA",
        "Test environment validates patches before production deployment to prevent compatibility issues",
        "ServiceNow tracks all flaw remediation activities with automated workflow and approval processes"
      ],
      steps: [
        "Implement comprehensive vulnerability scanning and flaw identification across all systems and applications",
        "Deploy automated patch management systems with testing, approval, and rollback capabilities",
        "Establish flaw remediation procedures with different timelines based on criticality and risk",
        "Configure vulnerability tracking and reporting systems for management visibility and compliance",
        "Set up automated alerting for critical security flaws requiring immediate attention",
        "Conduct regular assessments of flaw remediation effectiveness and process improvements"
      ],
      quiz: {
        q: "What should be the timeline for remediating critical security flaws?",
        answers: [
          "Within 30 days of identification",
          "During the next scheduled maintenance window",
          "As soon as possible, typically within 24-72 hours",
          "When convenient for the IT team"
        ],
        correctIndex: 2,
        explanation: "Critical security flaws should be remediated as soon as possible, typically within 24-72 hours, as they represent immediate risk to the organization and may be actively exploited."
      },
      resources: [
        { label: "Microsoft Defender Vulnerability Management", url: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-vulnerability-management/" },
        { label: "NIST SP 800-40 Patch and Vulnerability Management", url: "https://csrc.nist.gov/publications/detail/sp/800-40/rev-4/final" },
        { label: "Azure Update Management", url: "https://learn.microsoft.com/en-us/azure/automation/update-management/overview" },
        { label: "Vulnerability Management Best Practices", url: "https://www.cisa.gov/sites/default/files/publications/Vulnerability_Management_Best_Practices_508.pdf" }
      ]
    },
    "3.14.2": {
      title: "Malicious Code Protection",
      text: "Provide protection from malicious code at designated locations within organizational systems.",
      why: "Malicious code can cause significant damage to systems and data if not properly detected and blocked. For MVL Group, comprehensive malware protection ensures our GCC High environment and CUI processing systems are protected from viruses, ransomware, and other malicious software.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Defender for Endpoint with advanced threat protection across all devices",
          "Configure Microsoft Defender for Office 365 for email and collaboration platform protection",
          "Implement Azure Security Center for cloud workload protection and threat detection",
          "Set up Microsoft Defender for Cloud Apps to protect SaaS applications from malware",
          "Deploy endpoint detection and response (EDR) capabilities with automated threat hunting",
          "Configure Microsoft Sentinel for malware incident correlation and automated response"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Antivirus software runs continuously on your computer and may occasionally impact performance",
          "Email attachments and downloads are automatically scanned for malware before you can access them",
          "Some files or websites may be blocked if they are detected as potentially malicious",
          "Don't attempt to disable or bypass malware protection - it protects everyone",
          "Report any suspicious files, emails, or system behavior immediately",
          "Malware protection updates automatically - don't ignore security notifications"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Comprehensive malware protection prevents costly ransomware attacks and data breaches",
          "Investment in enterprise malware protection is minimal compared to incident recovery costs",
          "Automated protection reduces reliance on user awareness and decision-making",
          "Advanced threat protection capabilities detect sophisticated attacks that traditional antivirus misses",
          "Integrated protection across email, endpoints, and cloud services provides comprehensive coverage",
          "Professional malware protection demonstrates security maturity to clients and partners"
        ]
      },
      mvlTips: [
        "Microsoft Defender for Endpoint provides behavior-based detection and automated threat hunting",
        "Email security scanning includes attachment sandboxing and URL reputation analysis",
        "Cloud App Security protects against malware in SaaS applications and file sharing",
        "Endpoint detection and response (EDR) provides detailed forensics and incident response capabilities",
        "Threat intelligence integration provides protection against latest malware campaigns"
      ],
      steps: [
        "Deploy comprehensive malware protection across all endpoints, servers, and cloud services",
        "Configure real-time scanning and automatic updates for all malware protection systems",
        "Implement email and web content filtering with advanced threat detection capabilities",
        "Set up centralized malware monitoring and incident response procedures",
        "Configure automated quarantine and remediation for detected malicious code",
        "Conduct regular testing of malware protection effectiveness and update protection strategies"
      ],
      quiz: {
        q: "Where should malicious code protection be implemented in organizational systems?",
        answers: [
          "Only on user workstations",
          "Only on servers and critical systems",
          "At designated locations throughout the organization based on risk assessment",
          "Only at network entry points"
        ],
        correctIndex: 2,
        explanation: "Malicious code protection should be implemented at designated locations throughout organizational systems based on risk assessment, including endpoints, servers, email systems, and network boundaries."
      },
      resources: [
        { label: "Microsoft Defender for Endpoint", url: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/" },
        { label: "NIST Malware Protection Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-83/rev-1/final" },
        { label: "Microsoft Defender for Office 365", url: "https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/" },
        { label: "Malware Protection Best Practices", url: "https://www.cisa.gov/sites/default/files/publications/Malware_Protection_Best_Practices.pdf" }
      ]
    },
    "3.14.3": {
      title: "Security Alerts and Advisories",
      text: "Monitor system security alerts and advisories and take appropriate actions in response.",  
      why: "Staying informed about security threats and vulnerabilities enables proactive defense measures and timely response to emerging threats. For MVL Group, systematic monitoring of security intelligence ensures our GCC High environment is protected against the latest threats and attack techniques.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Configure Microsoft Security Response Center (MSRC) alerts and advisories integration",
          "Deploy CISA alerts and advisories monitoring through automated feeds and notifications",
          "Implement threat intelligence integration with Microsoft Sentinel for real-time threat analysis",
          "Set up automated correlation of security advisories with organizational asset inventory",
          "Configure ServiceNow Security Operations for advisory tracking and response workflow",
          "Deploy security information sharing platforms for industry-specific threat intelligence"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "You may receive security alerts about new threats relevant to your work environment",
          "Some system configurations may change in response to security advisories",
          "Emergency security updates may be applied outside normal maintenance windows",
          "Report any security concerns or suspicious activity that might relate to current threat advisories",
          "Security awareness training will be updated to address new threats and attack methods",
          "Business processes may be temporarily modified in response to active threats"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proactive threat monitoring enables early warning and preparation for emerging security risks",
          "Investment in threat intelligence and advisory monitoring prevents more expensive reactive security measures",
          "Automated advisory processing reduces manual effort while ensuring comprehensive coverage",
          "Systematic response to security advisories demonstrates security maturity and due diligence",
          "Threat intelligence sharing improves overall industry security and reduces risks for all participants",
          "Regular security advisory review supports strategic security planning and investment decisions"
        ]
      },
      mvlTips: [
        "Microsoft Sentinel automatically correlates security advisories with organizational systems and vulnerabilities",
        "CISA alerts integrated into security operations center (SOC) with automated priority assignment",
        "Threat intelligence feeds provide early warning of emerging threats specific to defense contractors",
        "ServiceNow workflow routes security advisories through appropriate review and response procedures",
        "Executive briefings provided for high-impact security advisories affecting critical business systems"
      ],
      steps: [
        "Subscribe to relevant security alert and advisory services from government and industry sources",
        "Implement automated monitoring and correlation of security advisories with organizational systems",
        "Establish procedures for evaluating and responding to different types of security advisories",
        "Configure automated notification and escalation procedures for critical security alerts",
        "Set up documentation and tracking systems for all security advisory responses and actions taken",
        "Conduct regular review of advisory response effectiveness and process improvements"
      ],
      quiz: {
        q: "What should be the primary action when receiving a critical security advisory?",
        answers: [
          "File it for review during the next security meeting",
          "Forward it to all employees for awareness",
          "Immediately assess impact on organizational systems and take appropriate protective actions",
          "Wait for additional advisories to confirm the threat"
        ],
        correctIndex: 2,
        explanation: "Critical security advisories require immediate assessment of potential impact on organizational systems and prompt implementation of appropriate protective measures to prevent potential exploitation."
      },
      resources: [
        { label: "CISA Security Alerts and Advisories", url: "https://www.cisa.gov/news-events/cybersecurity-advisories" },
        { label: "Microsoft Security Response Center", url: "https://msrc.microsoft.com/update-guide/en-us" },
        { label: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
        { label: "Threat Intelligence Best Practices", url: "https://www.sans.org/white-papers/threat-intelligence/" }
      ]
    }
  }
        "Segment networks to limit lateral movement of threats.",
        "Configure secure remote access solutions for external users."
      ],
      quiz: {
        q: "Boundary protection should be implemented at:",
        answers: ["External boundaries only", "Internal boundaries only", "External and key internal boundaries", "Perimeter only"],
        correctIndex: 2
      },
      resources: [
        { label: "Network Security Architecture", url: "https://www.cisa.gov/sites/default/files/publications/Network_Architecture_Security_Guide.pdf" },
        { label: "Zero Trust Architecture", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" }
      ]
    },
    "3.13.2": {
      title: "Security Function Isolation",
      text: "Employ architectural designs, software development techniques, and systems engineering principles that promote effective information security within organizational systems.",
      why: "Proper system architecture reduces attack surface and limits the impact of security incidents.",
      mvlTips: [
        "Microservices architecture limits blast radius of security incidents.",
        "Azure landing zones provide secure-by-design cloud architecture.",
        "Defense-in-depth strategy implements multiple layers of security controls."
      ],
      steps: [
        "Design systems with security principles from the ground up.",
        "Implement defense-in-depth security architecture.",
        "Separate security functions from business logic where possible.",
        "Regular architecture reviews to identify security improvements."
      ],
      quiz: {
        q: "Effective information security architecture should:",
        answers: ["Focus only on perimeter security", "Promote security through design principles", "Rely on single security controls", "Be implemented after system deployment"],
        correctIndex: 1
      },
      resources: [
        { label: "Secure System Design", url: "https://csrc.nist.gov/publications/detail/sp/800-160/vol-1/final" },
        { label: "Azure Security Architecture", url: "https://learn.microsoft.com/en-us/security/cybersecurity-reference-architecture/mcra" }
      ]
    }
  },
  "SI": {
    "3.14.1": {
      title: "Flaw Remediation",
      text: "Identify, report, and correct system flaws in a timely manner.",
      why: "Rapid identification and remediation of system flaws prevents exploitation by attackers.",
      mvlTips: [
        "Microsoft Update for Business automates patch deployment.",
        "Vulnerability management program tracks all identified flaws.",
        "Emergency patching procedures for critical vulnerabilities."
      ],
      steps: [
        "Implement automated tools for flaw identification.",
        "Establish procedures for reporting and tracking system flaws.",
        "Prioritize flaw remediation based on risk assessment.",
        "Test patches before deployment to production systems."
      ],
      quiz: {
        q: "System flaws should be:",
        answers: ["Ignored if system is working", "Corrected in a timely manner", "Fixed only during maintenance windows", "Reported only to vendors"],
        correctIndex: 1
      },
      resources: [
        { label: "Patch Management Best Practices", url: "https://www.sans.org/white-papers/patch-management/" },
        { label: "Microsoft Update Management", url: "https://learn.microsoft.com/en-us/windows/deployment/update/" }
      ]
    },
    "3.14.2": {
      title: "Malicious Code Protection",
      text: "Provide protection from malicious code at appropriate locations within organizational systems.",
      why: "Malicious code can cause significant damage to systems and data if not properly detected and blocked.",
      mvlTips: [
        "Microsoft Defender Antivirus deployed on all endpoints.",
        "Email security gateway blocks malicious attachments and links.",
        "Application whitelisting prevents unauthorized software execution."
      ],
      steps: [
        "Deploy antimalware solutions on all systems and devices.",
        "Configure real-time scanning and automatic updates.",
        "Implement email and web content filtering.",
        "Regular malware signature updates and system scans."      ],
      quiz: {
        q: "Malicious code protection should be provided:",
        answers: ["Only on servers", "Only on workstations", "At appropriate locations within systems", "Only at network boundaries"],
        correctIndex: 2,
        explanation: "Malicious code protection should be implemented at designated locations throughout organizational systems based on risk assessment, including endpoints, servers, email systems, and network boundaries."
      },
      resources: [
        { label: "Microsoft Defender for Endpoint", url: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/" },
        { label: "NIST Malware Protection Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-83/rev-1/final" },
        { label: "Microsoft Defender for Office 365", url: "https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/" },
        { label: "Malware Protection Best Practices", url: "https://www.cisa.gov/sites/default/files/publications/Malware_Protection_Best_Practices.pdf" }
      ]
    },
    "3.14.3": {
      title: "Security Alerts and Advisories",
      text: "Monitor system security alerts and advisories and take appropriate actions in response.",  
      why: "Staying informed about security threats and vulnerabilities enables proactive defense measures and timely response to emerging threats. For MVL Group, systematic monitoring of security intelligence ensures our GCC High environment is protected against the latest threats and attack techniques.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Configure Microsoft Security Response Center (MSRC) alerts and advisories integration",
          "Deploy CISA alerts and advisories monitoring through automated feeds and notifications",
          "Implement threat intelligence integration with Microsoft Sentinel for real-time threat analysis",
          "Set up automated correlation of security advisories with organizational asset inventory",
          "Configure ServiceNow Security Operations for advisory tracking and response workflow",
          "Deploy security information sharing platforms for industry-specific threat intelligence"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "You may receive security alerts about new threats relevant to your work environment",
          "Some system configurations may change in response to security advisories",
          "Emergency security updates may be applied outside normal maintenance windows",
          "Report any security concerns or suspicious activity that might relate to current threat advisories",
          "Security awareness training will be updated to address new threats and attack methods",
          "Business processes may be temporarily modified in response to active threats"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proactive threat monitoring enables early warning and preparation for emerging security risks",
          "Investment in threat intelligence and advisory monitoring prevents more expensive reactive security measures",
          "Automated advisory processing reduces manual effort while ensuring comprehensive coverage",
          "Systematic response to security advisories demonstrates security maturity and due diligence",
          "Threat intelligence sharing improves overall industry security and reduces risks for all participants",
          "Regular security advisory review supports strategic security planning and investment decisions"
        ]
      },
      mvlTips: [
        "Microsoft Sentinel automatically correlates security advisories with organizational systems and vulnerabilities",
        "CISA alerts integrated into security operations center (SOC) with automated priority assignment",
        "Threat intelligence feeds provide early warning of emerging threats specific to defense contractors",
        "ServiceNow workflow routes security advisories through appropriate review and response procedures",
        "Executive briefings provided for high-impact security advisories affecting critical business systems"
      ],
      steps: [
        "Subscribe to relevant security alert and advisory services from government and industry sources",
        "Implement automated monitoring and correlation of security advisories with organizational systems",
        "Establish procedures for evaluating and responding to different types of security advisories",
        "Configure automated notification and escalation procedures for critical security alerts",
        "Set up documentation and tracking systems for all security advisory responses and actions taken",
        "Conduct regular review of advisory response effectiveness and process improvements"
      ],
      quiz: {
        q: "What should be the primary action when receiving a critical security advisory?",
        answers: [
          "File it for review during the next security meeting",
          "Forward it to all employees for awareness",
          "Immediately assess impact on organizational systems and take appropriate protective actions",
          "Wait for additional advisories to confirm the threat"
        ],
        correctIndex: 2,
        explanation: "Critical security advisories require immediate assessment of potential impact on organizational systems and prompt implementation of appropriate protective measures to prevent potential exploitation."
      },
      resources: [
        { label: "CISA Security Alerts and Advisories", url: "https://www.cisa.gov/news-events/cybersecurity-advisories" },
        { label: "Microsoft Security Response Center", url: "https://msrc.microsoft.com/update-guide/en-us" },
        { label: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
        { label: "Threat Intelligence Best Practices", url: "https://www.sans.org/white-papers/threat-intelligence/" }
      ]
    }
  }
};

export const MVL_ABOUT = `
MVL is an industry leading US Government Prime Contractor with an International footprint that provides Design and Build services to the defense, construction, and engineering industries. MVL's construction management team works with clients to help them exceed industry standards and improve performance.
`;
