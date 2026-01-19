import React, { useEffect, useState } from 'react';
import { BrainCircuit, Users, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import SkillCard from './SkillCard';

interface LandingPageProps {
  onStart: () => void;
  isVisible: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart, isVisible }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerClass = `transition-all duration-700 ease-in-out transform ${
    isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-sm pointer-events-none'
  }`;

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${containerClass}`}>
      <div className="max-w-6xl w-full flex flex-col items-center z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-wider uppercase backdrop-blur-sm">
            AI Portfolio Showcase
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            我的个人学习向作品：
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 drop-shadow-lg">
              AI 产品面试官
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            体验基于大模型的智能面试考核，全方位评估产品经理核心素质。
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          <SkillCard 
            title="产品逻辑思维" 
            description="考察需求分析、功能定义及逻辑闭环能力，确保方案严谨可行。"
            icon={<BrainCircuit size={28} />}
            delay={100}
          />
          <SkillCard 
            title="用户需求洞察" 
            description="模拟真实用户场景，深度挖掘痛点与隐性需求，体现同理心。"
            icon={<Users size={28} />}
            delay={200}
          />
          <SkillCard 
            title="商业变现能力" 
            description="评估商业模式设计与ROI分析能力，平衡用户体验与商业价值。"
            icon={<TrendingUp size={28} />}
            delay={300}
          />
          <SkillCard 
            title="高压抗压能力" 
            description="面对刁钻追问与突发状况的临场反应与情绪稳定性测试。"
            icon={<ShieldCheck size={28} />}
            delay={400}
          />
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <button
            onClick={onStart}
            className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">开始面试</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-white to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;