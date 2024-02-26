import React, {useState, useEffect} from "react";

function TodoList(){

    const [tasks, setTask] = useState([]);
    const [newtasks, setNewTasks] = useState("")

    function handleInput(e){
        setNewTasks(e.target.value)
    }

    function addTask(){

        if(newtasks.trim !== ""){
            setTask(t => ([...t, newtasks]))
            setNewTasks("")
        }
    }

    function removeTask(index){
        newtasks.filter( (task, i) => {
            (i !== index)
        }
        ) 
    }

    function moveTaskUp(index){
        // array destructuring react
    }

    function moveTaskDown(index){
        // array destructuring react
    }



    return(
    <>
        <div className="container">
            <h1>To Do List</h1>
                <div className="display">
                    <input 
                    onChange={handleInput} 
                    type="text" 
                    placeholder="Place Task Here"
                     value={newtasks}/>

                    <button onClick={addTask} className="add">Add Task</button>

                </div>

                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span>{task}</span>
                            <button className="remove" onClick={() => removeTask (index)}>Remove</button>
                            <button className="up"  onClick={() => moveTaskUp (index)}>Move Up</button>
                            <button className="down"  onClick={() => moveTaskDown (index)}>Move Down</button>
                        </li>
                        
                    )}
                </ol>
        </div>
    </>)
}

export default TodoList

