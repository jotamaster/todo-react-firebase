import * as firebase from 'firebase/app'
import 'firebase/database'

import {config} from './key'

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

//REFERENCIAS
export const  todosRef = databaseRef.child('todos');

export const peticionTodos = todosRef.on('value', snapshot =>{

        return console.log(snapshot.val())
})

