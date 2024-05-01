import { useState } from "react";

const MovieFilter = ({ value, onFilter }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    onFilter(inputValue);
  };

  return (
    <div>
      <input
        name="query"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default MovieFilter;
