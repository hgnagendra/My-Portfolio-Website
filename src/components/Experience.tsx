import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className="py-20 bg-[#FDFDFD] dark:bg-[#0b0f17] border-b border-gray-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-slate-500">
              Career Journey & Academic Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-white">
              Experience & Education<span className="text-blue-600 dark:text-blue-400">.</span>
            </h2>
            <p className="text-base text-gray-600 dark:text-slate-300 max-w-2xl">
              A comprehensive chronicle of technical leadership at NIE Mysuru, Google Crowdsource, and academic institutions across two decades.
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center p-1 rounded-full bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 self-start md:self-auto">
            <button
              id="exp-toggle-work"
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-black dark:bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work History ({experienceData.length})</span>
            </button>

            <button
              id="exp-toggle-education"
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-black dark:bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education & Degrees ({educationData.length})</span>
            </button>
          </div>
        </div>

        {/* Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 md:before:left-6 before:w-0.5 before:bg-gray-200 dark:before:bg-slate-800">
            {experienceData.map((exp, idx) => (
              <div 
                key={exp.id}
                id={`exp-card-${exp.id}`}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline node */}
                <div className="absolute left-1 md:left-3.5 top-2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-black dark:border-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-blue-400" />
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800 group-hover:border-gray-300 dark:group-hover:border-slate-700 transition-all space-y-4 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/80 dark:border-slate-800 pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        {exp.type === 'contributor' && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                            Level 20 Contributor
                          </span>
                        )}
                        {idx === 0 && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            Current Role (17+ yrs)
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700 dark:text-slate-300 font-medium mt-1">
                        <span className="flex items-center gap-1.5 text-gray-900 dark:text-white">
                          <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          {exp.organization}
                        </span>
                        <span className="text-gray-300 dark:text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-gray-500 dark:text-slate-400 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-gray-200 dark:border-slate-700 self-start sm:self-auto shadow-2xs">
                      <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="space-y-2 pt-1">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="pt-3 border-t border-gray-200/80 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu) => (
              <div 
                key={edu.id}
                id={`edu-card-${edu.id}`}
                className="p-6 sm:p-7 rounded-3xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 transition-all space-y-4 shadow-2xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2.5 rounded-2xl bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-gray-200 dark:border-slate-700 shadow-2xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700 shadow-2xs">
                    {edu.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {edu.field}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-slate-300 font-medium">
                    {edu.institution}
                  </p>
                </div>

                {edu.details && (
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed pt-2 border-t border-gray-200 dark:border-slate-800">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
