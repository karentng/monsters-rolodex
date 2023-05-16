import { Component } from "react";
import "./search-box.css"

class SearchBox extends Component {
  render() {
    const { onSearchChange, placeholder, className } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchBox;
