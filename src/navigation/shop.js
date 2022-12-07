import { FloorCategories, Home, ProductsDetail, WallCoveringCategories } from '../screens';

import { COLORS } from '../constants/themes/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.backgroundDark,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: 'SourceSansPro-Black',
        },
        presentation: 'card',
        headerBackTitle: '',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pisos"
        component={FloorCategories}
        options={({ route }) => ({
          title: 'Pisos',
          headerTintColor: 'white',
        })}
      />
      <Stack.Screen
        name="Revestimientos"
        component={WallCoveringCategories}
        options={({ route }) => ({
          title: 'Revestimientos',
          headerTintColor: 'white',
        })}
      />
      <Stack.Screen
        name="Detalles"
        component={ProductsDetail}
        options={({ route }) => ({
          title: 'Detalles',
          headerTintColor: 'white',
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
