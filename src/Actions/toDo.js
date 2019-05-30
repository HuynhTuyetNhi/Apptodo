import { todosRef } from '../Config/fbConfig'
import 'firebase/database';
import firebase from 'firebase/app';
import { databaseRef } from '../Config/fbConfig';
import { database } from '../Config/fbConfig';

export const insertToDo = newToDo => async dispatch => {
  console.log(newToDo);
  todosRef.push().set(newToDo);
};
export const completeToDo = completeToDo => async dispatch => {
  let x = todosRef.child('One').child('nameTask');
  x.remove();
  var path = x.toString();
  console.log(path);
};
export const listTask = () => dispatch => {
  todosRef.on("value", snapshot => {

    console.log(snapshot);
    console.log(snapshot.val());
    let arraynew = [];
    arraynew.push(snapshot.val());

    dispatch({
      type: 'LIST_TASK',
      data: arraynew
    })
  })
}
