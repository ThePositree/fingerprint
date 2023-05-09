const nodeCanvasText = document.querySelector(
  '.data-canvas__text .image-for-replace',
);

const nodeCanvasTextHash = document.querySelector(
  '.data-canvas__text-hash .for-replace',
);

const nodeCanvasGeometry = document.querySelector(
  '.data-canvas__geometry .image-for-replace',
);

const nodeCanvasGeometryHash = document.querySelector(
  '.data-canvas__geometry-hash .for-replace',
);

export const setCanvasText = (value) => {
  nodeCanvasText.setAttribute('src', value);
  return nodeCanvasText.getAttribute('src');
};

export const setCanvasTextHash = (value) => {
  nodeCanvasTextHash.textContent = value;
  return nodeCanvasTextHash.textContent;
};

export const setCanvasGeometry = (value) => {
  nodeCanvasGeometry.setAttribute('src', value);
  return nodeCanvasGeometry.getAttribute('src');
};

export const setCanvasGeometryHash = (value) => {
  nodeCanvasGeometryHash.textContent = value;
  return nodeCanvasGeometryHash.textContent;
};
