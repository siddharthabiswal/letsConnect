import "./ContactDetailsPopup.css";

const ContactDetailsPopup = ({ contact, onClose }) => {
    if (!contact) return null;

    // open WhatsApp chat
    const openWhatsApp = (phone) => {
        if (!phone) return alert("No phone number available!");
        const formattedNumber = phone.replace(/[^0-9]/g, ""); // remove non-numeric chars
        const whatsappUrl = `https://wa.me/${formattedNumber}`;
        window.open(whatsappUrl, "_blank");
    };

    // make a call
    const makeCall = (phone) => {
        if (!phone) return alert("No phone number available!");
        window.location.href = `tel:${phone}`;
    };

    return (
        <div className="details-overlay">
            <div className="details-box">
                {/* Header */}
                <div className="details-header">
                    <button className="back-btn" onClick={onClose}>
                        close
                    </button>
                </div>

                {/* Avatar */}
                <div className="avatar-section">
                    <div className="avatar-circle">
                        {contact.userName?.charAt(0).toUpperCase()}
                    </div>
                    <p className="contact-name">{contact.userName}</p>
                </div>

                {/* Contact Actions */}
                <div className="actions-row">
                    {/* WhatsApp Message */}
                    <div
                        className="action-item"
                        onClick={() => openWhatsApp(contact.userPrimaryPhoneNumber)}
                    >
                        <span className="icon">🟢💬</span>
                        <p>Message</p>
                    </div>

                    {/* Call */}
                    <div
                        className="action-item"
                        onClick={() => makeCall(contact.userPrimaryPhoneNumber)}
                    >
                        <span className="icon">📞</span>
                        <p>Call</p>
                    </div>
                </div>

                {/* Phone numbers */}
                <div className="info-section">
                    <h4>Phone</h4>
                    <div className="info-item">
                        <span className="label">home</span>
                        <span className="value">{contact.userPrimaryPhoneNumber}</span>
                    </div>
                    {contact.userSecondarPhoneyNumber && (
                        <div className="info-item">
                            <span className="label">work</span>
                            <span className="value">{contact.userSecondarPhoneyNumber}</span>
                        </div>
                    )}
                </div>

                {/* Notes */}
                <div className="info-section">
                    <h4>Notes</h4>
                    <div className="notes-box">
                        <p>{contact.userNotes || "No notes available"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetailsPopup;
