
import profileImage from "../assets/Renjini.PNG";

export const portfolioData = {
  hero: {
    name: "Renjini Radhakrishnan",
    title: "Full Stack Developer",
    tagline: "Building scalable enterprise applications using .NET & Angular.",
    github: "https://github.com/renjinir",
    linkedin: "https://linkedin.com/in/renjini-radhakrishnan"
  },
  
  about: {
    description: "Dedicated professional with strong work ethic and attention to detail. Experienced in fast-paced enterprise environments. Skilled problem solver focused on meeting ambitious development goals. Comfortable handling challenges and working across different environments.",
    highlights: [
      { label: "Experience", value: "4+ Years" },
      { label: "Specialization", value: "ERP Development" },
      { label: "Focus", value: "Enterprise Applications" },
      { label: "Certification", value: "Microsoft Certified (Azure)" }
    ],
    image: profileImage
  },
  
  skills: {
    developerTools: [
      "VS Code",
      "Visual Studio",
      "SSMS",
      "Jira",
      "Git",
      "Stash",
      "Cyberark"
    ],
    frameworks: [
      "ASP.NET Core",
      "ASP.NET Web API",
      ".NET Framework",
      "Entity Framework Core",
      "Angular (v10+)",
      "Bootstrap",
      "Crystal Reports",
      "MVC",
      "Web Forms",
      "React (Basics)"
    ],
    databases: [
      "MS SQL",
      "Azure Basics",
       "Azure DevOps"
    ]
  },
  
  experience: [
    {
      id: 1,
      company: "Atraco Groups",
      location: "Dubai, UAE",
      role: "Software Developer",
      period: "10/2025 – Ongoing",
      responsibilities: [
        "Develop & customize ERP modules",
        "SQL query optimization & stored procedures",
        "API development for Gokal Das Exports",
        "Third-party integrations",
        "ERP workflow debugging",
        "Webform development"
      ]
    },
    {
      id: 2,
      company: "AcubeInfoTech",
      location: "Dubai, UAE",
      role: "Full Stack Developer",
      period: "10/2024 – 07/2025",
      responsibilities: [
        "Asset management with RFID integration",
        "Built scalable apps using .NET Web API, Angular & MS SQL",
        "Applied clean architecture principles"
      ]
    },
    {
      id: 3,
      company: "UST Global",
      location: "Kerala, India",
      role: "Full Stack Developer",
      period: "10/2021 – 01/2024",
      responsibilities: [
        ".NET Full Stack development (MVC, Web API, Angular, SQL)",
        "Azure fundamentals",
        "SSL Certification handling",
        "SSIS packages",
        "Legacy system modernization"
      ]
    }
  ],
  
  projects: [
    {
  id: 1,
  title: "Garment ERP Management System",
  description: "Developed an ERP system for a garments company to manage production, inventory, orders, and financial records. Implemented data model concepts for efficient database design and optimized SQL queries for better performance.",
  technologies: ["ASP.NET WebForms", "C#", "SQL Server", "Data Modeling"],
  image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=400&fit=crop"
}
,
    {
      id: 2,
      title: "Inventa – Inventory Management System",
      description: "Full asset tracking & accounting system with lifecycle management from purchase to invoicing. Migrated Non-EF Core to EF Core.",
      technologies: ["ASP.NET", "Angular", "MS SQL", "EF Core"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "JMS – Jewellery Management System",
      description: "Weight-based tracking system with purity classification, barcode identification, and accounting integrations.",
      technologies: ["ASP.NET", "Angular", "MS SQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Software Engineering Service C",
      description: "UK-based Delivery & Asset Management project with maintenance and client updates.",
      technologies: ["ASP.NET MVC", "SSIS", "MS SQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Viewtube (Demo Project)",
      description: "YouTube-like platform with user authentication and full features.",
      technologies: ["ASP.NET Web API", "Angular"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
    }
  ],
  
  certifications: [
    {
      id: 1,
      title: "Microsoft Certified: Azure Data Fundamentals",
      date: "March 2023",
      issuer: "Microsoft"
    },
    {
      id: 2,
      title: "Microsoft Certified: Azure Fundamentals",
      date: "February 2023",
      issuer: "Microsoft"
    },
    {
      id: 3,
      title: "Problem Solving Through Programming in C",
      date: "2021",
      issuer: "NPTEL"
    }
  ],
  
  education: {
    degree: "B.Tech – Computer Science & Engineering",
    university: "APJ Abdul Kalam Technological University, Kerala",
    year: "2021",
    cgpa: "7.43",
    higherSecondary: {
      school: "GHSS Kizhakkencherry",
      year: "2017",
      percentage: "73%"
    }
  },
  
  training: {
    organization: "UST Global",
    period: "2021–2022",
    topics: [
      ".NET Full Stack with Azure Cloud Basics",
      "Advanced C & Angular",
      "RESTful Microservices",
      "Azure Fundamentals"
    ]
  },
  
  languages: ["English", "Malayalam"],
  
  contact: {
    phone: "+971 555555",
    email: "renjinir766@gmail.com",
    linkedin: "https://linkedin.com/in/renjini-radhakrishnan",
    github: "https://github.com/renjinir"
  }
};
