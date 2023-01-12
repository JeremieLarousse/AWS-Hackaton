import React from 'react';

function SearchDestination(props) {

    const { searchValue, setSearchValue } = props;

    return (
        <div>
            <input
                value={searchValue}
                type="text"
                placeholder="🔎  Rechercher une destination"
                name="search"
                className='searchBar'
                onChange={(event) => setSearchValue(event.target.value)}
            />
        </div>
    );
};

export default SearchDestination;