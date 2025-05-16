import taskContext from "../context/taskContext";
import EditDeleteTask from "./TaskListItem";
import { useContext, useEffect } from "react";

export default function TaskContainer(){

    const {tasks,dispatch} = useContext(taskContext);

    // console.log("all tasks ",tasks);

    useEffect(()=>{
         
    },[]);

    const render = tasks.map((task)=>{
        console.log("task is " , task)
        return <EditDeleteTask key={task.id} task={task} />
    
    })


    return <>
        <ul>
            {render}
        </ul>
    </>
}