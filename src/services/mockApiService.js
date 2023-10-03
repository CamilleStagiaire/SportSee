import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data';


const findData = (dataSet, userIdKey, userId) => {
    const numericUserId = Number(userId);
    const data = dataSet.find(item => item[userIdKey] === numericUserId);
    if (data) {
        return { data };
    }
    throw new Error(`Données non trouvées pour cet utilisateur avec l'ID ${userId}`);
}

export const fetchUserProfileMock = async (userId) => {
    return findData(USER_MAIN_DATA, 'id', userId);
}

export const fetchUserActivityMock = async (userId) => {
    return findData(USER_ACTIVITY, 'userId', userId);
}

export const fetchUserAverageSessionsMock = async (userId) => {
    return findData(USER_AVERAGE_SESSIONS, 'userId', userId);
}

export const fetchUserPerformanceMock = async (userId) => {
    const result = findData(USER_PERFORMANCE, 'userId', userId);
    result.data = {
        data: result.data.data,
        kind: result.data.kind
    };
    return result;
}
