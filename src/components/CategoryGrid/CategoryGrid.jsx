// import { useState } from "react";
// import "./CategoryGrid.css";
// import ContactsPopup from "../ContactsPopup/ContactsPopup";
// import categories from "../../data/categories";

// const CategoryGrid = () => {
//     const [showContacts, setShowContacts] = useState(false);
//     const [selectedCategory, setSelectedCategory] = useState("");
//     const [showRegistration, setShowRegistration] = useState(false);

//     const handleCategoryClick = (item) => {
//         console.log("Clicked category:", item.label);
//         setSelectedCategory(item.label);
//         setShowContacts(true);
//     };
//     return (
//         <>
//             <div className="categoryGridContainer">
//                 {categories.map((item, idx) => (
//                     <div
//                         key={idx}
//                         className="categoryCard"
//                         onClick={() => handleCategoryClick(item)}
//                     >
//                         <div className="categoryIcon">{item.icon}</div>
//                         <div className="categoryLabel">{item.label}</div>
//                     </div>
//                 ))}
//             </div>
//             {showContacts && (
//                 <>
//                     <div
//                         className="modalOverlay"
//                         onClick={() => setShowContacts(false)}
//                     ></div>
//                     <div className="contactsPopup">
//                         <ContactsPopup onClose={() => setShowContacts(false)} category={selectedCategory} contacts={selectedCategory.contacts} onRegister={() => {
//                             setShowContacts(false);
//                             setShowRegistration(true);
//                         }} />
//                         <button className="closeBtn" onClick={() => setShowContacts(false)}>
//                             ×
//                         </button>
//                     </div>

//                 </>
//             )}
//         </>
//     );
// };

// export default CategoryGrid;




import { useState } from "react";
import "./CategoryGrid.css";
import ContactsPopup from "../ContactsPopup/ContactsPopup";

const CategoryGrid = ({ categories }) => {
    const [showContacts, setShowContacts] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showRegistration, setShowRegistration] = useState(false);

    const handleCategoryClick = (item) => {
        console.log("Clicked category:", item.label);
        setSelectedCategory(item);
        setShowContacts(true);
    };

    return (
        <>
            <div className="categoryGridContainer">
                {categories.length > 0 ? (
                    categories.map((item, idx) => (
                        <div
                            key={idx}
                            className="categoryCard"
                            onClick={() => handleCategoryClick(item)}
                        >
                            <div className="categoryIcon">{item.icon}</div>
                            <div className="categoryLabel">{item.label}</div>
                        </div>
                    ))
                ) : (
                    <p className="noResults">No categories found</p>
                )}
            </div>

            {showContacts && selectedCategory && (
                <>
                    <div
                        className="modalOverlay"
                        onClick={() => setShowContacts(false)}
                    ></div>
                    <div className="contactsPopup">
                        <ContactsPopup
                            onClose={() => setShowContacts(false)}
                            category={selectedCategory.label}
                            contacts={selectedCategory.contacts}
                            onRegister={() => {
                                setShowContacts(false);
                                setShowRegistration(true);
                            }}
                        />
                        <button
                            className="closeBtn"
                            onClick={() => setShowContacts(false)}
                        >
                            ×
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default CategoryGrid;
