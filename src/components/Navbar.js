import { NavLink } from 'react-router-dom';
import Logo from '../assets/planet.png';
import styles from '../styles/Navbar.css';

const Navbar = () => {
  const handleActive = (nav) => (nav.isActive ? 'active-link' : '');
  return (
    <header className="navbar" style={styles}>
      <div className="brand">
        <img className="brand-logo" src={Logo} alt="logo" />
        <p className="brand-name">
          Space Travellers&apos; Hub
        </p>
      </div>
      <ul className="nav-list">
        <li>
          <NavLink to="/missions" className={(nav) => handleActive(nav)}>Missions</NavLink>
        </li>
        <li>
          <NavLink to="/rockets" className={(nav) => handleActive(nav)}>Rockets</NavLink>
        </li>
        <li className="my-profile-link">
          <NavLink to="/" className={(nav) => handleActive(nav)}>My Profile</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
