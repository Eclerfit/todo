import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";
import classes from "./TaskInput.module.scss";

const initialTask = {
  name: "",
};

export default function TaskInput({ handleCreateTask }) {
  const [form, setForm] = useState(initialTask);
  const [isError, setError] = useState(false);

  const handleChangeName = ({ target: { value } }) => {
    setError(false);

    setForm((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const handleCreate = () => {
    if (form.name) {
      handleCreateTask({ ...form, id: nanoid() });
      setForm(initialTask);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {isError && <div className={classes.error}>Fill in the field!</div>}
      <form className={classes.task__block}>
        <input
          className={classes.task__input}
          type="text"
          placeholder="Type the task in"
          name="task"
          value={form.name}
          onChange={handleChangeName}
          onKeyDown={({ key }) => key === "Enter" && handleCreate()}
        />
        <button
          type="button"
          onClick={handleCreate}
          className={classes.btn__icon}
        >
          <FontAwesomeIcon
            icon={faSquarePlus}
            className={classes.btn__icon_add}
          />
        </button>
      </form>
    </>
  );
}
