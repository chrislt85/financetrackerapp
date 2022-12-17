import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { Home } from './screens';

export default function App() {
  const [loaded] = useFonts({
    'Karla-Bold': require('../assets/fonts/Karla-Bold.ttf'),
    'Karla-Italic': require('../assets/fonts/Karla-Italic.ttf'),
    'Karla-Light': require('../assets/fonts/Karla-Light.ttf'),
    'Karla-Regular': require('../assets/fonts/Karla-Regular.ttf'),
    'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Italic': require('../assets/fonts/Rubik-Italic.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#DAC4F7" size="large" />
      </View>
    );
  }

  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});