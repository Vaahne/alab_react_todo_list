import { useReducer  } from 'react';
import existingTasks from './utilities/tasks';
import './App.css';
import HeadingLabel from './components/HeadingLabel';
import AddTodoItem from './components/AddTodoItem';
import TaskContainer from './components/TaskContainer';
import taskContext from './context/taskContext';
import taskReducer from './reducer/taskReducer';

function App() {
   
    const [tasks,dispatch] = useReducer(taskReducer,existingTasks);

  return (
    <>
      <HeadingLabel/>
      <taskContext.Provider value={{tasks,dispatch}}>
          <AddTodoItem/>
          <TaskContainer/>  
      </taskContext.Provider>
    </>
  )
}

export default App