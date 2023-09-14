import LeftSideBar from '../../components/LeftSideBar';
import { useUserProfile } from '../../contexts/UserProfileContext';

function Home() {
  const { userProfile, userActivity } = useUserProfile();

  return (
    <main className="home">
      <LeftSideBar />
      {userProfile && userActivity ? (
        <>
          <h1>
            Bonjour, {userProfile.userInfos.firstName}{' '}
            {userProfile.userInfos.lastName}!
          </h1>
        </>
      ) : null}
    </main>
  );
}

export default Home;
