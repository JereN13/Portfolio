const Filters = ({ setFilter }) => {
    return (
      <div>
        <select onChange={e => setFilter(e.target.value)}>
          <option value="">Kaikki</option>
          <option value="rock">Rock</option>
          <option value="pop">Pop</option>
        </select>
      </div>
    );
  };
  
  export default Filters;
  