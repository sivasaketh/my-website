export const personal = {
  name: 'Narasimha Siva Saketh Emani',
  shortName: 'Saketh Emani',
  title: 'Senior Backend Engineer',
  email: 'saketh.emani@gmail.com',
  phone: '+1 (480) 462-9769',
  linkedin: 'https://linkedin.com/in/sivasaketh',
  github: 'https://github.com/sivasaketh',
  summary:
    'Senior Backend Engineer with 6+ years of experience in system design, scalable backend architecture, and distributed systems using Node.js, TypeScript, Python, and AWS. Proven expertise in microservices, high availability systems, RESTful API design, and production performance optimization supporting 250,000+ API requests per day. Experienced in observability, CI/CD pipelines, and cloud infrastructure.',
}

export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Backend',
    items: ['Node.js (Express)', 'TypeScript', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'Jest', 'Microservices'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS EC2', 'AWS Lambda', 'API Gateway', 'AWS Kinesis', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
  },
  {
    category: 'Databases',
    items: ['DynamoDB', 'Microsoft SQL Server'],
  },
  {
    category: 'Messaging & Streaming',
    items: ['RabbitMQ', 'NATS'],
  },
  {
    category: 'Architecture',
    items: ['System Design', 'Distributed Systems', 'Scalability', 'High Availability', 'Observability'],
  },
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'AI / ML',
    items: ['Generative AI', 'LLM Integration', 'LangChain', 'LangGraph', 'ChromaDB'],
  },
]

export const experience = [
  {
    role: 'Senior Backend Engineer',
    company: 'Cyber Dive',
    period: 'October 2019 – Present',
    bullets: [
      'Led development of an in-house Mobile Device Management (MDM) platform on AWS serving 200+ B2C and B2B users and handling 250,000+ API requests/day.',
      'Architected and migrated monolithic backend into 4 domain-based microservices (MDM, User, Distro Health, Pipeline) using Node.js (Express) and AWS, improving system reliability and deployment velocity.',
      'Designed backend system for harmful content detection using RabbitMQ-based async messaging pipelines across 4 microservices — enabling real-time processing of device data at scale.',
      'Implemented secure Stripe-integrated checkout workflows (5–10 daily transactions, ~$5K revenue) with idempotent payment processing and low-latency response via Lambda provisioned concurrency.',
      'Diagnosed and resolved production memory leak issues by optimizing object lifecycle and reducing in-memory caching, improving service stability under load.',
      'Reduced infrastructure costs by implementing automated cleanup workflows for AWS resources (including Kinesis streams).',
      'Built automated provisioning pipelines and background jobs to streamline device configuration prior to shipment.',
      'Integrated external APIs (Easyship, Zoho, Stripe) to automate end-to-end order, inventory, and shipping workflows.',
      'Led a team of 3 engineers, driving backend architecture decisions and conducting technical interviews.',
    ],
  },
  {
    role: 'Informatica Developer',
    company: 'CIGNA Health Insurance & CNO Financials',
    period: 'July 2014 – August 2018',
    bullets: [
      'Owned ETL pipeline development across insurance and financial domains — 20+ mappings, 100+ enhancements to Facets SAP Interfaces, multi-database staging workflows, and production performance optimization.',
    ],
  },
]

export const projects = [
  {
    name: 'Sherlock — Agentic RAG System',
    description:
      'A private knowledge base assistant for engineering teams. Features a LangChain ingestion pipeline (PDF, Markdown, HTML), sentence-transformer embeddings, vector search via ChromaDB, and a LangGraph-powered ReAct agent loop with multi-query expansion, semantic search, and Claude API integration.',
    tags: ['Python', 'LangChain', 'LangGraph', 'ChromaDB', 'Claude API', 'Generative AI'],
    github: 'https://github.com/sivasaketh/sherlock',
  },
  {
    name: 'Voice-Enabled LMS',
    description:
      'Built a voice-enabled Learning Management System integration using Django and Google Speech API, enabling hands-free navigation and content access.',
    tags: ['Django', 'Python', 'Google Speech API'],
  },
  {
    name: 'Medical Entity Extraction',
    description:
      'Fine-tuned a BERT model for medical named entity recognition, achieving an F1 score of 0.68 on clinical text datasets.',
    tags: ['BERT', 'Python', 'NLP', 'Machine Learning'],
  },
  {
    name: 'Airline Database System',
    description:
      'Designed an airline relational database from ER modeling through to full SQL implementation, covering reservations, flights, and passenger management.',
    tags: ['SQL', 'Database Design', 'ER Modeling'],
  },
]

export const education = [
  {
    degree: 'Master of Science in Information Technology',
    school: 'Arizona State University',
    location: 'Tempe, AZ',
    period: 'August 2018 – May 2020',
    gpa: '4.11 / 4.0',
    courses: [
      'Data Mining',
      'Enterprise Database Management',
      'Software Development Methodologies',
      'Machine Learning (Stanford)',
      'Managing the Cloud',
    ],
  },
  {
    degree: 'Bachelor of Technology in Electronics & Communication',
    school: 'Jawaharlal Nehru Technological University',
    location: 'Kakinada, India',
    period: 'May 2014',
    gpa: '3.5 / 4.0',
    courses: [],
  },
]
