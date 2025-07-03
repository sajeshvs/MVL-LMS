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
    }
  }
};

export const MVL_ABOUT = `
MVL is an industry leading US Government Prime Contractor with an International footprint that provides Design and Build services to the defense, construction, and engineering industries. MVL's construction management team works with clients to help them exceed industry standards and improve performance.
`;
