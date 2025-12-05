import { useEffect } from 'react';
import { Film } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
          <Film className="w-14 h-14 text-white" />
        </div>
        
        <div className="text-center">
          <h1 className="text-white text-5xl mb-3">LetsFAME</h1>
          <p className="text-gray-300 text-lg px-8">
            Where Talent Meets Opportunity
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
}
