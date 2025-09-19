import React, { useState } from "react";
import "./ContactsPopup.css"; // styles in a separate file

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

const ContactsPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Button to Open Popup */}
            {/* <button className="open-btn" onClick={() => setIsOpen(true)}>
                Open Contacts
            </button> */}

            {/* Popup Modal */}
            {<div className="popup-overlay">
                <div className="popup-box">
                    {/* Header */}
                    <div className="popup-header">
                        <button className="back-btn" onClick={() => setIsOpen(false)}>
                            &lt; Lists
                        </button>
                        <h3>iCloud</h3>
                        <button className="add-btn">+</button>
                    </div>

                    {/* Search */}
                    <div className="search-box">
                        <input type="text" placeholder="Search" />
                        <span className="mic-icon">🎤</span>
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
            </div>}
        </>
    );
};

export default ContactsPopup;
