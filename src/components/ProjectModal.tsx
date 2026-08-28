import React, { useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  BarChart3,
  Server,
  ArrowRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="project-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#111827] border border-gray-200 dark:border-slate-850 rounded-3xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6 text-gray-800 dark:text-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          id="project-modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors focus:outline-none cursor-pointer"
          aria-label="Close Project Details Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 border border-gray-200 dark:border-slate-700">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Key Institutional Initiative
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-500 dark:text-slate-400 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Key Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-gray-900 dark:text-white">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-slate-400 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Deep Dive Description */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-slate-500 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Architecture & Implementation Overview</span>
          </h4>
          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Architecture & Security Highlights */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Technical & Security Controls</span>
            </h4>
            <ul className="space-y-2">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Measurable Impact */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-slate-500 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Measurable Impact & Outcomes</span>
          </h4>
          <ul className="space-y-2">
            {project.impact.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2.5 pt-2">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-slate-500">
            Technologies & Frameworks Deployed
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-gray-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider">
            The National Institute of Engineering, Mysuru
          </p>
          <button
            id="modal-close-action-btn"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-semibold bg-black dark:bg-blue-600 text-white hover:bg-gray-800 dark:hover:bg-blue-500 transition-all cursor-pointer shadow-xs"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
