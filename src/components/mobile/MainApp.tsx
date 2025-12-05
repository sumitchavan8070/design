import { useState } from 'react';
import { Home, Search, Briefcase, Users, Bell, User } from 'lucide-react';
import { HomePage } from './screens/HomePage';
import { TalentDiscovery } from './screens/TalentDiscovery';
import { JobsScreen } from './screens/JobsScreen';
import { NetworkScreen } from './screens/NetworkScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { UserType } from '../../App';

interface MainAppProps {
  userType: UserType;
}

type TabType = 'home' | 'discover' | 'jobs' | 'network' | 'notifications' | 'profile';

export function MainApp({ userType }: MainAppProps) {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <div className="h-full bg-slate-950 flex flex-col">
      {/* Main content area */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'home' && <HomePage userType={userType} />}
        {activeTab === 'discover' && <TalentDiscovery />}
        {activeTab === 'jobs' && <JobsScreen userType={userType} />}
        {activeTab === 'network' && <NetworkScreen />}
        {activeTab === 'notifications' && <NotificationsScreen />}
        {activeTab === 'profile' && <ProfileScreen userType={userType} />}
      </div>

      {/* Bottom navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-lg border-t border-white/10 px-2 py-3">
        <div className="flex items-center justify-around">
          <TabButton
            icon={Home}
            label="Home"
            isActive={activeTab === 'home'}
            onClick={() => setActiveTab('home')}
          />
          <TabButton
            icon={Search}
            label="Discover"
            isActive={activeTab === 'discover'}
            onClick={() => setActiveTab('discover')}
          />
          <TabButton
            icon={Briefcase}
            label="Jobs"
            isActive={activeTab === 'jobs'}
            onClick={() => setActiveTab('jobs')}
            badge={12}
          />
          <TabButton
            icon={Users}
            label="Network"
            isActive={activeTab === 'network'}
            onClick={() => setActiveTab('network')}
          />
          <TabButton
            icon={Bell}
            label="Alerts"
            isActive={activeTab === 'notifications'}
            onClick={() => setActiveTab('notifications')}
            badge={5}
          />
          <TabButton
            icon={User}
            label="Profile"
            isActive={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
          />
        </div>
      </nav>
    </div>
  );
}

interface TabButtonProps {
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
  badge?: number;
}

function TabButton({ icon: Icon, label, isActive, onClick, badge }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 px-3 py-2 relative"
    >
      <div className="relative">
        <Icon
          className={`w-6 h-6 transition-colors ${
            isActive ? 'text-purple-400' : 'text-gray-500'
          }`}
        />
        {badge && badge > 0 && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">{badge > 9 ? '9+' : badge}</span>
          </div>
        )}
      </div>
      <span
        className={`text-xs transition-colors ${
          isActive ? 'text-purple-400' : 'text-gray-500'
        }`}
      >
        {label}
      </span>
      {isActive && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full" />
      )}
    </button>
  );
}
