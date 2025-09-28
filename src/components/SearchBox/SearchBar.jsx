import { useState } from "react";
import "./SearchBar.css";


const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setQuery(value);
        if (onSearch) onSearch(value); // send value to parent
    };

    return (
        <form className="search-bar">
            {/* <form className="search-bar" onSubmit={handleSearch}> */}
            <input
                type="text"
                placeholder="Search categories..."
                value={query}
                onChange={handleSearch}
            />
            <button type="submit" aria-label="Search">
                <span className="search-icon">🔍</span>
            </button>
        </form>
    );
};

export default SearchBar;
