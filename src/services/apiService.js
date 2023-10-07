import User from '../models/User';

const API_URL = 'http://localhost:3000';

/**
 * Récupèrer les données de l'utilisateur depuis l'API
 * @async
 * @param {string} userId 
 * @returns {Promise<User>} 
 * @throws {Error}
 */
export const fetchUser = async (userId) => {
  const mainDataResponse = await fetch(`${API_URL}/user/${userId}`);
  if (!mainDataResponse.ok) {
    throw new Error(mainDataResponse.status);
  }
  const mainData = await mainDataResponse.json();
  
  const activityResponse = await fetch(`${API_URL}/user/${userId}/activity`);
  if (!activityResponse.ok) {
    throw new Error(activityResponse.status);
  }
  const activityData = await activityResponse.json();

  const averageSessionsResponse = await fetch(`${API_URL}/user/${userId}/average-sessions`);
  if (!averageSessionsResponse.ok) {
    throw new Error(averageSessionsResponse.status);
  }
  const averageSessionsData = await averageSessionsResponse.json();

  const performanceResponse = await fetch(`${API_URL}/user/${userId}/performance`);
  if (!performanceResponse.ok) {
    throw new Error(performanceResponse.status);
  }
  const performanceData = await performanceResponse.json();

  return new User(mainData.data, activityData.data, averageSessionsData.data, performanceData.data);
}
