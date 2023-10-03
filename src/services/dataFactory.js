import { fetchUserProfile, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from './apiService';  
import { fetchUserProfileMock, fetchUserActivityMock, fetchUserAverageSessionsMock, fetchUserPerformanceMock } from './mockApiService';


  const USE_MOCK_DATA = true;

  
  export const fetchDataFactory = (type, userId) => {
    if (USE_MOCK_DATA) {
      switch (type) {
        case "profile":
          console.log("données mockées")
          return fetchUserProfileMock(userId);
        case "activity":
          return fetchUserActivityMock(userId);
        case "averageSessions":
          return fetchUserAverageSessionsMock(userId);
        case "performance":
          return fetchUserPerformanceMock(userId);
        default:
          throw new Error("Type non valide");
      }
    } else {
      switch (type) {
        case "profile":
          console.log("Données de l'API")
          return fetchUserProfile(userId);
        case "activity":
          return fetchUserActivity(userId);
        case "averageSessions":
          return fetchUserAverageSessions(userId);
        case "performance":
          return fetchUserPerformance(userId);
        default:
          throw new Error("Type non valide");
      }
    }
  };
  