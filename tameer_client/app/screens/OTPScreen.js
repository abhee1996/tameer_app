import React, {useState, useContext} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import colors from '../config/colors';
import config from '../config/config';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import {UserContext} from '../custom_hooks/UserContext';
import Spinner from 'react-native-loading-spinner-overlay';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import * as AsyncStorage from '../utility/AsyncStorageFunc';
async function storeUser(id, number, setUser) {
  const data = {
    id: id,
    number: number,
  };
  await AsyncStorage.setUser(id, number);
  setUser(data);
}
async function getOtp(number) {
  const url = config.server + 'api/user/auth/sendOtp';
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({number: number}),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
}

function OTPScreen({route, navigation}) {
  const [error, setError] = useState('');
  const [otp, setOtp] = useState(route.params.otp);
  const {user, setUser} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  return (
    <Screen style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.Image} source={require('../img/Splash.png')} />
      </View>
      <View style={styles.loginCard}>
        <AppText style={styles.heading}>Enter OTP</AppText>
        <OTPInputView
          style={{width: '80%', height: 100}}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            setLoading(true);
            if (code === otp) {
              storeUser(route.params.userId, route.params.number, setUser);
            } else {
              setError('Wrong OTP');
              setLoading(false);
            }
          }}
        />
        <Text style={{color: colors.danger, fontSize: 14}}>{error}</Text>
        <AppText style={{color: colors.medium, marginTop: 20, fontSize: 14}}>
          SMS Not received?
        </AppText>
        <Text
          style={{
            color: 'dodgerblue',
            fontSize: 14,
            textDecorationLine: 'underline',
          }}
          onPress={e => {
            e.preventDefault();
            getOtp(route.params.number).then(result => {
              if (result.status) {
                setOtp(result.otp);
              } else setError('Could not send OTP , Check connection');
            });
          }}>
          Send OTP Again
        </Text>
      </View>
      <Spinner
        visible={loading}
        textContent={'Matching OTP...'}
        textStyle={styles.spinnerTextStyle}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: colors.secondary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 10,
  },
  loginCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flex: 2,
    alignItems: 'center',
    padding: 10,
    paddingTop: 25,
    margin: 10,
    marginTop: 15,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
  },
  Image: {
    width: '65%',
    height: '100%',
  },
  heading: {
    color: '#da8a67',
    marginBottom: 15,
    fontSize: 18,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    fontSize: 20,
    color: colors.black,
    width: 45,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
  },

  underlineStyleHighLighted: {
    borderColor: colors.secondary,
  },
});
export default OTPScreen;
