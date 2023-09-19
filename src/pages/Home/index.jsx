import React, { useContext } from 'react';
import LeftSideBar from '../../components/LeftSideBar';
import UserInfos from '../../components/userInfos';
import UserActivity from '../../components/userActivity';
import UserAverageSessions from '../../components/userAverageSessions';
import UserPerformance from '../../components/userPerformance';
import UserScore from '../../components/userScore';
import { UserContext } from '../../contexts/UserContext';

function Home() {
  const { userProfile, userActivity, userAverageSessions, userPerformance } =
    useContext(UserContext);
  console.log('userProfile', userProfile);
  return (
    <main>
      <LeftSideBar />
      {userProfile ? (
        <div className="home">
          <h1>
            Bonjour, {userProfile.userInfos.firstName}{' '}
            {userProfile.userInfos.lastName}!
          </h1>
          <div className="dashboard">
            <div>
              <div className="dashboard-graphs">
                <UserActivity data={userActivity} />
              </div>
              <div className="dashboard-graphs">
                <UserAverageSessions data={userAverageSessions} />
                <UserPerformance data={userPerformance} />
                <UserScore
                  score={userProfile?.todayScore ?? userProfile?.score}
                />
              </div>
            </div>
            <div className="dashboard-infos">
              <UserInfos keyData={userProfile.keyData} />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default Home;
