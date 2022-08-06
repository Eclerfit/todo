import React, { memo } from "react";
import classes from "./SearchForm.module.scss";

const options = [
  { value: "name", name: "Sort by name" },
  { value: "id", name: "Sort by date" },
];

function SearchForm({ handleChangeFilter, handleChangeSort }) {
  return (
    <form className={classes.wrap}>
      <div className={classes.selectWrap}>
        <select
          defaultValue="default"
          className={classes.select}
          onChange={handleChangeSort}
        >
          <option disabled value="default" className={classes.option}>
            Sort by
          </option>
          {options.map(({ name, value }) => (
            <option
              className={classes.option}
              key={value}
              value={value}
            >
              {name}
            </option>
          ))}
        </select>
      </div>
      <input
        className={classes.input}
        type="text"
        placeholder="Searching for.."
        onChange={handleChangeFilter}
      />
    </form>
  );
}

export default memo(SearchForm);
