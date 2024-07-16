import { useState } from 'react';
import './App.css';
import TodoInputComponent from './components/TodoInputComponent';
import TodoTaskComponent from './components/TodoTaskComponent';

function App() {
  const [todoTask, setTodoTask] = useState([]);

  function deleteTask(taskId) {
    const newTodoTask = todoTask.filter((task) => task.id !== taskId);
    setTodoTask(newTodoTask);
  }

  function handleInProgress(taskId) {
    const newTodoTask = todoTask.map((task) =>
      task.id === taskId ? { ...task, status: 'in-progress' } : task
    );
    setTodoTask(newTodoTask);
  }

  function handleComplete(taskId) {
    const newTodoTask = todoTask.map((task) =>
      task.id === taskId ? { ...task, status: 'complete' } : task
    );
    setTodoTask(newTodoTask);
  }

  return (
    <>
      <h1 className='title'>TODO APP</h1>
      <TodoInputComponent todoTask={todoTask} setTodoTask={setTodoTask} />
      <TodoTaskComponent 
        todoTask={todoTask} 
        deleteTask={deleteTask} 
        handleInProgress={handleInProgress}
        handleComplete={handleComplete}
      />
    </>
  );
}

export default App;
