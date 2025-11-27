const aboutText = `
I am a Backend & DevOps Engineer currently working at Okakichi on online and mobile game projects.
I focus on automating content pipelines, building robust backend features, and keeping live-ops stable.

My recent work includes:
- Maintaining a cross-platform Jenkins pipeline for game masterdata
- Implementing secure NFT claim logic for hero rewards
- Migrating Mongo workloads to Azure Cosmos DB (Mongo vCore) with proper indexing
- Building internal tools for PlayFab analytics and reporting
`;

const skills = [
  "C#",
  ".NET",
  "JavaScript",
  "Python",
  "PowerShell",
  "Node.js",
  "MongoDB",
  "Azure Cosmos DB (Mongo vCore)",
  "Jenkins",
  "Docker",
  "Terraform",
  "Unity CCD",
  "PlayFab",
  "RPA",
  "Git / GitHub"
];

const projects = [
  {
    name: "Changokushi Heroes – Masterdata Pipeline",
    role: "Pipeline Owner / Maintainer",
    period: "2024–2025",
    tech: ["Jenkins", "Groovy", "PowerShell", "Node.js", "Docker", "Unity CCD", "GitHub CLI"],
    description: `
Designed and maintained a Jenkins pipeline that generates game masterdata,
uploads it to Unity CCD, and creates automated pull requests for protected branches.
Migrated from deprecated Unity 'ucd' CLI to a custom PowerShell + REST API solution
and made the pipeline work on both macOS and Windows agents.
    `,
    links: []
  },
  {
    name: "NFT Hero Claims System",
    role: "Backend Feature Owner",
    period: "2024–2025",
    tech: ["C#", "MongoDB", "PlayFab"],
    description: `
Implemented weekly NFT claim logic for hero rewards, enforcing unique
(nft_id, serial_number) claims per cycle and preventing abuse across player accounts.
Integrated with existing hero/masterdata and PlayFab player data.
    `,
    links: []
  },
  {
    name: "Cosmos DB (Mongo vCore) Migration",
    role: "Backend / Infra Engineer",
    period: "2025",
    tech: ["Azure Cosmos DB", "MongoDB", "Terraform"],
    description: `
Planned and executed a migration from serverless Mongo to Cosmos DB Mongo vCore.
Wrote scripts to back up and restore the player collection, recreate indexes,
and integrate the database into a secured VNet using Terraform.
    `,
    links: []
  },
  {
    name: "PlayFab DAU Reporting Tool",
    role: "Tools Developer",
    period: "2025",
    tech: ["Python", "PlayFab"],
    description: `
Built a Python script to pull daily active users and related metrics from PlayFab,
helping the team monitor game health and live-ops impact.
    `,
    links: [
      // Example: { label: "GitHub", url: "https://github.com/..." }
    ]
  }
];

const experience = [
  {
    company: "Okakichi",
    title: "Server Engineer",
    period: "2023–Present",
    description: `
Backend development and DevOps for online/mobile games, including pipelines, NFT systems,
Cosmos DB integration, and PlayFab tooling.
    `
  },
  {
    company: "Beyonics Precision Malaysia",
    title: "MES Engineer / Software Engineer",
    period: "Past",
    description: `
Worked on manufacturing execution systems and factory-related software.
    `
  },
  {
    company: "YKK Malaysia",
    title: "RPA Developer",
    period: "Past",
    description: `
Developed RPA solutions to automate business processes.
    `
  },
  {
    company: "Earlier Roles",
    title: "Web / Software Developer",
    period: "Past",
    description: `
Junior programmer and web developer roles, building and maintaining web applications.
    `
  }
];
