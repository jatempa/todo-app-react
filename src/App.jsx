import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Card from './components/Card';
import CustomTaskInput from './components/CustomTaskInput';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Results from './components/Results';

function App() {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);
  const [results, setResults] = useState({
    all: 0,
    complete: 0,
    incomplete: 0,
  });

  const addTask = (event) => {
    if (event.key === 'Enter') {
      if (!task || task.length === 0) return;

      const newItem = {
        id: uuidv4(),
        title: task,
        done: false,
      };

      setItems([...items, newItem]);
      setTask('');
    }
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const updateStatus = (i) => {
    const index = items.findIndex((item) => item.id === i.id);
    items[index] = {
      ...items[index],
      done: !items[index].done,
    };

    setItems([...items]);

    const all = items.length;
    const complete = items.filter((item) => item.done).length;
    const incomplete = all - complete;

    const updatedResults = {
      ...results,
      all,
      complete,
      incomplete,
    };

    setResults(updatedResults);
  };

  return (
    <Card id='app' className='card'>
      <Header>To Do</Header>
      <CustomTaskInput
        task={task}
        addTask={addTask}
        handleChange={handleChange}
      />
      <ItemList items={items} updateStatus={updateStatus} />
      {items.length > 0 ? <Results results={results} /> : null}
    </Card>
  );
}

export default App;
