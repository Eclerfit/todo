import { useMemo } from "react";

export const useSortedTasks = (tasks, sort) => {
  const sortedTasks = useMemo(() => {
    if (sort === "name") {
      return [...tasks].sort((a, b) => a[sort]?.localeCompare(b[sort]));
    } else if (sort === "id") {
      return [...tasks].sort((a, b) => b - a);
    } else {
      return tasks;
    }
  }, [sort, tasks]);
  return sortedTasks;
};

export const useTasks = (tasks, sort, query) => {
  const sortedTasks = useSortedTasks(tasks, sort);
  const sortedAndSearchedTasks = useMemo(() => {
    return tasks
      ? sortedTasks.filter((task) =>
          task?.name.toLowerCase().includes(query?.toLowerCase())
        )
      : [];
  }, [query, sortedTasks]);
  return sortedAndSearchedTasks;
};
