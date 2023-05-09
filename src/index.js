import h337 from 'heatmap.js-fixed/build/heatmap';
import keyboard from './modules/analysis/keyboard';
import getUserInfo from './modules/fingerprint/fingerprint';

getUserInfo().then((result) => console.log(result));
const heatmapConfig = {
  container: document.getElementById('heatmap'),
  radius: 50,
};

const heatmapInstance = h337.create(heatmapConfig);

heatmapInstance.setDataMin(1);

heatmapInstance.setDataMax(100);

document.addEventListener('keyup', keyboard);

document.addEventListener('mousemove', (event) => {
  const dataPoint = {
    x: event.clientX,
    y: event.clientY,
    value: 10,
  };
  heatmapInstance.addData(dataPoint);
});
