import React, { createContext, useState, useCallback } from 'react';
import { fetchDataFactory } from '../services/dataFactory';

import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance
} from '../models/User';

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
  
      const userMainDataInstance = new UserMainData(profile.data.id, profile.data.userInfos, profile.data.score, profile.data.keyData, profile.data.todayScore);
      const userActivityInstance = new UserActivity(activity.data.userId, activity.data.sessions);
      const userAverageSessionsInstance = new UserAverageSessions(averageSessions.data.userId, averageSessions.data.sessions);
      const userPerformanceInstance = new UserPerformance(performance.data.userId, performance.data.kind, performance.data.data);
  
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
