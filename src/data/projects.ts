import { Database, Radio, Blocks, Code2, Globe } from 'lucide-react';
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "MetaFlux",
    description: "A decentralized crypto expense management platform with budgeting, delegation, and rewards system",
    longDescription: "MetaFlux is a comprehensive Web3 expense management platform that revolutionizes how individuals and businesses track crypto transactions. Built on the Linea blockchain, it features automated transaction categorization, budget tracking, secure delegation controls, and an innovative NFT rewards system. Users can earn cashback and exclusive NFT badges for responsible financial management while maintaining enterprise-grade security with multi-signature authentication.",
    tech: ["React", "TypeScript", "Solidity", "Linea", "Metamask", "Verax", "OpenZeppelin"],
    github: "",
    githubPrivate: true,
    live: "https://meta-flux.vercel.app/",
    image: "/metaflux.png",
    icon: Database,
    category: "Blockchain",
    featured: true,
    features: [
      "Automated crypto transaction categorization",
      "Real-time budget monitoring and alerts",
      "Secure spending delegation with customizable limits",
      "NFT rewards and cashback system (up to 3%)",
      "Multi-signature authentication for large transactions",
      "On-chain transaction records on Linea",
      "Integration with Metamask, QuickBooks, and Xero",
      "Enterprise-grade security with Verax identity verification"
    ],
    challenges: "Building a decentralized expense tracking system that seamlessly integrates with traditional accounting software while maintaining blockchain security. Implementing a fair and engaging rewards system that incentivizes responsible financial management. Creating an intuitive UX for complex delegation controls and multi-signature transactions.",
    outcome: "Successfully launched with $240M+ in transaction volume managed, 65K+ active users, 92% budget adherence rate, and $1.2M in rewards distributed. Platform has revolutionized crypto expense management for both individuals and enterprises."
  },
  {
    title: "GameChain",
    description: "A blockchain-powered trivia gaming platform combining AI, Web3, and community engagement",
    longDescription: "GameChain revolutionizes the intersection of gaming, learning, and blockchain technology. This decentralized trivia platform leverages AI-powered question generation to create personalized learning experiences while integrating Web3 features for staking rewards, earning tokens, and true ownership of gaming assets. Players can create custom games, host tournaments, compete globally, and earn NFT rewards while transforming knowledge acquisition into an engaging, gamified experience.",
    tech: ["React", "TypeScript", "Solidity", "Web3", "AI/ML", "Smart Contracts"],
    github: "",
    githubPrivate: true,
    live: "https://gamechain-client.vercel.app/",
    image: "/Gamechain.png",
    icon: Radio,
    category: "Blockchain",
    featured: true,
    features: [
      "AI-powered dynamic trivia question generation",
      "Web3 integration for staking and earning tokens",
      "Custom game creation with difficulty levels",
      "NFT rewards and achievement ownership",
      "Global tournaments and leaderboards",
      "Community-driven gaming ecosystem",
      "Learn & Earn gamification model",
      "Real-time multiplayer gaming experience"
    ],
    challenges: "Integrating AI-powered question generation with blockchain technology while maintaining seamless real-time gameplay. Designing a fair reward distribution system that incentivizes both learning and competition. Building a scalable infrastructure to support thousands of concurrent players and tournament hosting.",
    outcome: "Successfully launched with 1K+ active players, 50+ games created, and 24/7 platform activity. Platform has transformed trivia gaming into a rewarding Web3 experience that combines entertainment, education, and earning opportunities."
  },
  {
    title: "Text2Speech Converter",
    description: "A web-based text-to-speech converter with multiple voice options and language support",
    longDescription: "Text2Speech Converter is a user-friendly web application that transforms written text into natural-sounding speech using Google's Text-to-Speech API. Built with vanilla JavaScript, HTML, and CSS, the application provides an intuitive interface for users to convert any text into audio with customizable voice options, speech rates, and multiple language support. Perfect for accessibility needs, content creation, language learning, and enhancing user experience.",
    tech: ["JavaScript", "HTML5", "CSS3", "Google Text-to-Speech API"],
    github: "https://github.com/Henryno111/Text-to-speech-converter",
    live: "https://text-to-speech-converter-umber.vercel.app/",
    image: "/Text2Speech.png",
    icon: Globe,
    category: "Frontend",
    featured: true,
    features: [
      "Real-time text-to-speech conversion",
      "Multiple voice options and accents",
      "Adjustable speech rate and pitch",
      "Multi-language support",
      "Clean and intuitive user interface",
      "Cross-browser compatibility",
      "Responsive design for all devices",
      "No download required — instant playback"
    ],
    challenges: "Integrating Google's Text-to-Speech API seamlessly while ensuring cross-browser compatibility and optimal performance. Designing an intuitive UI that makes voice customization accessible to users of all technical levels. Handling various text formats and special characters to ensure accurate pronunciation.",
    outcome: "Successfully deployed a fully functional text-to-speech converter that provides natural-sounding voice output with multiple customization options. Serves as an accessible tool for content creators, educators, and users with accessibility needs."
  },
  {
    title: "Architecture Builder Web App",
    description: "An interactive tool for creating and visualizing system architecture diagrams using D3.js",
    longDescription: "Architecture Builder is a powerful web-based tool for designing and visualizing system architecture diagrams. Built with D3.js for dynamic data visualization, this application enables developers, architects, and technical teams to create interactive architectural diagrams with drag-and-drop functionality. Users can add nodes, establish connections, manage relationships, and rearrange components in real-time to design complex system architectures, microservices diagrams, and technical workflows.",
    tech: ["JavaScript", "D3.js", "HTML5", "CSS3", "React"],
    github: "https://github.com/Henryno111/web-app-architecture",
    live: "https://web-app-architecture.vercel.app/",
    image: "/architcture-builder-app.png",
    icon: Code2,
    category: "Frontend",
    featured: true,
    features: [
      "Interactive drag-and-drop node positioning",
      "Dynamic connection management between nodes",
      "Real-time diagram updates and rendering",
      "Node and connection selection for editing",
      "Add, remove, and modify architectural components",
      "Visual representation of system relationships",
      "Responsive canvas for complex diagrams",
      "Export and save diagram configurations"
    ],
    challenges: "Implementing smooth drag-and-drop functionality with D3.js while maintaining performance with complex diagrams. Creating an intuitive interface for managing node connections and relationships. Ensuring the visualization scales properly for large-scale architectures without performance degradation.",
    outcome: "Successfully deployed an interactive architecture diagram tool that simplifies creating and visualizing system designs. Provides developers and architects with an efficient way to communicate technical designs through visual diagrams."
  },
  {
    title: "Circularity Nexus",
    description: "Waste-to-wealth tokenization platform combining AI verification, blockchain, and DeFi rewards",
    longDescription: "Circularity Nexus is a groundbreaking blockchain platform that transforms everyday waste into tradeable digital assets. Built on Hedera Hashgraph with AI-powered verification using Groq Llama3-8B, the platform enables users to tokenize recyclable materials through mobile scanning, earn rewards with up to 25% APY through DeFi yield farming, and convert tokens to carbon credits. With 95%+ AI accuracy and support for 50+ waste types, Circularity Nexus creates a comprehensive circular economy ecosystem that incentivizes sustainable behavior while generating real environmental impact.",
    tech: ["React", "TypeScript", "Hedera Hashgraph", "Groq AI", "Llama3-8B", "DeFi", "Smart Contracts"],
    github: "",
    githubPrivate: true,
    live: "https://circularity-nexus.vercel.app/",
    image: "/circularity-nexus.png",
    icon: Blocks,
    category: "Blockchain",
    featured: true,
    features: [
      "AI-powered waste verification with 95%+ accuracy",
      "Mobile-first scanning with instant classification",
      "Support for 50+ waste types with material-specific tokens",
      "DeFi yield farming with 5-25% APY from corporate ESG partners",
      "Automatic carbon credit conversion (1kg PET = 1.5kg CO₂)",
      "Built on Hedera with 10,000 TPS and carbon-negative consensus",
      "Quality grading system from EXCELLENT to UNUSABLE",
      "Real-time blockchain tokenization and rewards"
    ],
    challenges: "Integrating AI-powered waste verification with blockchain technology while maintaining sub-2 second processing times. Building a fair tokenization model with material-specific multipliers that accurately reflects recycling value. Creating a sustainable DeFi ecosystem that attracts corporate ESG partners and provides meaningful APY returns.",
    outcome: "Successfully launched with 2.5M tons of waste recycled, 1.8M CO₂ emissions reduced, 150K active users, and $12M in rewards distributed. Operating in 25+ countries with measurable environmental impact verified by blockchain and third-party auditors."
  },
  {
    title: "Black Founders Network",
    description: "A slack-like community platform for founders and investors in America",
    longDescription: "Black Founders Network is a comprehensive community platform designed to connect Black entrepreneurs, founders, and investors across America. Built with real-time communication features, the platform facilitates networking, resource sharing, mentorship opportunities, and collaborative growth. It serves as a digital hub where founders can showcase their startups, seek funding, share insights, and build meaningful connections within the Black entrepreneurship ecosystem.",
    tech: ["Vite", "PHP", "Pusher.js", "MySQL", "JavaScript"],
    github: "",
    githubPrivate: true,
    live: "https://blackfounders.network/",
    image: "/BFN.png",
    icon: Globe,
    category: "Frontend",
    featured: true,
    features: [
      "Real-time messaging and notifications",
      "Community channels and direct messaging",
      "Founder and investor profiles",
      "Resource sharing and networking tools",
      "Event management and announcements"
    ],
    challenges: "Building a scalable real-time messaging system with Pusher.js while ensuring smooth user experience across different devices. Managing complex user relationships and implementing efficient database queries for community interactions.",
    outcome: "Successfully launched with an active community of founders and investors. Platform facilitates meaningful connections and has become a vital resource for Black entrepreneurship in America."
  },
  {
    title: "DOCmeet",
    description: "A real-time mobile responsive medical appointment and consultation web application",
    longDescription: "DOCmeet is a comprehensive telemedicine platform that connects patients with healthcare providers through secure video consultations, appointment scheduling, and medical record management. Built with a focus on accessibility and user experience.",
    tech: ["React", "Node.js", "ExpressJS", "MongoDB", "WebRTC"],
    github: "https://github.com/Henryno111/DOCmeet_web_app/tree/main",
    live: "https://do-cmeet-web-app.vercel.app/",
    image: "/Docmeet.png",
    icon: Code2,
    category: "Full Stack",
    featured: true,
    features: [
      "Real-time video consultations",
      "Appointment scheduling system",
      "Medical record management",
      "Secure patient data handling"
    ],
    challenges: "Implementing HIPAA-compliant video streaming and ensuring data security across the platform.",
    outcome: "Deployed successfully with positive feedback from healthcare providers and improved healthcare accessibility."
  },
  {
    title: "GTF (Green Tourism Fund)",
    description: "Decentralized application for funding wildlife and environmental projects using blockchain technology",
    longDescription: "Green Tourism Fund is a blockchain-based crowdfunding platform specifically designed for environmental and wildlife conservation projects. It uses smart contracts to ensure transparency and accountability in fund distribution.",
    tech: ["Clarity", "Vite", "React", "Stacks Blockchain"],
    github: "https://github.com/orgs/GreenTourismFund-GTF/repositories",
    live: "https://gtf.vercel.app/",
    image: "/GTF.png",
    icon: Blocks,
    category: "Blockchain",
    featured: true,
    features: [
      "Smart contract-based funding",
      "Transparent fund tracking",
      "Environmental project verification",
      "Community governance features"
    ],
    challenges: "Creating secure smart contracts and ensuring scalable fund management for diverse conservation projects.",
    outcome: "Platform launched with multiple successful conservation projects funded and growing community governance."
  },
  {
    title: "Bridgarr",
    description: "Full-stack e-commerce/escrow solution with cart management, payment processing, and admin dashboard",
    longDescription: "Bridgarr is a comprehensive e-commerce platform with integrated escrow services, providing secure transactions between buyers and sellers. Features include advanced cart management, multiple payment options, and detailed analytics.",
    tech: ["Next.js", "PostgreSQL", "Django", "TypeScript", "Stripe"],
    github: "",
    githubPrivate: true,
    live: "https://app.bridgarr.com.ng/",
    image: "/Bridgarr.png",
    icon: Database,
    category: "Full Stack",
    featured: true,
    features: [
      "Integrated escrow system",
      "Multi-vendor marketplace",
      "Advanced analytics dashboard",
      "Secure payment processing"
    ],
    challenges: "Building secure escrow mechanisms and handling complex payment flows across multiple vendors.",
    outcome: "Successfully processing transactions with high user satisfaction rates and positive merchant feedback."
  },
  {
    title: "African Trade Empire",
    description: "An innovative NFT card game and trading platform built on the Flow blockchain",
    longDescription: "African Trade Empire is a groundbreaking NFT card game and trading hub on the Flow blockchain, blending tactical gameplay with AI-driven market insights. Players acquire, exchange, and utilize merchant cards inspired by historical African traders, each possessing distinct skills and trade expertise.",
    tech: ["Flow", "Cadence", "React", "Node.js", "TypeScript"],
    github: "",
    githubPrivate: true,
    live: "https://african-trade-empire.vercel.app/",
    image: "/AT-Empire.png",
    icon: Radio,
    category: "Blockchain",
    featured: false,
    features: [
      "NFT card game mechanics",
      "AI-driven market insights",
      "Historical African trader themes",
      "Flow blockchain integration"
    ],
    challenges: "Implementing complex game mechanics on blockchain while maintaining performance and a smooth user experience.",
    outcome: "Successfully launched with growing user base and positive community feedback."
  },
  {
    title: "FoodieLand",
    description: "A modern food delivery and restaurant discovery platform with real-time tracking",
    longDescription: "FoodieLand is a comprehensive food delivery platform that connects users with local restaurants, featuring real-time order tracking, personalized recommendations, and seamless payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "",
    githubPrivate: true,
    live: "https://foodieland.vercel.app/",
    image: "/FoodieLand.png",
    icon: Globe,
    category: "Full Stack",
    featured: false,
    features: [
      "Real-time order tracking",
      "Restaurant discovery",
      "Personalized recommendations",
      "Integrated payment system"
    ],
    challenges: "Implementing real-time tracking and optimizing delivery routes for a seamless user experience.",
    outcome: "Launched with partner restaurants and a growing user base."
  },
  {
    title: "Trakitt",
    description: "A contract project with responsive UI components and real-time API integrations",
    longDescription: "Trakitt is a web application built on contract, featuring responsive UI components built with React.js and real-time API integrations to support live application features. Focused on clean user experience and seamless data flow.",
    tech: ["React.js", "JavaScript", "REST APIs"],
    github: "",
    githubPrivate: true,
    live: "https://trakitt.com",
    image: "/Trakitt.png",
    icon: Globe,
    category: "Frontend",
    featured: false,
    features: [
      "Responsive UI components",
      "Real-time API integrations",
      "Clean and intuitive interface"
    ],
    challenges: "Integrating real-time API features while maintaining a smooth, responsive user experience across devices.",
    outcome: "Successfully delivered on contract with a polished, production-ready web application."
  },
  {
    title: "Anamon",
    description: "A full stack application with dynamic UI and backend logic for business workflows",
    longDescription: "Anamon is a full stack business platform integrating frontend and backend APIs to power dynamic business workflows. Built with a focus on seamless data flow and maintainable architecture.",
    tech: ["React.js", "Node.js", "Express.js", "REST APIs"],
    github: "",
    githubPrivate: true,
    live: "https://anamon.io",
    image: "/Anamon.png",
    icon: Code2,
    category: "Full Stack",
    featured: false,
    features: [
      "Full stack feature development",
      "Dynamic UI and business logic",
      "Frontend and backend API integration"
    ],
    challenges: "Designing a clean architecture that handles complex business workflows while keeping the UI responsive and intuitive.",
    outcome: "Delivered a robust business platform now live at anamon.io."
  },
  {
    title: "Portfolio",
    description: "A responsive portfolio website showcasing my projects and skills",
    longDescription: "A responsive portfolio website built with React and Tailwind CSS. The website showcases my latest projects, skills, and experience in full-stack development, blockchain, and smart contracts.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/Henryno111/Portfolio",
    live: "https://devhenryno.vercel.app/",
    image: "/Portfolio.png",
    icon: Globe,
    category: "Frontend",
    featured: false,
    features: [
      "Responsive design",
      "Interactive animations",
      "Dynamic content",
      "SEO optimization"
    ],
    challenges: "Implementing dynamic content, smooth animations, and SEO optimization for a polished developer portfolio.",
    outcome: "Improved SEO ranking and user engagement with a polished, performant portfolio site."
  }
];

export const featuredProjects = projects.filter(p => p.featured);
