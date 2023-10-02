const API_URL = "http://localhost:3000";

export const fetchUserProfile = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données de l\'utilisateur.');
  }
  return await response.json();
};

export const fetchUserActivity = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/activity`);
  if (!response.ok) {
    console.log('Response data:', await response.text());
    throw new Error('Erreur lors de la récupération des activités de l\'utilisateur.');
  }
  return await response.json();
};

export const fetchUserAverageSessions = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/average-sessions`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des sessions moyennes de l\'utilisateur.');
  }
  return await response.json();
};

export const fetchUserPerformance = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/performance`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des performances de l\'utilisateur.');
  }
  return await response.json();
};