export default function taskReducer(state,action){

    switch (action.type){
        case 'add' :    let id = 1;
                        state.forEach(s=>{
                            if(Number(s.id) > id)
                                id = Number(s.id);
                        })
                        id = id+1;
                        return [{id:id,task: action.payload, completed: false},...state ];
        case 'delete':  console.log("delete confirmation");
                        return state.filter(s=>s.id!=action.payload);
                        // return state;
        case 'save':    console.log("reducer ",action.payload); 
                        
                       return state.map(task=>
                        (task.id == action.payload.id)? 
                        {...task, task : action.payload.task,completed:action.payload.completed} 
                        :
                        task
                        );
        default : return state;
    }
}