// Converts numeric degrees to radians
const toRad = (value) => {
  return (value * Math.PI) / 180;
};

const calcDistanceKM = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // km
  const degLat = toRad(lat2 - lat1);
  const degLon = toRad(lon2 - lon1);
  const lat1Rad = toRad(lat1);
  const lat2Rad = toRad(lat2);

  const a =
    Math.sin(degLat / 2) * Math.sin(degLat / 2) +
    Math.sin(degLon / 2) *
      Math.sin(degLon / 2) *
      Math.cos(lat1Rad) *
      Math.cos(lat2Rad);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

// fabricated quote pricing function to generate data
calcQuotePrice = (distance, transportCost, numPeople) => {
  const costPerKM = 0.25;
  const singleTicketPrice = distance * costPerKM;
  const totalAirfare = singleTicketPrice * numPeople;
  const totalTransportPrice = transportCost * numPeople;

  return totalAirfare + totalTransportPrice;
};

module.exports = { calcDistanceKM, calcQuotePrice };
