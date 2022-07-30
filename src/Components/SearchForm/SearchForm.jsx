import React, { memo } from "react";
import classes from "./SearchForm.module.scss";

function SearchForm({ filter, setFilter }) {
  const options = [
    { value: "name", name: "Sort by name" },
    { value: "id", name: "Sort by date" },
  ];
  return (
    <form className={classes.search__block}>
      <div className={classes.search__select_wrap}>
        <select
          className={classes.search__select}
          value={filter.sort}
          onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
        >
          <option disabled value="" className={classes.search__option}>
            Sort by
          </option>
          {options.map((option, index) => (
            <option className={classes.search__option} key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <input
        className={classes.search__input}
        type="text"
        placeholder="Searching for.."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
    </form>
  );
}

export default memo(SearchForm)
