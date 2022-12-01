import { useFonts } from 'expo-font';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { FloorCategories, WallCoveringCategories, Home, ProductsDetail } from './screens';
import AppNavigator from './navigation';

export default function App() {
  const [loaded] = useFonts({
    'SourceSansPro-Regular': require('../assets/fonts/SourceSansPro-Regular.ttf'),
    'SourceSansPro-Bold': require('../assets/fonts/SourceSansPro-Bold.ttf'),
    'SourceSansPro-Italic': require('../assets/fonts/SourceSansPro-Italic.ttf'),
    'SourceSansPro-Black': require('../assets/fonts/SourceSansPro-Black.ttf'),
  });

  if (!loaded) {
    return (
      <View styles={styles.container}>
        <ActivityIndicator color="#EAC517" size="large" />
      </View>
    );
  }
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
