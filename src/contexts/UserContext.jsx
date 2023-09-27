import React, { createContext, useState, useEffect} from 'react';
import { fetchUserProfileMock, fetchUserActivityMock, fetchUserAverageSessionsMock, fetchUserPerformanceMock } from '../services/mockApiService';

export const UserContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  const USER_ID = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await fetchUserProfileMock(USER_ID);
        const activity = await fetchUserActivityMock(USER_ID);
        const averageSessions = await fetchUserAverageSessionsMock(USER_ID);
        const performance = await fetchUserPerformanceMock(USER_ID);

        setUserProfile(profile);
        setUserActivity(activity);
        setUserAverageSessions(averageSessions);
        setUserPerformance(performance);
      } catch (error) {
        console.error('Une erreur est survenue:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ userProfile, userActivity, userAverageSessions, userPerformance }}>
      {children}
    </UserContext.Provider>
  );
};

