import fetch from 'whatwg-fetch';
import moment from 'moment';
import { createStore, combineReducers } from 'redux';
import { NOT_STARTED, STARTED, COMPLETED, ERROR,
    FOLLOW_BAND, FETCH_BAND_STARTED, FETCH_BAND_COMPLETED} from '../actions';

const CURRENT_DATE = moment().format('YYYY MM DD');
const INITIAL_STATE = {
    bands: [{
        band: 'Tool',
        id: '1',
        nextDate: CURRENT_DATE,
        link: 'http://toolband.com/tour/'
    }, {
        band: 'Swallow the Sun',
        id: '2',
        nextDate: CURRENT_DATE,
        link: 'http://swallowthesun.net/#Tour'
    }, {
        band: 'The Hotelier',
        id: '3',
        nextDate: null,
        link: 'http://thehotelier.tumblr.com/tour'
    }, {
        band: 'Avantasia',
        id: '4',
        nextDate: null,
        link: null
    }],
    followStatus: NOT_STARTED
};

function fakeFetch(request, callback) {
    return callback(request);
}

const followBandCompletedFn = (data) => {
    let band = data.band;
    return {
        band: band.band,
        id: band.id,
        nextDate: band.nextDate,
        link: band.link
    };
};

const band = (state, action) => {
    switch (action.type) {
        case FOLLOW_BAND:
            console.log('make HTTP request');
            fakeFetch(followBandCompletedFn({
                band: action.band,
                id: action.id,
                nextDate: CURRENT_DATE,
                link: null
            }));
            return state;
        case FETCH_BAND_STARTED:
            console.log('make HTTP request');
            fakeFetch(followBandCompletedFn({
                band: action.band,
                id: action.id,
                nextDate: CURRENT_DATE,
                link: null
            }));
            return state;
        default:
            return state;
    }
};

const followedBands = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FOLLOW_BAND:
            return {
                bands: [
                    ...state.bands,
                    band(undefined, action)
                ],
                state
            };
        default:
            return state;
    }
};

const tourAlertApp = combineReducers({
    followedBands
});
export default createStore(tourAlertApp)