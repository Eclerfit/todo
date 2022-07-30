import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import classes from "./TaskInput.module.scss";

export default function TaskInput({
  newTask,
  setNewTask,
  tasks,
  setTasks,
  randomID,
}) {
  const [inputError, setInputError] = useState("");
  const createNewTask = (e) => {
    setNewTask({ ...newTask, name: e.target.value });
    !newTask.name ? setInputError("Fill the field") : setInputError("");
  };
  const addNewTask = (e) => {
    e.preventDefault();
    newTask.name ? setInputError("") : setInputError("Fill the field");
    newTask.name ? setTasks([...tasks, newTask]) : setTasks([...tasks]);
    setNewTask({ id: randomID, name: "" });
  };
  return (
    <>
      {inputError && <div className={classes.error}>{inputError}</div>}
      <form className={classes.task__block}>
        <input
          className={classes.task__input}
          type="text"
          placeholder="Type the task in"
          name="task"
          value={newTask.name}
          onChange={createNewTask}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setNewTask({ ...newTask, name: e.target.value });
            }
          }}
        />
        <button onClick={addNewTask} className={classes.btn__icon}>
          <FontAwesomeIcon icon={faSquarePlus} className={classes.btn__icon_add} />
        </button>
      </form>
    </>
  );
}
