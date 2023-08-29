import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/Missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, pending, error } = useSelector((store) => store.missions.missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  let content;

  if (!pending && !error) {
    content = (
      <table className="missions-table">
        <tr key="missions">
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>
            {' '}

          </th>
        </tr>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td><button type="button">Not a member</button></td>
            <td><button type="button">Join as member</button></td>
          </tr>
        ))}
      </table>
    );
  }
  return (
    <section className="missions">
      {content}
    </section>
  );
};

export default Missions;
