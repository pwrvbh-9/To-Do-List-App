import React, {useState} from "react";


function ToDoList() {
    const [tasks, setTasks] = useState(["Morning Walk", "Take Shower", "Eat Breakfast"]);
    const [newTask, setnewTask] = useState("");
 
    function handleInputChnage(e) {
        setnewTask(e.target.value)
    }

    function addTask() {
        if(newTask.trim() !== "")
        setTasks(t => [...t, newTask]); // 't' represents previous state
        setnewTask("");
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(<>
        <div className="todolist">
            <h1>
                To Do List
            </h1>

            <div className="input-field">
                <input type="text" placeholder="Enter New Task..." value={newTask} onChange={handleInputChnage}/>
                <button onClick={addTask} className="add-button">
                    Add
                </button>
            </div>
            <ol className="tasks-list">
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    </>);
}

export default ToDoList