class UserInfos {
    constructor(firstName, lastName, age) {
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class KeyData {
    constructor(calorieCount, proteinCount, carbohydrateCount, lipidCount) {
        this.calorieCount = calorieCount;
        this.proteinCount = proteinCount;
        this.carbohydrateCount = carbohydrateCount;
        this.lipidCount = lipidCount;
    }
}

class ActivitySession {
    constructor(day, kilogram, calories) {
        this.day = day;
        this.kilogram = kilogram;
        this.calories = calories;
    }
}

class AverageSession {
    constructor(day, sessionLength) {
        this.day = day;
        this.sessionLength = sessionLength;
    }
}

class UserPerformance {
    constructor(userId, kind, data) {
        this.userId = userId;
        this.kind = kind;
        this.data = data; 
    }
}

class UserMainData {
    constructor(id, userInfos, score, keyData, todayScore) {
        this.id = id;
        this.userInfos = new UserInfos(userInfos.firstName, userInfos.lastName, userInfos.age);
        this.score = score !== undefined ? score : (todayScore !== undefined ? todayScore : null);
        this.keyData = new KeyData(keyData.calorieCount, keyData.proteinCount, keyData.carbohydrateCount, keyData.lipidCount);
    }
}

class UserActivity {
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions.map(session => new ActivitySession(session.day, session.kilogram, session.calories));
    }
}

class UserAverageSessions {
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions.map(session => new AverageSession(session.day, session.sessionLength));
    }
}

export {
    UserMainData,
    UserActivity,
    UserAverageSessions,
    UserPerformance
};
