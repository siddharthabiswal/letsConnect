import './Header.css';
import Logo from '../Logo/Logo';
import { useTranslation } from 'react-i18next';
import SearchBar from '../SearchBox/SearchBar';


const Header = ({ toggleMenu }) => {
    const { t } = useTranslation();
    return (
        <div className="header">
            <div className="menuButton" onClick={toggleMenu}>☰</div>
            {/* <h1>{t('welcome')}</h1> */}
            <SearchBar />
            <Logo />
        </div>
    );
};

export default Header;
