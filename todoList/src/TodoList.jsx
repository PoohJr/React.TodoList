import React, {useState, useEffect} from "react";

function TodoList(){

    const [tasks, setTask] = useState([]);
    const [newtasks, setNewTasks] = useState("")

    function handleInput(){

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
                <div onChange={tasks.map( task, index) } className="display">
                    <input type="text" placeholder="Place Task Here" />
                    <button>Add Task</button>
                </div>
        </div>
    </>)
}

export default TodoList