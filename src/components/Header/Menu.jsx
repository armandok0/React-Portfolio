import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import './Menu.css';

function Menu({ open, closeMenu }) {
  const handleClick = () => {
    closeMenu();
  };

  return (
    <nav className={`menu ${open ? 'open' : ''}`}> {}
      <ul>
        <li><Link to="home" smooth={true} duration={600} onClick={handleClick}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={600} onClick={handleClick}>About</Link></li>
        <li><Link to="resume" smooth={true} duration={600} onClick={handleClick}>Resume</Link></li>
        <li><Link to="projects" smooth={true} duration={600} onClick={handleClick}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={600} onClick={handleClick}>Contact</Link></li>
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
