

let nextBandId = 0;


export const followBand = (band) => {
  return {
    type: 'FOLLOW_BAND',
    band: band,
    id: nextBandId++
  }
};

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
