import "../styles/todotasks.scss";

function TodoTaskComponent({ todoTask, deleteTask, handleInProgress, handleComplete }) {
  return (
    <div className='container'>
      {todoTask.length > 0 ? todoTask.map((task) => (
        <div 
          className={`task ${task.status === 'in-progress' ? 'in-progress' : ''} ${task.status === 'complete' ? 'complete' : ''}`} 
          key={task.id}
        >
          <p>{task.task}</p>
          <button onClick={() => handleInProgress(task.id)}>In Progress</button>
          <button onClick={() => handleComplete(task.id)}>Complete</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )) : <h1>No Task...</h1>}
      <button onClick={()=>alert('Batice potrudio sam se koliko sam znao!!')} className="info">Info!!</button>
      <h1><em>Thank you for using my app</em></h1>
      <h1><em>Made by: <a href="https://github.com/Bozidar99">Bozidar Bajovic</a></em></h1>
    </div>
    
  );
}

export default TodoTaskComponent;


