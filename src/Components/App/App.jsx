import classes from "./App.module.scss";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useChangedTasks } from "../../hooks/useChangedTasks";
import Title from "../Title";
import TaskList from "../TaskList";
import ArchiveTaskList from "../ArchiveTasksList";
import TaskInput from "../TaskInput";
import SearchForm from "../SearchForm/";

const initTasksState = () => {
  const saved = localStorage.getItem("tasks");
  return JSON.parse(saved) || [];
};

const initDoneTaskListState = () => {
  const saved = localStorage.getItem("archiveTasks");
  return JSON.parse(saved) || [];
};

function App() {
  const [taskList, setTaskList] = useState(initTasksState);
  const [doneTaskList, setDoneTaskList] = useState(initDoneTaskListState);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const changedTaskList = useChangedTasks(taskList, sort, filter);

  const handleCreateTask = (task) => setTaskList((prev) => [...prev, task]);

  const handleChangeSort = ({ target: { value } }) => setSort(value);

  const handleChangeFilter = ({ target: { value } }) => setFilter(value);

  const archiveTask = (task) => {
    setTaskList((prev) => prev.filter(({ id }) => task.id !== id));
    setDoneTaskList((prev) => [...prev, task]);
  };

  const editTask = (task) =>
    setTaskList((prev) =>
      prev.map((prevTask) => (prevTask.id === task.id ? task : prevTask))
    );

  const returnTask = (task) => {
    setDoneTaskList((prev) => prev.filter(({ id }) => task.id !== id));
    setTaskList((prev) => [...prev, task]);
  };

  const deleteAllTasks = () => setDoneTaskList([]);

  const deleteTask = (task) =>
    setDoneTaskList((prev) => prev.filter(({ id }) => task.id !== id));

  useLocalStorage(taskList, doneTaskList);

  return (
    <div className={classes.wrapTodo}>
      <div className={classes.todo}>
        <Title />
        <div className={classes.wrapInputs}>
          <TaskInput handleCreateTask={handleCreateTask} />
          <SearchForm
            handleChangeFilter={handleChangeFilter}
            handleChangeSort={handleChangeSort}
          />
        </div>
        <TaskList
          taskList={changedTaskList}
          editTask={editTask}
          archiveTask={archiveTask}
        />
        {!!doneTaskList.length && (
          <div className={classes.done}>
            <ArchiveTaskList
              taskList={doneTaskList}
              deleteAll={deleteAllTasks}
              deleteTask={deleteTask}
              returnTask={returnTask}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
