import React from "react";
import { joinClasses } from "../../helpers";
import TaskActive from "./TaskActive";
import TaskDone from "./TaskDone";

import classes from "./Task.module.scss";

export default function Task({ isDone, ...restProps }) {
  return (
    <li className={joinClasses(classes.task, isDone && classes.taskDone)}>
      {!isDone ? <TaskActive {...restProps} /> : <TaskDone {...restProps} />}
    </li>
  );
}
