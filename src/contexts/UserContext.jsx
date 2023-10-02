import React, { createContext, useState } from 'react';
import { fetchDataFactory } from '../services/dataFactory';

export const UserContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  const fetchData = async (userId) => {
    try {
      const profile = await fetchDataFactory('profile', userId);
      const activity = await fetchDataFactory('activity', userId);
      const averageSessions = await fetchDataFactory('averageSessions', userId);
      const performance = await fetchDataFactory('performance', userId);

      setUserProfile(profile.data);
      setUserActivity(activity.data);
      setUserAverageSessions(averageSessions.data);
      setUserPerformance(performance.data);
    } catch (error) {
      console.error('Une erreur est survenue:', error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userProfile,
        userActivity,
        userAverageSessions,
        userPerformance,
        fetchData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProfileProvider;
