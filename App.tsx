import React, { useState } from 'react';
import { ViewState } from './types';
import Background from './components/Background';
import LandingPage from './components/LandingPage';
import InterviewPage from './components/InterviewPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  
  // Transition logic
  // We keep both components mounted (or use conditional rendering) 
  // but manage their visibility via props to ensure smooth CSS transitions.
  
  return (
    <div className="relative min-h-screen font-sans text-slate-100 overflow-hidden">
      <Background />
      
      {/* Landing View */}
      <div className={`absolute inset-0 transition-all duration-500 ${currentView === 'landing' ? 'z-10' : 'z-0'}`}>
         <LandingPage 
           onStart={() => setCurrentView('interview')} 
           isVisible={currentView === 'landing'}
         />
      </div>

      {/* Interview View (Overlay) */}
      {/* We render it but hide/show with CSS opacity/transform in the component itself */}
      <InterviewPage 
        onBack={() => setCurrentView('landing')} 
        isVisible={currentView === 'interview'}
      />
    </div>
  );
};

export default App;