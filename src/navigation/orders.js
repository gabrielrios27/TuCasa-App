import { COLORS } from '../constants/themes/colors';
import { Orders } from '../screens';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
      <Stack.Screen name="Ordenes" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
