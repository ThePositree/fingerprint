/* eslint-disable no-param-reassign */
const makeCanvasContext = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return [canvas, canvas.getContext('2d')];
};

const isSupported = (canvas, context) => !!(context && canvas.toDataURL);

const renderTextImage = (canvas, context) => {
  canvas.width = 240;
  canvas.height = 60;

  context.textBaseline = 'alphabetic';
  context.fillStyle = '#f60';
  context.fillRect(100, 1, 62, 20);

  context.fillStyle = '#069';
  context.font = '11pt "Times New Roman"';
  const printedText = `Cwm fjordbank gly ${String.fromCharCode(55357, 56835) /* 😃 */}`;
  context.fillText(printedText, 2, 15);
  context.fillStyle = 'rgba(102, 204, 0, 0.2)';
  context.font = '18pt Arial';
  context.fillText(printedText, 4, 45);
};

const renderGeometryImage = (canvas, context) => {
  canvas.width = 122;
  canvas.height = 110;

  context.globalCompositeOperation = 'multiply';

  const drawingOptions = [
    ['#f2f', 40, 40],
    ['#2ff', 80, 40],
    ['#ff2', 60, 80],
  ];

  drawingOptions.forEach(([color, x, y]) => {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, 40, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
  });

  context.fillStyle = '#f9c';
  context.arc(60, 60, 60, 0, Math.PI * 2, true);
  context.arc(60, 60, 20, 0, Math.PI * 2, true);
  context.fill('evenodd');
};

const canvasToString = (canvas) => canvas.toDataURL();

export default () => {
  let geometry;
  let text;

  const [canvas, context] = makeCanvasContext();
  if (!isSupported(canvas, context)) {
    geometry = '';
    text = '';
  } else {
    renderTextImage(canvas, context);
    const textImage1 = canvasToString(canvas);
    const textImage2 = canvasToString(canvas);

    if (textImage1 !== textImage2) {
      geometry = 'unstable';
      text = 'unstable';
    } else {
      text = textImage1;

      renderGeometryImage(canvas, context);
      geometry = canvasToString(canvas);
    }
  }

  return { geometry, text };
};
