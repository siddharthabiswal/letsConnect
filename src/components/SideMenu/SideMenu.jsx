import './SideMenu.css';

const SideMenu = ({ isOpen }) => {
    return (
        <div className={`sideMenu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li>🏠 Home</li>
                <li>📂 Categories</li>
                <li>📢 Post Ad</li>
                <li>📞 Contact</li>
                <li>ℹ️ About Us</li>
            </ul>
        </div>
    );
};

export default SideMenu;
