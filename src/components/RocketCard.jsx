/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { handleRocket } from '../redux/Rockets/rockets';

const RocketCard = ({ props }) => {
  const {
    id, name, image, description,
  } = props;
  // const dispatch = useDispatch();

  return (
    <div key={id}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RocketCard;
