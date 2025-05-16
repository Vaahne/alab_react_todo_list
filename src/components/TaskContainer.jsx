import taskContext from "../context/taskContext";
import TaskListItem from "./TaskListItem";
import { useContext, useEffect } from "react";

export default function TaskContainer(){

    const {tasks,dispatch} = useContext(taskContext);

    const render = tasks.map((task)=>{
        console.log("task is " , task);
        return <TaskListItem key={task.id} task={task} />
    });

    return <>
        <ul>
            {render}
        </ul>
    </>
}