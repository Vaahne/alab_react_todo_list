import { useContext, useState } from "react"
import taskContext from "../context/taskContext"

export default function AddTodoItem(){
    const[formData,setFormData] = useState({
        task: ''
    })

    const {tasks , dispatch} = useContext(taskContext);

    function handleClick(e){
        e.preventDefault();
        if(formData.task == '') return
        dispatch({type : 'add', payload: formData.task });
        formData.task = "";
    }

    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }

return <>
        <input type="text" name="task" placeholder="Add task" value={formData.task} onChange={handleChange}/>
        <button onClick={()=>{
            if(formData.task != '')
                dispatch({type:'add',payload:formData.task});
            else
                alert('Task cannot be empty!!');
            }}>Add</button>
     </>
}