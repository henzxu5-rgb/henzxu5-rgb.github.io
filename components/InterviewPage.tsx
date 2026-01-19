import React from 'react';
import { ChevronLeft, Loader2 } from 'lucide-react';

interface InterviewPageProps {
  onBack: () => void;
  isVisible: boolean;
}

const InterviewPage: React.FC<InterviewPageProps> = ({ onBack, isVisible }) => {
  const [iframeLoaded, setIframeLoaded] = React.useState(false);

  // Transition classes
  const containerClass = `fixed inset-0 z-20 flex flex-col bg-slate-950 transition-all duration-500 ease-in-out ${
    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[20px] pointer-events-none'
  }`;

  return (
    <div className={containerClass}>
      {/* Header / Navigation */}
      <div className="h-16 border-b border-white/10 flex items-center px-4 md:px-8 bg-slate-950/80 backdrop-blur-md z-30 shrink-0">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group px-3 py-2 rounded-lg hover:bg-white/5"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">返回首页</span>
        </button>
        <div className="ml-auto text-sm text-slate-500 font-mono hidden md:block">
          SESSION_ID: AI-PM-2024-V1
        </div>
      </div>

      {/* Main Content Area (Iframe Container) */}
      <div className="flex-1 relative w-full h-full overflow-hidden bg-slate-900">
        
        {/* Loading State */}
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
            <Loader2 className="w-10 h-10 animate-spin text-indigo-500 mb-4" />
            <p className="text-sm font-light tracking-wide animate-pulse">Initializing Interface...</p>
          </div>
        )}

        {/* The Iframe */}
        {/* Note: If you see a 500 error, please verify the src URL is correct and the bot is published. */}
        <iframe 
          src="https://udify.app/chatbot/QiB7kKPo5gHKkTmM" 
          title="Interview Interface"
          className={`w-full h-full border-none transition-opacity duration-700 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIframeLoaded(true)}
          allow="microphone; camera; midi; encrypted-media;"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        />
      </div>
    </div>
  );
};

export default InterviewPage;