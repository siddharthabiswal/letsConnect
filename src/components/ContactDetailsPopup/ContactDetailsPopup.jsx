import "./ContactDetailsPopup.css";

const ContactDetailsPopup = ({ contact, onClose }) => {
    if (!contact) return null;

    // 🟢 Open WhatsApp Chat
    const openWhatsApp = (phone) => {
        if (!phone) return alert("No phone number available!");
        const formattedNumber = phone.replace(/[^0-9]/g, "");
        const whatsappUrl = `https://wa.me/${formattedNumber}`;
        window.open(whatsappUrl, "_blank");
    };

    // 📞 Make a Call
    const makeCall = (phone) => {
        if (!phone) return alert("No phone number available!");
        window.location.href = `tel:${phone}`;
    };

    // 💾 Save Contact (using vCard)
    const saveContact = () => {
        if (!contact?.userName || !contact?.userPrimaryPhoneNumber)
            return alert("Missing contact details!");

        const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.userName}
TEL;TYPE=CELL:${contact.userPrimaryPhoneNumber}
END:VCARD
    `.trim();

        const blob = new Blob([vCardData], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);

        // Create a temporary link to trigger download
        const link = document.createElement("a");
        link.href = url;
        link.download = `${contact.userName}.vcf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // 📤 Share Contact using Web Share API
    const shareContact = async () => {
        if (!navigator.share) {
            alert("Sharing is not supported on this device!");
            return;
        }

        const shareText = `Contact: ${contact.userName}\nPhone: ${contact.userPrimaryPhoneNumber}`;
        try {
            await navigator.share({
                title: `Share Contact - ${contact.userName}`,
                text: shareText,
            });
        } catch (err) {
            console.error("Share cancelled or failed:", err);
        }
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
                    <div
                        className="action-item"
                        onClick={() => openWhatsApp(contact.userPrimaryPhoneNumber)}
                    >
                        <span className="icon">🟢💬</span>
                        <p>Message</p>
                    </div>
                    <div
                        className="action-item"
                        onClick={() => makeCall(contact.userPrimaryPhoneNumber)}
                    >
                        <span className="icon">📞</span>
                        <p>Call</p>
                    </div>
                    <div className="action-item" onClick={shareContact}>
                        <span className="icon">📤</span>
                        <p>Share</p>
                    </div>
                    <div className="action-item" onClick={saveContact}>
                        <span className="icon">💾</span>
                        <p>Save</p>
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
