import { useState, useRef, useEffect } from "react";
import "../DropDownMenu/DropDownMenu.css";

const DropDownMenu = ({
    label = "Select Options",
    options = [],
    value = [],
    onChange,
    placeholder = "Select options",
    name = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleCheckboxChange = (option) => {
        const updated = value.includes(option)
            ? value.filter((item) => item !== option)
            : [...value, option];

        onChange(updated, name); // Send updated value to parent with optional field name
    };

    return (
        <div style={{ padding: "10px 0", width: "100%" }} ref={dropdownRef}>
            <label
                htmlFor={`dropdown-${name}`}
                style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}
            >
                {label}
            </label>

            <div
                id={`dropdown-${name}`}
                style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    cursor: "pointer",
                    background: "#fff",
                }}
                onClick={toggleDropdown}
            >
                {value.length > 0 ? value.join(", ") : placeholder}
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
                                checked={value.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                            />{" "}
                            {option}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDownMenu;
