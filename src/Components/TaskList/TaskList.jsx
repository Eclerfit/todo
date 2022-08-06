import React, { memo } from "react";
import Task from "../Task";
import classes from "./TaskList.module.scss";

function TaskList({ taskList, archiveTask, editTask }) {
  return taskList.length ? (
    <ul className={classes.list}>
      {taskList.map((task) => (
        <Task
          key={task.id}
          task={task}
          archiveTask={archiveTask}
          editTask={editTask}
        />
      ))}
    </ul>
  ) : (
    <div className={classes.text}>Not found</div>
  );
}

export default memo(TaskList);
