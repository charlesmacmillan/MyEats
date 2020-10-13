import React from 'react';
// import { Link } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <form className="SearchBar">
            <input type="text" placeholder="SEARCH"/>
            <button></button>
        </form>
    )
}

export default SearchBar;