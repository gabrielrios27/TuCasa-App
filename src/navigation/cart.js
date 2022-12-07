import { COLORS } from '../constants/themes/colors';
import { Cart } from '../screens';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.backgroundDark,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: 'SourceSansPro-Bold',
        },
        presentation: 'card',
        headerBackTitle: '',
      }}>
      <Stack.Screen name="Carrito" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
