/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/Rockets/rockets';

const RocketCard = ({ props }) => {
  const {
    id, name, image, description, reserved,
  } = props;
  const dispatch = useDispatch();

  const handleReserveClick = () => {
    if (reserved) {
      dispatch(cancelReservation(id));
    } else {
      dispatch(reserveRocket(id));
    }
  };

  return (
    <div key={id}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      {reserved ? (
        <button type="button" onClick={handleReserveClick}>
          Cancel Reservation
        </button>
      ) : (
        <button type="button" onClick={handleReserveClick}>
          Reserve rocket
        </button>
      )}
    </div>
  );
};

RocketCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RocketCard;
