const fs = require('fs');

let content = fs.readFileSync('src/data/projects.ts', 'utf8');

// Change Stacks Card Game category to Blockchain
content = content.replace(
  /title: "Stacks Card Game",\s+description.*?\s+longDescription.*?\s+tech.*?\s+github.*?\s+live.*?\s+image.*?\s+icon.*?\s+category: "Frontend",/s,
  (match) => match.replace('category: "Frontend"', 'category: "Blockchain"')
);

// We need to inject the 3 new projects before the last `];`
const newProjects = `
  {
    title: "Trackpool",
    description: "A DeFi analytics dashboard and tracking platform",
    longDescription: "Trackpool is a decentralized finance tracking application that allows users to monitor their liquidity pools and staking positions across various protocols in real time.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Web3.js"],
    github: "",
    githubPrivate: true,
    live: "https://trackpool-five.vercel.app/",
    image: "",
    icon: Blocks,
    category: "Blockchain",
    featured: true,
    features: [
      "Real-time liquidity pool tracking",
      "Staking position monitoring",
      "Protocol analytics and metrics",
      "Wallet integration"
    ],
    challenges: "Aggregating live data from multiple protocols efficiently.",
    outcome: "A functional dashboard providing real-time insights for DeFi users."
  },
  {
    title: "Clarinet Auditor",
    description: "A smart contract auditing tool for Stacks/Clarity developers",
    longDescription: "Clarinet Auditor is a developer tool designed for the Stacks ecosystem. It integrates with Clarinet to analyze Clarity smart contracts, identify potential vulnerabilities, and generate comprehensive audit reports.",
    tech: ["React", "TypeScript", "Clarity", "Stacks"],
    github: "",
    githubPrivate: true,
    live: "https://clarinet-auditor.vercel.app/",
    image: "",
    icon: Shield,
    category: "Blockchain",
    featured: true,
    features: [
      "Static analysis of Clarity smart contracts",
      "Vulnerability detection",
      "Audit report generation",
      "Integration with Clarinet environment"
    ],
    challenges: "Building an accurate parser for Clarity syntax and identifying complex vulnerability patterns.",
    outcome: "An essential tool for Stacks developers to ensure smart contract security."
  },
  {
    title: "IT Alliance Portfolio",
    description: "A modern corporate portfolio and agency website",
    longDescription: "IT Alliance Portfolio is a professional agency website showcasing technical services, client projects, and company information. Built with a focus on high performance, accessibility, and modern design principles.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    github: "",
    githubPrivate: true,
    live: "https://it-alliance-portfolio.vercel.app/",
    image: "",
    icon: Globe,
    category: "Frontend",
    featured: true,
    features: [
      "Responsive and modern UI design",
      "Service and project showcases",
      "Interactive animations",
      "Contact and lead generation forms"
    ],
    challenges: "Designing a high-performance site with complex animations that doesn't compromise load speed.",
    outcome: "A polished corporate web presence for IT Alliance."
  }
`;

const insertionPoint = content.lastIndexOf('];');
if (insertionPoint !== -1) {
  content = content.slice(0, insertionPoint) + ',\n' + newProjects + content.slice(insertionPoint);
  fs.writeFileSync('src/data/projects.ts', content);
  console.log('Successfully appended projects.');
} else {
  console.log('Could not find insertion point.');
}
