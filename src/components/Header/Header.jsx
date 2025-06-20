import './Header.css';
import Logo from '../Logo/Logo';

const Header = ({ toggleMenu }) => {
  return (
    <div className="header">
      <div className="menuButton" onClick={toggleMenu}>☰</div>
      <Logo />
    </div>
  );
};

export default Header;
