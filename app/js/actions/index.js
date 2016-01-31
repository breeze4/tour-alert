

let nextBandId = 4;

export const followBand = (band) => {
  return {
    type: 'FOLLOW_BAND',
    band: band,
    id: nextBandId++
  }
};
