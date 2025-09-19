import { useState } from "react";
import "./CategoryGrid.css";
// import ContactList from "../ContactList/ContactList";
import ContactsPopup from "../ContactsPopup/ContactsPopup";



const categories = [
    { icon: "🔧", label: "AC Repairs" },
    { icon: "💇‍♀️", label: "Beauty Parlours" },
    { icon: "🎂", label: "Cake Shops" },
    { icon: "📚", label: "Competitive Exam Coaching Centre" },
    { icon: "🏢", label: "Construction Companies" },
    { icon: "💻", label: "Digital Marketing Company" },
    { icon: "👷‍♂️", label: "Electricians" },
    { icon: "🏋️‍♀️", label: "Gyms Fitness Centers" },
    { icon: "🩺", label: "Health Insurance" },
    { icon: "🏠", label: "Home Loans" },
    { icon: "🏨", label: "Hostel PG" },
    { icon: "🧹", label: "Housekeeping Services" },
    { icon: "🛋️", label: "Interior Designers" },
    { icon: "🧑‍⚕️", label: "Life Insurance" },
    { icon: "📱", label: "Mobile App Developers" },
    { icon: "📦", label: "Packers And Movers" },
    { icon: "🐶", label: "Pet Shops" },
    { icon: "🏫", label: "Play Schools" },
    { icon: "🔧", label: "Plumbers" },
    { icon: "👨‍💻", label: "Software Development Company" },
    { icon: "🏠", label: "Buy/Sell Property" },
    { icon: "🔍💼", label: "Search Jobs" },
    { icon: "🚿", label: "Bathroom Cleaning" },
    { icon: "👩‍🏫", label: "Tutors" },
    { icon: "👶", label: "Babysitters" },
    { icon: "🧑‍⚕️", label: "Elderly Care" },
    { icon: "🖌️🧱", label: "Wall Painting" }, // Brush + bricks
    { icon: "🔨🪚", label: "Woodwork & Carpentry" },
    { icon: "🚕", label: "City Taxi" },
    { icon: "🚗🛣️", label: "Outstation Taxi" },
    { icon: "🚖🧳", label: "Travel & Cabs" },
    { icon: "🛺📍", label: "Local Commute" },
    { icon: "🎉", label: "Event Organizer" },
    { icon: "💍🎉", label: "Wedding & Parties" },
    { icon: "🎂", label: "Birthday Planners" },
    { icon: "📋", label: "Event Planning Services" },
];

const CategoryGrid = () => {
    const [showContacts, setShowContacts] = useState(false);

    const handleCategoryClick = (item) => {
        console.log("Clicked category:", item.label);
        setShowContacts(true);
    };
    return (
        <>
            <div className="categoryGridContainer">
                {categories.map((item, idx) => (
                    <div
                        key={idx}
                        className="categoryCard"
                        onClick={() => handleCategoryClick(item)}
                    >
                        <div className="categoryIcon">{item.icon}</div>
                        <div className="categoryLabel">{item.label}</div>
                    </div>
                ))}
            </div>
            {showContacts && (
                <>
                    <div
                        className="modalOverlay"
                        onClick={() => setShowContacts(false)}
                    ></div>
                    <div className="modalPopup">
                        <ContactsPopup onClose={() => setShowContacts(false)} />
                        <button className="closeBtn" onClick={() => setShowContacts(false)}>
                            ×
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default CategoryGrid;
