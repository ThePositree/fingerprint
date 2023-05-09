import _const from '../../const/const';

const testString = 'mmMwWLliI0O&1';

const textSize = '48px';

const baseFonts = ['monospace', 'sans-serif', 'serif'];

export default () => {
  const iFrame = document.createElement('iframe');

  iFrame.style.visibility = 'hidden';
  iFrame.style.position = 'absolute';
  iFrame.style.top = '0';
  iFrame.style.left = '0';

  document.body.appendChild(iFrame);

  const holder = iFrame.contentDocument.body;

  holder.style.fontSize = textSize;

  const spansContainer = document.createElement('div');

  const defaultWidth = {};
  const defaultHeight = {};

  const createSpan = (fontFamily) => {
    const span = document.createElement('span');
    const { style } = span;
    style.position = 'absolute';
    style.top = '0';
    style.left = '0';
    style.fontFamily = fontFamily;
    span.textContent = testString;
    spansContainer.appendChild(span);
    return span;
  };

  const createSpanWithFonts = (fontToDetect, baseFont) => createSpan(`'${fontToDetect}',${baseFont}`);

  const initializeBaseFontsSpans = () => baseFonts.map(createSpan);

  const initializeFontsSpans = () => {
    const spans = {};
    _const.fontList.forEach((fontName) => {
      spans[fontName] = baseFonts.map((baseFont) => createSpanWithFonts(fontName, baseFont));
    });

    return spans;
  };

  const isFontAvailable = (fontSpans) => baseFonts.some(
    (baseFont, baseFontIndex) => fontSpans[baseFontIndex].offsetWidth !== defaultWidth[baseFont]
        || fontSpans[baseFontIndex].offsetHeight !== defaultHeight[baseFont],
  );

  const baseFontsSpans = initializeBaseFontsSpans();

  const fontsSpans = initializeFontsSpans();

  holder.appendChild(spansContainer);

  baseFonts.forEach((nameFont, index) => {
    defaultWidth[nameFont] = baseFontsSpans[index].offsetWidth;
    defaultHeight[nameFont] = baseFontsSpans[index].offsetHeight;
  });

  const result = _const.fontList.filter((font) => isFontAvailable(fontsSpans[font]));

  iFrame.remove();

  return result;
};
