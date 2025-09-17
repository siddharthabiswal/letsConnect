

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="modalOverlay" onClick={onClose} />
            <div className="modalPopup scrollable">
                {title && <h3>{title}</h3>}
                <div className="modalContent">{children}</div>
                <button className="closeBtn" onClick={onClose}>
                    Close
                </button>
            </div>
        </>
    );
};

export default Modal;
