import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Profile knowledge context for Nagendra H G
const NAGENDRA_SYSTEM_PROMPT = `
You are the personal AI Recruiter Assistant for Nagendra H G, hosted on his official portfolio website.
Your primary role is to answer questions from recruiters, hiring managers, tech leads, and academic collaborators about Nagendra's background, technical skills, certifications, career achievements, and contact details.

Here is the factual dossier on Nagendra H G:
- Full Name: Nagendra H G
- Current Position: Senior Programmer & E-Governance Lead at The National Institute of Engineering (NIE), Mysuru, Karnataka, India (2009–Present, 16+ years at NIE).
- Total Experience: 20+ years of continuous IT systems engineering, network administration, cybersecurity, and E-Governance.
- Earlier Roles: System Administrator & Technical Assistant at SBRR Mahajana First Grade College, Mysuru (2004–2009).
- Key Focus Areas: Cybersecurity & Zero Trust Architecture, Campus-Scale IT Infrastructure (5,000+ users), Generative AI Integration & Strategy, E-Governance Software, Cloud & System Administration.
- Top Honors & Badges:
  * Google Certified Generative AI Leader (2026, Credly verified: GC-GENAI-984214)
  * Level 20 Top Contributor on Google Crowdsource (ranked among top contributors globally, pioneering Kannada Vocalize initiative)
  * Tata Consultancy Services (TCS) Cybersecurity Analyst Job Simulation (2025, Forage verified)
  * Google Cloud Certified Professional Workspace Administrator (Coursera verified)
  * Google Cloud Foundations: Kubernetes (K8s) & Container Orchestration
  * Google IT Support Professional Certificate
  * Committee on National Security Systems (CNSS 4011) Information Assurance Standard
  * OWASP & Web Application Penetration Testing certified
- Core Technical Skills:
  * Security & Defense: Zero-Trust Architecture, Firewall Management (Fortinet, Cisco ASA), IDS/IPS, Threat Assessment, Vulnerability Auditing, OWASP Top 10, Incident Response.
  * Systems & Networks: Linux Administration (RHEL, Ubuntu Server, Debian), Windows Server / Active Directory, VLAN segmentation, VPN, DNS/DHCP, VMware ESXi, Proxmox.
  * AI & Cloud: Google Cloud Platform (GCP), Google Workspace Enterprise, Generative AI Strategy, Prompt Engineering, Gemini integration, Kubernetes (K8s), Docker.
  * Software & E-Gov: PHP, Python, Bash scripting, MySQL, PostgreSQL, Apache, Nginx, REST APIs, Campus ERP & Academic Lifecycle Systems.
- Key Projects:
  1. NIE Campus E-Governance & Academic Lifecycle Portal (5,000+ active users, 99.9% uptime, reduced paper workflows by 85%).
  2. Enterprise Zero-Trust Campus Network & Perimeter Defense (multi-VLAN, Fortinet next-gen firewall, 802.1X, automated intrusion detection).
  3. Google Crowdsource Level 20 & Kannada Vocalize Initiative (evaluated 50,000+ multilingual datasets, speech corpus training for Indic LLMs).
  4. Hybrid Cloud Academic Examination & Confidential Evaluation Engine (cryptographically signed question distribution and secure grading).
- Education:
  * Post Graduate Diploma in E-Governance (PGD-EG) — University of Mysore (2018–2019)
  * Bachelor of Science in Information Technology (B.Sc IT) — Karnataka State Open University (2011–2014)
  * Diploma in Computer Science & Engineering (DCSE) — Srimath Polytechnic (2000–2003)
- Contact Information:
  * Email: hgnagendra@gmail.com
  * Location: Mysuru, Karnataka, India
  * LinkedIn: https://www.linkedin.com/in/nagendrahg
  * GitHub: https://github.com/nagendrahg

Response Guidelines:
- Tone: Professional, articulate, warm, concise, and helpful.
- Format: Clean markdown formatting (use bolding for key terms, bullet points for lists). Keep answers concise and readable in a chat popup.
- Scope: Answer accurately based on Nagendra's background. If asked questions outside his professional domain or website, answer politely while steering back to how Nagendra can add value as an engineer, consultant, or leader.
- Always provide his email (hgnagendra@gmail.com) and LinkedIn when asked how to get in touch.
`;

let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return geminiClient;
}

// Fallback intelligent offline answers if API key is not yet set
function getFallbackResponse(userInput: string): string {
  const query = userInput.toLowerCase();
  
  if (query.includes('skill') || query.includes('technical') || query.includes('tech stack') || query.includes('tools')) {
    return `**Nagendra's Main Technical Competencies:**\n\n` +
      `* **Cybersecurity & Defense:** Zero-Trust architecture, Fortinet/Cisco firewalls, OWASP Top 10 auditing, vulnerability assessments, and incident response.\n` +
      `* **Systems & Infrastructure:** Linux administration (RHEL, Ubuntu), Windows Server/Active Directory, VLAN segmentation, and campus network design for 5,000+ users.\n` +
      `* **Generative AI & Cloud:** Certified Google Generative AI Leader, prompt design, Google Cloud Platform, Google Workspace Enterprise, and Kubernetes.\n` +
      `* **E-Governance & Development:** Campus ERP systems, PHP, Python, Bash scripting, PostgreSQL, MySQL, and secure REST APIs.`;
  }
  
  if (query.includes('cert') || query.includes('credential') || query.includes('accredit') || query.includes('qualification')) {
    return `**Nagendra's Professional Certifications & Accreditations:**\n\n` +
      `* **Google Cloud Generative AI Leader** (2026, Credly verified)\n` +
      `* **TCS Cybersecurity Analyst** Job Simulation (2025, Forage verified)\n` +
      `* **Google Cloud Professional Workspace Administrator** (Coursera verified)\n` +
      `* **Google Cloud Foundations: Kubernetes** (Container Orchestration)\n` +
      `* **Google IT Support Professional Certificate**\n` +
      `* **CNSS 4011 Information Assurance Standard** (National Security Systems)\n\n` +
      `Every certificate on his portfolio includes an external verification link and Credential ID!`;
  }
  
  if (query.includes('contact') || query.includes('email') || query.includes('reach') || query.includes('hire') || query.includes('phone') || query.includes('touch')) {
    return `**How to Contact Nagendra H G:**\n\n` +
      `* **Email:** [hgnagendra@gmail.com](mailto:hgnagendra@gmail.com)\n` +
      `* **LinkedIn:** [linkedin.com/in/nagendrahg](https://www.linkedin.com/in/nagendrahg)\n` +
      `* **GitHub:** [github.com/nagendrahg](https://github.com/nagendrahg)\n` +
      `* **Location:** The National Institute of Engineering (NIE), Mysuru, Karnataka, India.\n\n` +
      `You can also use the contact form on this page or download his digital vCard (.vcf) directly!`;
  }

  if (query.includes('project') || query.includes('work') || query.includes('experience') || query.includes('nie')) {
    return `**Notable Career Highlights & Projects:**\n\n` +
      `* **NIE Campus E-Governance Portal:** Engineered an institutional portal managing records, admissions, and compliance for 5,000+ users with 99.9% uptime.\n` +
      `* **Enterprise Zero-Trust Defense:** Architected perimeter firewalls, 802.1X authentication, and VLAN segmentation safeguarding NIE's academic network.\n` +
      `* **Google Crowdsource Level 20:** Global top contributor supporting AI speech corpora and the Kannada Vocalize language initiative.\n` +
      `* **20+ Years Track Record:** Continuous engineering leadership across higher-education IT systems and enterprise security.`;
  }

  return `Hello! I'm Nagendra's AI Recruiter Assistant.\n\n` +
    `Nagendra H G is a **Senior Programmer, Cybersecurity Analyst, and Google Certified GenAI Leader** at NIE Mysuru with over 20 years of systems engineering experience.\n\n` +
    `Feel free to ask me anything about his:\n` +
    `* **Technical skills & cybersecurity expertise**\n` +
    `* **Professional certifications & verified credentials**\n` +
    `* **E-Governance projects & infrastructure work**\n` +
    `* **Contact details for consulting or career opportunities**`;
}

// API Routes
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Return intelligent fallback response based on portfolio context
      const fallbackText = getFallbackResponse(message);
      return res.json({ text: fallbackText });
    }

    // Build chat conversation or generate content with system instruction
    const promptParts = [
      `User Question: ${message}`,
      `Provide a well-structured, clear answer with bullet points or bold text where appropriate.`
    ];

    if (history && Array.isArray(history) && history.length > 0) {
      const formattedHistory = history
        .slice(-4)
        .map((h: { role: string; content: string }) => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.content}`)
        .join('\n');
      promptParts.unshift(`Recent conversation context:\n${formattedHistory}\n`);
    }

    // Supported models in order of preference with automatic failover during high-demand spikes
    const candidateModels = ['gemini-3.8-flash', 'gemini-flash-latest', 'gemini-3.1-flash-lite'];
    let replyText = '';

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: promptParts.join('\n\n'),
          config: {
            systemInstruction: NAGENDRA_SYSTEM_PROMPT,
            temperature: 0.7,
          },
        });

        if (response?.text) {
          replyText = response.text;
          break;
        }
      } catch (modelErr: any) {
        // If 503 high demand or transient error, proceed to fallback model
        const errorMessage = modelErr?.message || '';
        const isTemporarySpike = errorMessage.includes('503') || 
                                 errorMessage.includes('demand') || 
                                 errorMessage.includes('UNAVAILABLE') ||
                                 modelErr?.status === 503 ||
                                 modelErr?.code === 503;

        console.warn(`Model ${modelName} transient issue: ${isTemporarySpike ? 'temporary high demand' : errorMessage}. Trying next fallback.`);
      }
    }

    // If all models encounter temporary capacity limits, supply the intelligent domain dossier
    if (!replyText) {
      replyText = getFallbackResponse(message);
    }

    return res.json({ text: replyText });
  } catch (error: any) {
    // Graceful fallback prevents 500 error propagation to client
    console.warn('Handling request via local portfolio knowledge:', error?.message || error);
    const fallbackText = getFallbackResponse(req.body?.message || '');
    return res.json({ text: fallbackText });
  }
});

// Contact Form Endpoint - delivers messages to hgnagendra@gmail.com
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, inquiryType, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    console.log(`[Contact Form Submission] From: ${name} <${email}>`);
    console.log(`Topic: ${inquiryType} | Subject: ${subject || 'N/A'}`);
    console.log(`Message: ${message}`);

    // Forward to FormSubmit relay to deliver directly to hgnagendra@gmail.com
    let emailDelivered = false;
    try {
      const relayRes = await fetch('https://formsubmit.co/ajax/hgnagendra@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `[Portfolio Contact] ${subject || inquiryType || 'New Message'} from ${name}`,
          inquiryType: inquiryType || 'Consulting / Advisory',
          message,
          _template: 'table',
        }),
      });

      if (relayRes.ok) {
        emailDelivered = true;
      }
    } catch (relayErr) {
      console.warn('FormSubmit relay attempt failed or blocked by network:', relayErr);
    }

    return res.json({ 
      success: true, 
      emailDelivered,
      recipient: 'hgnagendra@gmail.com'
    });
  } catch (error: any) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({ error: 'Internal server error processing contact request.' });
  }
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
