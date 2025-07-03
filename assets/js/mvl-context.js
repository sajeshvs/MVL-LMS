// MVL Group Context - Centralized company information for curriculum customization
export const MVL = {
  company: "MVL Group",
  tenant: "GCC High (USA-Gov)",
  currentSPRS: 83,
  targetSPRS: 90,
  
  secStack: {
    mfa: "Entra ID MFA",
    ztna: "Zscaler ZPA", 
    edr: "Microsoft Defender for Endpoint",
    siem: "Azure Sentinel",
    backup: "Acronis Cyber Protect",
    firewall: "Azure Firewall Premium",
    dlp: "Microsoft Purview DLP",
    encryption: "BitLocker + Azure Information Protection"
  },
  
  helpDesk: {
    tool: "BeyondTrust",
    sla: "<4h for P1, <24h for P2",
    ticketsPerDay: 15,
    teams: "#🎫-helpdesk-queue"
  },
  
  contacts: {
    ciso: {
      name: "Sajesh V. S.",
      email: "security@mvl-group.com",
      teams: "@SajeshVS"
    },
    soc: {
      teamsChannel: "#🔒-mvl-soc-alerts",
      escalation: "#🚨-incidents"
    },
    compliance: {
      email: "compliance@mvl-group.com",
      manager: "MVL Compliance Team"
    }
  },
  
  portals: {
    policies: "https://mvl-sharepoint.sharepoint.us/sites/policies",
    itsm: "https://itsm.mvl-group.com",
    lms: "https://learn.mvl-group.com",
    sentinel: "https://portal.azure.us/#view/Microsoft_Azure_Security_Insights",
    compliance: "https://compliance.microsoft.com"
  },
  
  devices: {
    primary: "Microsoft Surface devices",
    management: "Microsoft Intune",
    enrollment: "Windows Autopilot",
    compliance: "Intune Compliance Policies"
  },
  
  network: {
    vpn: "Zscaler Private Access",
    wifi: "Enterprise WPA3 + certificate auth",
    segmentation: "Azure Virtual Networks + NSGs",
    monitoring: "Azure Network Watcher + Sentinel"
  },
  
  compliance: {
    framework: "CMMC Level 2",
    certifier: "C3PAO Authorized",
    nextAssessment: "Q2 2025",
    auditFrequency: "Annual + Quarterly Reviews"
  },
  
  // Common MVL-specific procedures and policies
  procedures: {
    incidentEscalation: "Teams: #🚨-incidents → Email: security@mvl-group.com → Phone: On-call CISO",
    emergencyAccess: "Manager approval + Security team notification + 24h access review",
    guestAccess: "Sponsor required + Limited 30-day access + Separate network segment",
    dataClassification: "CUI markings required + Auto-encryption + Access logging"
  },
  
  // Security metrics and KPIs
  metrics: {
    patchingSLA: "Critical: 24h, High: 72h, Medium: 30d",
    incidentResponse: "P1: 1h, P2: 4h, P3: 24h",
    trainingCompletion: "95% monthly, 100% annual certification",
    phishingTestPass: "85% organization-wide target"
  }
};

// Template helper functions for dynamic content generation
export const MVLTemplates = {
  // Generate MVL-specific "why" statements
  generateWhy: (baseWhy, securityDomain) => {
    return `${baseWhy} For ${MVL.company}, operating in our ${MVL.tenant} environment with CMMC Level 2 requirements, this control is critical for maintaining our current SPRS score of ${MVL.currentSPRS} and achieving our target of ${MVL.targetSPRS}.`;
  },
  
  // Generate IT perspective with MVL tools
  generateITPerspective: (domain) => {
    const toolMappings = {
      'AC': [`Configure ${MVL.secStack.ztna} policies`, `Deploy ${MVL.devices.management} compliance`],
      'AT': [`Use this LMS system`, `Track via ${MVL.secStack.siem} user behavior analytics`],
      'AU': [`Configure ${MVL.secStack.siem} log collection`, `Set up ${MVL.secStack.backup} immutable storage`],
      'IR': [`Escalate via ${MVL.contacts.soc.teamsChannel}`, `Use ${MVL.helpDesk.tool} for coordination`],
      'SC': [`Deploy ${MVL.secStack.firewall}`, `Configure ${MVL.network.segmentation}`]
    };
    
    return toolMappings[domain] || [`Implement using ${MVL.company} standard tools`, `Follow ${MVL.portals.policies} procedures`];
  },
  
  // Generate employee perspective with MVL context
  generateEmployeePerspective: () => {
    return [
      `Use your company-issued ${MVL.devices.primary} for all work activities`,
      `Connect via ${MVL.network.vpn} when working remotely`,
      `Contact ${MVL.contacts.ciso.teams} for security questions`,
      `Follow ${MVL.procedures.dataClassification} for sensitive information`
    ];
  },
  
  // Generate management perspective with MVL business impact
  generateManagementPerspective: () => {
    return [
      `Maintains ${MVL.compliance.framework} certification for DoD contracts`,
      `Supports SPRS score improvement from ${MVL.currentSPRS} to ${MVL.targetSPRS}`,
      `Protects ${MVL.company} reputation and client trust`,
      `Reduces cyber insurance costs through demonstrated security controls`
    ];
  },
  
  // Generate MVL-specific quiz questions
  generateQuiz: (domain) => {
    const quizzes = {
      'AC': {
        q: `Which ${MVL.company} tool automatically blocks non-compliant devices?`,
        answers: [MVL.devices.management, MVL.secStack.edr, MVL.secStack.backup, "Azure Active Directory"],
        correctIndex: 0
      },
      'IR': {
        q: `What is the first step in ${MVL.company}'s incident escalation procedure?`,
        answers: ["Email CISO directly", "Call help desk", `Post in ${MVL.contacts.soc.teamsChannel}`, "Create support ticket"],
        correctIndex: 2
      }
    };
    
    return quizzes[domain] || {
      q: `What is ${MVL.company}'s primary security management platform?`,
      answers: [MVL.secStack.siem, "Manual processes", "Third-party service", "Spreadsheets"],
      correctIndex: 0
    };
  }
};

// Make available globally for backward compatibility
if (typeof window !== 'undefined') {
  window.MVL = MVL;
  window.MVLTemplates = MVLTemplates;
}

console.log(`${MVL.company} context loaded for ${MVL.tenant} environment`);
