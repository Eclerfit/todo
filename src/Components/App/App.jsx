import classes from "./App.module.scss";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useTasks } from "../../hooks/useTasks";
import { nanoid } from "nanoid";
import Title from "../Title";
import TaskList from "../TasksList";
import ArchiveTaskList from "../ArchiveTasksList";
import TaskInput from "../TaskInput";
import SearchForm from "../SearchForm/SearchForm";

const initTasksState = () => {
  const saved = localStorage.getItem("tasks");
  return JSON.parse(saved) || [];
}

const initArchiveState = () => {
  const saved = localStorage.getItem("archiveTasks");
  return JSON.parse(saved) || [];
}

function App() {
  const randomID = nanoid();
  const [tasks, setTasks] = useState(initTasksState);
  const [archiveTasks, setArchiveTasks] = useState(initArchiveState);
  const [newTask, setNewTask] = useState({
    id: randomID,
    name: "",
  });
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedTasks = useTasks(tasks, filter.sort, filter.query);

  useLocalStorage(tasks, archiveTasks);
  useTasks(tasks, filter.sort, filter.query);

  //console.log(JSON.parse(localStorage.getItem('tasks')));
  //console.log(JSON.parse(localStorage.getItem('archiveTasks')));

  return (
    <div className={classes.wrap__todo}>
      <div className={classes.todo}>
        <Title />
        <div className={classes.wrap__inputs}>
          <TaskInput
            newTask={newTask}
            setNewTask={setNewTask}
            tasks={tasks}
            setTasks={setTasks}
            randomID={randomID}
          />
          <SearchForm filter={filter} setFilter={setFilter} />
        </div>
        <TaskList
          sortedAndSearchedTasks={sortedAndSearchedTasks}
          setNewTask={setNewTask}
          tasks={tasks}
          setTasks={setTasks}
          archiveTasks={archiveTasks}
          setArchiveTasks={setArchiveTasks}
        />
        <ArchiveTaskList
          tasks={tasks}
          setTasks={setTasks}
          archiveTasks={archiveTasks}
          setArchiveTasks={setArchiveTasks}
        />
      </div>
    </div>
  );
}

export default App;
