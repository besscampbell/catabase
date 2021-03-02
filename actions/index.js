import * as c from './ActionTypes';

export const addCat = (catIndex) => {
  // const { name, coloring, id } = cat;
  return {
    type: c.ADD_CAT,
    payload: catIndex,
  }
}