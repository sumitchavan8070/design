import { useState } from 'react';
import { Settings, Share2, Edit, MapPin, Briefcase, Award, Star, Instagram, Youtube, ExternalLink, Play, Image as ImageIcon } from 'lucide-react';
import { UserType } from '../../../App';

interface ProfileScreenProps {
  userType: UserType;
}

export function ProfileScreen({ userType }: ProfileScreenProps) {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'about' | 'reviews'>('portfolio');

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Header actions */}
      <div className="sticky top-0 z-10 bg-slate-950/80 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-xl">My Profile</h1>
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
            <Share2 className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
            <Settings className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Profile header */}
      <div className="px-6 py-6">
        <div className="relative mb-6">
          {/* Cover/Banner */}
          <div className="w-full h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl" />
          
          {/* Profile picture */}
          <div className="absolute -bottom-12 left-4">
            <div className="w-24 h-24 bg-slate-900 rounded-2xl border-4 border-slate-950 overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=profile"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-950" />
          </div>

          {/* Edit button */}
          <button className="absolute -bottom-3 right-0 px-4 py-2 bg-purple-500 text-white rounded-xl flex items-center gap-2 hover:bg-purple-600 transition-colors">
            <Edit className="w-4 h-4" />
            Edit
          </button>
        </div>

        {/* Profile info */}
        <div className="mt-14 mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h2 className="text-white text-2xl mb-1">Arjun Mehta</h2>
              <p className="text-gray-400 mb-3">Actor & Model</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Mumbai, Maharashtra</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>5+ years experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Award className="w-4 h-4" />
                  <span>Featured Talent</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-xl">4.8</span>
              </div>
              <p className="text-gray-400 text-sm">42 reviews</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <StatBox label="Profile Views" value="1.2K" />
            <StatBox label="Connections" value="342" />
            <StatBox label="Projects" value="28" />
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-white mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3 mb-6">
            <SocialButton icon={<Instagram className="w-5 h-5" />} label="@arjunmehta" />
            <SocialButton icon={<Youtube className="w-5 h-5" />} label="ArjunMehtaOfficial" />
            <SocialButton icon={<ExternalLink className="w-5 h-5" />} label="IMDb" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-white/10">
          <TabButton
            label="Portfolio"
            isActive={activeTab === 'portfolio'}
            onClick={() => setActiveTab('portfolio')}
          />
          <TabButton
            label="About"
            isActive={activeTab === 'about'}
            onClick={() => setActiveTab('about')}
          />
          <TabButton
            label="Reviews"
            isActive={activeTab === 'reviews'}
            onClick={() => setActiveTab('reviews')}
          />
        </div>

        {/* Tab content */}
        {activeTab === 'portfolio' && <PortfolioTab />}
        {activeTab === 'about' && <AboutTab />}
        {activeTab === 'reviews' && <ReviewsTab />}
      </div>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
      <p className="text-white text-xl mb-1">{value}</p>
      <p className="text-gray-400 text-xs">{label}</p>
    </div>
  );
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
      <span className="text-purple-400">{icon}</span>
      <span className="text-gray-300 text-sm truncate">{label}</span>
    </button>
  );
}

function TabButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 transition-all relative ${
        isActive ? 'text-white' : 'text-gray-400'
      }`}
    >
      {label}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
      )}
    </button>
  );
}

function PortfolioTab() {
  return (
    <div>
      {/* Upload button */}
      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl py-3 mb-6 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
        <ImageIcon className="w-5 h-5" />
        Add to Portfolio
      </button>

      {/* Portfolio grid */}
      <div className="grid grid-cols-2 gap-3">
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

function PortfolioItem({ type, thumbnail }: { id: number; type: 'image' | 'video'; thumbnail: string }) {
  return (
    <div className="relative aspect-square bg-white/5 rounded-xl overflow-hidden group cursor-pointer">
      <div
        className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20"
        style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
          {type === 'video' && (
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-6 h-6 text-slate-900 fill-slate-900" />
            </div>
          )}
        </div>
      </div>
      {type === 'video' && (
        <div className="absolute top-2 right-2 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center">
          <Play className="w-4 h-4 text-white fill-white" />
        </div>
      )}
    </div>
  );
}

function AboutTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-white mb-3">Bio</h3>
        <p className="text-gray-400 leading-relaxed">
          Passionate actor with over 5 years of experience in theater, film, and television. 
          Specialized in character acting and method acting techniques. Have worked on multiple 
          award-winning projects and looking to collaborate with creative filmmakers.
        </p>
      </div>

      <div>
        <h3 className="text-white mb-3">Experience</h3>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} {...exp} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white mb-3">Education & Training</h3>
        <div className="space-y-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-white mb-1">National School of Drama</p>
            <p className="text-gray-400 text-sm">Acting & Theater Arts • 2016-2019</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({ title, project, year }: { id: number; title: string; project: string; year: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="text-white mb-1">{title}</h4>
          <p className="text-gray-400 text-sm">{project}</p>
        </div>
        <span className="text-gray-500 text-sm">{year}</span>
      </div>
    </div>
  );
}

function ReviewsTab() {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewItem key={review.id} {...review} />
      ))}
    </div>
  );
}

function ReviewItem({ name, role, rating, comment, date, avatar }: {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0"
          style={{ backgroundImage: `url(${avatar})`, backgroundSize: 'cover' }}
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-white mb-1">{name}</h4>
          <p className="text-gray-400 text-sm mb-2">{role}</p>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-500 text-xs">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm">{comment}</p>
    </div>
  );
}

const skills = ['Acting', 'Method Acting', 'Theater', 'Improvisation', 'Voice Modulation', 'Dance', 'Action Sequences'];

const portfolioItems = [
  { id: 1, type: 'video' as const, thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=p1' },
  { id: 2, type: 'image' as const, thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=p2' },
  { id: 3, type: 'video' as const, thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=p3' },
  { id: 4, type: 'image' as const, thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=p4' },
  { id: 5, type: 'image' as const, thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=p5' },
  { id: 6, type: 'video' as const, thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=p6' },
];

const experiences = [
  { id: 1, title: 'Lead Actor', project: 'Web Series "Shadows"', year: '2024' },
  { id: 2, title: 'Supporting Actor', project: 'Feature Film "Journey"', year: '2023' },
  { id: 3, title: 'Theater Performance', project: 'Hamlet - Royal Theater', year: '2022' },
];

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Director',
    rating: 5,
    comment: 'Exceptional talent! Arjun brought depth to the character that exceeded expectations. A true professional.',
    date: '2 weeks ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
  },
  {
    id: 2,
    name: 'Rahul Kapoor',
    role: 'Producer',
    rating: 5,
    comment: 'Highly dedicated and talented actor. Great to work with and always delivers on time.',
    date: '1 month ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul',
  },
];
