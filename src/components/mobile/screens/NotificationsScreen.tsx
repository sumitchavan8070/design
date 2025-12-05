import { Briefcase, Users, Star, MessageCircle, Calendar, Award } from 'lucide-react';

type NotificationType = 'job' | 'connection' | 'review' | 'message' | 'audition' | 'achievement';

export function NotificationsScreen() {
  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Header */}
      <div className="bg-slate-950 border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white text-2xl">Notifications</h1>
          <button className="text-purple-400 text-sm">Mark all read</button>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          <FilterButton label="All" count={23} isActive />
          <FilterButton label="Jobs" count={12} />
          <FilterButton label="Network" count={8} />
          <FilterButton label="Messages" count={3} />
        </div>
      </div>

      {/* Notifications list */}
      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-white/5">
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterButton({ label, count, isActive }: { label: string; count?: number; isActive?: boolean }) {
  return (
    <button
      className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
        isActive
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
          : 'bg-white/5 border border-white/10 text-gray-400'
      }`}
    >
      {label} {count !== undefined && `(${count})`}
    </button>
  );
}

function NotificationItem({ type, title, message, time, read, icon }: {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  read?: boolean;
  icon: string;
}) {
  const icons = {
    job: <Briefcase className="w-5 h-5 text-purple-400" />,
    connection: <Users className="w-5 h-5 text-blue-400" />,
    review: <Star className="w-5 h-5 text-yellow-400" />,
    message: <MessageCircle className="w-5 h-5 text-green-400" />,
    audition: <Calendar className="w-5 h-5 text-pink-400" />,
    achievement: <Award className="w-5 h-5 text-purple-400" />,
  };

  return (
    <div className={`px-6 py-4 hover:bg-white/5 transition-colors ${!read ? 'bg-white/5' : ''}`}>
      <div className="flex gap-3">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
          type === 'job' ? 'bg-purple-500/20' :
          type === 'connection' ? 'bg-blue-500/20' :
          type === 'review' ? 'bg-yellow-500/20' :
          type === 'message' ? 'bg-green-500/20' :
          type === 'audition' ? 'bg-pink-500/20' :
          'bg-purple-500/20'
        }`}>
          {icons[type]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-white pr-2">{title}</h3>
            {!read && (
              <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0 mt-2" />
            )}
          </div>
          <p className="text-gray-400 text-sm mb-2">{message}</p>
          <p className="text-gray-500 text-xs">{time}</p>
        </div>
      </div>
    </div>
  );
}

const notifications = [
  {
    id: 1,
    type: 'job' as NotificationType,
    title: 'New Job Match!',
    message: 'Lead Actor role at Red Chillies Entertainment matches your profile',
    time: '5 minutes ago',
    read: false,
    icon: 'briefcase',
  },
  {
    id: 2,
    type: 'connection' as NotificationType,
    title: 'Connection Request',
    message: 'Vikram Singh wants to connect with you',
    time: '2 hours ago',
    read: false,
    icon: 'users',
  },
  {
    id: 3,
    type: 'audition' as NotificationType,
    title: 'Audition Scheduled',
    message: 'Your audition for "Web Series Project" is on Dec 8, 3:00 PM',
    time: '3 hours ago',
    read: false,
    icon: 'calendar',
  },
  {
    id: 4,
    type: 'message' as NotificationType,
    title: 'New Message',
    message: 'Priya Sharma sent you a message',
    time: '5 hours ago',
    read: false,
    icon: 'message',
  },
  {
    id: 5,
    type: 'review' as NotificationType,
    title: 'New Review!',
    message: 'Rahul Kumar left you a 5-star review',
    time: '1 day ago',
    read: true,
    icon: 'star',
  },
  {
    id: 6,
    type: 'job' as NotificationType,
    title: 'Application Update',
    message: 'You have been shortlisted for Cinematographer role',
    time: '1 day ago',
    read: true,
    icon: 'briefcase',
  },
  {
    id: 7,
    type: 'achievement' as NotificationType,
    title: 'Achievement Unlocked! 🎉',
    message: 'Profile Complete! You now have priority in search results',
    time: '2 days ago',
    read: true,
    icon: 'award',
  },
  {
    id: 8,
    type: 'connection' as NotificationType,
    title: 'Kavya Nair accepted your request',
    message: 'You are now connected with Kavya Nair',
    time: '2 days ago',
    read: true,
    icon: 'users',
  },
];
