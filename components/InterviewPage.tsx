import React from 'react';
import { ChevronLeft, Loader2 } from 'lucide-react';

interface InterviewPageProps {
  onBack: () => void;
  isVisible: boolean;
}

const InterviewPage: React.FC<InterviewPageProps> = ({ onBack, isVisible }) => {
  const [iframeLoaded, setIframeLoaded] = React.useState(false);

  // 优化：确保容器在不显示时完全移出视图，显示时占据全屏
  const containerClass = `fixed inset-0 z-50 flex flex-col bg-[#0f172a] transition-all duration-500 ease-in-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
  }`;

  return (
    <div className={containerClass} style={{ height: '100vh', width: '100vw' }}>
      {/* 顶部导航栏 */}
      <div className="h-16 border-b border-white/10 flex items-center px-4 md:px-8 bg-[#0f172a]/80 backdrop-blur-md shrink-0">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group px-3 py-2 rounded-lg hover:bg-white/10"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">返回首页</span>
        </button>
        <div className="ml-auto text-xs text-slate-500 font-mono hidden md:block tracking-widest">
          SYSTEM_STATUS: OPERATIONAL | ID: AI-PM-2024
        </div>
      </div>

      {/* 智能体容器：强制撑开高度 */}
      <div className="flex-1 relative w-full bg-[#0f172a] overflow-hidden">
        {/* 加载动画 */}
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f172a] z-10">
            <Loader2 className="w-10 h-10 animate-spin text-indigo-500 mb-4" />
            <p className="text-sm text-slate-400 font-light tracking-widest animate-pulse">正在进入面试房间...</p>
          </div>
        )}

        {/* Dify 智能体 Iframe */}
        <iframe 
          src="https://udify.app/chatbot/QiB7kKPo5gHKkTmM" 
          title="Interview Interface"
          className={`w-full h-full border-none transition-opacity duration-1000 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIframeLoaded(true)}
          allow="microphone; camera; midi; encrypted-media;"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        />
      </div>
    </div>
  );
};

export default InterviewPage;
