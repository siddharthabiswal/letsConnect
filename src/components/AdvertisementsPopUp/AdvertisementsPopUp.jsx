import '../AdvertisementsPopUp/AdvertisementsPopUp.css'

const AdvertisementsPopUp = ({ onClose }) => {
    return (
        <div className="popupOverlay" onClick={onClose}>
            <div className="popupContent" onClick={(e) => e.stopPropagation()}>
                <h2>Post Your Ad</h2>
                <p>This is a placeholder for the ad submission form.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AdvertisementsPopUp;


