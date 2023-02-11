import React, { createContext, useState, useContext } from 'react';
import tasksData from '../data/tasks.json';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksData);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
