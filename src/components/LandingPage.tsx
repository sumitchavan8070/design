import { Film, Users, Briefcase, Trophy, Star, Search, ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

export function LandingPage({ onSignIn, onSignUp }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Decorative blurred orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-purple-600 rounded-full blur-3xl opacity-25" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-400 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Film className="w-8 h-8 text-purple-400" />
          <span className="text-white text-2xl">LetsFAME</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={onSignIn}
            className="px-6 py-2 text-white hover:text-purple-300 transition-colors"
          >
            Sign In
          </button>
          <button
            onClick={onSignUp}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Get Started Free
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-5xl md:text-6xl mb-6">
            Where Talent Meets Opportunity! 🌟
          </h1>
          <p className="text-gray-300 text-xl mb-8">
            The premier networking hub for the global film, media, and entertainment community! 🎬✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={onSignUp}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
            >
              Join Now - It&apos;s Free <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all border border-white/20">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-purple-300">India&apos;s Most</div>
              <div>Innovative App 2024</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-2">100K+</div>
              <div className="text-purple-300">Industry</div>
              <div>Professionals</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-2">50K+</div>
              <div className="text-purple-300">Job</div>
              <div>Opportunities</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-2">10K+</div>
              <div className="text-purple-300">Success</div>
              <div>Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-white text-4xl text-center mb-12">Why Choose LetsFAME?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Search className="w-8 h-8" />}
            title="Discover Top Talents"
            description="Find top talents effortlessly with our curated platform tailored exclusively for film, media & entertainment industry."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Connect Professionals"
            description="Join our community of over 100,000 industry movers and shakers! Network with established filmmakers and industry experts."
          />
          <FeatureCard
            icon={<Briefcase className="w-8 h-8" />}
            title="Find Jobs Easily"
            description="Explore 50,000+ exciting opportunities to collaborate and thrive in your field. From auditions to production roles."
          />
          <FeatureCard
            icon={<Trophy className="w-8 h-8" />}
            title="Proven Success"
            description="Over 10,000 success stories and counting, where dreams meet opportunity. Join the winners today!"
          />
          <FeatureCard
            icon={<Star className="w-8 h-8" />}
            title="Showcase Your Work"
            description="Create impressive profiles to showcase your talent, making it easier for potential employers to discover you."
          />
          <FeatureCard
            icon={<Film className="w-8 h-8" />}
            title="For All Creators"
            description="Connect with camera operators, lighting experts, scriptwriters, editors, actors, and actresses. Find your dream team!"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-4xl text-center mb-12">Benefits for Job Seekers</h2>
          <div className="space-y-6">
            <BenefitItem
              number="1"
              title="Vast Network Access"
              description="Access to a vast network of industry professionals and job opportunities, increasing your chances of finding the perfect role."
            />
            <BenefitItem
              number="2"
              title="Showcase Your Talent"
              description="Showcase your work and talent through your profile, making it easier for potential employers to discover you."
            />
            <BenefitItem
              number="3"
              title="Smart Job Matching"
              description="User-friendly interface and advanced search filters save you time by presenting relevant opportunities tailored to your preferences."
            />
            <BenefitItem
              number="4"
              title="Secure Platform"
              description="Our secure and trusted platform ensures you're connecting with reputable employers and legitimate job opportunities."
            />
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-white text-4xl text-center mb-12">Opportunities Available</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <OpportunityCard
            title="Film Productions"
            items={[
              'Acting Auditions',
              'Production Assistant Roles',
              'Casting Calls',
              'Cinematographer Positions',
              'Screenwriting Opportunities',
            ]}
          />
          <OpportunityCard
            title="TV & Media"
            items={[
              'TV Channel Jobs',
              'TV Shows Production',
              'Documentary Projects',
              'Commercial Productions',
              'Editing & Sound Design',
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <h2 className="text-white text-4xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 text-xl mb-8">
            Join LetsFAME today and unlock your potential in the entertainment industry!
          </p>
          <button
            onClick={onSignUp}
            className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all"
          >
            Get Started Free - No Credit Card Needed
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-6 py-8 text-center text-gray-400 border-t border-white/10">
        <p>#LetsFAME #EntertainmentNetworking</p>
        <p className="mt-2">Where Talent Meets Opportunity! 🌟</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
      <div className="text-purple-400 mb-4">{icon}</div>
      <h3 className="text-white text-xl mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function BenefitItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
        {number}
      </div>
      <div>
        <h3 className="text-white text-xl mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function OpportunityCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      <h3 className="text-white text-2xl mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-300">
            <ChevronRight className="w-5 h-5 text-purple-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
