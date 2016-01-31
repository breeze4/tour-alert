import { createStore, combineReducers } from 'redux';

import moment from 'moment';

const INITIAL_STATE = [{
  band: 'Tool',
  id: '1',
  nextDate: moment().format('YYYY MM DD'),
  link: 'http://toolband.com/tour/'
},{
  band: 'Swallow the Sun',
  id: '2',
  nextDate: moment().format('YYYY MM DD'),
  link: 'http://swallowthesun.net/#Tour'
},{
  band: 'The Hotelier',
  id: '3',
  nextDate: null,
  link: 'http://thehotelier.tumblr.com/tour'
}];

const band = (state, action) => {
  switch (action.type) {
    case 'FOLLOW_BAND':
      return {
        band: action.band,
        id: action.id
      };
    default:
      return state;
  }
};

const bands = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FOLLOW_BAND':
      return [
        ...state,
        band(undefined, action)
      ];
    default:
      return state;
  }
};

const tourAlertApp = combineReducers({
  bands
});

export default createStore(tourAlertApp)