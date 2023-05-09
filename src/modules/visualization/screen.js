const nodeScreenResolution = document.querySelector(
  '.data-screen__resolution .for-replace',
);

// eslint-disable-next-line import/prefer-default-export
export const setScreenResolution = (value) => {
  nodeScreenResolution.textContent = `${value.width}x${value.height}`;
  return nodeScreenResolution.textContent;
};
