import Logo from '../assets/planet.png';
import styles from '../styles/Navbar.css';

const Navbar = () => (
  <header className="navbar" style={styles}>
    <div className="brand">
      <img className="brand-logo" src={Logo} alt="logo" />
      <p className="brand-name">
        Space Travellers&apos; Hub
      </p>
    </div>
    <ul className="nav-list" />
  </header>
);

export default Navbar;
