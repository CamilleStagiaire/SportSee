import { fetchUser } from './apiService';
import { fetchUserMock} from './mockApiService';

const USE_MOCK_DATA = false;

/**
 * fonction factory pour récupérer les données utilisateur, soit à partir de l'API, soit à partir de données mockées.
 * @async
 * @param {string} userId 
 * @returns {Promise<User>}
 */
export const fetchDataFactory = async (userId) => {
  if (USE_MOCK_DATA) {
    console.log('Données mockées');
    return fetchUserMock(userId);
  } else {
    console.log("Données de l'API");
    return fetchUser(userId);
  }
}