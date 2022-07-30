import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import classes from "./Task.module.scss";
import { joinClasses } from "../../helpers";

export default function TaskDone({ task, returnTask, deleteTask }) {
  const handleReturn = () => returnTask(task);
  const handleDelete = () => deleteTask(task);

  return (
    <>
      <div className={classes.name} title={task.name}>
        {task.name}
      </div>
      <div className={classes.actions}>
        <button
          className={joinClasses(classes.icon, classes.delete)}
          onClick={handleDelete}
        >
          <FontAwesomeIcon
            icon={faTrashCan}
            className={classes.btn__icon_del_all}
          />
        </button>
        <button className={classes.icon} onClick={handleReturn}>
          <FontAwesomeIcon icon={faArrowUp} className={classes.back} />
        </button>
      </div>
    </>
  );
}
