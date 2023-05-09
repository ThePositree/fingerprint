const nodeWebGlImg = document.querySelector(
  '.data-webgl__image-url .image-for-replace',
);

const nodeWebGlHash = document.querySelector('.data-webgl__hash .for-replace');

export const setWebGlImg = (value) => {
  nodeWebGlImg.setAttribute('src', value);
  return nodeWebGlImg.getAttribute('src');
};

export const setWebGlHash = (value) => {
  nodeWebGlHash.textContent = value;
  return nodeWebGlHash.textContent;
};
