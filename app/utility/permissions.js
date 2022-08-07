import {Linking, Platform} from 'react-native';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';

const PALTFORM_WRITE_PERMISSION = {
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
};
const PALTFORM_CAMERA_PERMISSION = {
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
};

export const checkWritePermission = async () => {
  check(PALTFORM_WRITE_PERMISSION[Platform.OS])
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          break;
        case RESULTS.DENIED:
          requestWritePermission();
          break;
        case RESULTS.LIMITED:
          requestWritePermission();
          break;
        case RESULTS.GRANTED:
          break;
        case RESULTS.BLOCKED:
          {
            Alert.alert(
              'Write Permission required',
              'Premission required to write images from app to gallery',
              [
                {
                  text: 'Go to settings',
                  onPress: () => Linking.openURL('app-settings:'),
                },
              ],
            );
          }
          break;
      }
    })
    .catch(error => {
      // …
    });
};
export const checkCameraPermission = async () => {
  check(PALTFORM_CAMERA_PERMISSION[Platform.OS])
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          break;
        case RESULTS.DENIED:
          requestCameraPermission();
          break;
        case RESULTS.LIMITED:
          requestCameraPermission();
          break;
        case RESULTS.GRANTED:
          break;
        case RESULTS.BLOCKED:
          {
            Alert.alert(
              'Camera Permission required',
              'Premission required to take photos from camera',
              [
                {
                  text: 'Go to settings',
                  onPress: () => Linking.openURL('app-settings:'),
                },
              ],
            );
          }
          break;
      }
    })
    .catch(error => {
      // …
    });
};

const requestWritePermission = async () => {
  request(
    Platform.OS == 'android'
      ? PALTFORM_WRITE_PERMISSION.android
      : PALTFORM_WRITE_PERMISSION.ios,
  )
    .then(result => {
      switch (result) {
        case RESULTS.DENIED:
          {
            Alert.alert(
              'App required write Permission',
              'Premission required to write images from app to gallery',
              [{text: 'OK', onPress: () => requestWritePermission()}],
            );
          }
          break;
        case RESULTS.LIMITED:
          break;
        case RESULTS.GRANTED:
          break;
        case RESULTS.BLOCKED:
          {
            Alert.alert(
              'App required Write required',
              'Premission required to write images from app to gallery',
              [
                {
                  text: 'Go to settings',
                  onPress: () => Linking.openURL('app-settings:'),
                },
              ],
            );
          }
          break;
      }
    })
    .catch(error => {
      console.log('Premission error');
    });
};

const requestCameraPermission = async () => {
  request(
    Platform.OS == 'android'
      ? PALTFORM_CAMERA_PERMISSION.android
      : PALTFORM_CAMERA_PERMISSION.ios,
  )
    .then(result => {
      switch (result) {
        case RESULTS.DENIED:
          {
            Alert.alert(
              'App required camera Permission',
              'Premission required to open camera',
              [{text: 'OK', onPress: () => requestWritePermission()}],
            );
          }
          break;
        case RESULTS.LIMITED:
          break;
        case RESULTS.GRANTED:
          break;
        case RESULTS.BLOCKED:
          {
            Alert.alert(
              'App required Camera required',
              'Premission required to open camera',
              [
                {
                  text: 'Go to settings',
                  onPress: () => Linking.openURL('app-settings:'),
                },
              ],
            );
          }
          break;
      }
    })
    .catch(error => {
      console.log('Premission error');
    });
};

export const startupPermissions = () => {
  checkWritePermission();
  checkCameraPermission();
};
