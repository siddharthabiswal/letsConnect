
import RegistrationForm from "../RegistrationForm";
import "./RegistrationPopup.css";


const RegistrationPopup = ({ onClose, defaultCategory  }) => {
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
                <RegistrationForm closeForm={onClose} defaultCategory={defaultCategory} />
            </div>
        </div>
    );
};

export default RegistrationPopup;
