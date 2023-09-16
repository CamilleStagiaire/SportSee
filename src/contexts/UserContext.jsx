import React, { createContext, useState, useEffect} from 'react';
import { fetchUserProfileMock, fetchUserActivityMock, fetchUserAverageSessionsMock, fetchUserPerformanceMock } from '../services/mockApiService';

export const UserContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await fetchUserProfileMock(18);
        const activity = await fetchUserActivityMock(18);
        const averageSessions = await fetchUserAverageSessionsMock(18);
        const performance = await fetchUserPerformanceMock(18);

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

