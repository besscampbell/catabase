import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import * as c from '../actions/ActionTypes';

c.INITIAL_STATE = {
  current: [],
  possible: [
    'Bobott',
    'Zahara',
    'Mister Meowmers',
  ],
};

const catsReducer = (state = {}, action) => {
  const { catName, catColoring, id } = action;
  switch (action.type) {
    case c.ADD_CAT:
      return Object.assign(
        {},
        state,
        {
          [id]: {
            catName,
            catColoring,
            id
          }
        });
    default:
      return state
  }
};

export default combineReducers({
  cats: catsReducer,
  firestore: firestoreReducer
});