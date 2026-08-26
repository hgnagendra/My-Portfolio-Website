import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData, experienceData, educationData, certificationsData, skillCategories } from '../data/portfolioData';

interface PrintableResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableResumeModal: React.FC<PrintableResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 }
    });
    window.print();
  };

  return (
    <div 
      id="printable-resume-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/40 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static"
      onClick={onClose}
    >
      {/* Container Dialog */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-y-auto p-4 sm:p-8 space-y-6 text-gray-900 print:max-w-none print:max-h-none print:bg-white print:text-black print:border-none print:p-0 print:m-0 print:shadow-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Toolbar (hidden during print) */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900 text-base">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs font-mono text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded-full border border-gray-200">
              Print / PDF Ready
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="resume-modal-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-black hover:bg-gray-800 text-white transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4 text-blue-400" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-gray-100 text-gray-500 hover:text-black hover:bg-gray-200 transition-colors cursor-pointer"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Authentic Resume Paper View */}
        <div 
          id="printable-resume-paper"
          className="bg-white text-slate-900 p-6 sm:p-10 rounded-2xl border border-gray-200 font-sans space-y-6 print:shadow-none print:border-none print:p-0 print:rounded-none"
        >
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5 space-y-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight font-serif">
                    {profileData.name}
                  </h1>
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-widest font-mono">
                    20+ Years IT & Cybersecurity
                  </span>
                </div>
                
                <p className="text-sm font-semibold text-slate-800">
                  Programmer @ The National Institute of Engineering (NIE), Mysuru | E-Governance Specialist
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-1 font-mono">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-800" />
                    {profileData.email}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-800" />
                    {profileData.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-slate-800" />
                    linkedin.com/in/nagendrahg
                  </span>
                </div>
              </div>

              {profileData.photoUrl && (
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-slate-900 shadow-sm shrink-0 bg-slate-100">
                  <img
                    src={profileData.photoUrl}
                    alt={profileData.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Two-Column Body Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left Sidebar (4 cols): Skills, Education, Certifications */}
            <div className="md:col-span-4 space-y-5 border-r-0 md:border-r border-slate-200 pr-0 md:pr-4">
              
              {/* Top Skills */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 bg-slate-100 p-1.5 rounded border-l-2 border-slate-900">
                  Top Skills & Expertise
                </h2>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li className="font-semibold text-slate-900">• Google GenAI Leader (Certified)</li>
                  <li className="font-semibold text-slate-900">• WebAppSecurity (OWASP)</li>
                  <li className="font-semibold text-slate-900">• PenetrationTesting & Hacking</li>
                  <li>• E-Governance & Academic ERP</li>
                  <li>• Linux / Unix System Admin</li>
                  <li>• Campus LAN/WAN & VLANs</li>
                  <li>• UTM Firewalls & IDS/IPS</li>
                  <li>• Google Cloud & Kubernetes</li>
                  <li>• Google Workspace Admin</li>
                  <li>• Python & Bash Scripting</li>
                </ul>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 bg-slate-100 p-1.5 rounded border-l-2 border-slate-900">
                  Certifications
                </h2>
                <ul className="text-[11px] text-slate-700 space-y-2">
                  {certificationsData.map(c => (
                    <li key={c.id}>
                      <span className="font-semibold text-slate-900 block leading-tight">{c.name}</span>
                      <span className="text-slate-500 text-[10px]">{c.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 bg-slate-100 p-1.5 rounded border-l-2 border-slate-900">
                  Education
                </h2>
                <div className="space-y-2.5 text-xs text-slate-700">
                  {educationData.map(edu => (
                    <div key={edu.id} className="space-y-0.5">
                      <div className="font-bold text-slate-900 leading-tight">{edu.degree} — {edu.field}</div>
                      <div className="text-slate-600 text-[11px]">{edu.institution} ({edu.period})</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Main Column (8 cols): Summary, Experience */}
            <div className="md:col-span-8 space-y-5">
              
              {/* Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 bg-slate-100 p-1.5 rounded border-l-2 border-slate-900">
                  Executive Summary
                </h2>
                <p className="text-xs text-slate-700 leading-relaxed text-justify">
                  Experienced IT professional with over 20 years of expertise in system administration, cybersecurity, and network management. Currently serving as a Programmer at The National Institute of Engineering (NIE), Mysuru, specializing in maintaining critical IT infrastructure, managing campus-wide networks, implementing robust cybersecurity protocols, and driving Generative AI adoption. Credentials include Google Certified Generative AI Leader, CNSS certification, PGD in E-Governance (University of Mysore), and B.Sc in Information Technology (KSOU). Level 20 Contributor at Google Crowdsource.
                </p>
              </div>

              {/* Professional Experience */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 bg-slate-100 p-1.5 rounded border-l-2 border-slate-900">
                  Professional Experience
                </h2>

                <div className="space-y-4">
                  {experienceData.map(exp => (
                    <div key={exp.id} className="space-y-1.5 text-xs">
                      <div className="flex justify-between items-baseline">
                        <div>
                          <span className="font-bold text-slate-950 text-sm">{exp.role}</span>
                          <span className="text-slate-600 font-medium ml-1">@ {exp.organization}</span>
                        </div>
                        <span className="font-mono text-[11px] text-slate-500 shrink-0">{exp.period}</span>
                      </div>
                      <p className="text-slate-500 text-[11px]">{exp.location}</p>
                      <p className="text-slate-700 leading-relaxed">{exp.summary}</p>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-700 text-[11px] pl-1">
                        {exp.highlights.slice(0, 3).map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Footer of paper */}
          <div className="pt-3 border-t border-slate-200 text-[10px] text-slate-500 flex justify-between font-mono">
            <span>Nagendra H G — Curriculum Vitae</span>
            <span>Mysuru, Karnataka, India</span>
          </div>

        </div>

      </div>
    </div>
  );
};
