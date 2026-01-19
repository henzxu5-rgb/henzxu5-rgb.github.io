import React from 'react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:border-indigo-500/30 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-indigo-500/20 rounded-full text-indigo-300 group-hover:text-indigo-200 group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;