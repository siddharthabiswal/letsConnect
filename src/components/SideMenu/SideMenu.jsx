// import './SideMenu.css';

// const SideMenu = ({ isOpen }) => {
//     return (
//         <div className={`sideMenu ${isOpen ? 'open' : ''}`}>
//             <ul>
//                 <li>🏠 Home</li>
//                 <li>📂 Categories</li>
//                 <li>📢 Post Ad</li>
//                 <li>📞 Contact</li>
//                 <li>ℹ️ About Us</li>
//             </ul>
//         </div>
//     );
// };

// export default SideMenu;




import './SideMenu.css';

const SideMenu = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay Tap Area */}
            {isOpen && <div className="sideMenuOverlay" onClick={onClose}></div>}

            <div className={`sideMenu ${isOpen ? 'open' : ''}`}>
                <ul onClick={onClose}>
                    <li>🏠 Home</li>
                    <li>📂 Categories</li>
                    <li>📢 Post Ad</li>
                    <li>📞 Contact</li>
                    <li>ℹ️ About Us</li>
                </ul>
            </div>
        </>
    );
};

export default SideMenu;
