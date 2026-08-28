import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Users, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Terminal,
  Cpu,
  Globe,
  Sparkles,
  FileText
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface AboutProps {
  onOpenResumeModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="about" className="py-20 bg-[#FDFDFD] dark:bg-[#0b0f17] border-b border-gray-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-slate-500">
            Biography & Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-white">
            20+ Years of Engineering Resilient IT Ecosystems<span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-slate-300 max-w-3xl">
            From hands-on laboratory instruction in 1999 to leading campus-wide E-Governance, zero-trust cybersecurity, and Google Cloud systems today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Detailed Story & Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-gray-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {profileData.about.bio.map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Ethos Quote Box */}
            <div className="p-6 rounded-3xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Professional Ethos & Mission
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-slate-300 italic leading-relaxed">
                    "{profileData.about.mission}"
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
                  <Cpu className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Cybersecurity & Pen-Testing</h4>
                </div>
                <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                  Expertise in OWASP Top 10 vulnerabilities, automated vulnerability scanning, SSL/TLS hardening, and threat mitigation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
                  <Globe className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">E-Governance & Cloud</h4>
                </div>
                <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                  University of Mysore PGD in E-Governance, Google Cloud Workspace Admin, and enterprise campus academic ERP design.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Key Milestones & Profile Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800 p-6 sm:p-7 space-y-6">
              <div className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-slate-800">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-2xs shrink-0 bg-white dark:bg-slate-800">
                  {profileData.photoUrl ? (
                    <img
                      src={profileData.photoUrl}
                      alt={profileData.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-gray-700 dark:text-slate-300 bg-gray-100 dark:bg-slate-800">
                      NH
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {profileData.name}
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    Programmer @ NIE Mysuru
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-slate-400 font-mono mt-0.5">
                    Mysuru, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between items-start py-1 border-b border-gray-200/70 dark:border-slate-800">
                  <span className="text-gray-500 dark:text-slate-400">Current Role</span>
                  <span className="font-semibold text-gray-900 dark:text-slate-100 text-right">Programmer @ NIE Mysuru</span>
                </div>

                <div className="flex justify-between items-start py-1 border-b border-gray-200/70 dark:border-slate-800">
                  <span className="text-gray-500 dark:text-slate-400">Experience</span>
                  <span className="font-semibold text-gray-900 dark:text-slate-100 text-right">20+ Years Continuous IT</span>
                </div>

                <div className="flex justify-between items-start py-1 border-b border-gray-200/70 dark:border-slate-800">
                  <span className="text-gray-500 dark:text-slate-400">Specialization</span>
                  <span className="font-semibold text-gray-900 dark:text-slate-100 text-right">Cybersecurity & E-Governance</span>
                </div>

                <div className="flex justify-between items-start py-1 border-b border-gray-200/70 dark:border-slate-800">
                  <span className="text-gray-500 dark:text-slate-400">Education</span>
                  <span className="font-semibold text-gray-900 dark:text-slate-100 text-right">PGD E-Gov (UoM) • B.Sc IT</span>
                </div>

                <div className="flex justify-between items-start py-1 border-b border-gray-200/70 dark:border-slate-800">
                  <span className="text-gray-500 dark:text-slate-400">Google Credentials</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400 text-right">GenAI Leader • Level 20</span>
                </div>

                <div className="flex justify-between items-start py-1">
                  <span className="text-gray-500 dark:text-slate-400">Security Credentials</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400 text-right">TCS, CNSS, OWASP PenTest</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  id="about-view-resume-btn"
                  onClick={onOpenResumeModal}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-black dark:bg-blue-600 text-white hover:bg-gray-800 dark:hover:bg-blue-500 transition-all cursor-pointer shadow-xs"
                >
                  <FileText className="w-4 h-4 text-blue-400 dark:text-white" />
                  <span>Inspect Full Resume & Credentials</span>
                </button>
              </div>
            </div>

            {/* Quick Mentorship & Community Badge */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Mentorship & Academic Leadership</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                Regularly conducts hands-on workshops in ethical hacking, web application defensive strategies, and Linux systems administration for undergraduate engineering students and academic faculty.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
