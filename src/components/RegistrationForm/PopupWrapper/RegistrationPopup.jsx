
import RegistrationForm from "../RegistrationForm";
import "./RegistrationPopup.css";


const RegistrationPopup = ({ onClose }) => {
    return (
        <div className="registrationOverlay">
            <div className="registrationBox">
                <div className="registrationHeader">
                    <button className="closeBtn" onClick={onClose}>
                        close
                    </button>
                    <h3>Register</h3>
                </div>

                {/* Your existing form */}
                <RegistrationForm closeForm={onClose} />
            </div>
        </div>
    );
};

export default RegistrationPopup;
