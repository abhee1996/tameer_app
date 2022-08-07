import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import * as Yup from 'yup';
import {AppForm, FormField, SubmitButton} from '../components/forms';
import colors from '../config/colors';
import config from '../config/config';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Spinner from 'react-native-loading-spinner-overlay';

const validationSchema = Yup.object().shape({
  number: Yup.string().required().min(11).label('Number'),
  password: Yup.string().required().min(6).label('Password'),
});
var valuess = [];

async function AddUser(number, password) {
  const data = {number: number, password: password};
  const url = config.server + 'api/user/auth/register';
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}
function RegisterScreen({navigation}) {
  const [Error, setError] = useState('');
  const [color, setColor] = useState(colors.danger);
  const [loading, setLoading] = useState(false);

  return (
    <Screen style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.Image} source={require('../img/Splash.png')} />
      </View>
      <View style={styles.loginCard}>
        <AppText style={styles.heading}>Register{valuess.number}</AppText>
        <AppForm
          initialValues={{number: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={async values => {
            var result = await AddUser(values.number, values.password);
            if (result.status == 1) {
              setLoading(false);
              navigation.navigate('Login');
            } else if (result.status == 0) {
              setColor(colors.danger);
              setError('Number Already Registered Login please');
            } else if (result.status == 2) {
              setColor(colors.danger);
              setError('Network Error');
            }
            setLoading(false);
          }}>
          <FormField
            name="number"
            icon="phone"
            keyboardType="numeric"
            placeholder="Phone Number"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={11}
            style={{width: '100%', color: 'black', fontSize: 16}}
          />
          <FormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            maxLength={20}
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            style={{width: '100%', color: 'black', fontSize: 16}}
          />
          <SubmitButton title="Register" color="#bfc146" />
        </AppForm>
        <Text style={{color: color, fontSize: 14}}>{Error}</Text>
        <AppText style={{color: colors.medium, fontSize: 14}}>
          Already Registered?
        </AppText>
        <Text
          style={{
            color: 'dodgerblue',
            fontSize: 14,
            textDecorationLine: 'underline',
          }}
          onPress={e => {
            e.preventDefault();
            navigation.navigate('Login');
          }}>
          Login Here
        </Text>
      </View>
      <Spinner
        visible={loading}
        textContent={'Wait...'}
        textStyle={styles.spinnerTextStyle}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 10,
  },
  loginCard: {
    backgroundColor: colors.white,
    flex: 2,
    alignItems: 'center',
    padding: 10,
    paddingTop: 25,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default RegisterScreen;
