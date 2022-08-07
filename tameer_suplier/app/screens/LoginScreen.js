import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import * as Yup from "yup";
import { AppForm, FormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import config from "../config/config";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Spinner from "react-native-loading-spinner-overlay";
import messaging from "@react-native-firebase/messaging";
import * as Animatable from "react-native-animatable";

const validationSchema = Yup.object().shape({
  number: Yup.string().required().min(11).label("Number"),
});
var valuess = [];

async function login(number) {
  const token = await messaging().getToken();
  const data = { number: number, token: token };
  const url = config.server + "api/company/auth/login";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

function LoginScreen({ navigation }) {
  const [Error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Screen style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.Image} source={require("../img/Splash.png")} />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.loginCard}>
        <AppText style={styles.heading}>Login/Register</AppText>
        <AppForm
          initialValues={{ number: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            setLoading(true);
            let pattern = /^03[01234][0-9]{1}[0-9]{7}$/;
            if (values.number.match(pattern)) {
              const result = await login(values.number);
              if (result.status == 1) {
                setLoading(false);
                navigation.navigate("OTPscreen", {
                  userId: result.companyId,
                  infoSaved: result.infoSaved,
                  otp: result.otp,
                });
              } else if (result.status == 2) {
                setError("Otp not send, Login/Register again");
              } else {
                setError("Fialed, Check connection");
              }
            } else setError("Wrong number pattern (03XXXXXXXXX)");
            setLoading(false);
          }}
        >
          <FormField
            name="number"
            icon="phone"
            keyboardType="numeric"
            placeholder="Phone Number"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={11}
            style={{ width: "100%", color: "black", fontSize: 16, padding: 10 }}
          />
          <SubmitButton
            buttonStyle={{ marginTop: 50 }}
            title="Enter"
            color={colors.green}
          />
        </AppForm>
        <Text
          style={{
            color: colors.danger,
            fontSize: 14,
            marginHorizontal: 30,
            textAlign: "center",
          }}
        >
          {Error}
        </Text>
      </Animatable.View>
      <Spinner
        visible={loading}
        textContent={"Authenticating..."}
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
    flex: 1.5,
    alignItems: "center",
    padding: 10,
    paddingTop: 35,
    alignItems: "center",
    borderRadius: 3,
  },
  logo: {
    flex: 1,
    alignItems: "center",
  },
  Image: {
    width: "65%",
    height: "100%",
  },
  heading: {
    color: colors.brown,
    marginBottom: 15,
    fontSize: 18,
  },
});
export default LoginScreen;
