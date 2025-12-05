import { useState } from 'react';
import { Camera, MapPin, Briefcase, Award, Instagram, Youtube, Upload, X } from 'lucide-react';
import { UserType } from '../../App';

interface ProfileSetupProps {
  userType: UserType;
  onComplete: () => void;
}

export function ProfileSetup({ userType, onComplete }: ProfileSetupProps) {
  const [step, setStep] = useState(1);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    experience: '',
    location: '',
    skills: [] as string[],
    instagram: '',
    youtube: '',
    portfolio: [] as string[],
  });
  const [currentSkill, setCurrentSkill] = useState('');

  const handleImageUpload = () => {
    // Simulate image upload
    setProfileImage('https://api.dicebear.com/7.x/avataaars/svg?seed=user');
  };

  const handleAddSkill = () => {
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData({ ...formData, skills: [...formData.skills, currentSkill.trim()] });
      setCurrentSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData({ ...formData, skills: formData.skills.filter(s => s !== skill) });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex flex-col">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white text-2xl">Setup Your Profile</h1>
          <button onClick={handleSkip} className="text-gray-400 hover:text-white">
            Skip
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 h-1 rounded-full ${
                s <= step ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 overflow-y-auto pb-6">
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-white text-xl mb-2">Basic Information</h2>
              <p className="text-gray-400">Let&apos;s start with the basics</p>
            </div>

            {/* Profile picture */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-white/10 border-2 border-dashed border-white/30 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <button
                  onClick={handleImageUpload}
                  className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                >
                  <Upload className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-gray-400">Upload profile picture</p>
            </div>

            {/* Name */}
            <div>
              <label className="text-gray-300 block mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Profession */}
            <div>
              <label className="text-gray-300 block mb-2">Profession</label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.profession}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  placeholder="e.g., Actor, Director, Cinematographer"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="text-gray-300 block mb-2">Experience Level</label>
              <div className="grid grid-cols-3 gap-2">
                {['Beginner', 'Intermediate', 'Expert'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setFormData({ ...formData, experience: level })}
                    className={`py-3 rounded-xl transition-all ${
                      formData.experience === level
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-white/5 border border-white/10 text-gray-400'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="text-gray-300 block mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="City, State"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-white text-xl mb-2">Skills & Expertise</h2>
              <p className="text-gray-400">Add your skills and specializations</p>
            </div>

            {/* Skills input */}
            <div>
              <label className="text-gray-300 block mb-2">Skills</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                  placeholder="e.g., Acting, Editing, Camera"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
                <button
                  onClick={handleAddSkill}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Skills tags */}
            {formData.skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/10 border border-white/20 rounded-full px-4 py-2 flex items-center gap-2"
                  >
                    <span className="text-white">{skill}</span>
                    <button onClick={() => handleRemoveSkill(skill)}>
                      <X className="w-4 h-4 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Quick suggestions */}
            <div>
              <p className="text-gray-400 mb-3">Quick add:</p>
              <div className="flex flex-wrap gap-2">
                {['Acting', 'Direction', 'Cinematography', 'Editing', 'Sound Design', 'Lighting'].map((skill) => (
                  <button
                    key={skill}
                    onClick={() => {
                      if (!formData.skills.includes(skill)) {
                        setFormData({ ...formData, skills: [...formData.skills, skill] });
                      }
                    }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    + {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-white text-xl mb-2">Portfolio & Social Links</h2>
              <p className="text-gray-400">Showcase your work and connect profiles</p>
            </div>

            {/* Instagram */}
            <div>
              <label className="text-gray-300 block mb-2">Instagram</label>
              <div className="relative">
                <Instagram className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  placeholder="@username"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* YouTube */}
            <div>
              <label className="text-gray-300 block mb-2">YouTube</label>
              <div className="relative">
                <Youtube className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.youtube}
                  onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
                  placeholder="Channel URL"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Portfolio upload */}
            <div>
              <label className="text-gray-300 block mb-2">Portfolio</label>
              <button className="w-full bg-white/5 border-2 border-dashed border-white/20 rounded-xl py-8 hover:bg-white/10 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-300">Upload photos & videos</p>
                <p className="text-gray-500 text-sm mt-1">Max 10 files, up to 50MB each</p>
              </button>
            </div>

            {/* Achievement badge */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-4 flex items-start gap-3">
              <Award className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white mb-1">Complete your profile to unlock:</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Priority in search results</li>
                  <li>• Direct messaging with recruiters</li>
                  <li>• Featured talent badge</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer button */}
      <div className="p-6 pt-0">
        <button
          onClick={handleNext}
          className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          {step < 3 ? 'Continue' : 'Complete Setup'}
        </button>
      </div>
    </div>
  );
}
