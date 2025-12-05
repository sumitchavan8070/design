import { Star, TrendingUp, Briefcase, Users as UsersIcon, ChevronRight, Play } from 'lucide-react';
import { UserType } from '../../../App';

interface HomePageProps {
  userType: UserType;
}

export function HomePage({ userType }: HomePageProps) {
  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-950/80 backdrop-blur-lg border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl">LetsFAME</h1>
            <p className="text-gray-400 text-sm">Where Talent Meets Opportunity</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
        </div>
      </div>

      <div className="px-6 py-6 space-y-8">
        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            icon={<Star className="w-5 h-5" />}
            label="Profile Views"
            value="234"
            trend="+12%"
          />
          <StatCard
            icon={<Briefcase className="w-5 h-5" />}
            label="Applications"
            value="8"
            trend="Active"
          />
        </div>

        {/* Featured Talents */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-xl">Featured Talents</h2>
            <button className="text-purple-400 flex items-center gap-1">
              See All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
            {featuredTalents.map((talent) => (
              <TalentCard key={talent.id} {...talent} />
            ))}
          </div>
        </section>

        {/* Trending Opportunities */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <h2 className="text-white text-xl">Trending Today</h2>
            </div>
            <button className="text-purple-400 flex items-center gap-1">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {trendingJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </section>

        {/* Casting Calls Today */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-xl">🎬 Casting Calls Today</h2>
            <button className="text-purple-400 flex items-center gap-1">
              All Auditions
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {castingCalls.map((call) => (
              <CastingCard key={call.id} {...call} />
            ))}
          </div>
        </section>

        {/* Recommended Collaborators */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <UsersIcon className="w-5 h-5 text-purple-400" />
              <h2 className="text-white text-xl">Recommended For You</h2>
            </div>
            <button className="text-purple-400 flex items-center gap-1">
              More
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {collaborators.map((person) => (
              <CollaboratorCard key={person.id} {...person} />
            ))}
          </div>
        </section>

        {/* Success Story */}
        <section className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <h3 className="text-white">Success Story</h3>
          </div>
          <p className="text-gray-300 mb-4">
            &quot;Got my first lead role through LetsFAME! The platform connected me with amazing directors.&quot;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
            <div>
              <p className="text-white">Priya Sharma</p>
              <p className="text-gray-400 text-sm">Lead Actor</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, trend }: { icon: React.ReactNode; label: string; value: string; trend: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
      <div className="text-purple-400 mb-2">{icon}</div>
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <p className="text-white text-2xl">{value}</p>
        <p className="text-green-400 text-xs">{trend}</p>
      </div>
    </div>
  );
}

function TalentCard({ name, role, image }: { id: number; name: string; role: string; image: string }) {
  return (
    <div className="flex-shrink-0 w-32">
      <div className="relative mb-2">
        <div
          className="w-32 h-40 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute top-2 right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
          <Play className="w-4 h-4 text-white fill-white" />
        </div>
      </div>
      <p className="text-white text-sm mb-1 truncate">{name}</p>
      <p className="text-gray-400 text-xs truncate">{role}</p>
    </div>
  );
}

function JobCard({ title, company, type, location }: { id: number; title: string; company: string; type: string; location: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-white mb-1">{title}</h3>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex-shrink-0" />
      </div>
      <div className="flex items-center gap-3">
        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">{type}</span>
        <span className="text-gray-500 text-xs">{location}</span>
      </div>
    </div>
  );
}

function CastingCard({ title, role, date, urgent }: { id: number; title: string; role: string; date: string; urgent?: boolean }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white">{title}</h3>
            {urgent && (
              <span className="px-2 py-0.5 bg-red-500/20 text-red-300 rounded text-xs">Urgent</span>
            )}
          </div>
          <p className="text-gray-400 text-sm mb-2">{role}</p>
          <p className="text-gray-500 text-xs">{date}</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm">
          Apply
        </button>
      </div>
    </div>
  );
}

function CollaboratorCard({ name, role, image }: { id: number; name: string; role: string; image: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
      <div
        className="w-full h-32 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-3"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <p className="text-white text-sm mb-1 truncate">{name}</p>
      <p className="text-gray-400 text-xs mb-3 truncate">{role}</p>
      <button className="w-full py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm hover:bg-purple-500/30 transition-colors">
        Connect
      </button>
    </div>
  );
}

const featuredTalents = [
  { id: 1, name: 'Arjun Mehta', role: 'Lead Actor', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun' },
  { id: 2, name: 'Sneha Iyer', role: 'Director', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sneha' },
  { id: 3, name: 'Rahul Kapoor', role: 'Cinematographer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul' },
  { id: 4, name: 'Ananya Roy', role: 'Editor', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ananya' },
];

const trendingJobs = [
  { id: 1, title: 'Lead Actor Required', company: 'Red Chillies Entertainment', type: 'Full-time', location: 'Mumbai' },
  { id: 2, title: 'Cinematographer', company: 'Dharma Productions', type: 'Contract', location: 'Delhi' },
  { id: 3, title: 'Video Editor', company: 'Yash Raj Films', type: 'Remote', location: 'Remote' },
];

const castingCalls = [
  { id: 1, title: 'Web Series Audition', role: 'Supporting Actor (Male, 25-35)', date: 'Today, 3:00 PM', urgent: true },
  { id: 2, title: 'Commercial Shoot', role: 'Model (Female, 20-30)', date: 'Tomorrow, 10:00 AM' },
];

const collaborators = [
  { id: 1, name: 'Vikram Singh', role: 'Sound Designer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram' },
  { id: 2, name: 'Kavya Nair', role: 'Scriptwriter', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kavya' },
];
