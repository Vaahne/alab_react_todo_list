import { useState,useContext } from "react";
import taskContext from "../context/taskContext";

export default function EditTask({task,setToggle}){
    const[formData,setFormData] = useState({
        task: task.task,
        id: task.id,
        completed: task.completed
    })
    const {tasks , dispatch} = useContext(taskContext);

    function handleChange(e){
        console.log(e.target.type);
        if(e.target.type == "checkbox")
            setFormData({...formData, [e.target.name]:e.target.checked})
        else
            setFormData({...formData, [e.target.name]:e.target.value})
    }
    return <>
        <li>
            <input type="checkbox" checked={formData.completed} name="completed" onChange={handleChange}/>
            <input type="text" value={formData.task} name="task" onChange={handleChange}/>
            <button onClick={()=>{
                if(formData.task == '')
                    alert('Task cannot be empty');
                else{
                    dispatch({type:'save',payload:formData});
                    setToggle((t)=>!t)
                }
            }} className="save">Save</button>
        </li>
    </>
}