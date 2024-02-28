import React, { useState} from 'react';
import '../components/ToDo.css';

const TodoApp = () => {
    const[tasks, setTasks] =useState([]);
    const[newTasks, setNewTasks] =useState('');

    const addTasks = () => {
        if(newTasks.trim() !== '') {
            setTasks([...tasks, { id:Date.now(), text: newTasks, completed:false}]);
            setNewTasks('');
        }
    };

    const toggleTask = (taskId) => {
        setTasks((prevTasks) => 
            prevTasks.map((task) => 
                task.id === taskId ? { ...task,completed: !task.completed} : task
            )

        );
    };
    
    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="todo-app">
            <h1>Todo App</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={newTasks}
                    onChange={(e) => setNewTasks(e.target.value)}
                    placeholder="Enter a New Task"
                />
    
                <button onClick={addTasks}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className= {task.completed ? 'completed' : ''}>
                        <input 
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        <span>{task.text}</span>
                        <button onClick={() =>deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default TodoApp;

