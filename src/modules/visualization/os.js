const nodeOsName = document.querySelector('.data-os__name .for-replace');

const nodeOsVersion = document.querySelector('.data-os__version .for-replace');

const nodeOsCpuArchitecture = document.querySelector(
  '.data-os__cpu-architecture .for-replace',
);

const nodeOsDeviceModel = document.querySelector(
  '.data-os__device-model .for-replace',
);
const nodeOsDeviceType = document.querySelector(
  '.data-os__device-type .for-replace',
);
const nodeOsEngineName = document.querySelector(
  '.data-os__engine-name .for-replace',
);
const nodeOsEngineVersion = document.querySelector(
  '.data-os__engine-version .for-replace',
);
const nodeOsIp = document.querySelector('.data-os__ip .for-replace');

export const setOsName = (value) => {
  nodeOsName.textContent = value;
  return nodeOsName.textContent;
};

export const setOsVersion = (value) => {
  nodeOsVersion.textContent = value;
  return nodeOsVersion.textContent;
};

export const setOsCpuArchitecture = (value) => {
  nodeOsCpuArchitecture.textContent = value;
  return nodeOsCpuArchitecture.textContent;
};

export const setOsDeviceModel = (value) => {
  nodeOsDeviceModel.textContent = value;
  return nodeOsDeviceModel.textContent;
};
export const setOsDeviceType = (value) => {
  nodeOsDeviceType.textContent = value;
  return nodeOsDeviceType.textContent;
};
export const setOsEngineName = (value) => {
  nodeOsEngineName.textContent = value;
  return nodeOsEngineName.textContent;
};
export const setOsEngineVersion = (value) => {
  nodeOsEngineVersion.textContent = value;
  return nodeOsEngineVersion.textContent;
};
export const setOsIp = (value) => {
  nodeOsIp.textContent = value;
  return nodeOsIp.textContent;
};
