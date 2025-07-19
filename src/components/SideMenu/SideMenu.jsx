import sideMenuItems from "../../data/sideMenuItems";
import AdvertisementsPopUp from "../AdvertisementsPopUp/AdvertisementsPopUp";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import "./SideMenu.css";
import { useState } from "react";

const SideMenu = ({ isOpen, onClose }) => {
    const [showAdPopup, setShowAdPopup] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const handleMenuClick = (item) => {
        if (item.action === "openAdPopup") {
            console.log('add')
            setShowAdPopup(true);
        }

        if (item.action === "openRegistrationForm") {
            console.log('registration')
            setShowRegisterForm(true);
        }
        onClose(); // Close side menu
    };

    return (
        <>
            {isOpen && <div className="sideMenuOverlay" onClick={onClose}></div>}

            <div className={`sideMenu ${isOpen ? "open" : ""}`}>
                <ul>
                    {sideMenuItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                // if (!item.isLanguageSelector)
                                handleMenuClick(item);
                            }}
                        >
                            {item.icon} {item.label}
                            {item.isLanguageSelector && <LanguageDropdown />}
                        </li>
                    ))}
                </ul>
            </div>

            {showAdPopup && (
                <AdvertisementsPopUp onClose={() => setShowAdPopup(false)} />
            )}
            {showRegisterForm && (
                <>
                    <div className="modalOverlay" onClick={() => setShowRegisterForm(false)} />
                    <div className="modalPopup">
                        <RegistrationForm closeForm={() => setShowRegisterForm(false)} />
                    </div>
                </>
            )}
        </>
    );
};

export default SideMenu;
