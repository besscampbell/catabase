import { combineReducers } from 'redux';
import * as c from '../actions/ActionTypes';

c.INITIAL_STATE = {
  current: [],
  possible: [
    'Bobott',
    'Zahara',
    'Mister Meowmers',
  ],
};

const catsReducer = (state = c.INITIAL_STATE, action) => {
  switch (action.type) {
    case c.ADD_CAT:
      const {
        current, 
        possible,
      } = state;

      const addedCat = possible.splice(action.payload, 1);
      current.push(addedCat);
      const newState = { current, possible };
      return newState;
    default:
      return state
  }
};

export default combineReducers({
  cats: catsReducer
});