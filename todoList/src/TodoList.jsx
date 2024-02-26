import React, {useState, useEffect} from "react";

function TodoList(){

    const [tasks, setTask] = useState([]);
    const [newtasks, setNewTasks] = useState("")

    function handleInput(){

    }

    function addTask(){
        setTask()
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
                    <ol>
                        
                    </ol>
                    <input type="text" placeholder="Place Task Here" />
                    <button>Add Task</button>
                </div>
        </div>
    </>)
}

export default TodoList