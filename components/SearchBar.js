function SearchBar({ search, handleSearchValue }) {
    return ( 
        <div>
            <input 
                onChange={handleSearchValue}
                value={search}
                className="search-bar" 
                type='text' 
                placeholder="Search"
                id="search"
            />
        </div>
    );
}

export default SearchBar;