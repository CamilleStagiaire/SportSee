import { fetchUser } from './apiService';
import { fetchUserMock} from './mockApiService';

const USE_MOCK_DATA = false;

export const fetchDataFactory = async (userId) => {
  if (USE_MOCK_DATA) {
    console.log('données mockées');
    return fetchUserMock(userId);
  } else {
    console.log("Données de l'API");
    return fetchUser(userId);
  }
}