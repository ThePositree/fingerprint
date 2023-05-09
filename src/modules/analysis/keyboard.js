export const keyboardInfo = {
  counterSymbols: 0,
  lastThreeSymbols: [],
  secondsHavePassed: 0,
  symbolPerSeconds: 0,
  symbolPerMinutes: 0,
  startDate: Date.now(),
  keys: {},
  timeSinceLastPress: 0,
  periodicity: [],
  averageFrequency: 0,
};

export default (event) => {
  keyboardInfo.counterSymbols += 1;
  keyboardInfo.secondsHavePassed = Math.floor(
    (Date.now() - keyboardInfo.startDate) / 1000,
  );
  if (keyboardInfo.timeSinceLastPress) {
    keyboardInfo.periodicity.push(
      (Date.now() - keyboardInfo.timeSinceLastPress) / 1000,
    );
  }
  if (keyboardInfo.periodicity.length >= 2) {
    keyboardInfo.averageFrequency = keyboardInfo.secondsHavePassed / keyboardInfo.counterSymbols;
  }
  keyboardInfo.timeSinceLastPress = Date.now();
  const symbolPerSecondsWithoutRounding = keyboardInfo.counterSymbols / keyboardInfo.secondsHavePassed;
  keyboardInfo.symbolPerSeconds = Math.floor(symbolPerSecondsWithoutRounding);
  keyboardInfo.symbolPerMinutes = Math.floor(
    symbolPerSecondsWithoutRounding * 60,
  );
  if (keyboardInfo.symbolPerSeconds === Infinity) keyboardInfo.symbolPerSeconds = 0;
  keyboardInfo.lastThreeSymbols.push(event.key);
  if (keyboardInfo.lastThreeSymbols.length >= 4) keyboardInfo.lastThreeSymbols.shift();
  if (!keyboardInfo.keys[event.code]) {
    keyboardInfo.keys[event.code] = 1;
  } else {
    keyboardInfo.keys[event.code] += 1;
  }
};
