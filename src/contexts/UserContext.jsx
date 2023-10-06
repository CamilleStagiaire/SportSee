import React, { createContext, useState, useCallback } from 'react';
import { fetchDataFactory } from '../services/dataFactory';

export const UserContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (userId) => {
    setError(null);

    try {
      const userData = await fetchDataFactory(userId);
      
      setUser(userData);

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
        user,
        fetchData,
        error
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProfileProvider;
