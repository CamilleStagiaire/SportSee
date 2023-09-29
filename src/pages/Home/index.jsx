import React, { useContext } from 'react';
import UserInfos from '../../components/UserInformations';
import UserActivity from '../../components/userActivity';
import UserAverageSessions from '../../components/userAverageSessions';
import UserPerformance from '../../components/userPerformance';
import UserScore from '../../components/userScore';
import { UserContext } from '../../contexts/UserContext';

function Home() {
  const { userProfile, userActivity, userAverageSessions, userPerformance } =
    useContext(UserContext);
  return (
    <main>
      {userProfile ? (
        <div className="home">
          <div className="home-text">
            <h1>
              Bonjour{' '}
              <span className="home-text-name">
                {userProfile.userInfos.firstName}{' '}
              </span>
            </h1>
            <p className="home-text-p">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
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
