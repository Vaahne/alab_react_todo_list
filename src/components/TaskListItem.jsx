import { useEffect, useState } from "react";
import { useContext } from "react";
import taskContext from "../context/taskContext";

export default function EditDeleteTask({task}){

    const {tasks , dispatch} = useContext(taskContext);

    const[complete,setComplete] = useState(task.completed);

    function handleChange(){
        setComplete(complete => !complete);
    }

    return <>
        <li>
            <input type="checkbox" onChange={handleChange} checked={complete}/>
            {task.task}
            <button name="edit" onClick={()=>{
                dispatch({type: 'edit',payload: task.id})
            }} >Edit</button>
            <button name="delete" disabled={!complete} onClick={()=>{
                dispatch({type: 'delete', payload: task.id})
            }}>Delete</button>
        </li>
    </>
}