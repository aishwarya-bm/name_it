import React from 'react';
import "./SearchBox.css";

const SearchBox = ({ onSearchTextChange }) => {
    return (
        <div className="search-container">
            <input onChange={(event) => onSearchTextChange(event.target.value)} placeholder="Type keyword" className="search-input" />
        </div>
    )
}

export default SearchBox;