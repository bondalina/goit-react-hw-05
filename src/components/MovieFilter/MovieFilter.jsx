import { useState } from "react";
import css from "./MovieFilter.module.css";

const MovieFilter = ({ value, onFilter }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    onFilter(inputValue);
  };

  return (
    <div className={css.filterWrapper}>
      <input
        className={css.inputSearch}
        name="query"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button className={css.btnSearch} type="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default MovieFilter;
