import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  BadgeCheck,
  Cloud,
  Lock,
  Cpu
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-[#FDFDFD] border-b border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
            Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Professional Certifications & Accreditations<span className="text-blue-600">.</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl">
            Accredited credentials spanning Cybersecurity Analysis, Google Cloud Architecture, Kubernetes, National Security Systems, and AI.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="p-6 sm:p-7 rounded-3xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all space-y-4 shadow-2xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-2xl bg-white text-blue-600 border border-gray-200 shadow-2xs">
                      <BadgeCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900">
                      Verified Credential
                    </span>
                  </div>
                  <span className="flex h-2 w-2 relative">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                </div>

                {/* Name & Issuer */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-medium text-gray-500">
                    Issuer: <span className="text-blue-600 font-semibold">{cert.issuer}</span>
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="space-y-2 pt-3 border-t border-gray-200">
                <div className="text-[11px] font-medium text-gray-400">
                  Validated Competencies:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white text-gray-600 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Endorsement Box */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-white border border-gray-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                CNSS & Google Certified Continuous Professional Development
              </h4>
              <p className="text-xs text-gray-600">
                Regularly maintaining rigorous compliance with institutional security standards, data privacy laws, and modern cloud security architectures.
              </p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/nagendrahg"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-black hover:bg-gray-800 transition-all shadow-xs"
          >
            <span>Verify on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
