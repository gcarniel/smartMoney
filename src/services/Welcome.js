import AsyncStorage from '@react-native-community/async-storage';

export const isInitialized = async () => {
    const openingBalance = await AsyncStorage.getItem('openinBalance');
    return openingBalance !== null && openingBalance === 'true';
};

export const setInitialized = async () => {
    await AsyncStorage.setItem('openinBalance', 'true');
};

export const cleanInitialized = async() => {
    await AsyncStorage.removeItem('openinBalance');
};