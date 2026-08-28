import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  BadgeCheck,
  Copy,
  Check,
  Calendar,
  Lock,
  Cloud,
  Cpu,
  Sparkles,
  Award
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

type CategoryFilter = 'all' | 'google-cloud' | 'cybersecurity' | 'systems-ai';

export const Certifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCredentialId = (credentialId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(credentialId);
    setCopiedId(credentialId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCertifications = certificationsData.filter(cert => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'google-cloud') {
      return cert.issuer.toLowerCase().includes('google') || cert.name.toLowerCase().includes('cloud');
    }
    if (activeFilter === 'cybersecurity') {
      return cert.name.toLowerCase().includes('cyber') || 
             cert.name.toLowerCase().includes('security') || 
             cert.name.toLowerCase().includes('cnss') ||
             cert.skills.some(s => s.toLowerCase().includes('security') || s.toLowerCase().includes('threat'));
    }
    if (activeFilter === 'systems-ai') {
      return cert.name.toLowerCase().includes('ai') || 
             cert.name.toLowerCase().includes('intelligence') || 
             cert.name.toLowerCase().includes('support') ||
             cert.name.toLowerCase().includes('k8s') ||
             cert.name.toLowerCase().includes('kubernetes');
    }
    return true;
  });

  const getIssuerIcon = (certName: string, issuer: string) => {
    const text = `${certName} ${issuer}`.toLowerCase();
    if (text.includes('ai') || text.includes('genai')) return <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
    if (text.includes('cyber') || text.includes('security') || text.includes('cnss')) return <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    if (text.includes('cloud') || text.includes('workspace')) return <Cloud className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    return <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
  };

  return (
    <section id="certifications" className="py-20 bg-[#FDFDFD] dark:bg-[#0b0f17] border-b border-gray-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col items-start gap-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-slate-500">
              Verified Credentials & Accreditations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-white">
              Professional Certifications<span className="text-blue-600 dark:text-blue-400">.</span>
            </h2>
            <p className="text-base text-gray-600 dark:text-slate-300 max-w-2xl">
              Industry-accredited credentials across Google Cloud Generative AI, Enterprise Cybersecurity, Kubernetes, National Security Systems, and Systems Architecture with direct external verification links.
            </p>
          </div>

          {/* Direct Profile Verification CTA */}
          <a
            id="verify-linkedin-certifications-btn"
            href="https://www.linkedin.com/in/nagendrahg/details/certifications/"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 shadow-2xs transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Verify All on LinkedIn Credentials</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 dark:text-slate-400" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-2">
          <button
            id="cert-filter-all"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-black dark:bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700'
            }`}
          >
            All Certifications ({certificationsData.length})
          </button>
          <button
            id="cert-filter-google"
            onClick={() => setActiveFilter('google-cloud')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'google-cloud'
                ? 'bg-black dark:bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700'
            }`}
          >
            Google Cloud & GenAI
          </button>
          <button
            id="cert-filter-cyber"
            onClick={() => setActiveFilter('cybersecurity')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'cybersecurity'
                ? 'bg-black dark:bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700'
            }`}
          >
            Cybersecurity & Defense
          </button>
          <button
            id="cert-filter-systems"
            onClick={() => setActiveFilter('systems-ai')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'systems-ai'
                ? 'bg-black dark:bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700'
            }`}
          >
            AI Foundations & Systems
          </button>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="p-6 sm:p-7 rounded-3xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 transition-all space-y-5 shadow-2xs flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Badge & Meta */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-2xs">
                      {getIssuerIcon(cert.name, cert.issuer)}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-900 dark:text-white">
                      <BadgeCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {cert.issueDate && (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-full border border-gray-200 dark:border-slate-700">
                      <Calendar className="w-3 h-3 text-gray-400 dark:text-slate-400" />
                      <span>{cert.issueDate}</span>
                    </span>
                  )}
                </div>

                {/* Name & Issuer */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                    <span className="text-gray-500 dark:text-slate-400">Issuer:</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{cert.issuer}</span>
                  </div>
                </div>

                {/* Credential ID and Verification Platform info */}
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-200 dark:border-slate-700/80 space-y-1.5 text-xs">
                  {cert.verificationPlatform && (
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-gray-500 dark:text-slate-400">Registry:</span>
                      <span className="font-medium text-gray-700 dark:text-slate-300 font-mono text-[10px]">
                        {cert.verificationPlatform}
                      </span>
                    </div>
                  )}

                  {cert.credentialId && (
                    <div className="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-slate-700/60">
                      <span className="text-gray-500 dark:text-slate-400 text-[11px]">Credential ID:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] font-semibold text-gray-800 dark:text-slate-200">
                          {cert.credentialId}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => handleCopyCredentialId(cert.credentialId!, e)}
                          title="Copy Credential ID"
                          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-400 hover:text-gray-700 dark:hover:text-slate-200 cursor-pointer transition-colors"
                        >
                          {copiedId === cert.credentialId ? (
                            <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Validated Competencies */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-medium text-gray-400 dark:text-slate-500">
                    Validated Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: External Verification Link */}
              <div className="pt-4 border-t border-gray-200 dark:border-slate-800">
                {cert.verificationUrl ? (
                  <a
                    id={`cert-verify-link-${cert.id}`}
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Verify Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </a>
                ) : (
                  <a
                    href="https://www.linkedin.com/in/nagendrahg/details/certifications/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Verify on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Endorsement Box */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                100% Externally Verifiable Credentials & Continuous Professional Development
              </h4>
              <p className="text-xs text-gray-600 dark:text-slate-300 mt-0.5">
                Every certificate listed is verified through institutional registries including Google Cloud Skills Boost, Coursera, Tata Consultancy Services, and the Committee on National Security Systems (CNSS).
              </p>
            </div>
          </div>
          <a
            id="cert-verify-all-bottom-btn"
            href="https://www.linkedin.com/in/nagendrahg/details/certifications/"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-black dark:bg-blue-600 hover:bg-gray-800 dark:hover:bg-blue-500 transition-all shadow-xs"
          >
            <span>Open Verified Registry</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

