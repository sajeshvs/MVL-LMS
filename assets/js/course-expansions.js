// Comprehensive Course Expansion Data
// This file contains the detailed expansions for all remaining MVL-LMS courses

const COURSE_EXPANSIONS = {
  "MA": {
    "3.7.2": {
      title: "Controlled Maintenance",
      text: "Perform maintenance on organizational systems only with appropriate controls and monitoring in place to ensure security and availability.",
      why: "Controlled maintenance ensures that system maintenance activities do not inadvertently compromise system security, introduce vulnerabilities, or cause unplanned downtime. For MVL Group, this means maintaining our security posture even during necessary system updates and repairs.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Implement Azure Monitor and Log Analytics for comprehensive maintenance activity logging",
          "Deploy Azure Privileged Identity Management (PIM) for just-in-time maintenance access",
          "Configure ServiceNow or Azure DevOps for maintenance request tracking and approval workflows",
          "Set up Azure Automation for controlled, scripted maintenance execution",
          "Deploy Microsoft System Center Operations Manager for real-time maintenance monitoring",
          "Configure backup verification and rollback procedures before major maintenance activities"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "All maintenance activities are logged and monitored for security and compliance",
          "Maintenance personnel must use approved procedures and documented processes",
          "System changes during maintenance are tracked and can be rolled back if issues occur",
          "Emergency maintenance follows special approval processes to ensure security",
          "Report any unusual system behavior following maintenance activities",
          "Maintenance access is temporary and automatically expires after completion"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Reduces security incidents during maintenance through controlled access procedures",
          "Provides audit trail for compliance and security incident investigation",
          "Minimizes business disruption through tested and approved maintenance procedures",
          "Enables rapid rollback of failed maintenance to restore business operations",
          "Supports regulatory compliance through documented maintenance controls",
          "Reduces maintenance-related downtime through systematic planning and monitoring"
        ]
      }
    }
  },
  
  "MP": {
    "3.8.1": {
      title: "Media Access Control",
      text: "Restrict access to digital and non-digital media containing sensitive information to authorized individuals.",
      why: "Media containing sensitive information represents a concentrated risk - if compromised, entire datasets can be exposed. For MVL Group, this includes backup tapes, USB drives, laptops, and any portable storage containing client data or proprietary information.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy Microsoft Information Protection (MIP) for automatic data classification and protection",
          "Configure Windows Information Protection (WIP) to prevent data leakage to unauthorized media",
          "Implement Azure Information Protection for document and email encryption",
          "Set up Microsoft Endpoint DLP to monitor and control media usage",
          "Deploy BitLocker and Azure Disk Encryption for full-disk encryption on all media",
          "Configure Microsoft Defender for Endpoint for removable media monitoring and control"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "USB drives and external media are automatically encrypted when used with company data",
          "Personal devices cannot access or store company information",
          "Approved portable media must be used for legitimate business purposes only",
          "Lost or stolen media should be reported immediately to IT security",
          "Media containing sensitive data requires special handling and disposal procedures",
          "Remote access to company data is controlled and monitored for security"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Protects against data breaches from lost or stolen portable media",
          "Ensures CMMC compliance for media protection requirements",
          "Reduces risk of intellectual property theft through unauthorized media access",
          "Supports incident response through media access monitoring and logging",
          "Enables secure remote work through controlled media access policies",
          "Protects client data and maintains trust through comprehensive media controls"
        ]
      }
    }
  },

  "PS": {
    "3.9.1": {
      title: "Personnel Security Policy and Procedures",
      text: "Develop, document, and disseminate personnel security policies and procedures that address purpose, scope, roles, responsibilities, and compliance requirements.",
      why: "People are often the weakest link in cybersecurity, but with proper policies and procedures, they become the strongest defense. For MVL Group, comprehensive personnel security ensures our team members are trustworthy, trained, and accountable for protecting our systems and client data.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Integrate HR systems with Azure AD for automated access provisioning based on employment status",
          "Deploy Azure AD Identity Governance for automated access reviews and certification",
          "Configure Microsoft Defender for Cloud Apps for insider threat detection and monitoring",
          "Implement Azure Sentinel analytics rules for unusual user behavior detection",
          "Set up automated security clearance tracking and access adjustment workflows",
          "Deploy Microsoft Information Protection for data access monitoring and protection"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Background checks are required for all positions with access to sensitive systems",
          "Security training is mandatory and must be completed during onboarding and annually",
          "Your access rights are regularly reviewed to ensure they match your current job responsibilities",
          "Suspicious activities or policy violations will trigger security investigations",
          "Confidentiality agreements protect both company and client information",
          "Termination procedures ensure secure transfer of responsibilities and access removal"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Reduces insider threat risk through comprehensive background screening and monitoring",
          "Ensures regulatory compliance for personnel security requirements",
          "Protects intellectual property and client data through trusted workforce management",
          "Supports business continuity through documented personnel security procedures",
          "Reduces hiring risks through systematic security screening processes",
          "Enables secure collaboration with partners and clients through personnel trust verification"
        ]
      }
    }
  },

  "PE": {
    "3.10.1": {
      title: "Physical Access Control",
      text: "Enforce physical access authorizations by controlling access to facilities and areas within facilities based on position or role.",
      why: "Physical access to facilities and systems can bypass all technical security controls. For MVL Group, controlling physical access ensures that only authorized personnel can access our secure areas, server rooms, and sensitive equipment that processes client data.",
      itPerspective: {
        title: "IT Professional Implementation",
        content: [
          "Deploy smart card access control systems integrated with Azure AD identity management",
          "Configure video surveillance systems with Azure Video Analyzer for monitoring and recording",
          "Implement visitor management systems with background verification and escort requirements",
          "Set up environmental monitoring for server rooms and secure areas",
          "Deploy panic buttons and emergency communication systems in secure areas",
          "Configure access logging and real-time alerting for unauthorized access attempts"
        ]
      },
      employeePerspective: {
        title: "What This Means for Employees",
        content: [
          "Your access card grants entry only to areas required for your job functions",
          "Visitors must be escorted at all times and cannot access secure areas unaccompanied",
          "Tailgating (following someone through doors) is prohibited and should be reported",
          "Lost or stolen access cards must be reported immediately to security",
          "After-hours access requires special approval and may trigger additional monitoring",
          "Physical security incidents should be reported to security immediately"
        ]
      },
      managementPerspective: {
        title: "Business Impact & Risk Management",
        content: [
          "Protects physical assets and systems from unauthorized access and tampering",
          "Ensures compliance with regulatory requirements for physical security controls",
          "Reduces risk of data theft through unauthorized physical access to systems",
          "Supports incident investigation through comprehensive access logging and video monitoring",
          "Protects employees through controlled access and emergency response capabilities",
          "Maintains client trust through demonstrated physical security maturity"
        ]
      }
    }
  }
};

// Additional courses can be added following the same pattern
// This modular approach allows for easier maintenance and expansion
