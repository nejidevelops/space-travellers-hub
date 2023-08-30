import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector(((state) => state.missions));
  const reserved = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="my-missions">
      <h1>My Missions</h1>
      <ul>
        {reserved.map((mission) => (
          <li key={mission.id}>{mission.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
