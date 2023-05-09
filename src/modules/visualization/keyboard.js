const nodeKeyboardAverageFrequency = document.querySelector(
  '.data-keyboard__average-frequency .for-replace',
);
const nodeKeyboardCounterSymbols = document.querySelector(
  '.data-keyboard__counter-symbols .for-replace',
);
const nodeKeyboardKeys = document.querySelector(
  '.data-keyboard__keys .for-replace',
);
const nodeKeyboardLastThreeSymbols = document.querySelector(
  '.data-keyboard__last-three-symbols .for-replace',
);
const nodeKeyboardSymbolPerMinutes = document.querySelector(
  '.data-keyboard__symbol-per-minutes .for-replace',
);
const nodeKeyboardSymbolPerSeconds = document.querySelector(
  '.data-keyboard__symbol-per-seconds .for-replace',
);
const nodeKeyboardTimeSinceLastPress = document.querySelector(
  '.data-keyboard__time-since-last-press .for-replace',
);

export const setKeyboardAverageFrequency = (value) => {
  nodeKeyboardAverageFrequency.textContent = value;
  return nodeKeyboardAverageFrequency.textContent;
};

export const setKeyboardCounterSymbols = (value) => {
  nodeKeyboardCounterSymbols.textContent = value;
  return nodeKeyboardCounterSymbols.textContent;
};
export const setKeyboardKeys = (value) => {
  nodeKeyboardKeys.innerHTML = '';
  Object.entries(value).forEach(([key, number]) => {
    const li = document.createElement('li');
    li.textContent = `клавиша: ${key} была нажата: ${number} раз`;
    nodeKeyboardKeys.appendChild(li);
  });
  return nodeKeyboardKeys.innerHTML;
};
export const setKeyboardLastThreeSymbols = (value) => {
  const lastThreeSymbols = value.join(' ');
  nodeKeyboardLastThreeSymbols.textContent = lastThreeSymbols;
  return nodeKeyboardLastThreeSymbols.textContent;
};
export const setKeyboardSymbolPerMinutes = (value) => {
  nodeKeyboardSymbolPerMinutes.textContent = value;
  return nodeKeyboardSymbolPerMinutes.textContent;
};
export const setKeyboardSymbolPerSeconds = (value) => {
  nodeKeyboardSymbolPerSeconds.textContent = value;
  return nodeKeyboardSymbolPerSeconds.textContent;
};
export const setKeyboardTimeSinceLastPress = (value) => {
  nodeKeyboardTimeSinceLastPress.textContent = new Date(value);
  return nodeKeyboardTimeSinceLastPress.textContent;
};
