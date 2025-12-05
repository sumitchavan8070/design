import { useState } from 'react';
import { UserPlus, UserCheck, Clock, Search, MessageCircle } from 'lucide-react';

type NetworkTab = 'connections' | 'pending' | 'suggestions';

export function NetworkScreen() {
  const [activeTab, setActiveTab] = useState<NetworkTab>('connections');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Header */}
      <div className="bg-slate-950 border-b border-white/10 px-6 py-4">
        <h1 className="text-white text-2xl mb-4">My Network</h1>
        
        {/* Search bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search connections..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <TabButton
            label="Connections"
            count={142}
            isActive={activeTab === 'connections'}
            onClick={() => setActiveTab('connections')}
          />
          <TabButton
            label="Pending"
            count={8}
            isActive={activeTab === 'pending'}
            onClick={() => setActiveTab('pending')}
          />
          <TabButton
            label="Suggestions"
            count={24}
            isActive={activeTab === 'suggestions'}
            onClick={() => setActiveTab('suggestions')}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {activeTab === 'connections' && (
          <div className="space-y-3">
            {connections.map((connection) => (
              <ConnectionCard key={connection.id} {...connection} />
            ))}
          </div>
        )}

        {activeTab === 'pending' && (
          <div className="space-y-3">
            {pendingRequests.map((request) => (
              <PendingRequestCard key={request.id} {...request} />
            ))}
          </div>
        )}

        {activeTab === 'suggestions' && (
          <div className="space-y-3">
            {suggestions.map((suggestion) => (
              <SuggestionCard key={suggestion.id} {...suggestion} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TabButton({ label, count, isActive, onClick }: {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 rounded-xl transition-all ${
        isActive
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
          : 'bg-white/5 border border-white/10 text-gray-400'
      }`}
    >
      {label} ({count})
    </button>
  );
}

function ConnectionCard({ name, role, mutualConnections, image }: {
  id: number;
  name: string;
  role: string;
  mutualConnections: number;
  image: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-3">
        <div
          className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-white mb-1 truncate">{name}</h3>
          <p className="text-gray-400 text-sm mb-1 truncate">{role}</p>
          <p className="text-gray-500 text-xs">{mutualConnections} mutual connections</p>
        </div>
        <button className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center hover:bg-purple-500/30 transition-colors">
          <MessageCircle className="w-5 h-5 text-purple-300" />
        </button>
      </div>
    </div>
  );
}

function PendingRequestCard({ name, role, time, image }: {
  id: number;
  name: string;
  role: string;
  time: string;
  image: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-white mb-1 truncate">{name}</h3>
          <p className="text-gray-400 text-sm mb-2 truncate">{role}</p>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Clock className="w-3 h-3" />
            <span>{time}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all">
          Accept
        </button>
        <button className="flex-1 py-2 bg-white/5 border border-white/10 text-gray-400 rounded-lg text-sm hover:bg-white/10 transition-colors">
          Decline
        </button>
      </div>
    </div>
  );
}

function SuggestionCard({ name, role, reason, image }: {
  id: number;
  name: string;
  role: string;
  reason: string;
  image: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-white mb-1 truncate">{name}</h3>
          <p className="text-gray-400 text-sm mb-2 truncate">{role}</p>
          <p className="text-gray-500 text-xs">{reason}</p>
        </div>
      </div>
      <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2">
        <UserPlus className="w-4 h-4" />
        Connect
      </button>
    </div>
  );
}

const connections = [
  { id: 1, name: 'Arjun Kapoor', role: 'Actor & Producer', mutualConnections: 12, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun2' },
  { id: 2, name: 'Priya Menon', role: 'Film Director', mutualConnections: 8, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya2' },
  { id: 3, name: 'Rahul Sharma', role: 'Cinematographer', mutualConnections: 15, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul2' },
  { id: 4, name: 'Ananya Das', role: 'Video Editor', mutualConnections: 6, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ananya2' },
];

const pendingRequests = [
  { id: 1, name: 'Vikram Singh', role: 'Sound Designer', time: '2 hours ago', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram2' },
  { id: 2, name: 'Kavya Nair', role: 'Scriptwriter', time: '5 hours ago', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kavya2' },
  { id: 3, name: 'Rohan Gupta', role: 'Production Manager', time: '1 day ago', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rohan' },
];

const suggestions = [
  { id: 1, name: 'Meera Iyer', role: 'Casting Director', reason: 'Works in similar projects', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=meera' },
  { id: 2, name: 'Aditya Reddy', role: 'Film Producer', reason: 'Based in Mumbai', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aditya' },
  { id: 3, name: 'Shreya Patel', role: 'Choreographer', reason: '8 mutual connections', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=shreya' },
  { id: 4, name: 'Karan Malhotra', role: 'Music Composer', reason: 'Similar interests', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=karan' },
];
