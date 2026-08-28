import React from 'react';
import { 
  ShieldCheck, 
  Linkedin, 
  Github, 
  Mail, 
  ArrowUp, 
  MapPin,
  ExternalLink
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FDFDFD] dark:bg-[#070b11] border-t border-gray-200/80 dark:border-slate-800/80 py-12 text-gray-500 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-[#1A1A1A] dark:text-white text-base">
                {profileData.name}<span className="text-blue-600 dark:text-blue-400">.</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700">
                NIE Mysuru
              </span>
            </div>
            <p className="text-gray-500 dark:text-slate-400">
              Senior Programmer • Cybersecurity Analyst • E-Governance Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-slate-300 font-medium">
            <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-black dark:hover:text-white transition-colors">Certifications</a>
            <a href="#resume" className="hover:text-black dark:hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              id="footer-linkedin-btn"
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-2xs hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </a>

            <a
              id="footer-github-btn"
              href={profileData.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-2xs hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-slate-100 transition-colors"
            >
              <Github className="w-4 h-4 text-gray-900 dark:text-white" />
            </a>

            <a
              id="footer-email-btn"
              href={`mailto:${profileData.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-2xs hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </a>

            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-full bg-black dark:bg-blue-600 text-white hover:bg-gray-800 dark:hover:bg-blue-500 shadow-xs transition-colors cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-gray-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-400 dark:text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Nagendra H G. All rights reserved.</p>
          <p className="flex items-center gap-1 text-gray-500 dark:text-slate-400">
            <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span>The National Institute of Engineering, Mysuru, Karnataka, India</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
