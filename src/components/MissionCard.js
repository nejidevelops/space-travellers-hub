import PropTypes from 'prop-types';

const MissionCard = ({ props }) => {
  const { name, description, member } = props;

  const getButton = (member, btn) => {
    let button;
    if (btn === 'member') {
      button = member ? (
        <button className="active-member-btn" type="button">active member</button>
      ) : (
        <button className="not-member-btn" type="button">Not a member</button>
      );
    }
    if (btn === 'mission') {
      button = member ? (
        <button className="leave-mission-btn" type="button">Leave Mission</button>
      ) : (
        <button className="join-mission-btn" type="button">Join Mission</button>
      );
    }
    return button;
  };

  return (
    <>
      <td className="mission-name">{name}</td>
      <td className="mission-description">{description}</td>
      <td className="table-btns">{getButton(member, 'member')}</td>
      <td className="table-btns">{getButton(member, 'mission')}</td>
    </>
  );
};

MissionCard.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
};
export default MissionCard;
