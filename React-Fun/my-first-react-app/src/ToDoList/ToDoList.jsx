import { useState } from "react";
import style from './ToDoList.module.css'

function ToDo(){
    const [tasks, taskSetter] = useState(["Make a PR and leave a comment"])
    const [newTask, newTaskSetter] = useState("");

    function taskAdder(){
        if(newTask.trim() !== ""){
            taskSetter(t => [...t, newTask]);
        }
        else{
            alert("Please type a task before adding it")
        }

    }

    function newTaskChangeHandler(e){
        newTaskSetter(t => e.target.value)
    }

    function taskRemover(index){
        taskSetter(tasks.filter((_, i) => i !== index));
    }

    return(
        <div className={style.mainContainer}>
            <h1>To-Do-List</h1>
            <input type="text" placeholder="Go to" className={style.taskInput} id="taskInput" value={newTask} onChange={newTaskChangeHandler}/>
            <span><button className={style.addButton} onClick={taskAdder}>Add</button></span><br />
            {tasks.map((task, index) => <div key={index} className={style.taskContainer}>
                                           <p>{task}</p>
                                           <div className={style.controlContainer}>
                                                <button className={style.deleteButton} onClick={() => taskRemover(index)}>Delete</button>
                                                <span className={style.movers}>👆</span>
                                                <span className={style.movers}>👇</span>
                                            </div>
                                        </div>)}
        </div>
    );
}
export default ToDo