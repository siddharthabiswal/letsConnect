import { useTranslation } from "react-i18next";
import "./LanguageDropdown.css";

const LanguageDropdown = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="language-dropdown">
            <div onClick={() => changeLanguage("en")}>English</div>
            <div onClick={() => changeLanguage("hi")}>हिंदी</div>
            <div onClick={() => changeLanguage("or")}>ଓଡ଼ିଆ</div>
        </div>
    );
};

export default LanguageDropdown;
