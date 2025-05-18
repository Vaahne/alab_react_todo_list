import { useEffect, useState } from "react";
import { useContext } from "react";
import taskContext from "../context/taskContext";
import EditTask from "./EditTask";

export default function TaskListItem({task}){
    const[toggle,setToggle] = useState(true);

    const {tasks , dispatch} = useContext(taskContext);

    function handleChange(){
         dispatch({type: 'save',payload:{...task, completed:!task.completed}});
    }

    return <>
    {toggle ? 
        (<li>
            <input type="checkbox" onChange={handleChange} checked={task.completed}/>
            {task.task}
            <button name="edit" onClick={ () => setToggle((t)=>!t)} className="edit">Edit</button>
            <button name="delete" disabled={!task.completed} onClick={()=>{
                if(window.confirm("Are you sure , you want to delete?"))
                    dispatch({type: 'delete', payload: task.id})
            }} className="delete">Delete</button>
        </li>
        ) : (
        <EditTask  task={task} setToggle={setToggle} /> )
    }
    </>
}