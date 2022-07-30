import React, { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faAnglesDown,
  faAnglesUp,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./ArchiveTaskList.module.scss";
import Task from "../Task";

function ArchiveTaskList({ taskList, returnTask, deleteAll, deleteTask }) {
  const [isMore, setMore] = useState(false);

  const taskListToShow = isMore ? taskList : [taskList[0]];

  return taskList.length ? (
    <div className={taskList.length ? classes.task__block : classes.none}>
      {taskList.length > 1 && (
        <button className={classes.btn__icon} onClick={deleteAll}>
          <FontAwesomeIcon
            icon={faTrashCan}
            className={classes.btn__icon_del_all}
          />
        </button>
      )}
      <ul className={classes.task__list}>
        {taskListToShow.map((task) => (
          <Task
            key={task.id}
            isDone
            task={task}
            returnTask={returnTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
      {taskList.length > 1 && (
        <div className={classes.btn__block}>
          <button
            className={classes.btn__icon}
            onClick={() => setMore((prev) => !prev)}
          >
            <FontAwesomeIcon
              icon={isMore ? faAnglesUp : faAnglesDown}
              className={classes.btn__icon_arrow}
            />
          </button>
        </div>
      )}
    </div>
  ) : null;
}

export default memo(ArchiveTaskList);
