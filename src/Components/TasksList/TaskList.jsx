import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import classes from "./TaskList.module.scss";

function TaskList({
  sortedAndSearchedTasks,
  tasks,
  setTasks,
  archiveTasks,
  setArchiveTasks,
  setNewTask,
}) {
  const delTask = (id) => {
    const newArchiveTask = tasks.find((task) => task.id === id);
    setArchiveTasks([...archiveTasks, newArchiveTask].reverse());
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const editTask = (id) => {
    const editEl = tasks.find((task) => task.id === id);
    setNewTask(editEl);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      {sortedAndSearchedTasks.length ? (
        <ul className={classes.task__list}>
          {sortedAndSearchedTasks.map((task, id) => (
            <li key={id} className={classes.task__wrap}>
              <div className={classes.task__item}>{task.name}</div>
              <div className={classes.btn__block}>
                <button className={classes.btn__icon} onClick={() => editTask(task.id)}>
                  <FontAwesomeIcon icon={faEdit} className={classes.btn__icon_edit} />
                </button>
                <button className={classes.btn__icon} onClick={() => delTask(task.id)}>
                  <FontAwesomeIcon icon={faTrash} className={classes.btn__icon_del} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : !tasks.length ? (
        <div className={classes.text}>Let's create a task</div>
      ) : (
        <div className={classes.text}>Not found</div>
      )}
    </>
  );
}

export default memo(TaskList)