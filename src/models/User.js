class User {
    /**
     * @param {object} mainData
     * @param {object} activityData 
     * @param {object} averageSessionsData 
     * @param {object} performanceData 
     */
    constructor(mainData, activityData, averageSessionsData, performanceData) {
        this.id = mainData.id;
        this.userInfos = {
            firstName: mainData.userInfos.firstName,
            lastName: mainData.userInfos.lastName,
            age: mainData.userInfos.age,
        };
        this.score = mainData.score || mainData.todayScore;
        this.keyData = {
            calorieCount: mainData.keyData.calorieCount,
            proteinCount: mainData.keyData.proteinCount,
            carbohydrateCount: mainData.keyData.carbohydrateCount,
            lipidCount: mainData.keyData.lipidCount,
        };
        
        this.activity = activityData.sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
        }));
        
        this.averageSessions = averageSessionsData.sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength,
        }));

        this.performance = {
            kind: performanceData.kind,
            data: performanceData.data,
        };
    }
}

export default User;
