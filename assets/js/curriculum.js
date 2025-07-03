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
  "AC": {
    "3.1.1": {
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
      why: "Ensures users can only perform actions necessary for their role, reducing risk of accidental or malicious damage. For MVL Group, this means finance users can't access engineering systems, and regular users can't perform administrative functions.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Configure role-based access control (RBAC) in all M365 GCC applications using Azure AD roles",
          "Implement application-level permissions in SharePoint, Teams, and custom applications",
          "Deploy Privileged Access Management (PAM) for administrative function restrictions",
          "Set up approval workflows for sensitive operations using Power Automate",
          "Configure transaction monitoring and logging through Azure Monitor and Sentinel",
          "Implement just-in-time access for elevated permissions using Azure AD PIM"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your system access is limited to functions required for your specific job role",
          "Some operations may require manager approval or additional authentication",
          "You cannot perform administrative tasks on systems unless specifically authorized",
          "Attempting unauthorized transactions will be logged and may trigger security alerts",
          "Role changes or promotions will update your access permissions accordingly",
          "Report if you need access to additional functions to perform your job effectively"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Transaction-level controls prevent costly errors and fraudulent activities",
          "Segregation of duties reduces fraud risk and ensures proper oversight",
          "Audit trails for all transactions support compliance and forensic investigations",
          "Role-based restrictions reduce insider threat risks and limit damage from compromised accounts",
          "Automated controls scale better than manual approval processes",
          "Investment in transaction controls prevents regulatory violations and financial losses"
        ]
      },
      mvlTips: [
        "M365 GCC RBAC policies automatically enforce transaction-level restrictions",
        "SharePoint permission inheritance ensures consistent access control across sites",
        "Power Automate workflows route high-value transactions through approval chains",
        "Azure Monitor tracks all user transactions with automated anomaly detection",
        "Emergency access procedures available for critical business operations"
      ],
      steps: [
        "Map all business transactions to specific job roles and responsibilities",
        "Configure role-based access control policies in all connected systems",
        "Implement approval workflows for sensitive or high-value transactions",
        "Set up comprehensive transaction logging and monitoring across all applications",
        "Conduct regular access reviews to ensure transaction permissions remain appropriate",
        "Train users on proper procedures for requesting additional transaction access"
      ],
      quiz: {
        q: "What principle does CMMC requirement 3.1.2 primarily enforce?",
        answers: [
          "Least Privilege",
          "Defense in Depth", 
          "Separation of Duties",
          "Need to Know"
        ],
        correctIndex: 0,
        explanation: "Least Privilege is the primary principle - users should only have access to the minimum transactions and functions necessary to perform their job responsibilities."
      },
      resources: [
        { label: "NIST RBAC Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" },
        { label: "Microsoft RBAC Documentation", url: "https://learn.microsoft.com/en-us/azure/role-based-access-control/" },
        { label: "Azure AD Privileged Identity Management", url: "https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/" },
        { label: "Transaction Monitoring Best Practices", url: "https://www.sans.org/white-papers/access-control/" }
      ]
    }
  },
  "AT": {
    "3.2.1": {
      title: "Security Awareness Training",
      text: "Ensure that managers, system administrators, and users of organizational systems are made aware of the security risks associated with their activities and of the applicable policies, standards, and procedures related to the security of those systems.",
      why: "Human error is the leading cause of security incidents, accounting for 95% of successful cyber attacks. For MVL Group, comprehensive security awareness training ensures all personnel understand their role in protecting our GCC High environment and CUI data.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Viva Learning integrated with security awareness training content",
          "Configure Microsoft 365 Attack Simulation Training for realistic phishing exercises",
          "Implement automated training assignment and tracking through Azure AD group membership",
          "Set up training completion monitoring and reporting using Power BI dashboards",
          "Deploy Microsoft Defender for Office 365 threat simulation and education tools",
          "Configure Conditional Access policies requiring training completion for system access"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "You'll receive regular security awareness training tailored to your role and responsibilities",
          "Periodic phishing simulation emails will test your ability to identify threats",
          "Training completion may be required before accessing certain systems or data",
          "You'll learn to recognize and report security threats specific to your work environment",
          "Security policies and procedures will be regularly communicated and updated",
          "Your feedback on training effectiveness helps improve the program for everyone"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Security awareness training reduces human error-related incidents by up to 70%",
          "Investment in training is significantly less than the cost of security breach recovery",
          "Trained employees become an active defense layer against social engineering attacks",
          "Regular training demonstrates due diligence to clients, auditors, and insurance providers",
          "Metrics on training effectiveness support continuous security program improvement",
          "Educated workforce enables secure adoption of new technologies and business processes"
        ]
      },
      mvlTips: [
        "Microsoft Viva Learning provides role-specific security training modules",
        "Attack Simulation Training creates realistic phishing scenarios without actual risk",
        "Training completion tracked automatically through Azure AD with automated reminders",
        "Monthly security newsletters highlight current threats relevant to defense contractors",
        "Executive security briefings provide leadership visibility into training effectiveness"
      ],
      steps: [
        "Deploy comprehensive security awareness training platform with role-specific content",
        "Create training curricula covering phishing, social engineering, data protection, and incident response",
        "Implement regular phishing simulation exercises with immediate feedback and additional training",
        "Establish training completion requirements tied to system access and job responsibilities",
        "Set up automated tracking and reporting of training completion rates and effectiveness metrics",
        "Conduct annual review of training program effectiveness and update content based on current threats"
      ],
      quiz: {
        q: "How often should security awareness training be conducted according to best practices?",
        answers: [
          "Annually during new hire orientation",
          "Quarterly with updated threat information",
          "Monthly with reinforcement activities",
          "Continuously with ongoing education and real-time alerts"
        ],
        correctIndex: 3,
        explanation: "Security awareness should be continuous, combining formal training with ongoing education, real-time threat alerts, and regular reinforcement activities to maintain security mindfulness."
      },
      resources: [
        { label: "SANS Security Awareness Program", url: "https://www.sans.org/security-awareness-training/" },
        { label: "Microsoft Security Awareness Training", url: "https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/attack-simulation-training" },
        { label: "NIST Cybersecurity Workforce Framework", url: "https://www.nist.gov/itl/applied-cybersecurity/nice/resources/nice-cybersecurity-workforce-framework" },
        { label: "CISA Security Awareness Resources", url: "https://www.cisa.gov/topics/cybersecurity-best-practices/cybersecurity-awareness-month" }
      ]
    },
    "3.2.2": {
      title: "Insider Threat Awareness",
      text: "Ensure that personnel are trained to identify and report potential indicators of insider threat.",
      why: "Insider threats pose significant risks to organizations and can be difficult to detect using traditional security measures. For MVL Group, insider threat awareness protects our defense contractor operations and CUI from both malicious and inadvertent insider actions.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Purview Insider Risk Management for behavioral analysis and threat detection",
          "Configure Azure Sentinel User and Entity Behavior Analytics (UEBA) for anomaly detection",
          "Implement Microsoft Defender for Cloud Apps for unusual access pattern monitoring",
          "Set up automated alerts for high-risk user behaviors using Azure Monitor and Logic Apps",
          "Deploy data loss prevention policies to detect and prevent unauthorized data exfiltration",
          "Configure privileged access monitoring and session recording for administrative accounts"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "You'll learn to recognize signs that colleagues may be at risk for insider threat activities",
          "Training covers both malicious insiders and unintentional insider risks",
          "Anonymous reporting channels are available for concerning behaviors or activities",
          "Your own activities are monitored to protect against account compromise or coercion",
          "Understanding insider threat helps you protect yourself and your colleagues",
          "Reporting suspected insider threats is a responsibility shared by all employees"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Insider threats cause an average of $15.38 million in damages per incident",
          "Early detection through awareness training reduces insider threat incident costs by 50%",
          "Investment in insider threat awareness prevents catastrophic data loss and reputation damage",
          "Training programs support positive workplace culture while maintaining security vigilance",
          "Documented insider threat awareness demonstrates security maturity to clients and auditors",
          "Proactive insider threat management reduces regulatory violations and legal liability"
        ]
      },
      mvlTips: [
        "Microsoft Purview automatically identifies risky user behaviors and provides training recommendations",
        "Azure Sentinel correlates user behavior with security events to identify potential insider threats",
        "Insider threat training includes case studies relevant to defense contractors and government work",
        "Anonymous reporting hotline integrated with HR and security team response procedures",
        "Quarterly insider threat briefings provide updates on current trends and detection techniques"
      ],
      steps: [
        "Develop insider threat awareness training covering behavioral indicators and reporting procedures",
        "Implement user behavior monitoring and anomaly detection across all systems and applications",
        "Establish anonymous reporting mechanisms for suspected insider threat activities",
        "Create incident response procedures specifically for insider threat investigations",
        "Set up regular communication about insider threat trends and prevention strategies",
        "Conduct periodic assessments of insider threat awareness program effectiveness"
      ],
      quiz: {
        q: "Which of the following is NOT typically considered an insider threat indicator?",
        answers: [
          "Working unusual hours or accessing systems outside normal business hours",
          "Downloading large amounts of data not related to job responsibilities",
          "Using approved company software for legitimate business purposes",
          "Expressing dissatisfaction with company policies or seeking employment elsewhere"
        ],
        correctIndex: 2,
        explanation: "Using approved company software for legitimate business purposes is normal behavior. Insider threat indicators include unusual access patterns, unauthorized data collection, and behavioral changes."
      },
      resources: [
        { label: "CISA Insider Threat Mitigation", url: "https://www.cisa.gov/topics/physical-security/insider-threat-mitigation" },
        { label: "Microsoft Insider Risk Management", url: "https://learn.microsoft.com/en-us/purview/insider-risk-management" },
        { label: "NIST Insider Threat Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" },
        { label: "Carnegie Mellon CERT Insider Threat Research", url: "https://insights.sei.cmu.edu/cert/" }
      ]
    }
  },
  "AU": {
    "3.3.1": {
      title: "Audit Event Creation and Retention",
      text: "Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity.",
      why: "Comprehensive audit logging provides the digital forensic evidence needed for security incident investigation, compliance verification, and threat detection. For MVL Group, detailed audit trails ensure accountability and support incident response in our GCC High environment.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Sentinel as centralized SIEM for log aggregation from all M365 GCC and Azure services",
          "Configure Azure Monitor Log Analytics for comprehensive infrastructure and application logging",
          "Implement unified audit logging across all Microsoft 365 services with extended retention",
          "Set up Azure Activity Logs and diagnostic settings for all cloud resources and subscriptions",
          "Deploy custom log collection for on-premises systems using Azure Monitor Agent",
          "Configure log retention policies meeting CMMC requirements (minimum 1 year, recommended 3+ years)"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your activities in company systems are logged for security and compliance purposes",
          "Audit logs help protect you by providing evidence of your authorized activities",
          "System performance may occasionally be impacted during log collection and processing",
          "Unusual activity in your account will be detected and investigated promptly",
          "Audit logs support incident response and help clear innocent parties during investigations",
          "Proper logging enables quick resolution of system issues and security concerns"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Comprehensive audit logging reduces incident investigation time by 70% on average",
          "Audit trails provide legal protection and evidence for regulatory compliance",
          "Investment in logging infrastructure prevents much higher incident response and legal costs",
          "Automated log analysis enables proactive threat detection and faster response times",
          "Audit data supports business process improvement and security program optimization",
          "Proper logging demonstrates due diligence to clients, auditors, and cyber insurance providers"
        ]
      },
      mvlTips: [
        "Microsoft Sentinel automatically correlates logs from all M365 GCC High services",
        "Azure Monitor provides centralized dashboard for all audit log collection and retention status",
        "Log Analytics workspaces configured with role-based access for security and compliance teams",
        "Automated alerts trigger for audit log collection failures or retention policy violations",
        "Quarterly audit log reviews conducted to ensure coverage and identify gaps"
      ],
      steps: [
        "Enable comprehensive audit logging across all systems including cloud and on-premises infrastructure",
        "Configure centralized log collection and analysis using Microsoft Sentinel and Azure Monitor",
        "Establish log retention policies meeting regulatory requirements and business needs",
        "Set up automated monitoring for log collection failures and storage capacity issues",
        "Implement role-based access to audit logs ensuring appropriate segregation of duties",
        "Conduct regular testing of log integrity and audit trail completeness"
      ],
      quiz: {
        q: "What is the minimum audit log retention period required for CMMC Level 2 compliance?",
        answers: [
          "30 days",
          "90 days",
          "1 year",
          "3 years"
        ],
        correctIndex: 2,
        explanation: "CMMC requires audit logs to be retained for at least 1 year, though many organizations retain logs for 3+ years to support longer-term investigations and compliance needs."
      },
      resources: [
        { label: "Microsoft Sentinel Documentation", url: "https://learn.microsoft.com/en-us/azure/sentinel/" },
        { label: "NIST SP 800-92 Log Management Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-92/final" },
        { label: "Azure Monitor Audit Logs", url: "https://learn.microsoft.com/en-us/azure/azure-monitor/" },
        { label: "CMMC Audit Requirements", url: "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20211202_508.pdf" }
      ]
    }
  },
  "CM": {
    "3.4.1": {
      title: "Baseline Configuration Management",
      text: "Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation) throughout the respective system development life cycles.",
      why: "Configuration baselines provide a known-good state for systems and enable detection of unauthorized changes. For MVL Group, proper configuration management ensures our GCC High infrastructure and endpoints maintain secure, compliant configurations throughout their lifecycle.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Intune for endpoint configuration management with security baselines",
          "Implement Azure Policy for cloud infrastructure configuration governance and compliance",
          "Configure Microsoft System Center Configuration Manager (SCCM) for enterprise device management",
          "Set up Azure Resource Manager templates for Infrastructure as Code (IaC) deployments",
          "Deploy configuration compliance monitoring using Azure Security Center and Policy",
          "Implement automated configuration drift detection and remediation using Azure Automation"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your computer settings and software are managed centrally to ensure security and compliance",
          "Some system configurations cannot be changed without administrator approval",
          "Software installations and updates are controlled through approved processes",
          "Configuration changes may be automatically reverted if they violate security policies",
          "Properly configured systems provide better performance and security protection",
          "Report any issues with system configuration to IT for evaluation and resolution"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Configuration management reduces security vulnerabilities by 60% through consistent security settings",
          "Automated configuration compliance reduces manual IT effort while improving security posture",
          "Investment in configuration management prevents costly security incidents and system failures",
          "Standardized configurations enable faster troubleshooting and more predictable system behavior",
          "Configuration baselines support rapid system recovery and business continuity",
          "Documented configuration management demonstrates operational maturity to clients and auditors"
        ]
      },
      mvlTips: [
        "Microsoft Intune automatically applies Windows 10/11 security baselines to all enrolled devices",
        "Azure Policy ensures cloud resources are deployed with secure configurations by default",
        "Configuration Manager provides detailed reporting on device compliance and configuration drift",
        "Azure Resource Manager templates ensure consistent, secure infrastructure deployments",
        "Monthly configuration compliance reports provided to leadership with remediation plans"
      ],
      steps: [
        "Define and document approved baseline configurations for all system types and platforms",
        "Deploy configuration management tools to enforce baselines across endpoints and infrastructure",
        "Implement automated compliance monitoring and reporting for all managed systems",
        "Establish change control procedures for any modifications to approved baseline configurations",
        "Set up configuration drift detection and automated remediation where possible",
        "Conduct regular reviews of baseline configurations to incorporate security updates and improvements"
      ],
      quiz: {
        q: "What is the primary purpose of maintaining configuration baselines?",
        answers: [
          "To make all systems identical for easier management",
          "To establish a known-good security state and detect unauthorized changes",
          "To reduce software licensing costs",
          "To improve system performance"
        ],
        correctIndex: 1,
        explanation: "Configuration baselines establish a known-good security state and enable detection of unauthorized changes that could introduce vulnerabilities or compliance violations."
      },
      resources: [
        { label: "Microsoft Intune Configuration Management", url: "https://learn.microsoft.com/en-us/mem/intune/configuration/" },
        { label: "NIST SP 800-128 Security Configuration Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-128/final" },
        { label: "Azure Policy Documentation", url: "https://learn.microsoft.com/en-us/azure/governance/policy/" },
        { label: "CIS Controls Configuration Management", url: "https://www.cisecurity.org/controls/inventory-and-control-of-software-assets" }
      ]
    }
  },
  "IA": {
    "3.5.1": {
      title: "User Identification and Authentication",
      text: "Identify system users, processes acting on behalf of users, and devices.",
      why: "Proper identification and authentication ensures that only authorized entities can access systems and data. For MVL Group, strong identity management in our GCC High environment protects against unauthorized access and ensures accountability for all system activities.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Azure Active Directory as centralized identity provider for all users and devices",
          "Implement certificate-based authentication for high-privilege accounts using Windows Hello for Business",
          "Configure device certificates and compliance policies through Microsoft Intune",
          "Set up service principal authentication for automated processes and API access",
          "Deploy Conditional Access policies requiring strong authentication for all CUI access",
          "Implement identity governance and lifecycle management using Azure AD Identity Governance"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "You'll have unique accounts and credentials that identify you personally",
          "Your company devices are enrolled and identified in the system automatically",
          "Multi-factor authentication ensures your identity is properly verified",
          "Account access is based on your job role and clearance level",
          "Password policies enforce strong, unique passwords for all accounts",
          "Report immediately if you suspect your account or identity has been compromised"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Strong identification and authentication prevents 99% of automated cyberattacks",
          "Investment in identity management reduces security incidents and compliance violations",
          "Centralized identity management scales efficiently as the organization grows",
          "Identity governance ensures access remains appropriate as roles change",
          "Audit trails for all authentication events support compliance and incident response",
          "Professional identity management demonstrates security maturity to clients and partners"
        ]
      },
      mvlTips: [
        "Azure AD provides single sign-on across all M365 GCC High services and integrated applications",
        "Windows Hello for Business eliminates passwords for high-security authentication",
        "Device compliance policies ensure only managed, secure devices can authenticate",
        "Conditional Access policies enforce additional security requirements based on risk factors",
        "Identity protection monitors for suspicious authentication patterns and account compromise"
      ],
      steps: [
        "Implement unique identifiers for all users, devices, and automated processes",
        "Deploy centralized identity management system with strong authentication mechanisms",
        "Configure multi-factor authentication requirements for all user accounts",
        "Set up device identity and compliance verification for all corporate devices",
        "Implement identity lifecycle management processes for onboarding, changes, and offboarding",
        "Monitor authentication activities and investigate anomalies or suspicious patterns"
      ],      quiz: {
        q: "Which authentication factor is considered 'something you are'?",
        answers: [
          "Password or PIN",
          "Smart card or certificate",
          "Biometric data like fingerprint or facial recognition",
          "Security token or mobile app"
        ],
        correctIndex: 2,
        explanation: "Biometric authentication represents 'something you are' - inherent physical characteristics like fingerprints, facial features, or voice patterns that are unique to each individual."
      },
      resources: [
        { label: "NIST Digital Identity Guidelines SP 800-63", url: "https://pages.nist.gov/800-63-3/" },
        { label: "Azure Active Directory Documentation", url: "https://learn.microsoft.com/en-us/azure/active-directory/" },
        { label: "Windows Hello for Business", url: "https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/" },
        { label: "Microsoft Identity Platform", url: "https://learn.microsoft.com/en-us/azure/active-directory/develop/" }
      ]
    }
  },  "IR": {
    "3.6.1": {
      title: "Incident Response Capability",
      text: "Establish an operational incident response capability for organizational systems that includes preparation, detection, analysis, containment, recovery, and user response activities.",
      why: "Security incidents are inevitable in today's threat landscape. For MVL Group, having a comprehensive incident response capability ensures we can quickly detect, contain, and recover from security incidents while minimizing impact to our defense contractor operations and protecting CUI data.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Sentinel as Security Orchestration, Automation and Response (SOAR) platform",
          "Configure automated incident detection using Azure Defender threat intelligence and behavioral analytics",
          "Implement incident response playbooks using Azure Logic Apps for standardized response procedures",
          "Set up Microsoft Defender for Identity to detect advanced persistent threats and insider attacks",
          "Deploy Azure Security Center for centralized incident management and response coordination",
          "Configure automated containment actions using Conditional Access and Intune device compliance policies"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "If a security incident affects your account or device, you'll receive immediate notification and guidance",
          "Your account or device may be automatically isolated to prevent spread of the incident",
          "You may be asked to provide information or take specific actions during incident response",
          "Some systems may be temporarily unavailable while incidents are contained and resolved",
          "Training on incident recognition and reporting helps you become part of the detection capability",
          "Follow all incident response instructions promptly to help protect yourself and the organization"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Effective incident response reduces average breach cost from $4.45M to $2.66M (IBM Cost of Data Breach 2023)",
          "Investment in incident response capabilities provides 10:1 return through reduced downtime and recovery costs",
          "Rapid incident response maintains client confidence and protects defense contractor reputation",
          "Documented incident response demonstrates security maturity to DoD customers and auditors",
          "Proactive incident management reduces regulatory penalties and legal liability",
          "Incident response metrics support continuous security program improvement and investment decisions"
        ]
      },
      mvlTips: [
        "Microsoft Sentinel automatically creates incidents from multiple related alerts using machine learning",
        "Integration with M365 GCC High enables automatic user account protection and device isolation",
        "Incident response team includes IT, Security, HR, Legal, and Communications representatives",
        "Pre-configured playbooks for common incident types (phishing, malware, data breach, insider threat)",
        "Emergency communication procedures bypass normal systems in case of infrastructure compromise"
      ],
      steps: [
        "Develop comprehensive incident response plan covering all phases from preparation through lessons learned",
        "Create incident response team with clearly defined roles, responsibilities, and contact information",
        "Deploy integrated incident detection, analysis, and response tools across all systems and networks",
        "Establish secure communication channels and escalation procedures for incident coordination",
        "Implement automated containment and recovery capabilities to minimize incident impact",
        "Conduct regular incident response exercises and update procedures based on lessons learned"
      ],
      quiz: {
        q: "What are the six phases of the NIST incident response lifecycle?",
        answers: [
          "Preparation, Detection, Analysis, Containment, Eradication, Recovery",
          "Planning, Prevention, Detection, Response, Recovery, Review",
          "Identify, Protect, Detect, Respond, Recover, Lessons Learned",
          "Preparation, Identification, Containment, Investigation, Recovery, Post-Incident Activity"
        ],
        correctIndex: 0,
        explanation: "The NIST incident response lifecycle includes: Preparation, Detection & Analysis, Containment/Eradication/Recovery, and Post-Incident Activity."
      },
      resources: [
        { label: "NIST SP 800-61 Incident Response Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final" },
        { label: "Microsoft Sentinel Incident Response", url: "https://learn.microsoft.com/en-us/azure/sentinel/investigate-cases" },
        { label: "CISA Incident Response Guide", url: "https://www.cisa.gov/sites/default/files/publications/Federal_Government_Cybersecurity_Incident_and_Vulnerability_Response_Playbooks_508C.pdf" },
        { label: "Azure Security Center Incident Management", url: "https://learn.microsoft.com/en-us/azure/security-center/security-center-incident" }
      ]
    },
    "3.6.2": {
      title: "Incident Response Testing",
      text: "Test the organizational incident response capability.",
      why: "Incident response plans that haven't been tested often fail when needed most. Regular testing validates procedures, identifies gaps, and ensures the response team can execute effectively under pressure. For MVL Group, tested incident response capabilities are essential for maintaining DoD contract requirements and protecting our reputation.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Configure Microsoft Sentinel attack simulation and incident response testing capabilities",
          "Deploy Azure Red Team tools for realistic attack scenario testing",
          "Implement automated incident response validation using Azure Logic Apps and PowerShell runbooks",
          "Set up Microsoft Defender for Office 365 attack simulation training for phishing response testing",
          "Configure Azure Monitor alerts and dashboards for incident response metrics and testing results",
          "Deploy incident response communication testing using Microsoft Teams and emergency notification systems"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "You may participate in simulated security incidents designed to test response procedures",
          "Incident response testing helps you practice what to do if a real security event occurs",
          "Your feedback on testing exercises helps improve incident response procedures",
          "Some testing may simulate real incidents - treat all security alerts seriously until confirmed as testing",
          "Training sessions follow testing exercises to review lessons learned and improve performance",
          "Testing ensures systems and procedures work properly when you need them during real incidents"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Regular incident response testing reduces response time by 60% and improves effectiveness",
          "Investment in testing prevents much higher costs from failed incident response during real events",
          "Testing validates insurance coverage requirements and may reduce cyber insurance premiums",
          "Documented testing demonstrates operational readiness to DoD customers and security assessors",
          "Testing identifies training needs and resource gaps before they impact real incident response",
          "Regular testing maintains certification requirements and supports continuous security improvement"
        ]
      },
      mvlTips: [
        "Quarterly tabletop exercises simulate various incident scenarios relevant to defense contractors",
        "Azure Sentinel playbook testing validates automated response capabilities",
        "Red team exercises conducted bi-annually with external security professionals",
        "Communication tree testing ensures all stakeholders can be reached during incidents",
        "After-action reviews document lessons learned and drive procedure improvements"
      ],
      steps: [
        "Schedule regular incident response testing including tabletop exercises and technical simulations",
        "Create realistic test scenarios based on current threat intelligence and business operations",
        "Test all incident response procedures including detection, analysis, containment, and recovery",
        "Evaluate communication procedures, escalation paths, and stakeholder notification processes",
        "Assess incident response tool effectiveness and team coordination during testing exercises",
        "Document testing results, lessons learned, and implement improvements to response procedures"
      ],
      quiz: {
        q: "How often should incident response plans be tested according to cybersecurity best practices?",
        answers: [
          "Annually during compliance audits",
          "Quarterly with different scenario types",
          "Monthly for all procedures",
          "Only after major system changes"
        ],
        correctIndex: 1,
        explanation: "Best practices recommend quarterly testing with different scenarios (tabletop, technical, communication) to ensure all aspects of incident response remain effective."
      },
      resources: [
        { label: "NIST Incident Response Testing Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-84/final" },
        { label: "Microsoft Security Incident Response Testing", url: "https://learn.microsoft.com/en-us/security/compass/incident-response-planning" },
        { label: "SANS Incident Response Testing", url: "https://www.sans.org/white-papers/incident-response-testing/" },
        { label: "CISA Cybersecurity Exercises", url: "https://www.cisa.gov/cybersecurity-exercises" }
      ]
    }
  },  "MA": {
    "3.7.1": {
      title: "System Maintenance Policy",
      text: "Perform maintenance on organizational systems and provide effective controls on the tools, techniques, mechanisms, and personnel used to conduct system maintenance.",
      why: "Maintenance activities can introduce vulnerabilities if not properly controlled. For MVL Group, systematic maintenance with security controls ensures our GCC High infrastructure remains secure and available while meeting DoD operational requirements.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Azure Update Management for centralized patch and update orchestration across cloud and hybrid infrastructure",
          "Implement Microsoft System Center Configuration Manager (SCCM) for enterprise device maintenance and software deployment",
          "Configure Privileged Access Management (PAM) using Azure AD PIM for all maintenance activities requiring elevated privileges",
          "Set up automated maintenance windows using Azure Automation runbooks with approval workflows",
          "Deploy comprehensive logging and monitoring of all maintenance activities using Azure Monitor and Log Analytics",
          "Implement maintenance tool management through Intune with application protection policies and conditional access"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "System maintenance will be scheduled during designated maintenance windows to minimize disruption",
          "Your devices will receive security updates and patches automatically during approved maintenance periods",
          "Some maintenance activities may require system restarts or temporary unavailability of services",
          "Maintenance personnel may need access to your workstation or office areas with proper authorization",
          "Emergency maintenance may occasionally occur outside normal windows for critical security issues",
          "Report any unusual system behavior following maintenance activities immediately to IT support"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Controlled maintenance reduces security vulnerabilities by 85% while maintaining 99.5% system availability",
          "Investment in automated maintenance reduces manual effort costs while improving security compliance",
          "Proper maintenance controls prevent introducing vulnerabilities that could compromise CUI or customer data",
          "Maintenance documentation demonstrates operational maturity to DoD customers and compliance auditors",
          "Proactive maintenance reduces emergency downtime and associated business disruption costs",
          "Maintenance metrics support capacity planning and technology refresh decision-making"
        ]
      },
      mvlTips: [
        "Azure Update Management provides centralized visibility and control over all Windows and Linux system updates",
        "SCCM integration enables coordinated maintenance activities across enterprise infrastructure",
        "Azure AD PIM provides just-in-time privileged access for maintenance personnel with full audit logging",
        "Maintenance activities automatically logged in Azure Sentinel for security monitoring and compliance",
        "Emergency maintenance procedures available for critical security vulnerabilities with accelerated approval"
      ],
      steps: [
        "Develop comprehensive maintenance policy covering all systems, applications, and infrastructure components",
        "Implement automated maintenance scheduling and orchestration tools with proper change control integration",
        "Deploy privileged access management for all maintenance activities requiring administrative privileges",
        "Establish maintenance tool inventory with security assessment and approval for all maintenance software",
        "Configure comprehensive logging and monitoring of all maintenance activities with automated reporting",
        "Conduct regular review of maintenance procedures and effectiveness with continuous improvement processes"
      ],
      quiz: {
        q: "What is the primary security concern with system maintenance activities?",
        answers: [
          "Maintenance costs too much money",
          "Maintenance activities can introduce vulnerabilities if not properly controlled",
          "Maintenance takes too much time",
          "Maintenance personnel are not available"
        ],
        correctIndex: 1,
        explanation: "The primary security concern is that maintenance activities can introduce vulnerabilities, provide unauthorized access, or compromise system integrity if not properly controlled."
      },
      resources: [
        { label: "NIST SP 800-128 Security Configuration Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-128/final" },
        { label: "Azure Update Management", url: "https://learn.microsoft.com/en-us/azure/automation/update-management/overview" },
        { label: "Microsoft SCCM Documentation", url: "https://learn.microsoft.com/en-us/mem/configmgr/" },
        { label: "Azure AD Privileged Identity Management", url: "https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/" }
      ]
    },
    "3.7.2": {
      title: "Maintenance Personnel Authorization",
      text: "Ensure that personnel performing maintenance on organizational systems have appropriate access authorizations.",
      why: "Maintenance personnel often require elevated access to systems and sensitive data. Proper authorization ensures only qualified, trustworthy personnel can perform maintenance activities. For MVL Group, this protects our defense contractor operations and ensures compliance with personnel security requirements.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Implement Azure AD Privileged Identity Management (PIM) for just-in-time maintenance access approval and monitoring",
          "Deploy Azure AD Conditional Access policies requiring device compliance and multi-factor authentication for maintenance access",
          "Configure Role-Based Access Control (RBAC) with principle of least privilege for all maintenance activities",
          "Set up Azure AD Access Reviews for quarterly review of maintenance personnel authorizations",
          "Implement Privileged Access Workstations (PAWs) for high-privilege maintenance activities",
          "Deploy session recording and monitoring for all privileged maintenance activities using Azure Bastion and other tools"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Maintenance personnel will have appropriate background checks and security clearances for their access level",
          "All maintenance activities are authorized through formal processes and documented for accountability",
          "You may be asked to verify the identity of maintenance personnel before granting physical access",
          "Maintenance personnel access is monitored and recorded for security and compliance purposes",
          "Escort requirements may apply for maintenance personnel in sensitive areas or systems",
          "Report any maintenance activities that seem suspicious or unauthorized to security immediately"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proper maintenance personnel authorization reduces insider threat risks by 75% through background checks and monitoring",
          "Investment in personnel security for maintenance prevents costly security incidents and regulatory violations",
          "Background investigations for maintenance personnel demonstrate due diligence to DoD customers",
          "Documented authorization processes support compliance with defense contractor security requirements",
          "Maintenance personnel security controls reduce cyber insurance premiums and improve coverage",
          "Regular review of maintenance authorizations ensures continued trustworthiness of personnel"
        ]
      },
      mvlTips: [
        "All maintenance personnel undergo background investigations appropriate for their access level",
        "Azure AD PIM provides just-in-time access with automatic expiration and approval workflows",
        "Maintenance access tied to specific work orders with time-limited authorizations",
        "Privileged Access Workstations (PAWs) isolate high-privilege maintenance activities",
        "Regular security awareness training required for all personnel with maintenance access"
      ],
      steps: [
        "Establish background investigation requirements for maintenance personnel based on system sensitivity and access needs",
        "Implement formal authorization processes for granting, modifying, and revoking maintenance access privileges",
        "Deploy just-in-time privileged access management with approval workflows and automatic expiration",
        "Configure comprehensive monitoring and logging of all maintenance personnel activities",
        "Conduct regular reviews of maintenance personnel authorizations with HR and security teams",
        "Implement escort and supervision requirements for maintenance personnel in high-security environments"
      ],
      quiz: {
        q: "Just-in-time privileged access for maintenance personnel provides which security benefit?",
        answers: [
          "Reduces the attack surface by limiting the time elevated privileges are available",
          "Makes maintenance faster by eliminating approval processes",
          "Reduces the cost of maintenance activities",
          "Eliminates the need for background checks"
        ],
        correctIndex: 0,
        explanation: "Just-in-time access reduces the attack surface by providing elevated privileges only when needed for specific maintenance tasks, minimizing the window of opportunity for misuse."
      },
      resources: [
        { label: "NIST Personnel Security Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-73/4/final" },
        { label: "Azure AD Privileged Identity Management", url: "https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/" },
        { label: "Defense Contractor Personnel Security", url: "https://www.dcsa.mil/is/personnel-security/" },
        { label: "Privileged Access Workstations", url: "https://learn.microsoft.com/en-us/security/compass/privileged-access-deployment" }
      ]
    }
  },  "MP": {
    "3.8.1": {
      title: "Media Protection Policy", 
      text: "Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital.",
      why: "Physical media containing CUI represents a significant risk if lost, stolen, or improperly handled. For MVL Group as a defense contractor, protecting media containing CUI is essential for maintaining security clearances and DoD contract compliance.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Purview Data Loss Prevention (DLP) to prevent unauthorized copying of CUI to removable media",
          "Implement BitLocker encryption on all removable storage devices and configure through Intune policy",
          "Configure Windows Defender Application Control to block unauthorized removable media usage",
          "Set up Azure Information Protection to automatically classify and protect documents containing CUI",
          "Deploy Microsoft Cloud App Security to monitor and control file transfers to cloud storage services",
          "Implement secure print solutions with user authentication and automatic document encryption"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "All removable media (USB drives, CDs/DVDs, external hard drives) must be approved and encrypted before use",
          "CUI documents must be stored in designated secure storage areas when not in active use",
          "Printing CUI requires authentication at the printer and immediate retrieval of documents",
          "Personal devices and media cannot be used to store or transfer any company or CUI information",
          "Lost or stolen media containing CUI must be reported immediately to IT and Security teams",
          "Secure disposal procedures must be followed for all media that has contained CUI"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proper media protection prevents data breaches that average $4.45M in cost and regulatory penalties",
          "Investment in media protection demonstrates due diligence to DoD customers and reduces contract risk",
          "Secure media handling maintains security clearances essential for defense contractor operations",
          "Media protection controls reduce cyber insurance premiums and improve coverage terms",
          "Documented media protection supports CMMC compliance and competitive advantage in DoD contracting",
          "Proper media controls prevent intellectual property theft and maintain competitive advantage"
        ]
      },
      mvlTips: [
        "Microsoft Purview DLP automatically prevents CUI from being copied to unauthorized removable media",
        "Intune policies enforce BitLocker encryption on all approved removable storage devices",
        "Azure Information Protection automatically protects documents based on CUI classification",
        "Secure print solutions require authentication before document release at printer",
        "Monthly media protection awareness training includes hands-on secure handling demonstrations"
      ],
      steps: [
        "Classify all organizational media based on sensitivity level and implement appropriate protection controls",
        "Deploy automated tools to prevent unauthorized copying or transfer of CUI to removable media",
        "Implement physical security controls for secure storage and handling of media containing CUI",
        "Establish secure media disposal procedures including degaussing, shredding, and certificate of destruction",
        "Configure monitoring and logging of all media usage with automated alerts for policy violations",
        "Conduct regular audits of media protection controls and update procedures based on threat changes"
      ],
      quiz: {
        q: "What is required before using removable media for CUI in a CMMC environment?",
        answers: [
          "Media must be approved by IT department only",
          "Media must be encrypted and access must be logged",
          "Media can be used without restrictions",
          "Only vendor-supplied media can be used"
        ],
        correctIndex: 1,
        explanation: "Removable media for CUI must be encrypted to protect data at rest and all access must be logged for accountability and incident response."
      },
      resources: [
        { label: "NIST SP 800-88 Media Sanitization", url: "https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final" },
        { label: "Microsoft Purview Data Loss Prevention", url: "https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp" },
        { label: "CUI Registry and Marking Guide", url: "https://www.archives.gov/cui" },
        { label: "BitLocker Deployment Guide", url: "https://learn.microsoft.com/en-us/windows/security/information-protection/bitlocker/" }
      ]
    },
    "3.8.2": {
      title: "Media Access Control",
      text: "Limit access to CUI on system media to authorized users.",
      why: "Controlling access to media containing CUI ensures only authorized personnel can view, modify, or transport sensitive information. For MVL Group, this control is critical for maintaining the confidentiality of defense contractor information and customer data.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Rights Management Services (RMS) integrated with Azure Information Protection for document-level access control",
          "Implement Conditional Access policies requiring device compliance and MFA before accessing CUI media",
          "Configure file-level encryption and access controls using Windows Information Protection (WIP)",
          "Set up automated media access logging and monitoring using Azure Sentinel and Log Analytics",
          "Deploy Privileged Access Management (PAM) for administrative access to media storage systems",
          "Implement secure backup and archive solutions with role-based access controls and encryption"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Access to CUI media requires proper authorization based on your job responsibilities and clearance level",
          "Your access to media containing CUI is logged and monitored for security and compliance purposes",
          "Multi-factor authentication may be required when accessing sensitive media or storage locations",
          "Some CUI media may have additional access restrictions requiring supervisor approval",
          "You cannot share access credentials or provide unauthorized persons access to CUI media",
          "Regular training on media access procedures ensures you understand current requirements and restrictions"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Media access controls reduce unauthorized disclosure risks by 90% through proper authentication and authorization",
          "Investment in access controls prevents regulatory violations that could result in contract loss or penalties",
          "Documented media access demonstrates accountability to DoD customers during security assessments",
          "Access controls enable rapid identification of compromise scope during security incident investigations",
          "Proper media access management supports insider threat prevention and detection programs",
          "Access control metrics provide visibility into security program effectiveness and resource utilization"
        ]
      },
      mvlTips: [
        "Azure Information Protection provides persistent protection that follows documents regardless of location",
        "Conditional Access policies can require specific devices or locations for accessing highly sensitive CUI",
        "Rights Management prevents unauthorized forwarding, printing, or copying of protected CUI documents",
        "Access attempts to protected media generate real-time alerts in Azure Sentinel for immediate response",
        "Regular access reviews ensure media access remains appropriate as job roles and clearances change"
      ],
      steps: [
        "Implement role-based access controls for all media containing CUI based on job functions and clearance levels",
        "Deploy technical controls including encryption, rights management, and conditional access policies",
        "Establish media access logging and monitoring with automated alerting for unauthorized access attempts",
        "Configure regular access reviews to ensure media access permissions remain appropriate and current",
        "Implement supervisor approval processes for access to highly sensitive or compartmented CUI media",
        "Conduct regular audits of media access controls effectiveness and update based on threat intelligence"
      ],
      quiz: {
        q: "Which principle should guide media access control for CUI?",
        answers: [
          "All employees should have access to increase productivity",
          "Access should be based on need-to-know and least privilege principles",
          "Only IT personnel should have access to simplify management",
          "Access should be unlimited for management personnel"
        ],
        correctIndex: 1,
        explanation: "Media access should follow need-to-know and least privilege principles, granting access only to those who require it for their job functions."
      },
      resources: [
        { label: "Azure Information Protection", url: "https://learn.microsoft.com/en-us/azure/information-protection/" },
        { label: "NIST Access Control Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-162/final" },
        { label: "Windows Information Protection", url: "https://learn.microsoft.com/en-us/windows/security/information-protection/windows-information-protection/" },
        { label: "CUI Access Control Requirements", url: "https://www.archives.gov/cui/registry/category-list" }      ]
    }
  },  "PS": {
    "3.9.1": {
      title: "Personnel Screening",
      text: "Screen individuals prior to authorizing access to organizational systems containing CUI.",
      why: "Personnel screening ensures only trustworthy individuals gain access to sensitive systems and information. For MVL Group as a defense contractor, thorough personnel screening is required by DoD regulations and protects against insider threats that could compromise CUI and classified information.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Integrate Azure AD with HR systems for automated identity lifecycle management based on clearance status",
          "Deploy ServiceNow ITSM for clearance verification and access request workflows with automated approvals",
          "Configure Conditional Access policies that verify clearance status before granting access to CUI systems",
          "Implement automated monitoring for clearance status changes using HR system APIs and Azure Logic Apps",
          "Set up Azure AD Identity Governance for access reviews tied to personnel security requirements",
          "Deploy Microsoft Purview to classify and protect data based on clearance levels and access requirements"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Background investigations and security clearances are required before accessing systems containing CUI",
          "Your clearance status determines which systems and information you can access",
          "Periodic reinvestigations are required to maintain your clearance and system access",
          "Changes in your personal circumstances may require updating your security clearance",
          "Access to systems may be suspended if your clearance lapses or is under review",
          "You must report any changes that could affect your clearance eligibility immediately"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proper personnel screening reduces insider threat risks by 80% through background investigations",
          "Investment in personnel security maintains DoD contract eligibility and competitive advantage",
          "Thorough screening prevents costly security incidents and regulatory violations",
          "Personnel security compliance demonstrates organizational maturity to customers and partners",
          "Screening processes support cyber insurance requirements and may reduce premiums",
          "Documented personnel security protects against litigation and regulatory enforcement actions"
        ]
      },
      mvlTips: [
        "Azure AD integration with DCSA e-QIP system streamlines clearance verification processes",
        "ServiceNow workflows automatically route access requests based on clearance levels",
        "Conditional Access policies enforce clearance requirements before granting system access",
        "Monthly clearance status reports provided to security and management teams",
        "Emergency access procedures available for personnel awaiting clearance adjudication"
      ],
      steps: [
        "Establish personnel screening requirements based on system sensitivity and regulatory requirements",
        "Implement background investigation processes appropriate for access levels and clearance requirements",
        "Deploy automated systems for verifying and monitoring personnel security status",
        "Configure access control systems to enforce personnel security requirements before granting access",
        "Establish periodic review processes for maintaining current personnel security status",
        "Create emergency access procedures for personnel with pending security investigations"
      ],
      quiz: {
        q: "What is the primary purpose of personnel screening for CUI access?",
        answers: [
          "To ensure technical competency",
          "To verify trustworthiness and reliability for handling sensitive information",
          "To determine salary levels",
          "To assess communication skills"
        ],
        correctIndex: 1,
        explanation: "Personnel screening verifies trustworthiness and reliability to ensure only appropriate individuals have access to sensitive CUI systems and information."
      },
      resources: [
        { label: "Defense Security Service Personnel Security", url: "https://www.dcsa.mil/is/personnel-security/" },
        { label: "NIST Personnel Security Controls", url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" },
        { label: "Azure AD Identity Governance", url: "https://learn.microsoft.com/en-us/azure/active-directory/governance/" },
        { label: "CMMC Personnel Security Requirements", url: "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20211202_508.pdf" }
      ]
    },
    "3.9.2": {
      title: "Access Termination",
      text: "Ensure that organizational systems containing CUI are protected during and after personnel actions such as terminations and transfers.",
      why: "Personnel changes present significant security risks if access is not promptly modified or terminated. For MVL Group, proper access termination protects CUI from departing employees and ensures compliance with defense contractor security requirements.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy automated identity lifecycle management using Azure AD integrated with HR systems (Workday, ADP, etc.)",
          "Configure Microsoft Identity Manager (MIM) or Azure AD Connect for real-time provisioning and deprovisioning",
          "Implement automated access revocation workflows using Azure Logic Apps triggered by HR system changes",
          "Set up comprehensive access certification using Azure AD Access Reviews for transferred personnel",
          "Deploy privileged access management to immediately revoke elevated privileges during personnel actions",
          "Configure data loss prevention policies to prevent data exfiltration during departure processes"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your system access will be modified immediately when you change roles or leave the organization",
          "Access to CUI systems requires proper transition procedures when changing positions",
          "Company equipment and access credentials must be returned during departure processes",
          "Your manager will coordinate with IT and Security to ensure proper access transitions",
          "Some access may be suspended during investigation of personnel actions or security concerns",
          "Exit interviews include security briefings about ongoing obligations for CUI protection"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proper access termination reduces data breach risks by 70% through immediate access revocation",
          "Investment in automated termination processes prevents costly manual errors and security gaps",
          "Rapid access termination protects intellectual property and maintains competitive advantage",
          "Documented termination procedures demonstrate security controls to auditors and customers",
          "Automated processes ensure consistent application of security policies during personnel changes", 
          "Proper termination reduces legal liability and supports non-disclosure agreement enforcement"
        ]
      },
      mvlTips: [
        "Azure AD automated workflows revoke access within 15 minutes of HR system updates",
        "ServiceNow integration ensures all access requests are updated when personnel status changes",
        "BitLocker remote wipe capabilities protect data on devices during termination processes",
        "Microsoft Purview tracks document access to identify potential data exfiltration attempts",
        "Emergency termination procedures available for immediate access revocation when needed"
      ],
      steps: [
        "Implement automated identity lifecycle management connected to authoritative HR systems",
        "Configure real-time access revocation for all systems when personnel status changes",
        "Establish access certification processes to review and modify access during role transfers",
        "Deploy comprehensive monitoring for data access and transfer activities during personnel changes",
        "Create emergency termination procedures for immediate access revocation when required",
        "Conduct regular audits of termination processes to ensure effectiveness and compliance"
      ],
      quiz: {
        q: "When should system access be revoked for departing employees?",
        answers: [
          "At the end of their final work day",
          "One week after their departure",
          "Immediately upon notification of termination or transfer",
          "When they return their equipment"
        ],
        correctIndex: 2,
        explanation: "Access should be revoked immediately upon notification of termination or transfer to prevent unauthorized access during the departure process."
      },
      resources: [
        { label: "NIST Identity Management Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-63/3/final" },
        { label: "Azure AD Identity Lifecycle Management", url: "https://learn.microsoft.com/en-us/azure/active-directory/governance/what-is-identity-lifecycle-management" },
        { label: "Personnel Security Termination Procedures", url: "https://www.dcsa.mil/is/personnel-security/" },
        { label: "Microsoft Identity Manager", url: "https://learn.microsoft.com/en-us/microsoft-identity-manager/" }
      ]    }
  },  "PE": {
    "3.10.1": {
      title: "Physical Access Authorization",
      text: "Limit physical access to organizational systems, equipment, and the respective operating environments to authorized individuals.",
      why: "Physical access control is fundamental to cybersecurity - anyone with physical access can potentially bypass logical security controls. For MVL Group, protecting physical access to facilities where CUI is processed is essential for maintaining defense contractor security requirements.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy integrated physical access control system (PACS) with Azure AD authentication for identity verification",
          "Implement smart card readers integrated with PIV/CAC cards for high-security areas",
          "Configure video surveillance systems with AI analytics for unauthorized access detection and alert generation",
          "Set up environmental monitoring sensors with automated alerts for temperature, humidity, and intrusion detection",
          "Deploy visitor management systems integrated with background check APIs and escort requirement workflows",
          "Implement mobile device management (MDM) to prevent unauthorized devices in secure areas"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your badge or smart card is required to access secure areas where CUI is processed",
          "Some areas may require escort by authorized personnel, especially for visitors or new employees",
          "Physical access is monitored by video surveillance and logged for security and compliance purposes",
          "Tailgating (following someone through secured doors) is not permitted and may trigger security alerts",
          "Lost or stolen access cards must be reported immediately to prevent unauthorized access",
          "Different areas have different access requirements based on the sensitivity of information processed"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Physical access controls prevent 60% of insider threat incidents and protect against external intruders",
          "Investment in physical security protects intellectual property worth millions and maintains competitive advantage",
          "Proper physical controls demonstrate security maturity to DoD customers and support contract renewals",
          "Physical security compliance reduces cyber insurance premiums and improves coverage terms",
          "Access control systems provide audit trails essential for compliance and incident investigation",
          "Integrated physical and logical security creates comprehensive protection for CUI and business operations"
        ]
      },
      mvlTips: [
        "Azure AD integration enables single identity for both logical and physical access control",
        "Smart card authentication using PIV/CAC cards provides high-assurance identity verification",
        "AI-powered video analytics automatically detect and alert on suspicious physical activities",
        "Mobile apps provide emergency override capabilities for facilities management and security personnel",
        "Quarterly physical security assessments ensure controls remain effective against current threats"
      ],
      steps: [
        "Implement comprehensive physical access control system integrated with identity management platform",
        "Configure role-based physical access permissions based on job functions and clearance levels",
        "Deploy surveillance and monitoring systems with automated alerting for unauthorized access attempts",
        "Establish visitor management procedures including background checks and escort requirements",
        "Configure environmental monitoring and intrusion detection for all areas containing CUI systems",
        "Conduct regular physical security assessments and update access controls based on threat changes"
      ],
      quiz: {
        q: "What is the primary purpose of limiting physical access to systems containing CUI?",
        answers: [
          "To reduce facility costs",
          "To prevent bypassing of logical security controls",
          "To improve employee productivity",
          "To meet building code requirements"
        ],
        correctIndex: 1,
        explanation: "Physical access control prevents individuals from bypassing logical security controls that protect CUI systems and data."
      },
      resources: [
        { label: "NIST Physical and Environmental Protection", url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" },
        { label: "Physical Security for Federal Facilities", url: "https://www.dhs.gov/publication/physical-security-interagency-security-committee" },
        { label: "Azure AD Physical Access Integration", url: "https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/" },
        { label: "CMMC Physical Protection Requirements", url: "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20211202_508.pdf" }
      ]
    },
    "3.10.2": {
      title: "Physical Access Monitoring",
      text: "Protect and monitor the physical facility and support infrastructure for organizational systems.",
      why: "Continuous monitoring of physical environments ensures rapid detection of security incidents and environmental threats. For MVL Group, comprehensive physical monitoring protects both personnel safety and the integrity of systems processing CUI.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy comprehensive Building Management System (BMS) with IoT sensors for environmental monitoring",
          "Implement Security Information and Event Management (SIEM) integration for physical security events",
          "Configure automated alerting and response systems for physical security and environmental incidents",
          "Set up centralized monitoring dashboard combining physical access, environmental, and IT security data",
          "Deploy mobile applications for security personnel with real-time alerts and response capabilities",
          "Implement backup power and cooling systems with automated failover and monitoring capabilities"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "The facility is continuously monitored for security threats and environmental conditions",
          "You may receive evacuation or shelter-in-place instructions during security or environmental incidents",
          "Environmental monitoring helps maintain comfortable working conditions and equipment reliability",
          "Security monitoring helps ensure your safety and protects company assets from theft or damage",
          "Some monitoring systems may affect lighting, temperature, or air quality automatically",
          "Report any unusual environmental conditions or security concerns to facilities or security immediately"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Physical monitoring reduces security incident response time by 75% through automated detection and alerting",
          "Investment in monitoring prevents equipment failures that could cost millions in downtime and data loss",
          "Environmental monitoring maintains optimal conditions for expensive IT equipment and extends asset life",
          "Comprehensive monitoring demonstrates operational maturity to customers and insurance providers",
          "Monitoring data supports business continuity planning and disaster recovery capabilities",
          "Physical monitoring integration with cybersecurity creates comprehensive threat detection and response"
        ]
      },
      mvlTips: [
        "IoT sensors throughout facility monitor temperature, humidity, air quality, and occupancy in real-time",
        "Microsoft Azure IoT Central provides centralized dashboard for all physical monitoring systems",
        "Automated alerts sent to facilities, security, and IT teams based on configurable thresholds",
        "Mobile apps provide remote monitoring capabilities for management and security personnel",
        "Monthly monitoring system testing ensures reliable operation and alert delivery"
      ],
      steps: [
        "Deploy comprehensive environmental monitoring including temperature, humidity, air quality, and power systems",
        "Implement integrated security monitoring combining access control, surveillance, and intrusion detection",
        "Configure automated alerting and response procedures for all physical security and environmental threats",
        "Establish centralized monitoring operations with 24/7 coverage and escalation procedures",
        "Deploy redundant monitoring systems and backup power to ensure continuous operation",
        "Conduct regular testing of monitoring systems and update response procedures based on lessons learned"
      ],
      quiz: {
        q: "Effective physical facility monitoring should include:",
        answers: [
          "Only security cameras",
          "Only environmental sensors",
          "Comprehensive monitoring of security, environmental, and infrastructure systems",
          "Only fire detection systems"
        ],
        correctIndex: 2,
        explanation: "Comprehensive monitoring includes security systems, environmental conditions, and infrastructure to protect both personnel and systems processing CUI."
      },
      resources: [
        { label: "Building Security Design Guide", url: "https://www.dhs.gov/publication/building-design-guidance" },
        { label: "Azure IoT Central", url: "https://learn.microsoft.com/en-us/azure/iot-central/" },
        { label: "NIST Physical Monitoring Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" },
        { label: "Facility Security Standards", url: "https://www.gsa.gov/cdnstatic/Facility_Security_Level_Determinations_for_Federal_Facilities_May_2008.pdf" }
      ]    }
  },  "RA": {
    "3.11.1": {
      title: "Risk Assessment Process",
      text: "Periodically assess the risk to organizational operations, organizational assets, and individuals, resulting from the operation of organizational systems and the associated processing, storage, or transmission of CUI.",
      why: "Regular risk assessments identify threats, vulnerabilities, and potential impacts to prioritize security investments and mitigation strategies. For MVL Group, systematic risk assessment ensures we understand and manage risks to our defense contractor operations and CUI data.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Defender for Cloud for automated security posture assessment and risk scoring",
          "Implement Azure Security Center for continuous vulnerability assessment and threat intelligence integration",
          "Configure Microsoft Threat Modeling Tool for systematic application and infrastructure risk analysis",
          "Set up Azure Sentinel for threat hunting and risk indicator correlation across all systems",
          "Deploy Qualys VMDR or similar for comprehensive vulnerability management and risk quantification",
          "Implement GRC platforms like ServiceNow or MetricStream for enterprise risk management and reporting"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "You may participate in risk assessment interviews to identify operational risks and security concerns",
          "Your work processes and systems will be regularly evaluated for security risks and vulnerabilities",
          "Risk assessment results may lead to changes in procedures, technology, or training requirements",
          "You should report new security risks or changes that could impact risk levels immediately",
          "Risk mitigation activities may temporarily affect system availability or user procedures",
          "Understanding risks helps you make better security decisions in your daily work activities"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Risk assessments reduce security incident likelihood by 65% through proactive identification and mitigation",
          "Investment in risk assessment provides 8:1 return through avoided incident costs and improved decision-making",
          "Regular risk assessment demonstrates due diligence to DoD customers, auditors, and cyber insurance providers",
          "Risk-based security investments optimize resource allocation and maximize protection effectiveness",
          "Quantified risk data supports business decisions about technology, processes, and security investments",
          "Risk assessment drives continuous improvement and adaptation to evolving threat landscapes"
        ]
      },
      mvlTips: [
        "Microsoft Defender for Cloud provides real-time risk scoring across all Azure and hybrid resources",
        "Automated risk assessment workflows trigger whenever new systems are deployed or configurations change",
        "Risk register integrated with ServiceNow for tracking, assignment, and remediation progress monitoring",
        "Quarterly risk briefings provided to executive leadership with trend analysis and recommendations",
        "Third-party risk assessments conducted annually by certified security professionals"
      ],
      steps: [
        "Establish risk assessment methodology aligned with NIST SP 800-30 and industry best practices",
        "Deploy automated security posture assessment tools with continuous monitoring capabilities",
        "Conduct systematic threat modeling for all systems processing CUI or critical business functions",
        "Perform regular vulnerability assessments and penetration testing to identify technical risks",
        "Maintain comprehensive risk register with quantified impacts, probabilities, and mitigation strategies",
        "Review and update risk assessments based on changes to systems, threats, or business operations"
      ],
      quiz: {
        q: "How often should risk assessments be conducted in a CMMC environment?",
        answers: [
          "Only when problems occur",
          "Annually at minimum", 
          "Periodically based on risk level and significant changes",
          "Never, as they're not required"
        ],
        correctIndex: 2,
        explanation: "Risk assessments should be conducted periodically based on the organization's risk level and when significant changes occur to systems, threats, or business operations."
      },
      resources: [
        { label: "NIST SP 800-30 Risk Assessment Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final" },
        { label: "Microsoft Defender for Cloud", url: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/" },
        { label: "CMMC Risk Management Requirements", url: "https://www.acq.osd.mil/cmmc/docs/CMMC_Model_Main_20211202_508.pdf" },
        { label: "Threat Modeling Guidelines", url: "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool" }
      ]
    },
    "3.11.2": {
      title: "Vulnerability Scanning",
      text: "Scan for vulnerabilities in organizational systems and applications periodically and when new vulnerabilities potentially affecting the systems are identified.",
      why: "Vulnerability scanning identifies security weaknesses before attackers can exploit them. For MVL Group, regular vulnerability scanning of systems processing CUI is essential for maintaining security posture and DoD compliance requirements.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Defender Vulnerability Management for comprehensive endpoint and server scanning",
          "Implement Qualys VMDR or Rapid7 InsightVM for enterprise vulnerability management and reporting",
          "Configure automated web application scanning using Azure Security Center or Nessus Professional",
          "Set up database vulnerability scanning using tools like DbProtect or Imperva SecureSphere",
          "Deploy network vulnerability scanning using Nmap, OpenVAS, or commercial tools like Nessus",
          "Implement CI/CD pipeline security scanning using GitHub Security, SonarQube, or Veracode"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your workstation and applications will be regularly scanned for security vulnerabilities",
          "Vulnerability scans may temporarily slow system performance during scanning windows",
          "Critical vulnerabilities will trigger automatic patching which may require system restarts",
          "You may receive notifications about security updates or configuration changes following scans",
          "Report any unusual system behavior that could indicate unpatched vulnerabilities",
          "Vulnerability remediation activities help protect your data and maintain system reliability"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Regular vulnerability scanning reduces exploit risks by 85% through proactive identification and patching",
          "Investment in vulnerability management prevents breach costs averaging $4.45M per incident",
          "Automated scanning scales efficiently and reduces manual security assessment costs",
          "Vulnerability metrics demonstrate security program effectiveness to customers and auditors",
          "Compliance with scanning requirements maintains DoD contract eligibility and competitive advantage",
          "Proactive vulnerability management supports cyber insurance requirements and reduces premiums"
        ]
      },
      mvlTips: [
        "Microsoft Defender Vulnerability Management provides integrated scanning across Windows, Linux, and mobile devices",
        "Automated scanning schedules configured during maintenance windows to minimize business impact",
        "Critical vulnerability alerts trigger immediate response with 24-48 hour remediation SLAs",
        "Vulnerability dashboard provides executive visibility into security posture and remediation progress",
        "Integration with patch management systems enables automated remediation for approved updates"
      ],
      steps: [
        "Deploy comprehensive vulnerability scanning tools covering all systems, applications, and network infrastructure",
        "Configure automated scanning schedules with frequency based on system criticality and risk levels",
        "Establish vulnerability classification and prioritization procedures based on CVSS scores and business impact",
        "Implement automated alerting and workflow assignment for critical and high-priority vulnerabilities",
        "Configure integration between vulnerability scanning and patch management systems for rapid remediation",
        "Conduct regular validation scans to verify successful vulnerability remediation and system hardening"
      ],
      quiz: {
        q: "What should trigger vulnerability scanning in addition to regular scheduled scans?",
        answers: [
          "Only when systems are compromised",
          "When new vulnerabilities are identified that potentially affect your systems",
          "Only during annual security assessments",
          "When specifically requested by management"
        ],
        correctIndex: 1,
        explanation: "Vulnerability scanning should be triggered when new vulnerabilities are identified that could potentially affect organizational systems, in addition to regular scheduled scans."
      },
      resources: [
        { label: "NIST Vulnerability Management Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-40/rev-4/final" },
        { label: "Microsoft Defender Vulnerability Management", url: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-vulnerability-management/" },
        { label: "CVSS Vulnerability Scoring", url: "https://www.first.org/cvss/" },
        { label: "Vulnerability Scanning Best Practices", url: "https://www.sans.org/white-papers/vulnerability-assessment-penetration-testing/" }
      ]
    }
  },  "CA": {
    "3.12.1": {
      title: "Security Control Assessments", 
      text: "Periodically assess the security controls in organizational systems to determine if the controls are effective in their application.",
      why: "Regular security control assessments verify that implemented controls are working as intended and providing adequate protection. For MVL Group, systematic control assessment ensures our CMMC controls remain effective and compliant with DoD requirements.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Compliance Manager for automated CMMC control assessment and evidence collection",
          "Implement Azure Policy for continuous compliance monitoring and automatic remediation of control deviations",
          "Configure Microsoft Purview for data governance and protection control assessment across all platforms",
          "Set up Azure Security Center for infrastructure security control validation and reporting",
          "Deploy automated security control testing using PowerShell DSC, Ansible, or similar configuration management tools",
          "Implement third-party GRC tools like MetricStream or ServiceNow GRC for comprehensive control assessment workflows"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your work processes and system usage will be periodically reviewed to ensure security controls are effective",
          "You may be interviewed during control assessments to verify procedures are followed correctly",
          "Control assessment results may lead to updates in training, procedures, or technology configurations",
          "Some systems may temporarily have restricted access during security control testing activities",
          "Assessment findings help identify gaps that could put you and the organization at risk",
          "Your feedback during assessments helps improve security controls and make them more effective"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Security control assessments reduce compliance risks by 75% through continuous monitoring and validation",
          "Investment in control assessment prevents regulatory violations that could result in contract loss",
          "Regular assessments demonstrate security program maturity to DoD customers and CMMC assessors",
          "Control effectiveness metrics support security investment decisions and resource allocation",
          "Assessment documentation provides evidence for cyber insurance and reduces premium costs",
          "Continuous control monitoring enables rapid detection and correction of security gaps"
        ]
      },
      mvlTips: [
        "Microsoft Compliance Manager provides automated CMMC control mapping and assessment capabilities",
        "Azure Policy continuously monitors control implementation and automatically remediate deviations",
        "Monthly control assessment reports provided to leadership with trend analysis and recommendations",
        "Integration with ITSM systems ensures assessment findings are tracked and remediated promptly",
        "Annual third-party control assessments validate internal assessment results and identify blind spots"
      ],
      steps: [
        "Establish security control assessment procedures aligned with NIST SP 800-53A assessment procedures",
        "Deploy automated tools for continuous control monitoring and periodic assessment execution",
        "Create control assessment schedules based on control criticality and risk levels",
        "Implement evidence collection and documentation procedures for all assessed controls",
        "Configure automated reporting and dashboard capabilities for control assessment results",
        "Establish corrective action procedures for controls found to be ineffective or improperly implemented"
      ],
      quiz: {
        q: "The primary purpose of security control assessments is to determine if controls are:",
        answers: [
          "Expensive to implement and maintain",
          "Effective in their application and providing intended protection",
          "Easy to use and user-friendly",
          "Popular with users and management"
        ],
        correctIndex: 1,
        explanation: "Security control assessments determine whether controls are effective in providing their intended security protection and operating as designed."
      },
      resources: [
        { label: "NIST SP 800-53A Assessment Procedures", url: "https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final" },
        { label: "Microsoft Compliance Manager", url: "https://learn.microsoft.com/en-us/purview/compliance-manager" },
        { label: "Azure Policy Compliance", url: "https://learn.microsoft.com/en-us/azure/governance/policy/" },
        { label: "CMMC Assessment Guide", url: "https://www.acq.osd.mil/cmmc/docs/CMMC_Assessment_Guide_Level_2_V2.0_20220201_508.pdf" }
      ]
    },
    "3.12.2": {
      title: "Plan of Action and Milestones",
      text: "Develop, document, and implement plans of action and milestones for organizational systems to document planned remedial actions to correct weaknesses or deficiencies noted during the assessment of the controls and to reduce or eliminate known vulnerabilities in the systems.",
      why: "Plans of Action and Milestones (POA&Ms) ensure systematic tracking and remediation of security weaknesses. For MVL Group, documented POA&Ms demonstrate commitment to continuous improvement and support CMMC compliance efforts.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy ServiceNow IT Service Management for comprehensive POA&M tracking and workflow management",
          "Implement Microsoft Project or Azure DevOps for project management and milestone tracking of remediation activities",
          "Configure automated POA&M generation from vulnerability scanners, compliance tools, and assessment findings",
          "Set up integration between POA&M systems and change management processes for coordinated remediation",
          "Deploy dashboard and reporting capabilities using Power BI or similar tools for executive visibility",
          "Implement automated notifications and escalation procedures for overdue or high-priority POA&M items"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Security weaknesses and improvement opportunities are tracked systematically until resolved",
          "You may be assigned action items related to POA&M remediation efforts in your area",
          "POA&M activities may temporarily affect system availability or require procedure changes",
          "Your input helps prioritize remediation activities based on operational impact and business needs",
          "Regular updates on POA&M progress help you understand security improvement initiatives",
          "Completed POA&M items result in improved security protections for your work environment"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "POA&M processes reduce time to remediate security weaknesses by 60% through systematic tracking",
          "Investment in POA&M management prevents minor issues from becoming major security incidents",
          "Documented remediation plans demonstrate organizational maturity to customers and assessors",
          "POA&M metrics provide visibility into security program effectiveness and resource needs",
          "Systematic remediation supports continuous compliance with CMMC and other regulatory requirements",
          "POA&M documentation supports cyber insurance applications and may reduce premium costs"
        ]
      },
      mvlTips: [
        "ServiceNow GRC module provides comprehensive POA&M lifecycle management with automated workflows",
        "Integration with vulnerability scanners automatically creates POA&M entries for new findings",
        "Executive dashboard provides real-time visibility into POA&M status and remediation progress",
        "Risk-based prioritization ensures critical weaknesses are addressed first",
        "Monthly POA&M reviews with stakeholders ensure accountability and progress tracking"
      ],
      steps: [
        "Establish POA&M procedures covering identification, documentation, assignment, and tracking of security weaknesses",
        "Deploy POA&M management tools with workflow capabilities and integration to security assessment systems",
        "Create risk-based prioritization criteria for POA&M items based on CVSS scores and business impact",
        "Implement assignment and accountability procedures with clear roles and responsibilities for remediation",
        "Configure automated reporting and dashboard capabilities for POA&M status and metrics",
        "Establish periodic review and update procedures to ensure POA&M items remain current and actionable"
      ],
      quiz: {
        q: "What is the primary purpose of a Plan of Action and Milestones (POA&M)?",
        answers: [
          "To document planned remedial actions for security weaknesses and vulnerabilities",
          "To create work schedules for IT personnel",
          "To track software license compliance",
          "To manage user access requests"
        ],
        correctIndex: 0,
        explanation: "POA&Ms document planned remedial actions to correct security weaknesses and reduce vulnerabilities identified during control assessments."
      },
      resources: [
        { label: "NIST POA&M Guidance", url: "https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final" },
        { label: "ServiceNow GRC", url: "https://www.servicenow.com/products/governance-risk-compliance.html" },
        { label: "CMMC POA&M Requirements", url: "https://www.acq.osd.mil/cmmc/" },
        { label: "Federal POA&M Process", url: "https://csrc.nist.gov/projects/risk-management/about-rmf" }
      ]
    }
  },  "SC": {
    "3.13.1": {
      title: "Boundary Protection",
      text: "Monitor, control, and protect organizational communications at the external boundaries and key internal boundaries of the systems.",
      why: "Network boundary protection prevents unauthorized access and monitors for malicious traffic entering or leaving the organization. For MVL Group, comprehensive boundary protection is essential for protecting our GCC High environment and preventing lateral movement of threats.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Zscaler Cloud Firewall or Azure Firewall for comprehensive network boundary protection and inspection",
          "Implement Microsoft Defender for Office 365 for email boundary protection and advanced threat protection",
          "Configure network segmentation using Azure Virtual Network (VNet) and Network Security Groups (NSGs)",
          "Set up intrusion detection and prevention systems (IDS/IPS) using Azure Sentinel and third-party solutions",
          "Deploy web application firewalls (WAF) using Azure Application Gateway or Cloudflare for application protection",
          "Implement network access control (NAC) solutions integrated with Azure AD for device-based boundary enforcement"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your internet and email communications are monitored and filtered for security threats",
          "Some websites or file types may be blocked to prevent malware and data exfiltration",
          "VPN connections are required when accessing company resources from external networks",
          "Network monitoring may detect and investigate unusual communication patterns from your devices",
          "Security boundaries help protect you from phishing, malware, and other external threats",
          "Report any connectivity issues that might indicate boundary protection problems"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Boundary protection blocks 95% of external attacks and prevents lateral movement within networks",
          "Investment in boundary security prevents data breaches that average $4.45M in recovery costs",
          "Network segmentation limits blast radius of security incidents and reduces business disruption",
          "Comprehensive boundary protection demonstrates security maturity to DoD customers and assessors",
          "Monitoring capabilities provide early warning of advanced persistent threats and targeted attacks",
          "Proper boundary controls reduce cyber insurance premiums and support favorable coverage terms"
        ]
      },
      mvlTips: [
        "Zscaler Cloud Firewall provides comprehensive inspection of all traffic without requiring on-premises hardware",
        "Microsoft Defender for Office 365 integrates with boundary protection to block threats at the email gateway",
        "Azure Sentinel correlates boundary protection events with endpoint and identity security data",
        "Network segmentation automatically isolates CUI processing systems from general business networks",
        "Real-time threat intelligence feeds update boundary protection rules to block latest attack patterns"
      ],
      steps: [
        "Implement comprehensive firewall and intrusion prevention systems at all network boundaries",
        "Configure network segmentation to isolate critical systems and limit lateral movement opportunities",
        "Deploy application-layer inspection and protection for web, email, and other communication protocols",
        "Set up comprehensive logging and monitoring of all boundary protection activities and events",
        "Establish automated threat intelligence integration to update protection rules based on current threats",
        "Conduct regular testing and validation of boundary protection effectiveness through penetration testing"
      ],
      quiz: {
        q: "Effective boundary protection should be implemented at which locations?",
        answers: [
          "External network perimeters only",
          "Internal network boundaries only",
          "Both external perimeters and key internal boundaries",
          "Only at internet connection points"
        ],
        correctIndex: 2,
        explanation: "Boundary protection must be implemented at both external perimeters and key internal network boundaries to prevent and limit the spread of threats."
      },
      resources: [
        { label: "NIST SP 800-41 Firewall Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final" },
        { label: "Azure Firewall Documentation", url: "https://learn.microsoft.com/en-us/azure/firewall/" },
        { label: "Network Security Architecture", url: "https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/" },
        { label: "Zero Trust Network Principles", url: "https://learn.microsoft.com/en-us/security/zero-trust/deploy/networks" }
      ]
    },
    "3.13.2": {
      title: "Security Function Isolation",
      text: "Employ architectural designs, software development techniques, and systems engineering principles that promote effective information security within organizational systems.",
      why: "Security function isolation ensures that security mechanisms cannot be bypassed or disabled by unauthorized users or malicious code. For MVL Group, proper isolation protects the integrity of security controls protecting CUI and maintains defense-in-depth.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Implement hypervisor-based isolation using Azure Virtual Machines with Trusted Launch and secure boot",
          "Deploy application isolation using Windows Defender Application Guard and virtualization-based security",
          "Configure privileged access workstations (PAWs) with hardware-based isolation for administrative functions",
          "Set up container security isolation using Azure Container Instances and Kubernetes security policies",
          "Implement network micro-segmentation using Azure Virtual Network and zero-trust architecture principles",
          "Deploy hardware security modules (HSMs) or Azure Dedicated HSM for cryptographic function isolation"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Security functions on your computer run in isolated environments that cannot be tampered with",
          "Some administrative tasks require separate, isolated systems to prevent security bypass",
          "Security software and antivirus cannot be disabled or modified by regular user applications",
          "Sensitive functions like encryption may use dedicated hardware that's separate from normal processing",
          "Isolation may mean some applications or functions work differently than on personal computers",
          "These isolations protect you by ensuring security functions work even if other systems are compromised"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Security function isolation reduces successful attack impact by 80% through containment and prevention",
          "Investment in isolation technologies prevents bypass attacks that could compromise entire infrastructure",
          "Architectural security isolation demonstrates advanced security maturity to customers and assessors",
          "Proper isolation enables rapid containment and recovery from security incidents",
          "Hardware-based isolation provides strongest protection for cryptographic keys and sensitive operations",
          "Security isolation supports compliance with advanced DoD security requirements and FIPS standards"
        ]
      },
      mvlTips: [
        "Azure Virtual Machines with Trusted Launch provide hardware-based security function isolation",
        "Windows Defender Application Guard isolates web browsing in dedicated containers",
        "Privileged Access Workstations (PAWs) provide dedicated, isolated environment for administrative tasks",
        "Azure Dedicated HSM ensures cryptographic operations are isolated from general computing environments",
        "Hypervisor-level isolation prevents malware from tampering with security functions"
      ],
      steps: [
        "Implement hardware-based security isolation using trusted computing and secure boot technologies",
        "Deploy privileged access isolation through dedicated workstations and administrative networks",
        "Configure application isolation to prevent malware from interfering with security functions",
        "Set up cryptographic function isolation using hardware security modules or dedicated secure processors",
        "Implement network-level isolation to separate security management from operational networks",
        "Conduct regular testing to verify security isolation effectiveness and detect bypass attempts"
      ],
      quiz: {
        q: "What is the primary benefit of security function isolation?",
        answers: [
          "Reduces hardware costs",
          "Improves system performance",
          "Prevents security mechanisms from being bypassed or disabled",
          "Simplifies system administration"
        ],
        correctIndex: 2,
        explanation: "Security function isolation prevents security mechanisms from being bypassed, disabled, or tampered with by unauthorized users or malicious code."
      },
      resources: [
        { label: "Trusted Computing Guidelines", url: "https://csrc.nist.gov/publications/detail/sp/800-164/final" },
        { label: "Azure Trusted Launch", url: "https://learn.microsoft.com/en-us/azure/virtual-machines/trusted-launch" },
        { label: "Windows Defender Application Guard", url: "https://learn.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-application-guard/" },
        { label: "Privileged Access Workstations", url: "https://learn.microsoft.com/en-us/security/compass/privileged-access-deployment" }
      ]
    }
  },  "SI": {
    "3.14.1": {
      title: "Flaw Remediation",
      text: "Identify, report, and correct system flaws in a timely manner.",
      why: "System flaws and vulnerabilities provide entry points for attackers. Timely remediation reduces the window of opportunity for exploitation. For MVL Group, rapid flaw remediation is essential for protecting CUI and maintaining compliance with DoD security requirements.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Defender Vulnerability Management for automated flaw identification and prioritized remediation",
          "Implement Windows Server Update Services (WSUS) or Azure Update Management for centralized patch deployment",
          "Configure automated patch testing using Azure DevTest Labs or similar isolated testing environments",
          "Set up Microsoft System Center Configuration Manager (SCCM) for enterprise patch management and rollback capabilities",
          "Deploy application vulnerability scanning using tools like Veracode, Checkmarx, or GitHub Security",
          "Implement zero-day threat protection using Microsoft Defender Advanced Threat Protection behavioral analysis"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your computer will receive security updates automatically to fix newly discovered vulnerabilities",
          "Some updates may require system restarts, typically scheduled during maintenance windows",
          "Critical security flaws will trigger immediate updates that may temporarily interrupt work",
          "You should report any unusual system behavior that could indicate unpatched security flaws",
          "Software applications will be kept current with latest security patches and updates",
          "Emergency patching may occasionally require immediate system shutdown for critical vulnerabilities"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Timely flaw remediation reduces successful exploit attempts by 90% through rapid vulnerability closure",
          "Investment in patch management prevents security incidents that average $4.45M in recovery costs",
          "Automated patching scales efficiently and reduces manual IT effort while improving security posture",
          "Rapid flaw remediation demonstrates security program effectiveness to DoD customers and assessors",
          "Patch management metrics provide visibility into security program performance and resource needs",
          "Proactive flaw remediation supports cyber insurance requirements and reduces premium costs"
        ]
      },
      mvlTips: [
        "Microsoft Defender Vulnerability Management provides risk-based prioritization for patch deployment",
        "Automated patch testing ensures updates don't break business-critical applications before deployment",
        "Emergency patching procedures enable 24-48 hour response for critical zero-day vulnerabilities",
        "Patch management dashboard provides executive visibility into remediation progress and security posture",
        "Integration with change management ensures all patches follow proper approval and documentation procedures"
      ],
      steps: [
        "Implement comprehensive vulnerability scanning to identify system flaws across all platforms and applications",
        "Deploy automated patch management with testing capabilities and controlled rollout procedures",
        "Establish risk-based prioritization for flaw remediation based on CVSS scores and business impact",
        "Configure automated reporting and tracking of flaw identification, testing, and remediation activities",
        "Implement emergency patching procedures for critical vulnerabilities with accelerated timelines",
        "Conduct regular validation testing to ensure patches are successfully applied and flaws are remediated"
      ],
      quiz: {
        q: "Critical security flaws should typically be remediated within what timeframe?",
        answers: [
          "30 days from discovery",
          "During the next scheduled maintenance window",
          "24-72 hours for critical vulnerabilities affecting CUI systems",
          "When convenient for IT staff"
        ],
        correctIndex: 2,
        explanation: "Critical security flaws, especially those affecting CUI systems, should be remediated within 24-72 hours to minimize exposure to exploitation."
      },
      resources: [
        { label: "Microsoft Defender Vulnerability Management", url: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-vulnerability-management/" },
        { label: "NIST SP 800-40 Patch Management Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-40/rev-4/final" },
        { label: "Azure Update Management", url: "https://learn.microsoft.com/en-us/azure/automation/update-management/overview" },
        { label: "CVSS Vulnerability Scoring", url: "https://www.first.org/cvss/user-guide" }
      ]
    },
    "3.14.2": {
      title: "Malicious Code Protection",
      text: "Provide protection from malicious code at designated locations within organizational systems.",
      why: "Malicious code can cause significant damage to systems and data. Comprehensive protection prevents and detects malware across all system entry points. For MVL Group, multi-layered malicious code protection is essential for protecting CUI and maintaining operational continuity.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Defender for Endpoint with behavior-based detection and automated response capabilities",
          "Implement Microsoft Defender for Office 365 with Safe Attachments and Safe Links for email protection",
          "Configure Windows Defender Application Control (WDAC) to prevent unauthorized application execution",
          "Set up Microsoft Cloud App Security for shadow IT discovery and cloud application malware protection",
          "Deploy network-based malware detection using Microsoft Defender for IoT and third-party solutions",
          "Implement endpoint detection and response (EDR) with automated isolation and remediation capabilities"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your computer has multiple layers of protection against viruses, malware, and other malicious software",
          "Email attachments and links are automatically scanned and may be blocked if they contain threats",
          "Some software installations may be blocked to prevent malware from running on your system",
          "Malware protection runs continuously and may occasionally impact system performance during scans",
          "Suspicious files or activities will trigger automatic alerts and may isolate your device temporarily",
          "Report any unusual system behavior, pop-ups, or performance issues that could indicate malware"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Multi-layered malicious code protection blocks 99.5% of malware attacks and reduces incident response costs",
          "Investment in comprehensive protection prevents ransomware and data destruction that could cost millions",
          "Advanced threat protection detects sophisticated attacks that traditional antivirus misses",
          "Malware protection demonstrates security program maturity to customers and supports contract requirements",
          "Automated response capabilities reduce incident response time and minimize business disruption",
          "Comprehensive protection supports cyber insurance requirements and reduces premium costs"
        ]
      },
      mvlTips: [
        "Microsoft Defender for Endpoint uses machine learning and behavioral analysis to detect unknown threats",
        "Email security includes attachment sandboxing and URL reputation checking in real-time",
        "Application control policies prevent unauthorized software from executing, even if it bypasses other protections",
        "Cloud app security monitors for malware in sanctioned and unsanctioned cloud applications",
        "Automated incident response isolates infected devices and prevents lateral malware spread"
      ],
      steps: [
        "Deploy comprehensive endpoint protection with real-time scanning, behavioral analysis, and automated response",
        "Implement email security with attachment sandboxing, URL filtering, and safe links protection",
        "Configure application control policies to prevent unauthorized software execution",
        "Set up network-based malware detection and prevention at key network chokepoints",
        "Establish automated incident response procedures for malware detection and containment",
        "Conduct regular testing of malware protection effectiveness using approved testing frameworks"
      ],
      quiz: {
        q: "Effective malicious code protection should be deployed:",
        answers: [
          "Only on email servers",
          "Only on user workstations",
          "At designated locations throughout the organization based on risk assessment",
          "Only at network perimeters"
        ],
        correctIndex: 2,
        explanation: "Malicious code protection should be deployed at designated locations throughout the organization based on risk assessment, including endpoints, servers, email, web, and network boundaries."
      },
      resources: [
        { label: "Microsoft Defender for Endpoint", url: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/" },
        { label: "NIST SP 800-83 Malware Protection Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-83/rev-1/final" },
        { label: "Windows Defender Application Control", url: "https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/" },
        { label: "Microsoft Defender for Office 365", url: "https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/" }
      ]
    },
    "3.14.3": {
      title: "Security Alerts and Advisories",
      text: "Monitor system security alerts and advisories and take action in response.",
      why: "Security alerts and advisories provide early warning of new threats and vulnerabilities. Prompt response to security information prevents exploitation of newly discovered attack vectors. For MVL Group, staying current with security advisories is essential for protecting against evolving threats to CUI systems.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Sentinel with automated threat intelligence feeds and custom alert rules for security advisory monitoring",
          "Configure Microsoft Security Response Center (MSRC) advisory subscriptions and automated processing workflows",
          "Implement vulnerability intelligence feeds from sources like CISA, NVD, and commercial threat intelligence providers",
          "Set up automated correlation between security advisories and internal asset inventory using Azure Asset Inventory",
          "Deploy SOAR capabilities using Azure Logic Apps or Microsoft Power Automate for automated advisory response",
          "Configure executive reporting and dashboard capabilities for security advisory trends and response metrics"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "You may receive security alerts about new threats relevant to your systems or applications",
          "Security advisories may result in emergency patches or configuration changes to protect systems",
          "Some security alerts may require immediate action like changing passwords or avoiding certain websites",
          "Regular security briefings keep you informed about current threats and protection measures",
          "Your vigilance in reporting suspicious activities helps verify and respond to security advisories",
          "Security advisory responses may temporarily restrict access to certain systems or applications"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Proactive security advisory monitoring reduces zero-day attack success by 70% through early warning and response",
          "Investment in threat intelligence and advisory monitoring prevents attacks before they impact operations",
          "Rapid advisory response demonstrates security program maturity to customers and regulatory bodies",
          "Security intelligence supports risk-based decision making and resource allocation for threat response",
          "Advisory monitoring enables proactive defense posture rather than reactive incident response",
          "Documented advisory response processes support compliance requirements and audit expectations"
        ]
      },
      mvlTips: [
        "Microsoft Sentinel automatically correlates threat intelligence with organizational assets and generates prioritized alerts",
        "CISA cybersecurity advisories are monitored 24/7 with automated impact assessment for MVL systems",
        "Security Operations Center (SOC) receives real-time threat intelligence feeds from multiple commercial sources",
        "Executive threat briefings provided weekly with current threat landscape and organizational impact assessment",
        "Automated vulnerability assessment triggered immediately when new advisories affect deployed software or systems"
      ],
      steps: [
        "Subscribe to authoritative security advisory sources including CISA, NIST, MSRC, and vendor-specific feeds",
        "Implement automated monitoring and correlation of security advisories with organizational asset inventory",
        "Establish risk-based prioritization procedures for security advisory response based on threat severity and asset criticality",
        "Configure automated alerting and escalation procedures for high-priority security advisories",
        "Deploy response workflows and procedures for different types of security advisories and threat intelligence",
        "Conduct regular testing and validation of security advisory monitoring and response capabilities"
      ],
      quiz: {
        q: "When should organizations respond to security alerts and advisories?",
        answers: [
          "Only if they directly affect current systems",
          "Promptly, with response time based on severity and organizational risk",
          "During regular business hours only",
          "Only after incidents have been reported"
        ],
        correctIndex: 1,
        explanation: "Organizations should respond promptly to security alerts and advisories, with response time based on the severity of the threat and the organization's risk exposure."
      },
      resources: [
        { label: "CISA Cybersecurity Advisories", url: "https://www.cisa.gov/news-events/cybersecurity-advisories" },
        { label: "Microsoft Security Response Center", url: "https://msrc.microsoft.com/blog/" },
        { label: "NIST National Vulnerability Database", url: "https://nvd.nist.gov/" },
        { label: "Microsoft Sentinel Threat Intelligence", url: "https://learn.microsoft.com/en-us/azure/sentinel/understand-threat-intelligence" }
      ]
    }
  }
};

export const MVL_ABOUT = `
MVL is an industry leading US Government Prime Contractor with an International footprint that provides Design and Build services to the defense, construction, and engineering industries. MVL's construction management team works with clients to help them exceed industry standards and improve performance.
`;
