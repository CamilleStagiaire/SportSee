import React, { useContext } from 'react';
import LeftSideBar from '../../components/LeftSideBar';
import UserActivity from '../../components/userActivity';
import UserAverageSessions from '../../components/userAverageSessions';
import { UserContext } from '../../contexts/UserContext';


function Home() {
  const { userProfile, userActivity, userAverageSessions } = useContext(UserContext);

  return (
    <main className="home">
      <LeftSideBar />
      {userProfile && userActivity ? (
        <>
          <h1>
            Bonjour, {userProfile.userInfos.firstName}{' '}
            {userProfile.userInfos.lastName}!
          </h1>
          <UserActivity data={userActivity} />
          {userAverageSessions && <UserAverageSessions data={userAverageSessions} />}
        </>
      ) : null}
    </main>
  );
}

export default Home;
