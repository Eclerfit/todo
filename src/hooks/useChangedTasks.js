import { useMemo } from "react";

const sortTasks = (tasks, sort) => {
  if (sort === "name") {
    return [...tasks].sort((a, b) => a[sort]?.localeCompare(b[sort]));
  } else if (sort === "id") {
    return [...tasks].sort((a, b) => b - a);
  } else {
    return tasks;
  }
};

const filterTasks = (tasks, filter) =>
  tasks.filter((task) =>
    task.name.toLowerCase().includes(filter.toLowerCase())
  );

export const useChangedTasks = (tasks, sort, filter) => {
  const filteredTasks = useMemo(
    () => filterTasks(tasks, filter),
    [tasks, filter]
  );

  const sortedTasks = useMemo(
    () => sortTasks(filteredTasks, sort),
    [sort, filteredTasks]
  );

  return sortedTasks;
};
