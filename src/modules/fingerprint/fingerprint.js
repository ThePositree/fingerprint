import UAParser from 'ua-parser-js';
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
