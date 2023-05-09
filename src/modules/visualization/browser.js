const nodeBrowserName = document.querySelector(
  '.data-browser__name .for-replace',
);
const nodeBrowserVersion = document.querySelector(
  '.data-browser__version .for-replace',
);

export const setBrowserName = (value) => {
  nodeBrowserName.textContent = value;
  return nodeBrowserName.textContent;
};

export const setBrowserVersion = (value) => {
  nodeBrowserVersion.textContent = value;
  return nodeBrowserVersion.textContent;
};
