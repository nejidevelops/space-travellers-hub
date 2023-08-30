import { useSelector } from 'react-redux';
import '../styles/Profile.css';

const MyProfile = () => {
  const { missions } = useSelector(((state) => state.missions));
  const reserved = missions.filter((mission) => mission.reserved === true);
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
      <div className="my-rockets" />
    </div>
  );
};

export default MyProfile;
