import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ShieldAlert, 
  Server, 
  Globe, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu,
  Layers,
  Search
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'E-Governance', 'Cybersecurity', 'Cloud & Systems', 'AI & Community'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#FDFDFD] border-b border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
              Selected Projects & Deployments
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              Featured Systems & Architecture<span className="text-blue-600">.</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              Production systems, cybersecurity auditing workflows, and campus infrastructure solutions engineered across 20+ years.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-gray-100 border border-gray-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-black text-white font-semibold shadow-xs'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative flex flex-col justify-between rounded-3xl bg-gray-50 border border-gray-200 hover:border-gray-300 p-7 transition-all duration-300 hover:shadow-xs"
            >
              <div className="space-y-4">
                {/* Category & Featured Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-700 border border-gray-200">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Quick Metrics preview */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-200/70">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                        <div className="text-base font-bold font-mono text-gray-900">{m.value}</div>
                        <div className="text-[10px] text-gray-500 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Impact Snippets */}
                <div className="space-y-1.5 pt-1">
                  {project.impact.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech tags & Action */}
              <div className="pt-6 mt-4 border-t border-gray-200/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white text-gray-600 border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-white text-gray-400 border border-gray-200">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <button
                  id={`project-details-btn-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-full text-xs font-semibold text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 transition-all cursor-pointer shadow-2xs"
                >
                  <span>View Case Study & Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
