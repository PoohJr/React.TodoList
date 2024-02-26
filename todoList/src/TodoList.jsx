import React, {useState, useEffect} from "react";

function TodoList(){

    const [tasks, setTask] = useState(["Hello", "hi"]);
    const [newtasks, setNewTasks] = useState("")

    function handleInput(e){
        setNewTasks(e.target.value)
        
        

    }

    function addTask(){
        setTask()
        setNewTasks("")
    }

    function removeTask(index){
        
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

                    <button>Add Task</button>

                </div>

                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span>{task}</span>
                            <button onClick={() => removeTask (index)}>Remove</button>
                            <button onClick={() => moveTaskUp (index)}>Move Up</button>
                            <button onClick={() => moveTaskDown (index)}>Move Down</button>
                        </li>
                        
                    )}
                </ol>
        </div>
    </>)
}

export default TodoList

