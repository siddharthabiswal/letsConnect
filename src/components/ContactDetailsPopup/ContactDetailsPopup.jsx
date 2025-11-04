
import "./ContactDetailsPopup.css";

const ContactDetailsPopup = ({ contact, onClose }) => {
    if (!contact) return null;

    return (
        <div className="details-overlay">
            <div className="details-box">
                {/* Header */}
                <div className="details-header">
                    <button className="back-btn" onClick={onClose}>←</button>
                    <h3>{contact.userName}</h3>
                    <button className="edit-btn">Edit</button>
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
                    <div className="action-item">
                        <span className="icon">💬</span>
                        <p>Message</p>
                    </div>
                    <div className="action-item">
                        <span className="icon">📞</span>
                        <p>Call</p>
                    </div>
                    <div className="action-item">
                        <span className="icon">🎥</span>
                        <p>Video</p>
                    </div>
                    <div className="action-item">
                        <span className="icon">✉️</span>
                        <p>Mail</p>
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
