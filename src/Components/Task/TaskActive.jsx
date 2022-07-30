import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import classes from "./Task.module.scss";

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
              rows={2}
              value={form.name}
              className={classes.textarea}
              onChange={handleChangeName}
            />
          </div>
        ) : (
          task.name
        )}
      </div>
      <div className={classes.actions}>
        {isEditable ? (
          <button className={classes.icon} onClick={handleEditTask}>
            success
          </button>
        ) : (
          <button className={classes.icon} onClick={handleToggleEdit}>
            <FontAwesomeIcon icon={faEdit} className={classes.icon_edit} />
          </button>
        )}
        <button className={classes.icon} onClick={handleDeleteTask}>
          <FontAwesomeIcon icon={faTrash} className={classes.icon_del} />
        </button>
      </div>
    </>
  );
}
