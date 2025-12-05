import { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, Star, MessageCircle, UserPlus } from 'lucide-react';

export function TalentDiscovery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Header */}
      <div className="bg-slate-950 border-b border-white/10 px-6 py-4">
        <h1 className="text-white text-2xl mb-4">Explore Talents</h1>
        
        {/* Search bar */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search talents..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/5 border border-white/10 text-gray-400'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="bg-slate-900 border-b border-white/10 px-6 py-4 space-y-4">
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Experience Level</label>
            <div className="flex gap-2">
              {['Beginner', 'Intermediate', 'Expert'].map((level) => (
                <button
                  key={level}
                  className="flex-1 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-sm hover:bg-white/10"
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Location</label>
            <input
              type="text"
              placeholder="Enter city"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
      )}

      {/* Talents grid */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="grid grid-cols-2 gap-4">
          {talents.map((talent) => (
            <TalentProfileCard key={talent.id} {...talent} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TalentProfileCard({ name, role, location, rating, image, verified }: {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  image: string;
  verified?: boolean;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors">
      {/* Profile image */}
      <div
        className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="h-full bg-gradient-to-t from-slate-950 to-transparent flex flex-col justify-end p-3">
          {verified && (
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mb-auto">
              <span className="text-white text-xs">✓</span>
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-white mb-1 truncate">{name}</h3>
        <p className="text-gray-400 text-sm mb-2 truncate">{role}</p>
        
        <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
          <MapPin className="w-3 h-3" />
          <span className="truncate">{location}</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm">{rating}</span>
          </div>
          <div className="flex gap-1">
            <button className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/30">
              <MessageCircle className="w-4 h-4 text-purple-300" />
            </button>
            <button className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center hover:bg-pink-500/30">
              <UserPlus className="w-4 h-4 text-pink-300" />
            </button>
          </div>
        </div>

        <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all">
          View Profile
        </button>
      </div>
    </div>
  );
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'actor', label: 'Actor' },
  { id: 'director', label: 'Director' },
  { id: 'cinematographer', label: 'Cinematographer' },
  { id: 'editor', label: 'Editor' },
  { id: 'model', label: 'Model' },
  { id: 'writer', label: 'Writer' },
];

const talents = [
  { id: 1, name: 'Arjun Mehta', role: 'Lead Actor', location: 'Mumbai, India', rating: 4.8, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun1', verified: true },
  { id: 2, name: 'Priya Sharma', role: 'Director', location: 'Delhi, India', rating: 4.9, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya1', verified: true },
  { id: 3, name: 'Rahul Kumar', role: 'Cinematographer', location: 'Bangalore, India', rating: 4.7, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul1' },
  { id: 4, name: 'Ananya Singh', role: 'Editor', location: 'Mumbai, India', rating: 4.6, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ananya1' },
  { id: 5, name: 'Vikram Patel', role: 'Actor', location: 'Hyderabad, India', rating: 4.8, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram1', verified: true },
  { id: 6, name: 'Sneha Reddy', role: 'Model', location: 'Chennai, India', rating: 4.5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sneha1' },
];
