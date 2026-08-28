import React, { useState } from 'react';
import { 
  Code2, 
  ShieldCheck, 
  Search, 
  Cpu, 
  Lock, 
  Server, 
  Globe, 
  Sparkles, 
  Terminal,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');

  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(s => ({ ...s, categoryTitle: cat.title }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || skill.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <section id="skills" className="py-20 bg-[#FDFDFD] dark:bg-[#0b0f17] border-b border-gray-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-slate-500">
              Technical Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-white">
              Skills & Engineering Expertise<span className="text-blue-600 dark:text-blue-400">.</span>
            </h2>
            <p className="text-base text-gray-600 dark:text-slate-300 max-w-2xl">
              Specialized domain depth in Web Application Security, Penetration Testing, Ethical Hacking, Linux System Administration, and E-Governance.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
            <input
              id="skills-search-input"
              type="text"
              placeholder="Search skill (e.g. OWASP, Linux)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-xs text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-black dark:focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Top Featured Skills Spotlight Banner */}
        <div className="mb-12 p-6 sm:p-7 rounded-3xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800 shadow-2xs">
          <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold text-xs uppercase tracking-wider mb-5">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Core Primary Specializations (Top Resume Skills)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-sm">WebAppSecurity</span>
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">15+ yrs</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">OWASP Top 10, XSS, CSRF, SQLi mitigation & secure coding practices</p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-sm">PenetrationTesting</span>
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">12+ yrs</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">Burp Suite, OWASP ZAP, Nmap, vulnerability scanning & auditing</p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-sm">Ethical Hacking</span>
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">12+ yrs</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">Threat modeling, network perimeter security, defensive hardening</p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-sm">E-Gov & Cloud</span>
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">20+ yrs</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">PGD E-Governance, Google Cloud Workspace Admin, Campus ERPs</p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            id="skills-tab-all"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-black dark:bg-blue-600 text-white font-semibold shadow-xs'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-slate-700'
            }`}
          >
            All Skills ({allSkills.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              id={`skills-tab-${cat.id}`}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-black dark:bg-blue-600 text-white font-semibold shadow-xs'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              id={`skill-item-${idx}`}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    {skill.isTop && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        Top
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-slate-400 font-mono">
                    {skill.categoryTitle}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-gray-900 dark:text-white">
                    {skill.years}
                  </span>
                </div>
              </div>

              {/* Progress Bar with clean styling */}
              <div className="space-y-1">
                <div className="w-full h-1.5 rounded-full bg-gray-200 dark:bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-black dark:bg-blue-500 transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 dark:text-slate-500 font-mono">
                  <span>Foundational</span>
                  <span>Advanced</span>
                  <span>Mastery ({skill.level}%)</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-slate-400 space-y-2">
            <p>No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="text-xs text-black dark:text-blue-400 font-semibold underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
