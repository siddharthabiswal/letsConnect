import { useState, useRef, useEffect } from "react";
import "../DropDownMenuCheckBox/DropDownMenuCheckBox.css";
const options = ["India", "USA", "UK", "Germany", "Australia"];
const DropDownMenuCheckBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Selected countries: ${selectedOptions.join(", ")}`);
    };

    return (
        <div style={{ padding: "20px", width: "250px" }}>
            <form onSubmit={handleSubmit}>
                <div ref={dropdownRef} style={{ position: "relative" }}>
                    <div
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            cursor: "pointer",
                            background: "#fff",
                        }}
                        onClick={toggleDropdown}
                    >
                        {selectedOptions.length > 0
                            ? selectedOptions.join(", ")
                            : "Select countries"}
                    </div>

                    {isOpen && (
                        <div
                            style={{
                                border: "1px solid #ccc",
                                maxHeight: "150px",
                                overflowY: "auto",
                                background: "#fff",
                                position: "absolute",
                                zIndex: 1,
                                width: "230px",
                                marginTop: "2px",
                            }}
                        >
                            {options.map((option) => (
                                <label
                                    key={option}
                                    style={{
                                        display: "block",
                                        padding: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedOptions.includes(option)}
                                        onChange={() => handleCheckboxChange(option)}
                                    />{" "}
                                    {option}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DropDownMenuCheckBox;
