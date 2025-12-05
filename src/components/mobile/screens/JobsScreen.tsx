import { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, Clock, DollarSign, Bookmark, ChevronRight } from 'lucide-react';
import { UserType } from '../../../App';

interface JobsScreenProps {
  userType: UserType;
}

export function JobsScreen({ userType }: JobsScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState<'all' | 'auditions' | 'crew' | 'content'>('all');

  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Header */}
      <div className="bg-slate-950 border-b border-white/10 px-6 py-4">
        <h1 className="text-white text-2xl mb-4">Discover Jobs</h1>
        
        {/* Search bar */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jobs..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
          <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
            <SlidersHorizontal className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {jobTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/5 border border-white/10 text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quick filters */}
      <div className="px-6 py-4 border-b border-white/10">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <FilterChip label="Paid" />
          <FilterChip label="Remote" />
          <FilterChip label="Urgent" />
          <FilterChip label="Featured" />
        </div>
      </div>

      {/* Jobs list */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {jobs.map((job) => (
          <JobDetailCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}

function FilterChip({ label }: { label: string }) {
  return (
    <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm hover:bg-white/10 transition-colors whitespace-nowrap">
      {label}
    </button>
  );
}

function JobDetailCard({ title, company, type, location, salary, posted, description, urgent, logo }: {
  id: number;
  title: string;
  company: string;
  type: string;
  location: string;
  salary: string;
  posted: string;
  description: string;
  urgent?: boolean;
  logo: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex-shrink-0"
          style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover' }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-white truncate pr-2">{title}</h3>
            <button className="flex-shrink-0">
              <Bookmark className="w-5 h-5 text-gray-400 hover:text-purple-400" />
            </button>
          </div>
          <p className="text-gray-400 text-sm mb-2">{company}</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
              {type}
            </span>
            {urgent && (
              <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">
                Urgent
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <DollarSign className="w-4 h-4" />
          <span>{salary}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Clock className="w-4 h-4" />
          <span>{posted}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all">
          Apply Now
        </button>
        <button className="px-4 py-3 bg-white/5 border border-white/10 text-gray-400 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
          Details
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

const jobTabs = [
  { id: 'all', label: 'All Jobs' },
  { id: 'auditions', label: 'Auditions' },
  { id: 'crew', label: 'Crew Jobs' },
  { id: 'content', label: 'Content Creator' },
];

const jobs = [
  {
    id: 1,
    title: 'Lead Actor Required',
    company: 'Red Chillies Entertainment',
    type: 'Full-time',
    location: 'Mumbai, Maharashtra',
    salary: '₹5L - ₹15L per project',
    posted: 'Posted 2 hours ago',
    description: 'Looking for a talented lead actor for upcoming action thriller. Must have experience in action sequences.',
    urgent: true,
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=redchillies',
  },
  {
    id: 2,
    title: 'Cinematographer',
    company: 'Dharma Productions',
    type: 'Contract',
    location: 'Delhi NCR',
    salary: '₹3L - ₹8L per project',
    posted: 'Posted 5 hours ago',
    description: 'Experienced cinematographer needed for romantic drama. Knowledge of RED cameras preferred.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=dharma',
  },
  {
    id: 3,
    title: 'Video Editor - Web Series',
    company: 'Netflix India',
    type: 'Remote',
    location: 'Remote',
    salary: '₹40K - ₹80K per month',
    posted: 'Posted 1 day ago',
    description: 'Seeking creative video editor for upcoming web series. Proficiency in Adobe Premiere and DaVinci Resolve required.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=netflix',
  },
  {
    id: 4,
    title: 'Supporting Actor - TV Serial',
    company: 'Balaji Telefilms',
    type: 'Part-time',
    location: 'Mumbai, Maharashtra',
    salary: '₹15K - ₹30K per month',
    posted: 'Posted 2 days ago',
    description: 'Supporting role in daily TV serial. Must be comfortable with daily shoots.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=balaji',
  },
];
