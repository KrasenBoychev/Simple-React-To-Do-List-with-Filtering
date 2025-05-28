//filter the displayed to-do items

export default function FilterButtons({ filterProps }) {
  const { filterApplied, setFilterApplied } = filterProps;

  return (
    <div className="filter_container">
      <label>
        Filter List:
        <select
          value={filterApplied}
          onChange={(e) => setFilterApplied(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </label>
    </div>
  );
}
