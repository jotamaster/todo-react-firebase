
import _ from 'lodash'
import {todosRef} from '../../firebase/firebase'



const initialState= {
    registers : [],
    todos: [] 
}

export default (state = _.cloneDeep(initialState), action) => {
    const { type,payload } = action
    switch (type) {
       case "ADD_TODOS": 
        console.log(payload.todos);
        todosRef.push().set(
            {title : payload.todos[0]});
        
        return  _.cloneDeep(state);
       
       case "DELETE_TODO":
      console.log('jojo')
            return  _.cloneDeep(state);

            case "FETCH_TODOS":
                state.todos = payload
            return  _.cloneDeep(state);       
     
        
        

        default:
            return state;
    }
}