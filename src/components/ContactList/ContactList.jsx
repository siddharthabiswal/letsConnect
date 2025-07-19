import { useState } from "react";

import "./ContactList.css";
import dummyContacts from "../../data/dummyConatcts";

const ContactList = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div className="contactListWrapper">
            <div className="contactListScrollable">
                {dummyContacts.map((contact, index) => (
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
                ))}
            </div>
        </div>
    );
};

export default ContactList;
