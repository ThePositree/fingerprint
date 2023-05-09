import axios from 'axios';
import h337 from 'heatmap.js-fixed/build/heatmap';
import keyboard from './modules/analysis/keyboard';
import getUserInfo from './modules/fingerprint/fingerprint';
import {
  setBrowserName,
  setBrowserVersion,
} from './modules/visualization/browser';
import {
  setCanvasGeometry,
  setCanvasGeometryHash,
  setCanvasText,
  setCanvasTextHash,
} from './modules/visualization/canvas';
import {
  setFontsByFontFaceSetApi,
  setFontsBySiteChannelTechnique,
} from './modules/visualization/fonts';
import {
  setGeoApproximateLocation,
  setGeoCity,
  setGeoContinentCode,
  setGeoContinentName,
  setGeoCountryCode,
  setGeoCountryName,
} from './modules/visualization/geo';
import {
  setOsCpuArchitecture,
  setOsDeviceModel,
  setOsDeviceType,
  setOsEngineName,
  setOsEngineVersion,
  setOsIp,
  setOsName,
  setOsVersion,
} from './modules/visualization/os';
import { setScreenResolution } from './modules/visualization/screen';
import {
  setTlsCipherSuites,
  setTlsCompressionSupported,
  setTlsEphemeralKeysSupported,
  setTlsSessionTicketSupported,
  setTlsVersion,
} from './modules/visualization/tls';
import { setWebGlHash, setWebGlImg } from './modules/visualization/webgl';
import './style.css';

getUserInfo().then((result) => {
  console.log(result);
  setBrowserName(result.browser.name);
  setBrowserVersion(result.browser.version);
  setCanvasGeometry(result.canvas.geometry);
  setCanvasGeometryHash(result.canvasGeometryMd5);
  setCanvasText(result.canvas.text);
  setCanvasTextHash(result.canvasTextMd5);
  setOsCpuArchitecture(result.cpu.architecture);
  setOsDeviceModel(result.device.model);
  setOsDeviceType(result.device.type);
  setOsEngineName(result.engine.name);
  setOsEngineVersion(result.engine.version);
  setFontsByFontFaceSetApi(result.fontsByNew);
  setFontsBySiteChannelTechnique(result.fontsByOld);
  setGeoCity(result.geoByOtherServices.city);
  setGeoContinentCode(result.geoByOtherServices.continentCode);
  setGeoContinentName(result.geoByOtherServices.continentName);
  setGeoCountryCode(result.geoByOtherServices.countryCode);
  setGeoCountryName(result.geoByOtherServices.countryName);
  setOsIp(result.ip);
  setOsVersion(result.os.version);
  setOsName(result.os.name);
  setScreenResolution(result.screen);
  setTlsVersion(result.tlsSslInfo.tls_version);
  setTlsCipherSuites(result.tlsSslInfo.given_cipher_suites);
  setTlsCompressionSupported(result.tlsSslInfo.tls_compression_supported);
  setTlsEphemeralKeysSupported(result.tlsSslInfo.ephemeral_keys_supported);
  setTlsSessionTicketSupported(result.tlsSslInfo.session_ticket_supported);
  setWebGlHash(result.webGLMd5);
  setWebGlImg(result.webGL);

  navigator.geolocation.getCurrentPosition(async (geoResponse) => {
    try {
      const lat = geoResponse.coords.latitude;
      const lon = geoResponse.coords.longitude;
      const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';
      const token = '9ce569b9e81fc6d0dde32c6828f889cf70c33a64';
      const body = { lat, lon };
      const { data } = await axios.post(url, body, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const [geo] = data.suggestions;
      console.log(geo.value);
      setGeoApproximateLocation(geo.value);
    } catch (error) {
      console.error(error);
    }
  });

  const heatmapConfig = {
    container: document.body,
    radius: 50,
  };

  const heatmapInstance = h337.create(heatmapConfig);

  heatmapInstance.setDataMin(1);

  heatmapInstance.setDataMax(100);
  document.addEventListener('mousemove', (event) => {
    const dataPoint = {
      x: event.offsetX,
      y: event.offsetY,
      value: 10,
    };
    heatmapInstance.addData(dataPoint);
  });
});

document.addEventListener('keyup', keyboard);
