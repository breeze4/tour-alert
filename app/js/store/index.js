import { createStore, combineReducers } from 'redux';

const band = (state, action) => {
  switch (action.type) {
    case 'FOLLOW_BAND':
      return {
        band: action.band,
        id: action.id
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const bands = (state = [], action) => {
  switch (action.type) {
    case 'FOLLOW_BAND':
      return [
        ...state,
        band(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
          band(t, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const tourAlertApp = combineReducers({
  bands,
  visibilityFilter
});

export default createStore(tourAlertApp)