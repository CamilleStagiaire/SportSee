import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data';
import { UserMainData, UserActivity, UserAverageSessions, UserPerformance } from '../models/User';


const findData = (dataSet, userIdKey, userId) => {
    const numericUserId = Number(userId);
    const data = dataSet.find(item => item[userIdKey] === numericUserId);
    if (data) {
        return { data };
    }
    throw new Error("404");
}

export const fetchUserProfileMock = async (userId) => {
    const { data } = findData(USER_MAIN_DATA, 'id', userId);
    return new UserMainData(data.id, data.userInfos, data.score, data.keyData, data.todayScore);
}

export const fetchUserActivityMock = async (userId) => {
    const { data } = findData(USER_ACTIVITY, 'userId', userId);
    return new UserActivity(userId, data.sessions);
}

export const fetchUserAverageSessionsMock = async (userId) => {
    const { data }  = findData(USER_AVERAGE_SESSIONS, 'userId', userId);
    return new UserAverageSessions(userId, data.sessions);
}

export const fetchUserPerformanceMock = async (userId) => {
    const { data } = findData(USER_PERFORMANCE, 'userId', userId);
    return new UserPerformance(userId, data.kind, data.data);
}