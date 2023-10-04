import React, { createContext, useState, useCallback } from 'react';
import { fetchDataFactory } from '../services/dataFactory';

export const UserContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (userId) => {
    setError(null);

    try {
      const profile = await fetchDataFactory('profile', userId);
      const activity = await fetchDataFactory('activity', userId);
      const averageSessions = await fetchDataFactory('averageSessions', userId);
      const performance = await fetchDataFactory('performance', userId);

      setUserProfile(profile);
      setUserActivity(activity);
      setUserAverageSessions(averageSessions);
      setUserPerformance(performance);

    } catch (error) {
      console.error('Une erreur est survenue:', error);
      if (error.message === "404") {
        setError("Oups! La page que vous demandez n'existe pas.");
      } else {
        setError('Une erreur est survenue lors de la récupération des données.');
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userProfile,
        userActivity,
        userAverageSessions,
        userPerformance,
        fetchData,
        error
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProfileProvider;
