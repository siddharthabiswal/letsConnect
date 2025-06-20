import './Header.css';
import Logo from '../Logo/Logo';
import { useTranslation } from 'react-i18next';

const Header = ({ toggleMenu }) => {
    const { t } = useTranslation();
    return (
        <div className="header">
            <div className="menuButton" onClick={toggleMenu}>☰</div>
            <h1>{t('welcome')}</h1>
            <Logo />
        </div>
    );
};

export default Header;
