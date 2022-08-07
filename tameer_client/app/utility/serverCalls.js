import RNFetchBlob from 'rn-fetch-blob';
import config from '../config/config';
import {
  getAllOfflineMessages,
  Message,
  updateOfflineMessagePushToServer,
  updateOnlineMessagePushToServer,
} from '../localDatabase/DbHelper';
import {getUser} from './AsyncStorageFunc';
import {alert, getExtention, getNewFileName, hasNetworkConn} from './common';
import {Buffer} from 'buffer';
global.Buffer = Buffer;
const userPassword = 'ws_user' + ':' + '123';
const userPasswordEncoded =
  'Basic ' + Buffer.from(userPassword).toString('base64');

const requestHeaders = {
  Authorization: userPasswordEncoded,
  'tmr-app-id': '4g9f1be0-228e-45a2-930e-9a3143152899',
  'tmr-app-vr': 'v2',
  'Content-Type': 'application/x-www-form-urlencoded',
  charset: 'UTF-8',
};

export const sendRequestForNewMessages = async () => {
  const {mNumber, regId} = await getUser();
  if (regId == null) {
    return;
  }
  const param =
    'mobileNum=' +
    encodeURIComponent(mNumber) +
    '&regId=' +
    encodeURIComponent(regId);
  const url = config.server + 'fetchmessages.jsp?' + param;
  return fetch(url, {
    method: 'POST',
    headers: requestHeaders,
  })
    .then(data => data.json())
    .then(response => {
      return response.MESSAGES;
    })
    .catch(e => {
      console.log(e);
      return [];
    });
};

export const reportMessageRequest = async (regId, messageId) => {
  if (regId == null) {
    return;
  }
  const param =
    'mid=' +
    encodeURIComponent(messageId) +
    '&regId=' +
    encodeURIComponent(regId);
  const url = config.server + 'reportmessage.jsp?' + param;
  return fetch(url, {
    method: 'POST',
    headers: requestHeaders,
  })
    .then(data => data.json())
    .then(response => {
      return response;
    })
    .catch(e => {
      console.log(e);
      return [];
    });
};

export const sendMessagesToServer = async (messagesList, cCode, regId) => {
  let obj = {};
  let carIdArray = [];
  let carNumberArray = [];
  let messageArray = [];
  let messageIdArray = [];
  let carIdFrom = [];
  let types = [];
  let onlineMessageData = '';
  let parameters = [];
  messagesList.map(message => {
    carNumberArray.push(message[Message.COLUMN_SEND_TO]);
    carIdArray.push(message[Message.VEHICLE_ID_TO] + '');
    messageIdArray.push(message[Message.COLUMN_ID] + '');
    carIdFrom.push(message[Message.COLUMN_FROM_VEHICLE]); // this will send id of Vehicle-To
    types.push(message[Message.COLUMN_TYPE]);

    if (message[Message.COLUMN_TYPE] == 'image') {
      let filename = message[Message.COLUMN_MESSAGE].replace(/^.*[\\\/]/, '');
      let extension = getExtention(message[Message.COLUMN_MESSAGE]);
      let filetype = 'image/' + extension;
      parameters.push({
        name: filename.split('.').slice(0, -1).join('.'),
        filename: filename,
        type: filetype,
        data: RNFetchBlob.wrap(message[Message.COLUMN_MESSAGE]),
      });
      messageArray.push(filename);
    } else {
      messageArray.push(message[Message.COLUMN_MESSAGE]);
    }
  });

  obj.carId = carIdArray;
  obj.carNumber = carNumberArray;
  obj.message = messageArray;
  obj.messageId = messageIdArray;
  obj.carIdFrom = carIdFrom;
  obj.type = types;
  onlineMessageData = JSON.stringify(obj);

  parameters.push(
    {name: 'jsonOfflineMessageData', data: onlineMessageData},
    {name: 'cCode', data: cCode},
    {name: 'regId', data: regId},
  );
  RNFetchBlob.fetch(
    'POST',
    config.server + 'sendmessage.jsp',
    requestHeaders,
    parameters,
  )
    .then(data => data.json())
    .then(response => {
      if (response.RESPONSE == 'SUCCESS') {
        return true;
      } else {
        return false;
      }
    })
    .catch(error => {
      console.log(error);
      return false;
    });
};

// Add a BackgroundFetch event to <FlatList>
export const sendAllOfflineMessagesToServer = async () => {
  const messages = await getAllOfflineMessages();
  const user = await getUser();
  const conn = await hasNetworkConn();
  if (conn) {
    await sendMessagesToServer(messages, user.cCode, user.regId);
    await updateOfflineMessagePushToServer();
  }
};
