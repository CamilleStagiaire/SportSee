import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data';

export const fetchUserProfileMock = async (userId) => {
    const user = USER_MAIN_DATA.find(user => user.id === userId);
    if (user) {
        return user;
    }
    throw new Error('Utilisateur non trouvé');
}

export const fetchUserActivityMock = async (userId) => {
    const activity = USER_ACTIVITY.find(activity => activity.userId === userId);
    if (activity) {
        return activity.sessions;
    }
    throw new Error('Activité non trouvée pour cet utilisateur');
}

export const fetchUserAverageSessionsMock = async (userId) => {
    const averageSessions = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
    if (averageSessions) {
        return averageSessions.sessions;
    }
    throw new Error('Sessions moyennes non trouvées pour cet utilisateur');
}

export const fetchUserPerformanceMock = async (userId) => {
    const performance = USER_PERFORMANCE.find(performance => performance.userId === userId);
    if (performance) {
        return {
            data: performance.data,
            kind: performance.kind
        };
    }
    throw new Error('Performances non trouvées pour cet utilisateur');
}
