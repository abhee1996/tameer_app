import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as Yup from 'yup';
import {AppForm, FormField, SubmitButton} from '../components/forms';
import colors from '../config/colors';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import {UserContext} from '../custom_hooks/UserContext';
import * as SecureStore from 'expo-secure-store';
import Spinner from 'react-native-loading-spinner-overlay';
import {saveInfo} from '../utility/ServerCalls';

async function storeUser(userId, number, setUser) {
  await SecureStore.setItemAsync('user', JSON.stringify({id: userId, number}));
  setUser({id: userId, number: number});
}

function CompanyInfoScreen({route, navigation}) {
  //states
  const [Error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState(colors.danger);
  const {user, setUser} = useContext(UserContext);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().label('Email'),
  });

  return (
    <Screen style={styles.container}>
      <View style={styles.loginCard}>
        <AppText style={styles.heading}>Compnay Info </AppText>
        <AppForm
          initialValues={{name: '', email: ''}}
          validationSchema={validationSchema}
          onSubmit={async values => {
            setLoading(true);
            var result = await saveInfo(
              values.name,
              values.email,
              route.params.userId,
            );
            if (result.status == 1) {
              storeUser(route.params.userId, route.params.number, setUser);
            } else {
              setColor(colors.danger);
              setError('Connection problem, could not save information');
              setLoading(false);
            }
          }}>
          <FormField
            name="name"
            placeholder="Name"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={100}
            style={{width: '100%', color: 'black', fontSize: 16}}
          />
          <FormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={100}
            placeholder="Email"
            style={{width: '100%', color: 'black', fontSize: 16}}
          />

          <SubmitButton title="Save" color="#bfc146" />
        </AppForm>
        <Text style={{color: color, fontSize: 14}}>{Error}</Text>
      </View>
      <Spinner
        visible={loading}
        textContent={'Saving...'}
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
    marginBottom: 35,
    fontSize: 20,
  },
});
export default CompanyInfoScreen;
