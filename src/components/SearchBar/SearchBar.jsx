import './SearchBar.css';

const SearchBar = () => {
    return (
        <form className="search__bar">
            <input
                type="text"
                className="search__input"
                placeholder="Enter topics"
            />

            <button className="search__submit-button">
                Search
            </button>


        </form>
    )
}

export default SearchBar
