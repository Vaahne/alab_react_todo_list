export default function taskReducer(state,action){
    
    switch (action.type){
        case 'add' :    let id = 1;
                        state.forEach(s=>{
                            if(Number(s.id) > id)
                                id = Number(s.id);
                        })
                        id = id+1;
                        return [{id:id,task: action.payload, completed: false},...state ];
        case 'edit':   console.log(action.payload);
                        return state;
        case 'delete':  let confirm = window.confirm("Are you sure , you want to delete?");
                        if(confirm)
                            return state.filter(s=>s.id!=action.payload);
                        return state;
        case 'save':    return state;
        default : return state;
    }
}