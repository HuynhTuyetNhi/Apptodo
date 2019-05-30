
var initialState = [];

const Task = (state = initialState, action) => {
    let json;
    switch (action.type) {
        case 'INSERT_TASK':
            console.log(action.toDo);
            state.push(action.toDo);
            console.log(state);
        case 'LIST_TASK':
            json = action.data;
            console.log(json);
            state = json;
            console.log(state);
            return state;
        case "DELETE_TASK":
            console.log(state[0]);
            console.log(action.data);
            let arraynew = state[0];
            let index = arraynew.findIndex(task => task.idTask === action.data[0]);
            arraynew.splice(index,1);
            console.log(arraynew);
            state = arraynew;
            console.log(state);
            return state;

        default:
            return state;


    }

}
export default Task;




