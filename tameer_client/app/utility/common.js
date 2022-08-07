import RNFetchBlob from 'rn-fetch-blob';
// import { createMessage } from "../localDatabase/DbHelper";
import {sendRequestForNewMessages} from './serverCalls';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';
// import { checkWritePermission } from "./permissions";

const {config, fs} = RNFetchBlob;
export const getExtention = filename => {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
};

export const getImageDirectory = () => {
  let pictureDir = fs.dirs.PictureDir + '/TextMyRide Images';
  fs.exists(pictureDir).then(exists => {
    if (!exists) {
      fs.mkdir(pictureDir);
    }
  });
  return pictureDir;
};

export const createNewImagePath = extention => {
  return getImageDirectory() + getNewFileName(extention);
};

export const getNewFileName = extention => {
  let date = new Date();
  return (
    'image_' + Math.floor(date.getTime() + date.getSeconds() / 2) + extention
  );
};

export const downloadImage = async image_URL => {
  let ext = getExtention(image_URL);
  ext = '.' + ext;
  let options = {
    path: createNewImagePath(ext),
    description: 'Image',
  };
  return config(options).fetch('GET', image_URL);
};

export const saveImageToGallery = async (fileUri, imageBase64) => {
  checkWritePermission();
  let ext = getExtention(fileUri);
  ext = '.' + ext;
  let fileName = getNewFileName(ext);
  let filePath = getImageDirectory() + '/' + fileName;
  await fs.createFile(filePath, imageBase64, 'base64');
  filePath = 'file:///' + filePath;
  return {uri: filePath, fileName};
};

export const getNewDate = () => {
  let date_ob = new Date();
  let date = ('0' + date_ob.getDate()).slice(-2);
  let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  return (
    year +
    '-' +
    month +
    '-' +
    date +
    ' ' +
    hours +
    ':' +
    minutes +
    ':' +
    seconds
  );
};

export function formateDate(mDate) {
  var dateFormat = require('dateformat');
  let current = getNewDate();
  let split = String(mDate).split(' ');
  let date = split[0].split('-');
  let time = split[1].split(':');
  let d = new Date();
  d.setFullYear(date[0]);
  d.setMonth(date[1]);
  d.setDate(date[2]);
  d.setHours(time[0]);
  d.setMinutes(time[1]);
  d.setSeconds(time[2]);
  if (
    parseInt(String(mDate).split(' ')[0].split('-')[2]) ==
    parseInt(String(current).split(' ')[0].split('-')[2])
  ) {
    return dateFormat(d, 'shortTime');
  } else {
    return dateFormat(d, 'dd mmm');
  }
}

export const alert = (
  title,
  message,
  positiveBtnText,
  negativeBtnText,
  positiveBtnAction,
  negativeBtnAction,
) =>
  Alert.alert(title, message, [
    {
      text: negativeBtnText == '' ? '' : 'Cancel',
      onPress: () => (negativeBtnAction ? negativeBtnAction : console.log('')),
      style: 'cancel',
    },
    {
      text: positiveBtnText ? positiveBtnText : 'OK',
      onPress: () =>
        positiveBtnAction ? positiveBtnAction() : console.log('OK'),
    },
  ]);

export async function hasNetworkConn() {
  const state = await NetInfo.fetch();
  return state.isConnected;
}

export const StageFlags = {
  WELLCOME_STAGE: '0',
  REGISTER_STAGE: '1',
  VERIFIY_STAGE: '2',
  HOME_STAGE: '3',
};
export const Screens = {
  VARIFY: 'VerifyScreen',
  HOME: 'home',
  WELCOME: 'WelcomeScreen',
  NUMBER_PLATE: 'NumberPlatesScreen',
  REGISTER: 'RegisterScreen',
  CONTACT: 'ContactScreen',
  MESSAGING: 'MessageScreen',
  ADD_CAR: 'AddCarScreen',
};
