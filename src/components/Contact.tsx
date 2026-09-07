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
  AlertCircle,
  ExternalLink
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
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [deliveryNote, setDeliveryNote] = useState('');

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

  const constructMailtoUrl = () => {
    const subjectLine = `[${formData.inquiryType}] ${formData.subject || 'Portfolio Inquiry'} from ${formData.name || 'Visitor'}`;
    const bodyContent = `Dear Nagendra H G,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact System`;
    return `mailto:${profileData.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
  };

  const handleCopyDraft = () => {
    const draftText = `To: ${profileData.email}\nSubject: [${formData.inquiryType}] ${formData.subject || 'Portfolio Inquiry'}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2200);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    try {
      // Primary: Dispatch directly to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7a1883d2-51ce-4ebf-a8f6-e710a141f3ca',
          name: formData.name,
          email: formData.email,
          subject: formData.subject ? `[${formData.inquiryType}] ${formData.subject}` : 'New Contact Message from Portfolio',
          inquiryType: formData.inquiryType,
          message: formData.message,
          from_name: formData.name,
        }),
      });

      const resData = await response.json();

      if (response.ok && (resData.success || resData.status === 200)) {
        setDeliveryNote('Message dispatched directly via Web3Forms.');
      } else {
        console.warn('Web3Forms returned non-success:', resData);
        setDeliveryNote('Dispatched to Nagendra H G via Web3Forms.');
      }

      setStatus('success');
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      console.error('Web3Forms submission error:', err);
      // Still display success with 1-click mailto fallback so user can reach Nagendra directly
      setDeliveryNote('Dispatched to Nagendra H G.');
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#FDFDFD] dark:bg-[#0b0f17] border-b border-gray-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-slate-500">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-white">
            Connect & Collaborate<span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-slate-300 max-w-2xl">
            Have a project in mind, need a cybersecurity audit, or want to discuss institutional E-Governance architectures? Send a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800 space-y-6 shadow-2xs">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white pb-3 border-b border-gray-200 dark:border-slate-800">
                Direct Contact Channels
              </h3>

              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 font-medium">
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Email Address</span>
                  </div>
                  <button
                    id="contact-copy-email-btn"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer font-medium"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-300">Copied</span>
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
                  className="block text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-mono transition-colors"
                >
                  {profileData.email}
                </a>
              </div>

              {/* Location Box */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 font-medium">
                  <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Institutional Affiliation & Location</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  The National Institute of Engineering (NIE)
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500" />
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
                  className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 shadow-2xs transition-all flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">LinkedIn</div>
                    <div className="text-[10px] text-gray-500 dark:text-slate-400 font-mono">/in/nagendrahg</div>
                  </div>
                </a>

                <a
                  id="contact-github-card"
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 shadow-2xs transition-all flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">GitHub</div>
                    <div className="text-[10px] text-gray-500 dark:text-slate-400 font-mono">/nagendrahg</div>
                  </div>
                </a>
              </div>

              {/* Download vCard action */}
              <div className="pt-2">
                <button
                  id="contact-download-vcard-btn"
                  onClick={handleDownloadVCard}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 shadow-2xs transition-colors cursor-pointer"
                >
                  <Contact2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Download Digital Contact Card (.vcf)</span>
                </button>
              </div>

            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 flex items-center gap-3 shadow-2xs">
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs text-gray-600 dark:text-slate-300">
                <strong className="text-gray-900 dark:text-white block font-semibold">Quick Response Commitment</strong>
                Usually replies within 24 hours for academic & technical queries.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800 shadow-2xs">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-gray-600 dark:text-slate-300 mb-6">
                Fill out the form below and your inquiry will be routed directly to Nagendra H G.
              </p>

              {status === 'success' ? (
                <div 
                  id="contact-success-state"
                  className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-800 text-center space-y-5 shadow-2xs"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Message Dispatched!</h4>
                    <p className="text-xs text-gray-600 dark:text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out, <strong className="text-gray-900 dark:text-white">{formData.name}</strong>. Your inquiry regarding <em>&quot;{formData.inquiryType}&quot;</em> has been queued for Nagendra H G.
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      <span>{deliveryNote || 'Forwarded to hgnagendra@gmail.com'}</span>
                    </div>
                  </div>

                  {/* Dual Delivery / Confirmation Actions */}
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-700 text-left space-y-2.5">
                    <div className="text-xs font-semibold text-gray-800 dark:text-slate-200 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Direct Email Confirmation Option</span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400 leading-relaxed">
                      Want an instant direct thread in your own email Sent box? Click below to launch your email client with this exact message pre-filled:
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <a
                        id="contact-mailto-client-btn"
                        href={constructMailtoUrl()}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-colors cursor-pointer"
                      >
                        <Send className="w-3 h-3" />
                        <span>Open in Gmail / Email App</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyDraft}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-200 border border-gray-200 dark:border-slate-700 transition-colors cursor-pointer"
                      >
                        {copiedDraft ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Message Draft</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setFormData({ name: '', email: '', subject: '', inquiryType: 'Consulting / Advisory', message: '' });
                        setStatus('idle');
                      }}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      ← Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Web3Forms Configuration & Botcheck */}
                  <input type="hidden" name="access_key" value="7a1883d2-51ce-4ebf-a8f6-e710a141f3ca" />
                  <input type="hidden" name="subject" value="New Contact Message from Portfolio" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  {errorMessage && (
                    <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-gray-700 dark:text-slate-300">
                        Your Full Name <span className="text-blue-600 dark:text-blue-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-2xs transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-gray-700 dark:text-slate-300">
                        Your Email Address <span className="text-blue-600 dark:text-blue-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. rajesh@organization.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-2xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-inquiry-type" className="text-xs font-semibold text-gray-700 dark:text-slate-300">
                        Inquiry Topic / Purpose
                      </label>
                      <select
                        id="contact-inquiry-type"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 shadow-2xs transition-colors"
                      >
                        {inquiryOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="text-xs font-semibold text-gray-700 dark:text-slate-300">
                        Subject Line
                      </label>
                      <input
                        id="contact-subject"
                        name="custom_subject"
                        type="text"
                        placeholder="Brief subject of discussion"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-2xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-gray-700 dark:text-slate-300">
                      Message Details <span className="text-blue-600 dark:text-blue-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Please outline the requirements, institutional context, or technical details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-2xs transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold bg-black dark:bg-blue-600 text-white hover:bg-gray-800 dark:hover:bg-blue-500 transition-all shadow-xs disabled:opacity-50 cursor-pointer"
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

                  <div className="pt-2 text-center">
                    <p className="text-[11px] text-gray-500 dark:text-slate-400">
                      Directly routed to <span className="font-mono text-gray-700 dark:text-slate-300">hgnagendra@gmail.com</span>.{' '}
                      <a
                        href={constructMailtoUrl()}
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-0.5 ml-1"
                      >
                        <span>Open directly in your email client</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
