import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40"></div>
      
      {/* Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-50"></div>

      {/* Floating Particles (Simulating 'Intelligence' or 'Nodes') */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full blur-[1px] animate-float-slow"></div>
      <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full blur-[2px] animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px] animate-float-fast"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/30 rounded-full blur-[0px] animate-float-slow"></div>
    </div>
  );
};

export default Background;