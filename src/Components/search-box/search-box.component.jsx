import './search-box.component.css'

export const SearchBox = ({ placeholder, handlechange }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handlechange}
  />
)
