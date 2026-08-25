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
    <section id="about" className="py-20 bg-[#FDFDFD] border-b border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
            Biography & Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            20+ Years of Engineering Resilient IT Ecosystems<span className="text-blue-600">.</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl">
            From hands-on laboratory instruction in 1999 to leading campus-wide E-Governance, zero-trust cybersecurity, and Google Cloud systems today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Detailed Story & Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              {profileData.about.bio.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Ethos Quote Box */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-2xl bg-white border border-gray-200 text-blue-600 shrink-0 mt-0.5 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Professional Ethos & Mission
                  </h4>
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    "{profileData.about.mission}"
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-2 mb-2 text-blue-600">
                  <Cpu className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-gray-900">Cybersecurity & Pen-Testing</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Expertise in OWASP Top 10 vulnerabilities, automated vulnerability scanning, SSL/TLS hardening, and threat mitigation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-2 mb-2 text-blue-600">
                  <Globe className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-gray-900">E-Governance & Cloud</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  University of Mysore PGD in E-Governance, Google Cloud Workspace Admin, and enterprise campus academic ERP design.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Key Milestones & Profile Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-6 sm:p-7 space-y-6">
              <h3 className="text-base font-bold text-gray-900 flex items-center justify-between pb-3 border-b border-gray-200">
                <span>Quick Profile Summary</span>
                <span className="text-xs font-mono text-gray-500">Mysuru, IN</span>
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between items-start py-1 border-b border-gray-200/70">
                  <span className="text-gray-500">Current Role</span>
                  <span className="font-semibold text-gray-900 text-right">Programmer @ NIE Mysuru</span>
                </div>

                <div className="flex justify-between items-start py-1 border-b border-gray-200/70">
                  <span className="text-gray-500">Experience</span>
                  <span className="font-semibold text-gray-900 text-right">20+ Years Continuous IT</span>
                </div>

                <div className="flex justify-between items-start py-1 border-b border-gray-200/70">
                  <span className="text-gray-500">Specialization</span>
                  <span className="font-semibold text-gray-900 text-right">Cybersecurity & E-Governance</span>
                </div>

                <div className="flex justify-between items-start py-1 border-b border-gray-200/70">
                  <span className="text-gray-500">Education</span>
                  <span className="font-semibold text-gray-900 text-right">PGD E-Gov (UoM) • B.Sc IT</span>
                </div>

                <div className="flex justify-between items-start py-1 border-b border-gray-200/70">
                  <span className="text-gray-500">Google Crowdsource</span>
                  <span className="font-semibold text-blue-600 text-right">Level 20 Top Contributor</span>
                </div>

                <div className="flex justify-between items-start py-1">
                  <span className="text-gray-500">Security Credentials</span>
                  <span className="font-semibold text-emerald-700 text-right">TCS, CNSS, WebAppSecurity</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  id="about-view-resume-btn"
                  onClick={onOpenResumeModal}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-all cursor-pointer shadow-xs"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Inspect Full Resume & Credentials</span>
                </button>
              </div>
            </div>

            {/* Quick Mentorship & Community Badge */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Mentorship & Academic Leadership</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Regularly conducts hands-on workshops in ethical hacking, web application defensive strategies, and Linux systems administration for undergraduate engineering students and academic faculty.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
