import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import classes from "./Task.module.scss";
import { joinClasses } from "../../helpers";

export default function TaskActive({ task, archiveTask, editTask }) {
  const [isEditable, setEditable] = useState(false);
  const [form, setForm] = useState(task);
  const handleToggleEdit = () => setEditable(true);
  const handleDeleteTask = () => archiveTask(task);
  const handleEditTask = () => {
    setEditable(false);
    editTask(form);
  };

  const handleChangeName = ({ target: { value } }) =>
    setForm((task) => ({
      ...task,
      name: value,
    }));

  return (
    <>
      <div className={classes.name} title={task.name}>
        {isEditable ? (
          <div className={classes.textareaWrapper} data-text={task.name}>
            <textarea
              rows={1}
              value={form.name}
              className={classes.textarea}
              onChange={handleChangeName}
              onBlur={handleEditTask}
            />
          </div>
        ) : (
          task.name
        )}
      </div>
      <div className={classes.actions}>
        {isEditable ? (
          <button className={joinClasses(classes.icon, classes.check)} onClick={handleEditTask}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </button>
        ) : (
          <button className={joinClasses(classes.icon, classes.edit)} onClick={handleToggleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
        <button className={joinClasses(classes.icon, classes.del)} onClick={handleDeleteTask}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </>
  );
}
