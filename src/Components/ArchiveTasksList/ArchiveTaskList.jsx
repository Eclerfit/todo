import React, { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faAnglesDown,
  faAnglesUp,
} from "@fortawesome/free-solid-svg-icons";
import Task from "../Task";

import classes from "./ArchiveTaskList.module.scss";
import { joinClasses } from "../../helpers";

function ArchiveTaskList({ taskList, returnTask, deleteAll, deleteTask }) {
  const [isMore, setMore] = useState(false);

  const taskListToShow = isMore ? taskList : [taskList[0]];

  return taskList.length ? (
    <div className={classes.wrap}>
      {taskList.length > 1 && (
        <button
          className={joinClasses(classes.icon, classes.del)}
          onClick={deleteAll}
        >
          <FontAwesomeIcon
            icon={faTrashCan}
          />
        </button>
      )}
      <ul className={classes.list}>
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
        <div className={classes.actions}>
          <button
            className={joinClasses(classes.icon, classes.arrow)}
            onClick={() => setMore((prev) => !prev)}
          >
            <FontAwesomeIcon
              icon={isMore ? faAnglesUp : faAnglesDown}
            />
          </button>
        </div>
      )}
    </div>
  ) : null;
}

export default memo(ArchiveTaskList);
