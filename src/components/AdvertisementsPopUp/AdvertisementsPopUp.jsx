import { advertisementstext } from "../../data/addvertisementText";
import "../AdvertisementsPopUp/AdvertisementsPopUp.css";

const AdvertisementsPopUp = ({ onClose }) => {
    return (
        <div className="popupOverlay" onClick={onClose}>
            <div className="popupContent" onClick={(e) => e.stopPropagation()}>
                <h2 className="popupTitle">📢 Post Your Ad – We’re Here to Help!</h2>
                <p className="popupText">{advertisementstext}</p>
                <button className="popupButton" onClick={() => window.open("tel:+91")}>
                    📞 Call Us Now
                </button>
            </div>
        </div>
    );
};

export default AdvertisementsPopUp;