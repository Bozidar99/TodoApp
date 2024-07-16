import { useState  } from 'react'
import "../styles/todoinput.scss";
function TodoInputComponent({ todoTask, setTodoTask }) {
  const [currentTask, setCurrentTask] = useState('');

  function handleTodoTask() {
    setTodoTask([...todoTask, { task: currentTask, id: Date.now() }]);
    setCurrentTask('');
  }

  function handleInputTask(event) {
    setCurrentTask(event.target.value);
  }

  return (
    <div className='container todoinput'>
      <input
        type="text"
        placeholder='Enter Your Task'
        className='todoinput_input'
        value={currentTask}
        onChange={handleInputTask}
      />
      <button className='todoinput_button' onClick={handleTodoTask}>Add</button>
    </div>
  );
}

export default TodoInputComponent;