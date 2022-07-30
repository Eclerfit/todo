import React, { memo } from "react";
import classes from "./SearchForm.module.scss";

const options = [
  { value: "name", name: "Sort by name" },
  { value: "id", name: "Sort by date" },
];

function SearchForm({ handleChangeFilter, handleChangeSort }) {
  return (
    <form className={classes.search__block}>
      <div className={classes.search__select_wrap}>
        <select
          defaultValue="default"
          className={classes.search__select}
          onChange={handleChangeSort}
        >
          <option disabled value="default" className={classes.search__option}>
            Sort by
          </option>
          {options.map(({ name, value }) => (
            <option
              className={classes.search__option}
              key={value}
              value={value}
            >
              {name}
            </option>
          ))}
        </select>
      </div>
      <input
        className={classes.search__input}
        type="text"
        placeholder="Searching for.."
        onChange={handleChangeFilter}
      />
    </form>
  );
}

export default memo(SearchForm);
