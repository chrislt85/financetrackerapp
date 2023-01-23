import { Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

export const sumTotal = (items) =>
  items?.map((item) => item.price * item.quantity)?.reduce((a, b) => a + b, 0);

export const createUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
};