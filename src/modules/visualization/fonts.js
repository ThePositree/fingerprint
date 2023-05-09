const nodeFontsByFontFaceSetApi = document.querySelector(
  '.data-os__fonts-by-font-face-set-api .for-replace',
);
const nodeFontsBySiteChannelTechnique = document.querySelector(
  '.data-os__fonts-by-site-channel-technique .for-replace',
);

export const setFontsByFontFaceSetApi = (value) => {
  nodeFontsByFontFaceSetApi.textContent = Array.from(value).join(' ,');
  return nodeFontsByFontFaceSetApi.textContent;
};

export const setFontsBySiteChannelTechnique = (value) => {
  nodeFontsBySiteChannelTechnique.textContent = value.join(' ,');
  return nodeFontsBySiteChannelTechnique.textContent;
};
