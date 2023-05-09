const nodeGeoCity = document.querySelector('.data-geo__city .for-replace');
const nodeGeoContinentCode = document.querySelector(
  '.data-geo__continent-code .for-replace',
);
const nodeGeoContinentName = document.querySelector(
  '.data-geo__continent-name .for-replace',
);
const nodeGeoCountryName = document.querySelector(
  '.data-geo__country-name .for-replace',
);
const nodeGeoCountryCode = document.querySelector(
  '.data-geo__country-code .for-replace',
);
const nodeGeoApproximateLocation = document.querySelector(
  '.data-geo__approximate-location .for-replace',
);

export const setGeoCity = (value) => {
  nodeGeoCity.textContent = value;
  return nodeGeoCity.textContent;
};
export const setGeoContinentCode = (value) => {
  nodeGeoContinentCode.textContent = value;
  return nodeGeoContinentCode.textContent;
};
export const setGeoContinentName = (value) => {
  nodeGeoContinentName.textContent = value;
  return nodeGeoContinentName.textContent;
};
export const setGeoCountryName = (value) => {
  nodeGeoCountryName.textContent = value;
  return nodeGeoCountryName.textContent;
};
export const setGeoCountryCode = (value) => {
  nodeGeoCountryCode.textContent = value;
  return nodeGeoCountryCode.textContent;
};
export const setGeoApproximateLocation = (value) => {
  nodeGeoApproximateLocation.textContent = value;
  return nodeGeoApproximateLocation.textContent;
};
