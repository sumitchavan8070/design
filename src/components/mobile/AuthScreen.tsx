import { useState } from 'react';
import { Mail, Phone, Lock, Eye, EyeOff, User } from 'lucide-react';

interface AuthScreenProps {
  onComplete: () => void;
}

export function AuthScreen({ onComplete }: AuthScreenProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [useEmail, setUseEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  const handleGuestContinue = () => {
    onComplete();
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex flex-col relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-5 w-28 h-28 bg-purple-500 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-40 right-5 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 text-center">
        <h1 className="text-white text-4xl mb-2">
          {isLogin ? 'Welcome Back!' : 'Join LetsFAME'}
        </h1>
        <p className="text-gray-300">
          {isLogin ? 'Sign in to continue your journey' : 'Create your account and get started'}
        </p>
      </div>

      {/* Form */}
      <div className="relative z-10 flex-1 px-6 overflow-y-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Login method toggle */}
          {isLogin && (
            <div className="flex gap-2 bg-white/5 rounded-2xl p-1 border border-white/10">
              <button
                type="button"
                onClick={() => setUseEmail(true)}
                className={`flex-1 py-3 rounded-xl transition-all ${
                  useEmail
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-400'
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setUseEmail(false)}
                className={`flex-1 py-3 rounded-xl transition-all ${
                  !useEmail
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-400'
                }`}
              >
                Phone
              </button>
            </div>
          )}

          {/* Name (signup only) */}
          {!isLogin && (
            <div>
              <label className="text-gray-300 block mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          )}

          {/* Email or Phone */}
          {(useEmail || !isLogin) && (
            <div>
              <label className="text-gray-300 block mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="yourname@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          )}

          {(!useEmail && isLogin) && (
            <div>
              <label className="text-gray-300 block mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          )}

          {/* Password */}
          <div>
            <label className="text-gray-300 block mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          {isLogin && (
            <div className="text-right">
              <button type="button" className="text-purple-400 hover:text-purple-300">
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-gray-400">or continue with</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Social login */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="bg-white/10 border border-white/20 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-white/20 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-white">Google</span>
          </button>
          <button className="bg-white/10 border border-white/20 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-white/20 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <span className="text-white">Apple</span>
          </button>
        </div>

        {/* Guest option */}
        <button
          onClick={handleGuestContinue}
          className="w-full py-3 text-gray-400 hover:text-white transition-colors mb-6"
        >
          Continue as Guest
        </button>

        {/* Toggle sign in/up */}
        <div className="text-center pb-6">
          <span className="text-gray-400">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
          </span>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-400 hover:text-purple-300"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
