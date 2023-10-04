import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserInfos from '../../components/UserInformations';
import UserActivity from '../../components/userActivity';
import UserAverageSessions from '../../components/userAverageSessions';
import UserPerformance from '../../components/userPerformance';
import UserScore from '../../components/userScore';
import { UserContext } from '../../contexts/UserContext';
import Error from '../../pages/Error';

function Home() {
  const { id } = useParams();
  const { userProfile, userActivity, userAverageSessions, userPerformance, fetchData, error } = useContext(UserContext);

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id, fetchData]);

  if (error) {
    return <Error message={error} />;
  }
  
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
              <UserActivity data={userActivity.sessions} />

              <div className="dashboard-graphs">
                <UserAverageSessions data={userAverageSessions.sessions} />
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
