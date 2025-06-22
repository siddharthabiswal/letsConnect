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

    onChange(updated, name);
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <label htmlFor={`dropdown-${name}`} className="dropdown-label">
        {label}
      </label>

      <div
        id={`dropdown-${name}`}
        className="dropdown-selected"
        onClick={toggleDropdown}
      >
        {value.length > 0 ? value.join(", ") : placeholder}
      </div>

      {isOpen && (
        <div className="dropdown-list">
          {options.map((option) => (
            <label key={option} className="dropdown-option">
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
