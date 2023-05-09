import UAParser from 'ua-parser-js';
import axios from 'axios';
import md5 from 'md5';
import getCanvasFingerprint from './canvasFingerprint';
import getFontsByOld from './detectFontOld';
import getFontsByNew from './detectFontNew';
import webGLFingerprint from './webGLFingerprint';
import getIpInfo from './ipInfoByOtherServices';
import getTlsSslInfo from './tlsSslInfo';

export default async () => {
  const { width, height } = screen;
  const fontsByOld = getFontsByOld();
  const fontsByNew = await getFontsByNew();
  const canvas = getCanvasFingerprint();
  const canvasGeometryMd5 = md5(canvas.geometry);
  const canvasTextMd5 = md5(canvas.text);
  const webGL = webGLFingerprint();
  const webGLMd5 = md5(webGL);
  const ipInfo = await getIpInfo();
  const ip = ipInfo.ipAddress;
  const tlsSslInfo = await getTlsSslInfo();
  const geoByOtherServices = {
    city: ipInfo.city,
    continentCode: ipInfo.continentCode,
    continentName: ipInfo.continentName,
    countryCode: ipInfo.countryCode,
    countryName: ipInfo.countryName,
    stateProv: ipInfo.stateProv,
  };
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
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  });

  const result = {
    ...new UAParser().getResult(),
    screen: { width, height },
    fontsByOld,
    fontsByNew,
    ip,
    geoByOtherServices,
    tlsSslInfo,
    webGL,
    webGLMd5,
    canvas,
    canvasGeometryMd5,
    canvasTextMd5,
  };

  return result;
};
