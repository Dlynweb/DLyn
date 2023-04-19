import React from 'react';
import './SearchBar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function SearchBar({ searchText, setSearchText }) {
    const handleInputChange = event => {
        setSearchText(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar disfraces"
                value={searchText}
                onChange={handleInputChange}
            />
            <button type="submit">
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </button>
        </div>
    );
}

export default SearchBar;