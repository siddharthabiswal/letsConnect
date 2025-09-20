import { useEffect, useState } from "react";
import "./ContactsPopup.css"; // styles in a separate file
import RegistrationPopup from "../RegistrationForm/PopupWrapper/RegistrationPopup";

const contacts = [
    "om ply",
    "On Net Office",
    "on net whatsapp",
    "onNet",
    "Optum Hyderbad",
    "Oracle",
    "owner gera 302",
    "owner mam",
    "Owner703",
    "Pal",
    "Pal 2"
];

const ContactsPopup = ({ onClose, category }) => {

    const [showRegistration, setShowRegistration] = useState(false);

    //prevent scrolling and flickering 
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    return (
        <>

            {/* Popup Modal */}
            {<div className="popup-overlay">
                <div className="popup-box">
                    {/* Header */}
                    <div className="popup-header">
                        <button className="back-btn" onClick={onClose}>
                            close
                        </button>
                        <h3>{category || "Let's Connect"}</h3>
                        <button className="add-btn" onClick={() => setShowRegistration(true)}>Register</button>
                    </div>

                    {/* Search */}
                    <div className="search-box">
                        <input type="text" placeholder="Search" />
                        {/* <span className="mic-icon">🎤</span> */}
                    </div>

                    {/* Contact List */}
                    <div className="contacts-list">
                        {contacts.map((contact, index) => (
                            <div key={index} className="contact-item">
                                {contact}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            }
            {showRegistration && (
                <RegistrationPopup onClose={() => setShowRegistration(false)} defaultCategory={category} />
            )}
        </>
    );
};

export default ContactsPopup;
