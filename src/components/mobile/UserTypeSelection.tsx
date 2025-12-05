import { Drama, Video, PenTool, Building2 } from 'lucide-react';
import { UserType } from '../../App';

interface UserTypeSelectionProps {
  onSelect: (type: UserType) => void;
}

const userTypes = [
  {
    id: 'actor' as UserType,
    icon: Drama,
    title: 'Actor / Model',
    description: 'Auditions, casting calls, portfolio showcase',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'crew' as UserType,
    icon: Video,
    title: 'Cinematographer / Editor / Crew',
    description: 'Camera, editing, lighting, sound & production jobs',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    id: 'writer' as UserType,
    icon: PenTool,
    title: 'Writer / Director',
    description: 'Scriptwriting, directing & creative opportunities',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'producer' as UserType,
    icon: Building2,
    title: 'Production House / Recruiter',
    description: 'Post jobs, find talents, manage projects',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export function UserTypeSelection({ onSelect }: UserTypeSelectionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex flex-col relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-28 h-28 bg-purple-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-5 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-25" />
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 text-center">
        <h1 className="text-white text-3xl mb-2">I am a...</h1>
        <p className="text-gray-300">
          Select your role to personalize your experience
        </p>
      </div>

      {/* User type cards */}
      <div className="relative z-10 flex-1 px-6 pb-6 overflow-y-auto">
        <div className="space-y-4">
          {userTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => onSelect(type.id)}
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl mb-2">{type.title}</h3>
                    <p className="text-gray-400">{type.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
