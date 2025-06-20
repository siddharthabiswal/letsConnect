// import './SideMenu.css';
// import { useState } from 'react';

// const SideMenu = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     return (
//         <>
//             {/* Menu Icon rendered inline with header */}
//             <div className="menuButton" onClick={toggleMenu}>
//                 ☰
//             </div>

//             {/* Side Menu Panel */}
//             <div className={`sideMenu ${isOpen ? 'open' : ''}`}>
//                 <ul>
//                     <li>🏠 Home</li>
//                     <li>📂 Categories</li>
//                     <li>📢 Post Ad</li>
//                     <li>📞 Contact</li>
//                     <li>ℹ️ About Us</li>
//                 </ul>
//             </div>
//         </>
//     );
// };

// export default SideMenu;




import './SideMenu.css';
import { useState } from 'react';

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <div className="sideMenuContainer">
            {/* Hamburger Menu Icon */}
            <div className="menuButton" onClick={toggleMenu}>
                ☰
            </div>

            {/* Slide-out Panel */}
            <div className={`sideMenu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>🏠 Home</li>
                    <li>📂 Categories</li>
                    <li>📢 Post Ad</li>
                    <li>📞 Contact</li>
                    <li>ℹ️ About Us</li>
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;
