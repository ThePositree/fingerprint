import _const from '../../const/const';

export default async () => {
  await document.fonts.ready;
  const fontList = new Set(_const.fontList);
  const fontAvailable = new Set();
  fontList.forEach((font) => {
    if (document.fonts.check(`12px "${font}"`)) {
      fontAvailable.add(font);
    }
  });
  return fontAvailable;
};
