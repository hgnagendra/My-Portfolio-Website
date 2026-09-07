/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrintableResumeModal } from './components/PrintableResumeModal';
import { RecruiterChatWidget } from './components/RecruiterChatWidget';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FDFDFD] dark:bg-[#0b0f17] text-[#1A1A1A] dark:text-slate-100 selection:bg-blue-600/15 selection:text-blue-700 dark:selection:bg-blue-500/30 dark:selection:text-blue-300 transition-colors duration-300">
        {/* Global Navbar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Layout */}
        <main className="relative">
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <About onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <Projects />
          <Skills />
          <Experience />
          <Certifications />
          <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating AI Recruiter Assistant Chat Widget */}
        <RecruiterChatWidget />

        {/* Printable / Viewable Resume Modal */}
        <PrintableResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
