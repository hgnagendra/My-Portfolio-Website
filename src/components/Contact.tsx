import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  Clock, 
  ShieldCheck,
  Building2,
  Contact2,
  Download,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'Consulting / Advisory',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const inquiryOptions = [
    'Cybersecurity Audit & Penetration Testing',
    'E-Governance & Institutional IT Systems',
    'Google Cloud & Workspace Advisory',
    'Technical Training & Workshop',
    'General Inquiry / Collaboration'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Nagendra;H;G;;
FN:Nagendra H G
ORG:The National Institute of Engineering (NIE), Mysuru
TITLE:Senior Programmer & E-Governance Specialist
EMAIL;TYPE=INTERNET,PREF:${profileData.email}
ADR;TYPE=WORK:;;The National Institute of Engineering;Mysuru;Karnataka;;India
URL:${profileData.linkedinUrl}
NOTE:20+ Years in IT Infrastructure, Web App Security, Penetration Testing & E-Governance
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Nagendra_HG_Contact.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.8 }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-[#FDFDFD] border-b border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Connect & Collaborate<span className="text-blue-600">.</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl">
            Have a project in mind, need a cybersecurity audit, or want to discuss institutional E-Governance architectures? Send a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-gray-50 border border-gray-200 space-y-6 shadow-2xs">
              <h3 className="text-lg font-bold text-gray-900 pb-3 border-b border-gray-200">
                Direct Contact Channels
              </h3>

              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>Email Address</span>
                  </div>
                  <button
                    id="contact-copy-email-btn"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 cursor-pointer font-medium"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="block text-sm font-bold text-gray-900 hover:text-blue-600 font-mono transition-colors"
                >
                  {profileData.email}
                </a>
              </div>

              {/* Location Box */}
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>Institutional Affiliation & Location</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  The National Institute of Engineering (NIE)
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  Mysuru, Karnataka, India
                </p>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  id="contact-linkedin-card"
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 shadow-2xs transition-all flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 group-hover:text-blue-600">LinkedIn</div>
                    <div className="text-[10px] text-gray-500 font-mono">/in/nagendrahg</div>
                  </div>
                </a>

                <a
                  id="contact-github-card"
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 shadow-2xs transition-all flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-xl bg-gray-100 text-gray-900 border border-gray-200">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 group-hover:text-blue-600">GitHub</div>
                    <div className="text-[10px] text-gray-500 font-mono">/nagendrahg</div>
                  </div>
                </a>
              </div>

              {/* Download vCard action */}
              <div className="pt-2">
                <button
                  id="contact-download-vcard-btn"
                  onClick={handleDownloadVCard}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-semibold bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 shadow-2xs transition-colors cursor-pointer"
                >
                  <Contact2 className="w-4 h-4 text-blue-600" />
                  <span>Download Digital Contact Card (.vcf)</span>
                </button>
              </div>

            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-2xl bg-white border border-gray-200 flex items-center gap-3 shadow-2xs">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs text-gray-600">
                <strong className="text-gray-900 block font-semibold">Quick Response Commitment</strong>
                Usually replies within 24 hours for academic & technical queries.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-2xs">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-gray-600 mb-6">
                Fill out the form below and your inquiry will be routed directly to Nagendra H G.
              </p>

              {status === 'success' ? (
                <div 
                  id="contact-success-state"
                  className="p-8 rounded-2xl bg-white border border-emerald-200 text-center space-y-4 shadow-2xs"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-gray-900">Message Delivered Successfully!</h4>
                    <p className="text-xs text-gray-600 max-w-md mx-auto">
                      Thank you for reaching out, <strong className="text-gray-900">{formData.name}</strong>. Your message regarding <em>"{formData.inquiryType}"</em> has been received. I will review it and reply to <span className="font-mono text-blue-600">{formData.email}</span> shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormData({ name: '', email: '', subject: '', inquiryType: 'Consulting / Advisory', message: '' });
                      setStatus('idle');
                    }}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold bg-black hover:bg-gray-800 text-white shadow-xs cursor-pointer transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-gray-700">
                        Your Full Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 shadow-2xs transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-gray-700">
                        Your Email Address <span className="text-blue-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. rajesh@organization.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 shadow-2xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-inquiry-type" className="text-xs font-semibold text-gray-700">
                        Inquiry Topic / Purpose
                      </label>
                      <select
                        id="contact-inquiry-type"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-blue-500 shadow-2xs transition-colors"
                      >
                        {inquiryOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-white text-gray-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="text-xs font-semibold text-gray-700">
                        Subject Line
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="Brief subject of discussion"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 shadow-2xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-gray-700">
                      Message Details <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Please outline the requirements, institutional context, or technical details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 shadow-2xs transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span>Transmitting Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-blue-400" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
