
import {todosRef} from '../../firebase/firebase'
import '@firebase/database';


export const addToDo = (todos) =>{
    return{
        type:"ADD_TODOS",
        payload:{
            todos
        }
    }
}

export const deleteToDo = completeToDoId => async dispatch => {
    todosRef.child(completeToDoId).remove();
  };
  
export const fetchToDos = () => async dispatch => {
    todosRef.on("value", snapshot => {
      dispatch({
        type: "FETCH_TODOS",
        payload: snapshot.val()
      });
    });
  };

