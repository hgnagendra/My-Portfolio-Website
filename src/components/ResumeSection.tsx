import React, { useState } from 'react';
import { 
  FileDown, 
  Printer, 
  FileText, 
  Copy, 
  Check, 
  Eye, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Award,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData, experienceData, educationData, certificationsData, skillCategories } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedText, setCopiedText] = useState(false);

  const generateMarkdownResume = () => {
    return `# ${profileData.name}
${profileData.headline}
Email: ${profileData.email} | Location: ${profileData.location}
LinkedIn: ${profileData.linkedinUrl} | GitHub: ${profileData.githubUrl}

---

## PROFESSIONAL SUMMARY
${profileData.about.bio.join('\n\n')}

---

## TOP SKILLS & CORE COMPETENCIES
- Generative AI Strategy & Enterprise LLM Integration (Google Certified)
- Web Application Security (OWASP Top 10)
- Penetration Testing & Ethical Hacking
- E-Governance Architecture & Institutional ERPs
- Linux / Unix & Windows Server Administration
- Google Cloud Computing Foundation with Kubernetes
- Google Cloud Professional Workspace Administration
- Campus Network Architecture, VLAN Segmentation & UTM Firewalls

---

## PROFESSIONAL EXPERIENCE

${experienceData.map(exp => `### ${exp.role}
**${exp.organization}** — ${exp.location}
*${exp.period}*
${exp.summary}
Key Contributions:
${exp.highlights.map(h => `- ${h}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}
`).join('\n\n')}

---

## EDUCATION

${educationData.map(edu => `### ${edu.degree} in ${edu.field}
**${edu.institution}** (${edu.period})
${edu.details || ''}
`).join('\n\n')}

---

## CERTIFICATIONS
${certificationsData.map(c => `- **${c.name}** — Issued by ${c.issuer} (${c.skills.join(', ')})`).join('\n')}
`;
  };

  const handleDownloadMarkdown = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    const markdown = generateMarkdownResume();
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Nagendra_HG_Resume_2026.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadText = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    const text = generateMarkdownResume();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Nagendra_HG_Resume_ATS.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyResume = () => {
    const text = generateMarkdownResume();
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2200);
  };

  return (
    <section id="resume" className="py-20 bg-[#FDFDFD] border-b border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
              Document Center
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              Downloadable Resume & Curriculum Vitae<span className="text-blue-600">.</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              Export and download my complete curriculum vitae in your preferred format: Print-ready PDF, ATS-friendly Markdown, or Plain Text.
            </p>
          </div>

          {/* Primary Quick Download CTA */}
          <button
            id="resume-view-print-cta"
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 shadow-xs transition-all self-start md:self-auto cursor-pointer"
          >
            <Printer className="w-4 h-4 text-blue-400" />
            <span>Open Print-Ready PDF Resume</span>
          </button>
        </div>

        {/* 3 Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Option 1: PDF Viewer & Print */}
          <div 
            id="resume-card-pdf"
            className="p-6 sm:p-7 rounded-3xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all space-y-4 flex flex-col justify-between shadow-2xs"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-white text-blue-600 border border-gray-200 shadow-2xs w-fit">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Print / Save as PDF
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Clean, publication-grade formatted CV with complete typography styling, ready for 1-click browser Print-to-PDF or sharing with hiring boards.
              </p>
            </div>

            <button
              id="resume-btn-open-modal"
              onClick={onOpenResumeModal}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 shadow-2xs transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4 text-blue-600" />
              <span>Preview & Print PDF</span>
            </button>
          </div>

          {/* Option 2: ATS Markdown */}
          <div 
            id="resume-card-markdown"
            className="p-6 sm:p-7 rounded-3xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all space-y-4 flex flex-col justify-between shadow-2xs"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-white text-blue-600 border border-gray-200 shadow-2xs w-fit">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                ATS-Optimized Markdown (.md)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Structured standard Markdown format formatted specifically for automated applicant tracking systems (ATS) and LLM parsing.
              </p>
            </div>

            <button
              id="resume-btn-download-md"
              onClick={handleDownloadMarkdown}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 shadow-2xs transition-colors cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-blue-600" />
              <span>Download Markdown (.md)</span>
            </button>
          </div>

          {/* Option 3: Plaintext & Copy */}
          <div 
            id="resume-card-txt"
            className="p-6 sm:p-7 rounded-3xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all space-y-4 flex flex-col justify-between shadow-2xs"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-white text-blue-600 border border-gray-200 shadow-2xs w-fit">
                <Copy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Plain Text / Quick Copy
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Download as UTF-8 raw text or instantly copy the full resume markdown directly to your clipboard.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                id="resume-btn-download-txt"
                onClick={handleDownloadText}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-semibold bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 shadow-2xs transition-colors cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5 text-gray-500" />
                <span>Text (.txt)</span>
              </button>

              <button
                id="resume-btn-copy-clipboard"
                onClick={handleCopyResume}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-semibold bg-black hover:bg-gray-800 text-white shadow-xs transition-colors cursor-pointer"
              >
                {copiedText ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-400" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Live Resume Summary Snapshot Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-6 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-3.5">
              {profileData.photoUrl && (
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-200 shadow-2xs shrink-0 bg-white">
                  <img
                    src={profileData.photoUrl}
                    alt={profileData.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {profileData.name} — Curriculum Vitae Snapshot
                </h3>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  {profileData.headline} • {profileData.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                Verified Career History
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-600">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wider text-[11px]">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                <span>Primary Positions</span>
              </div>
              <ul className="space-y-1.5 text-gray-600">
                <li><strong className="text-gray-900">NIE Mysuru:</strong> Programmer & E-Gov Lead (2009–Present)</li>
                <li><strong className="text-gray-900">Google Crowdsource:</strong> Level 20 Contributor (2022–Present)</li>
                <li><strong className="text-gray-900">Mahajana College:</strong> System Administrator (2004–2009)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wider text-[11px]">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                <span>Academic Degrees</span>
              </div>
              <ul className="space-y-1.5 text-gray-600">
                <li><strong className="text-gray-900">PGD E-Governance:</strong> University of Mysore</li>
                <li><strong className="text-gray-900">B.Sc Info Technology:</strong> KSOU</li>
                <li><strong className="text-gray-900">Diploma Computer Science:</strong> Srimath Polytechnic</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wider text-[11px]">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                <span>Key Certifications</span>
              </div>
              <ul className="space-y-1.5 text-gray-600">
                <li>• Google Cloud Certified Generative AI Leader</li>
                <li>• TCS Cybersecurity Analyst Job Simulation</li>
                <li>• Google Cloud Professional Workspace Admin</li>
                <li>• CNSS National Security Systems Certified</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
