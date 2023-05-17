import { ChangeEvent} from "react";
import "./search-box.css"

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ onSearchChange, placeholder, className }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onSearchChange}
  />
);

export default SearchBox;
