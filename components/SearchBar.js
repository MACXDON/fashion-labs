function SearchBar({ search, handleSearchValue }) {
    return ( 
        <div>
            <input 
                onChange={handleSearchValue}
                value={search}
                className="search-bar" 
                type='text' 
                placeholder="Search"
            />
        </div>
    );
}

export default SearchBar;