import { UserMainData, UserActivity, UserAverageSessions, UserPerformance } from '../models/User';

const API_URL = 'http://localhost:3000';

export const fetchUserProfile = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const { data } = await response.json();
  return new UserMainData(data.id, data.userInfos, data.score, data.keyData, data.todayScore);
};

export const fetchUserActivity = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/activity`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const { data } = await response.json();
  return new UserActivity(data.userId, data.sessions);
};

export const fetchUserAverageSessions = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/average-sessions`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const { data } = await response.json();
  return new UserAverageSessions(data.userId, data.sessions);
};

export const fetchUserPerformance = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/performance`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const { data } = await response.json();
  return new UserPerformance(data.userId, data.kind, data.data);
};