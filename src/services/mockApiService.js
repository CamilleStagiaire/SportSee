import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data';
import User from '../models/User';

/**
 * Rechercher des données en fonction de l'ID utilisateur
 * @param {Array} dataSet
 * @param {number} userIdKey
 * @param {string} userId 
 * @returns {Object}
 * @throws {Error}
 */
const findData = (dataSet, userIdKey, userId) => {
    const numericUserId = Number(userId);
    const data = dataSet.find(item => item[userIdKey] === numericUserId);
    if (data) {
        return { data };
    }
    throw new Error("404");
}

/**
 * Récupèrer les données mockées
 * @async
 * @param {string} userId 
 * @returns {Promise<User>}
 * @throws {Error}
 */
export const fetchUserMock = async (userId) => {
    const mainData = findData(USER_MAIN_DATA, 'id', userId).data;
    const activityData = findData(USER_ACTIVITY, 'userId', userId).data;
    const averageSessionsData = findData(USER_AVERAGE_SESSIONS, 'userId', userId).data;
    const performanceData = findData(USER_PERFORMANCE, 'userId', userId).data;

    return new User(mainData, activityData, averageSessionsData, performanceData);
}