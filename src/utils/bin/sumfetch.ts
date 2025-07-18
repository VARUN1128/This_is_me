import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
VARUN HARIDAS
Junior AI Engineer
Kochi, India | varunharidas.in@gmail.com | +91-9495917116
LinkedIn: https://www.linkedin.com/in/varun-haridas | GitHub: https://github.com/VARUN1128

PROFESSIONAL SUMMARY
Early-career AI engineer with hands-on experience architecting real-time data pipelines and scalable web applications to operationalize machine-learning solutions. Proven ability to integrate MQTT-based telemetry, design RESTful APIs, and optimize system stability for monitoring platforms. Passionate about deploying computer-vision models and LLM-powered features in production environments.

EXPERIENCE
MITS CIDRIE Foundation, Kochi
Software Development & Testing Intern | Jun 2025–Present
• Built the Central Monitoring System (CMS) for a major banking client, ingesting security-camera logs via MQTT and normalizing data for downstream analytics.
• Automated error-log classification, reducing incident triage time by 40% through rule-based filters and real-time alerts.
• Collaborated with backend engineers to validate data flows, ensuring 99.5% uptime in QA environments.

TechEmbers Enterprises, Ernakulam
Full Stack Engineer Intern | Jan 2025–Jun 2025
• Engineered responsive dashboards in Next.js/React to visualize AI-driven insights, supporting live updates through Supabase real-time subscriptions.
• Designed and implemented RESTful APIs (Node.js/Express) to serve inference requests, handling 200+ concurrent connections with sub-200 ms latency.
• Optimized front-end bundle and database queries, boosting page-load performance by 30% across major browsers.

EDUCATION
B.Tech in Artificial Intelligence, MITS, Kochi | 2022 – 2026 | CGPA: 8.27

AWARDS & CERTIFICATIONS
• SQL Advanced Certification, HackerRank
• Software Engineer Certification, HackerRank
• Google Analytics Certification
• Finalist, V-Guard Big Idea Design Competition (Top 8)
• Winner, Money Conclave ’24
• Runner-up, Dev Summit ’23; PERCEPTION National Hackathon; Rural India Agri Hackathon
• Cambridge Linguaskill Business English (B2)
• Geo-Mapping Certification, NSS

TECHNICAL SKILLS
• Languages: Python, C++, JavaScript/TypeScript, Java
• Frameworks & Tools: PyTorch, scikit-learn, React.js, Next.js, Node.js, Express.js, MQTT
• Data & DevOps: Supabase, MongoDB, MySQL, Docker, CI/CD Pipelines, Grafana, Power BI
• Platforms: Linux, Git/GitHub, VS Code, Google Colab, Figma

AREAS OF EXPERTISE
• Model Development & Deployment: Prototyping CV and NLP models; containerized inference services
• Real-Time Data Pipelines: MQTT ingestion, stream processing, error-log analytics
• API & Microservices Design: Scalable REST/GraphQL endpoints with low latency
• Monitoring & Observability: Grafana dashboards, automated alerting, performance tuning
• Full-Stack Integration: End-to-end feature delivery from data layer through front-end UX
• LLM Applications: Prompt engineering, embedding indexing, API integration

SELECTED PROJECTS
• Designed an AI-powered cooking system automating curry preparation with minimal human input.
• Coconut Maturity Detection App
• Developed AI model to detect coconut maturity levels with 87.91% accuracy, helping farmers improve yield efficiency.
• More projects: https://tinyurl.com/y4am659r

SOFT SKILLS
• Led a cross-functional team of four to implement real-time MQTT data ingestion, coordinating priorities between backend, QA, and DevOps engineers to achieve 99.5% system uptime.
• Collaborated with UI/UX designers and product managers to deliver React-based monitoring dashboards under a six-week deadline, ensuring intuitive visualization of AI-driven insights.
• Mentored two junior interns, coaching them on Next.js best practices and Git workflows, which accelerated feature delivery by 20%.
• Facilitated weekly knowledge-sharing sessions to juniors at LINC and TinkerHub

LEADERSHIP & CAMPUS INVOLVEMENT
• Campus Lead (2024–25) – TinkerHub MITS
• Secretary (2024–25) – ACM MITS
• Executive Member (2024–25) – NSS MITS
• Program Facilitator (2023–24) – TinkerHub
• Co-founder – LINC MITS Club
`;
};

export default sumfetch;
