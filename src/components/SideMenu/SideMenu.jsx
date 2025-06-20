import sideMenuItems from "../../data/sideMenuItems";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import "./SideMenu.css";

const SideMenu = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && <div className="sideMenuOverlay" onClick={onClose}></div>}

            <div className={`sideMenu ${isOpen ? "open" : ""}`}>
                <ul>
                    {sideMenuItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={item.isLanguageSelector ? undefined : onClose}
                        >
                            {item.icon} {item.label}
                            {item.isLanguageSelector && <LanguageDropdown />}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SideMenu;
