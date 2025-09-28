import { useState } from "react";
import "./SearchBar.css";


const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(query.trim());
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search categories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" aria-label="Search">
                <span className="search-icon">🔍</span>
            </button>
        </form>
    );
};

export default SearchBar;
