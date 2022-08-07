import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUser = async () => {
  try {
    let user = await AsyncStorage.getItem('user');
    user = await JSON.parse(user);
    return user;
  } catch (e) {
    console.log(e);
  }
};

export const getActiveCar = async () => {
  try {
    let activeCar = await AsyncStorage.getItem('activeCar');
    activeCar = await JSON.parse(activeCar);
    return activeCar;
  } catch (e) {
    console.log(e);
  }
};
export const getUserStage = async () => {
  try {
    let stage = await AsyncStorage.getItem('stage');
    return stage;
  } catch (e) {
    console.log(e);
  }
};

export const setUser = async (id, number) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify({id, number}));
  } catch (err) {
    console.log(err);
  }
};

export const setActiveCar = async (carId, carNumber) => {
  try {
    await AsyncStorage.setItem(
      'activeCar',
      JSON.stringify({carId: carId, carNumber: carNumber}),
    );
  } catch (err) {
    console.log(err);
  }
};

export const setUserStage = async stage => {
  try {
    await AsyncStorage.setItem('stage', stage);
  } catch (err) {
    console.log(err);
  }
};
export const AsyncStorageFunc = {
  getUser,
  setUser,
  setActiveCar,
  getActiveCar,
  setUserStage,
  getUserStage,
};
