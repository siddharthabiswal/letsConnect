import { useEffect, useState } from "react";

import "./ContactList.css";
import dummyContacts from "../../data/dummyConatcts";


import { arrayUnion, updateDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const ContactList = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const [contacts, setContacts] = useState([]);



    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const docRef = doc(db, "users", "allUserEntries");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setContacts(data.entries || []);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        };

        fetchContacts();
    }, []);



    return (
        <div className="contactListWrapper">
            <div className="contactListScrollable">

                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        className={`contactRow ${selectedIndex === index ? "selected" : ""}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <div className="contactInfo">
                            <div className="contactName">{contact.userName}</div>
                            <div className="contactPhone">{contact.userPrimaryPhoneNumber}</div>
                            <div className="contactArea">{(contact.userLocality || []).join(", ")}</div>
                        </div>
                        <div
                            className={`statusDot ${index % 2 === 0 ? "blue" : "black"}`}
                        ></div>
                    </div>
                ))}

                {/* {dummyContacts.map((contact, index) => (
                    <div
                        key={index}
                        className={`contactRow ${selectedIndex === index ? "selected" : ""}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <div className="contactInfo">
                            <div className="contactName">{contact.name}</div>
                            <div className="contactPhone">{contact.contactNo}</div>
                            <div className="contactArea">{contact.areaActive.join(", ")}</div>
                        </div>
                        <div
                            className={`statusDot ${index % 2 === 0 ? "blue" : "black"
                                }`}
                        ></div>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default ContactList;
