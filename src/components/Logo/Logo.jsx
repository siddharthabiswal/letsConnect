import './Logo.css';

import logoImage from '../../assets/iconLogo.png';
const Logo = () => {
    return (
        <div className="logo">
            <img src={logoImage} alt="App Logo" />
        </div>
    );
};

export default Logo;
