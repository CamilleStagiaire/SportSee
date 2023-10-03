import React, { createContext, useState, useCallback } from 'react';
import { fetchDataFactory } from '../services/dataFactory';

export const UserContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
 
  const fetchData = useCallback(async (userId) => {
    try {
      const profile = await fetchDataFactory('profile', userId);
      const activity = await fetchDataFactory('activity', userId);
      const averageSessions = await fetchDataFactory('averageSessions', userId);
      const performance = await fetchDataFactory('performance', userId);
  
      const userMainDataInstance = profile;
      const userActivityInstance = activity;
      const userAverageSessionsInstance = averageSessions;
      const userPerformanceInstance = performance;
  
      setUserProfile(userMainDataInstance);
      setUserActivity(userActivityInstance);
      setUserAverageSessions(userAverageSessionsInstance);
      setUserPerformance(userPerformanceInstance);
    } catch (error) {
      console.error('Une erreur est survenue:', error);
    }
  }, []);

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
