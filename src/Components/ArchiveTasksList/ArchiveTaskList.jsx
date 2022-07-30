import React, { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faArrowUp,
  faAnglesDown,
  faAnglesUp,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./ArchiveTaskList.module.scss";

function ArchiveTaskList({ archiveTasks, setArchiveTasks, tasks, setTasks }) {
  const delArchiveTasks = () => {
    setArchiveTasks([]);
  };
  const backToList = (id) => {
    const backTask = archiveTasks.find((archiveTask) => archiveTask.id === id);
    setTasks([...tasks, backTask]);
    setArchiveTasks(archiveTasks.filter((backTask) => backTask.id !== id));
  };
  const [showArchiveEl, setShowArchiveEl] = useState(false);
  const showMore = () => {
    setShowArchiveEl(true);
  };
  const cancel = () => {
    setShowArchiveEl(false);
  };
  return (
    <>
      {archiveTasks.length ? (
        <div
          className={archiveTasks.length ? classes.task__block : classes.none}
        >
          <button className={classes.btn__icon} onClick={delArchiveTasks}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={classes.btn__icon_del_all}
            />
          </button>
          <ul className={classes.task__list}>
            {!showArchiveEl ? (
              <li className={classes.task__wrap}>
                <div className={classes.task__item}>
                  {archiveTasks[0]?.name}
                </div>
                <button
                  className={classes.btn__icon}
                  onClick={() => backToList(archiveTasks[0].id)}
                >
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className={classes.btn__icon_back}
                  />
                </button>
              </li>
            ) : (
              archiveTasks?.map((archiveTask, id) => (
                <li key={id} className={classes.task__wrap}>
                  <div className={classes.task__item}>{archiveTask?.name}</div>
                  <button
                    className={classes.btn__icon}
                    onClick={() => backToList(archiveTask.id)}
                  >
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className={classes.btn__icon_back}
                    />
                  </button>
                </li>
              ))
            )}
          </ul>
          <div className={classes.btn__block}>
            <button
              className={
                archiveTasks.length > 1 && !showArchiveEl
                  ? classes.btn__icon
                  : classes.none
              }
              onClick={showMore}
            >
              <FontAwesomeIcon
                icon={faAnglesDown}
                className={classes.btn__icon_arrow}
              />
            </button>
            <button
              className={showArchiveEl ? classes.btn__icon : classes.none}
              onClick={cancel}
            >
              <FontAwesomeIcon
                icon={faAnglesUp}
                className={classes.btn__icon_arrow}
              />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default memo(ArchiveTaskList);
