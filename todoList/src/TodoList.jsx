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

       const updatedTask = tasks.filter((_, i) => i !== index)
       setTask(updatedTask)
    }

    function moveTaskUp(index){
        // array destructuring react
        if(index > 0 ){
        const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask)
        }
        
    }
//     if(index > 0){
//         const updatedTasks = [...tasks];
//         [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index] ]
//         setTask(updatedTasks);
//     }
// }

    function moveTaskDown(index){
        // array destructuring react
        if(index > 0 ){
            const updatedTask = [...tasks];
                [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
                setTask(updatedTask)
            }
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

