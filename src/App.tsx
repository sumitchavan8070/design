import { useState } from 'react';
import { SplashScreen } from './components/mobile/SplashScreen';
import { Onboarding } from './components/mobile/Onboarding';
import { AuthScreen } from './components/mobile/AuthScreen';
import { UserTypeSelection } from './components/mobile/UserTypeSelection';
import { ProfileSetup } from './components/mobile/ProfileSetup';
import { MainApp } from './components/mobile/MainApp';

export type ScreenType = 
  | 'splash' 
  | 'onboarding' 
  | 'auth' 
  | 'userType' 
  | 'profileSetup' 
  | 'main';

export type UserType = 'actor' | 'crew' | 'writer' | 'producer' | null;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('splash');
  const [userType, setUserType] = useState<UserType>(null);

  // Simulate splash screen timeout
  const handleSplashComplete = () => {
    setCurrentScreen('onboarding');
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('auth');
  };

  const handleAuthComplete = () => {
    setCurrentScreen('userType');
  };

  const handleUserTypeSelected = (type: UserType) => {
    setUserType(type);
    setCurrentScreen('profileSetup');
  };

  const handleProfileSetupComplete = () => {
    setCurrentScreen('main');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      {/* Mobile container */}
      <div className="w-full max-w-md h-screen bg-slate-950 relative overflow-hidden">
        {currentScreen === 'splash' && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}
        {currentScreen === 'onboarding' && (
          <Onboarding onComplete={handleOnboardingComplete} />
        )}
        {currentScreen === 'auth' && (
          <AuthScreen onComplete={handleAuthComplete} />
        )}
        {currentScreen === 'userType' && (
          <UserTypeSelection onSelect={handleUserTypeSelected} />
        )}
        {currentScreen === 'profileSetup' && (
          <ProfileSetup userType={userType} onComplete={handleProfileSetupComplete} />
        )}
        {currentScreen === 'main' && (
          <MainApp userType={userType} />
        )}
      </div>
    </div>
  );
}
