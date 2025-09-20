import { useEffect, useState } from "react";
import "./ContactsPopup.css"; // styles in a separate file
import RegistrationPopup from "../RegistrationForm/PopupWrapper/RegistrationPopup";
import { db } from "../../firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
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

const ContactsPopup = ({ onClose, category, onRegister }) => {

    const [showRegistration, setShowRegistration] = useState(false);

    const [contacts, setContacts] = useState([]);



    useEffect(() => {
        const fetchContacts = async () => {
            if (!category) return;
            try {
                const docRef = doc(db, "users", category);
                // const docSnap = await getDoc(docRef);

                // if (docSnap.exists()) {
                //     setContacts(docSnap.data().entries || []);
                // } else {
                //     setContacts([]);
                // }

                const unsubscribe = onSnapshot(docRef, (docSnap) => {
                    if (docSnap.exists()) {
                        setContacts(docSnap.data().entries || []);
                    } else {
                        setContacts([]);
                    }
                });

                return () => unsubscribe();
            } catch (err) {
                console.error("Error fetching contacts:", err);
            }
        };

        fetchContacts();
    }, [category]);

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
                    {/* <div className="contacts-list">
                        {contacts.map((contact, index) => (
                            <div key={index} className="contact-item">
                                {contact}
                            </div>
                        ))}
                    </div> */}

                    <div className="contacts-list">
                        {contacts.length > 0 ? (
                            contacts.map((contact, idx) => (
                                <div key={idx} className="contact-item">
                                    <strong>{contact.userName}</strong> <br />
                                    📞 {contact.userPrimaryPhoneNumber}
                                    {contact.userSecondarPhoneyNumber && (
                                        <> / {contact.userSecondarPhoneyNumber}</>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p>No contacts yet for this category</p>
                        )}
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
