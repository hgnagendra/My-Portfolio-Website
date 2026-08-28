import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  FileDown, 
  Mail, 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'skills', 'experience', 'certifications', 'resume', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FDFDFD]/90 dark:bg-[#0b0f17]/90 backdrop-blur-md border-b border-gray-200/80 dark:border-slate-800/80 shadow-xs py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tag */}
        <a 
          id="nav-brand-logo"
          href="#top" 
          onClick={(e) => handleNavClick(e, '#top')}
          className="group flex items-center gap-3"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-black dark:bg-slate-800 text-white font-mono font-bold text-base shadow-xs group-hover:ring-2 group-hover:ring-blue-500/20 transition-all overflow-hidden border border-gray-200 dark:border-slate-700">
            {profileData.photoUrl ? (
              <img
                src={profileData.photoUrl}
                alt={profileData.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              <span>NH</span>
            )}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-blue-600 border-2 border-white dark:border-slate-900 rounded-full" title="Active & Available" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-gray-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-base sm:text-lg">
                {profileData.name}<span className="text-blue-600 dark:text-blue-400">.</span>
              </span>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700">
                NIE Mysuru
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-slate-400 hidden sm:block">
              20+ Yrs IT & Cybersecurity
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-gray-100/80 dark:bg-slate-900/80 border border-gray-200/80 dark:border-slate-800 rounded-full px-3 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              id={`nav-link-${link.id}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-3 py-1 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-white dark:bg-slate-800 text-black dark:text-white shadow-xs font-semibold'
                  : 'text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Actions & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full text-gray-600 dark:text-slate-300 bg-white dark:bg-slate-800/90 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700 transition-all cursor-pointer shadow-xs"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-180 duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 animate-in spin-in-180 duration-300" />
            )}
          </button>

          <button
            id="nav-resume-btn"
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-medium text-gray-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700 transition-all hover:text-black dark:hover:text-white cursor-pointer shadow-xs"
          >
            <FileDown className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Resume</span>
          </button>

          <a
            id="nav-contact-cta"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-medium text-white bg-black dark:bg-blue-600 hover:bg-gray-800 dark:hover:bg-blue-500 transition-all shadow-xs cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-white" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Menu Toggle & Theme Quick Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            id="nav-mobile-resume-btn"
            onClick={onOpenResumeModal}
            className="sm:hidden p-2 rounded-xl bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700"
            title="Download Resume"
          >
            <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </button>

          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-700 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-white/98 dark:bg-slate-900/98 border-b border-gray-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl mt-3 shadow-lg"
        >
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-gray-100 dark:border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs uppercase tracking-wider font-medium ${
                  activeSection === link.id
                    ? 'bg-gray-100 dark:bg-slate-800 text-black dark:text-white font-semibold'
                    : 'text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800/60 hover:text-black dark:hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-40" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              id="mobile-nav-theme-btn"
              onClick={toggleTheme}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-slate-100 border border-gray-200 dark:border-slate-700"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Switch to Light Theme</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-700" />
                  <span>Switch to Dark Theme</span>
                </>
              )}
            </button>

            <button
              id="mobile-nav-resume-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-slate-100 border border-gray-200 dark:border-slate-700"
            >
              <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Download Full Resume (CV)</span>
            </button>

            <a
              id="mobile-nav-contact-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-black dark:bg-blue-600 text-white shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch / Hire</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
