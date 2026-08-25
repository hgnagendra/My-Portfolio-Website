import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  MapPin, 
  Mail, 
  Linkedin, 
  Github, 
  FileDown, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Server,
  Award,
  Lock,
  Copy,
  Check
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section 
      id="top"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-gray-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs text-gray-700 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="font-semibold text-gray-900">NIE Mysuru</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-600">20+ Years in IT Infrastructure & Cybersecurity</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.1]">
                Hi, I'm {profileData.name}<span className="text-blue-600">.</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-600 tracking-tight">
                Programmer @ The National Institute of Engineering (NIE), Mysuru
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 shadow-xs">
                  E-Governance
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 shadow-xs">
                  WebAppSecurity
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 shadow-xs">
                  PenetrationTesting
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 shadow-xs">
                  Ethical Hacking
                </span>
              </div>
            </div>

            {/* Subtitle & Value Proposition */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Experienced IT professional with over 20 years of hands-on leadership in campus-wide network infrastructure, ethical hacking, and electronic governance. Empowering institutions with resilient, zero-trust cybersecurity protocols and scalable digital platforms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-all shadow-xs cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 transition-all cursor-pointer shadow-xs"
              >
                <FileDown className="w-4 h-4 text-blue-600" />
                <span>Download Resume</span>
              </button>

              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-gray-100 hover:bg-gray-200/80 text-gray-700 border border-gray-200 transition-all cursor-pointer"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 text-xs font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-mono">{profileData.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Contact Direct Links in clean minimalist slash format */}
            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-gray-500 border-t border-gray-200">
              <a
                id="hero-linkedin-link"
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <span className="uppercase tracking-widest font-medium">LinkedIn /</span>
              </a>

              <a
                id="hero-github-link"
                href={profileData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <span className="uppercase tracking-widest font-medium">GitHub /</span>
              </a>

              <div className="flex items-center gap-1.5 text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>Mysuru, Karnataka, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Tech Profile Card */}
          <div className="lg:col-span-5">
            <div 
              id="hero-terminal-card"
              className="rounded-3xl bg-gray-50 border border-gray-200 shadow-sm overflow-hidden"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="ml-2 text-xs font-mono text-gray-500 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-600" />
                    sysinfo.sh — nagendra@nie-mysuru
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ONLINE
                </span>
              </div>

              {/* Terminal / Summary Body */}
              <div className="p-6 space-y-4 text-xs text-gray-700">
                <div className="space-y-1">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Technical Profile</h3>
                  <p className="text-gray-900 font-bold text-sm">Nagendra H G — Lead Programmer & Cybersecurity Analyst</p>
                  <p className="text-gray-500 text-xs">The National Institute of Engineering (NIE), Mysuru (17+ yrs)</p>
                </div>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                      <Lock className="w-3.5 h-3.5" />
                      <span className="font-bold text-[11px] text-gray-900">Cybersecurity</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">OWASP, Pen-testing, Ethical Hacking & Hardening</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                      <Server className="w-3.5 h-3.5" />
                      <span className="font-bold text-[11px] text-gray-900">E-Governance</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">PGD E-Gov (UoM), Campus ERPs & Networks</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                      <Award className="w-3.5 h-3.5" />
                      <span className="font-bold text-[11px] text-gray-900">Google Cloud</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">Workspace Admin & K8s Foundation Certified</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="font-bold text-[11px] text-gray-900">Crowdsource</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">Level 20 Contributor, Kannada Vocalize</p>
                  </div>
                </div>

                {/* Live Output / Verification */}
                <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>CNSS & TCS Certified</span>
                  </span>
                  <span className="text-gray-700 font-mono">B.Sc IT (KSOU)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200">
          {profileData.about.keyMetrics.map((metric, idx) => (
            <div 
              key={idx}
              id={`hero-metric-${idx}`}
              className="p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-gray-800 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                {metric.helper}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
