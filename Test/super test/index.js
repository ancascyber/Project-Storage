const resume = {
  name: 'Anthony Castleberry',
  contact: {
    phone: '248-403-6557',
    email: 'AnthonyCastleberry.IT@gmail.com',
    linkedin: 'linkedin.com/in/anthony-castleberry-48761821'
  },
  careerSummary: `
    Experienced IT professional specializing in Cloud Administration and Cyber Security. Possesses proficiency in Python programming, SQL, Linux, Splunk SIEMs, and Wireshark. Skilled in overseeing large-scale software system installations, administration, and implementations.
  `,
  skills: {
    cloudAndInfrastructure: `
      AWS and Azure Cloud certified professional with hands-on experience. Proficient in operating systems including Linux and Microsoft Windows. Familiarity with cloud infrastructures, Python programming, and SQL databases.
    `,
    cybersecurity: `
      Conducted vulnerability assessments and proficient in offensive and defensive cybersecurity concepts. Experienced in utilizing Splunk and Wazuh SIEMs for threat monitoring and analysis.
    `,
    analyticalAndProblemSolving: `
      Strong analytical and problem-solving capabilities. Effective multitasking abilities with a focus on project and time management.
    `,
    governanceRiskAndCompliance: `
      Familiar with NIST Cybersecurity & Risk Management Frameworks, SP 800-53, ISO 27001, and SOC reporting.
    `,
    communicationAndDocumentation: `
      Excellent written and verbal communication. Proficient in creating documentation using Excel, Word, and PowerPoint.
    `
  },
  educationAndCertifications: [
    'Bachelor of Science in Information Technology - Capella University',
    'AWS Certified Cloud Practitioner – AWS',
    'Microsoft Certified Azure Fundamentals - Microsoft',
    'Google Cybersecurity Professional Certificate - Google',
    'Information Technology - Global Information Technology',
    'A+, Network +, Security + - CompTIA'
  ],
  additionalTrainingAndExperience: {
    trainings: [
      'S.O.C. Level 1 Training – Try Hack Me',
      'GRC Analyst Masterclass – Simply Cyber'
    ],
    homeLabTestingSetup: [
      'Virtual Box – Window Server, Splunk SIEM, Wire Shark',
      'RasberryPi - Ubuntu Server - Wizuh Test SIEM, Portainer',
      'Zima board - ProxMox, Synology File Server - Rust Desk'
    ]
  },
  experience: [
    {
      company: 'Tungsten Automation (Formally Kofax)',
      position: 'Business Development Manager',
      date: 'May 2022 – February 2024',
      responsibilities: `
        - Create and finalize Professional Service estimates and quotes & develop and maintain detailed product and services documentation.
      `
    },
    {
      company: 'Tungsten Automation (Formally Kofax)',
      position: 'Professional Services Consultant',
      date: 'January 2012 - May 2022',
      responsibilities: `
        - Manage multiple Software installation projects, ensuring deliverables and timelines are met.
        - Drive deployment activities: system evaluations, functional design, user acceptance testing, issue resolution, installation, training, and serve as the subject matter expert for client consulting.
        - Perform technical configuration for software deployments, and collaborate with the project teams for implementation.
      `
    },
    {
      company: 'General Motors - OnStar Advanced Systems Development (ASD)',
      position: 'Desktop support',
      date: 'October 2010 - December 2011',
      responsibilities: `
        - Active Directory administration, monitor data systems, servers, and mobile applications, utilizing E-tracker ticketing and Nagios monitoring systems.
        - Perform desk-side support, system restores, desktop re-configurations, part replacements, and Operating System installations.
      `
    },
    {
      company: 'Detroit Public Schools Systems',
      position: 'Ground Support Technician',
      date: 'August 2010 - October 2010',
      responsibilities: `
        - On-site endpoint support for workstation upgrades, provide desktop support for facility and staff.
        - Conduct school-wide workstation inventory, implemented asset tagging, and workstation re-imaging and patching.
      `
    }
  ]
};

// Sample usage
console.log(resume.name);
console.log(resume.contact.phone);
console.log(resume.careerSummary);
console.log(resume.skills.cloudAndInfrastructure);
console.log(resume.educationAndCertifications);
console.log(resume.experience[0].company);
console.log(resume.experience[0].responsibilities);
