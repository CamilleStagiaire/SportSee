import React, { useContext } from 'react';
import LeftSideBar from '../../components/LeftSideBar';
import UserActivity from '../../components/userActivity';
import UserAverageSessions from '../../components/userAverageSessions';
import UserPerformance from '../../components/userPerformance';
import { UserContext } from '../../contexts/UserContext';

function Home() {
  const { userProfile, userActivity, userAverageSessions, userPerformance } = useContext(UserContext);
  console.log('userProfile',userProfile);
  return (
    <main className="home">
      <LeftSideBar />
      {userProfile ? (
       
        <>
          <h1>
            Bonjour, {userProfile.userInfos.firstName}{' '}
            {userProfile.userInfos.lastName}!
          </h1>
          <div>
            <UserActivity data={userActivity} />
          </div>
          <div>
            <UserAverageSessions data={userAverageSessions} />
            <UserPerformance data={userPerformance} />
          </div>
        </>
      ) : null}
    </main>
  );
}

export default Home;
