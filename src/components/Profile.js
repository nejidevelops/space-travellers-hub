import { useSelector } from 'react-redux';
import '../styles/Profile.css';

const MyProfile = () => {
  const { missions } = useSelector(((state) => state.missions));
  const reserved = missions.filter((mission) => mission.reserved === true);
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="my-profile">
      <div className="my-missions">
        <p className="missions-headline">My Missions</p>
        <ul className="missions-list">
          {reserved.map((mission) => (
            <li key={mission.id}>{mission.name}</li>
          ))}
        </ul>
      </div>
      <div className="my-rockets">
        <p className="rockets-headline">My Rockets</p>
        <ul className="rockets-list">
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
