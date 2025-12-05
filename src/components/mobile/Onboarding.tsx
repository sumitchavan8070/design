import { useState } from 'react';
import { Search, Briefcase, Award, Users, ChevronRight } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Search,
    title: 'Discover Talents',
    description: 'Find top talents from actors to directors, cinematographers to editors. Your dream team awaits!',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Briefcase,
    title: 'Find Jobs',
    description: 'Access 50,000+ opportunities in film, TV, OTT, and media. Your next big break is here!',
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: Award,
    title: 'Build Your Portfolio',
    description: 'Showcase your work with stunning portfolios. Let your talent shine and get discovered!',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Users,
    title: 'Connect Professionals',
    description: 'Join 100,000+ industry professionals. Network, collaborate, and grow your career!',
    color: 'from-indigo-500 to-purple-500',
  },
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex flex-col relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Skip button */}
      <div className="relative z-10 p-6 flex justify-end">
        <button
          onClick={handleSkip}
          className="text-gray-400 hover:text-white transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 pb-20">
        <div className={`w-32 h-32 bg-gradient-to-br ${slide.color} rounded-3xl flex items-center justify-center mb-12 shadow-2xl`}>
          <Icon className="w-16 h-16 text-white" />
        </div>

        <h2 className="text-white text-3xl text-center mb-4">
          {slide.title}
        </h2>
        <p className="text-gray-300 text-center text-lg leading-relaxed">
          {slide.description}
        </p>
      </div>

      {/* Pagination dots */}
      <div className="relative z-10 flex justify-center gap-2 mb-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                : 'w-2 bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Next button */}
      <div className="relative z-10 px-6 pb-8">
        <button
          onClick={handleNext}
          className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
