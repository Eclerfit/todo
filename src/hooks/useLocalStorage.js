import { useEffect } from "react";

export const useLocalStorage = (tasks, archiveTasks) => {
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("archiveTasks", JSON.stringify(archiveTasks));
  }, [tasks, archiveTasks]);
};
