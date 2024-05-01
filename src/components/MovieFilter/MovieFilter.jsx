const MovieFilter = ({ value, onFilter }) => {
  return (
    <div>
      <input
        name="query"
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
      <button type="button">Search</button>
    </div>
  );
};

export default MovieFilter;
