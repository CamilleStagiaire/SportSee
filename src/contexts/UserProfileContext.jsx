import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchUserProfileMock, fetchUserActivityMock } from '../services/mockApiService';

// Création du Context
export const UserProfileContext = createContext();

// Provider du Context
export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [userActivity, setUserActivity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await fetchUserProfileMock(12);
        const activity = await fetchUserActivityMock(12);

        setUserProfile(profile);
        setUserActivity(activity);
      } catch (error) {
        console.error('Une erreur est survenue:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserProfileContext.Provider value={{ userProfile, userActivity }}>
      {children}
    </UserProfileContext.Provider>
  );
};

// Hook personnalisé pour utiliser ce contexte
export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error('useUserProfile doit être utilisé au sein d\'un UserProfileProvider');
  }
  return context;
};
