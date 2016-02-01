export const STARTED = 'STARTED',
    COMPLETED = 'COMPLETED',
    ERROR = 'ERROR',
    NOT_STARTED = 'NOT_STARTED';

let nextBandId = 5;

export const FOLLOW_BAND = 'FOLLOW_BAND';
export const followBand = (band) => {
    return {
        type: FOLLOW_BAND,
        band: band,
        id: nextBandId++
    }
};

export const FETCH_BAND_STARTED = 'FETCH_BAND_STARTED';
export const fetchBand = (band) => {
    return {
        type: FETCH_BAND_STARTED,
        band: band
    }
};

export const FETCH_BAND_COMPLETED = 'FETCH_BAND_COMPLETED';
export const fetchBandCompleted = (band) => {
    return {
        type: FETCH_BAND_COMPLETED,
        band: band
    }
};

export const fetchAllBands = (bands) => {
    return {
        type: 'FETCH_ALL_BANDS',
        bands: bands
    }
};