import React, { useContext } from 'react';
//import LeftSideBar from '../../components/LeftSideBar';
import UserInfos from '../../components/UserInformations';
import UserActivity from '../../components/UserActivity';
import UserAverageSessions from '../../components/UserAverageSessions';
import UserPerformance from '../../components/UserPerformance';
import UserScore from '../../components/UserScore';
import { UserContext } from '../../contexts/UserContext';

function Home() {
  const { userProfile, userActivity, userAverageSessions, userPerformance } =
    useContext(UserContext);
  console.log('userProfile', userProfile);
  return (
    <main>
      
      {userProfile ? (
        <div className="home">
         <div className="home-text">
         <h1>
            Bonjour, {userProfile.userInfos.firstName}{' '}
            {userProfile.userInfos.lastName}!
          </h1>
          <p>Félicitation</p>
         </div>
          <div className="dashboard">
            <div className="dashboard-user">
                <UserActivity data={userActivity} />
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
