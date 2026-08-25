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
    <footer className="bg-[#FDFDFD] border-t border-gray-200/80 py-12 text-gray-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-[#1A1A1A] text-base">
                {profileData.name}<span className="text-blue-600">.</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 text-gray-700 border border-gray-200">
                NIE Mysuru
              </span>
            </div>
            <p className="text-gray-500">
              Senior Programmer • Cybersecurity Analyst • E-Governance Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 font-medium">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#skills" className="hover:text-black transition-colors">Skills</a>
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-black transition-colors">Certifications</a>
            <a href="#resume" className="hover:text-black transition-colors">Resume</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              id="footer-linkedin-btn"
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-white border border-gray-200 shadow-2xs hover:bg-gray-100 text-gray-700 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
            </a>

            <a
              id="footer-github-btn"
              href={profileData.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-white border border-gray-200 shadow-2xs hover:bg-gray-100 text-gray-700 transition-colors"
            >
              <Github className="w-4 h-4 text-gray-900" />
            </a>

            <a
              id="footer-email-btn"
              href={`mailto:${profileData.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-full bg-white border border-gray-200 shadow-2xs hover:bg-gray-100 text-gray-700 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-600" />
            </a>

            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-full bg-black text-white hover:bg-gray-800 shadow-xs transition-colors cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-400 text-[11px]">
          <p>© {new Date().getFullYear()} Nagendra H G. All rights reserved.</p>
          <p className="flex items-center gap-1 text-gray-500">
            <MapPin className="w-3 h-3 text-blue-600" />
            <span>The National Institute of Engineering, Mysuru, Karnataka, India</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
