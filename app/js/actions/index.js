

let nextBandId = 5;

export const followBand = (band) => {
  return {
    type: 'FOLLOW_BAND',
    band: band,
    id: nextBandId++
  }
};

export const fetchBands = (bands) => {
  return {
    type: 'FETCH_BANDS',
    bands: bands
  }
};
