import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import Card from './components/Card';
import CustomTaskInput from './components/CustomTaskInput';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Results from './components/Results';

function App() {
  const { tasks, setTasks, results } = useTasks();
  const [task, setTask] = useState('');

  const addTask = (event) => {
    if (event.key === 'Enter') {
      if (!task || task.length === 0) return;

      const newTask = {
        id: uuidv4(),
        title: task,
        done: false,
      };

      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const updateStatus = (i) => {
    const index = tasks.findIndex((task) => task.id === i.id);
    tasks[index] = {
      ...tasks[index],
      done: !tasks[index].done,
    };

    setTasks([...tasks]);
  };

  return (
    <Card className='card'>
      <Header>To Do</Header>
      <CustomTaskInput
        task={task}
        addTask={addTask}
        handleChange={handleChange}
      />
      <ItemList items={tasks} updateStatus={updateStatus} />
      {tasks.length > 0 ? <Results results={results} /> : null}
    </Card>
  );
}

export default App;
