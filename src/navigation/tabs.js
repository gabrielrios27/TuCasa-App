import { COLORS } from '../constants/themes/colors';
import CartNavigator from './cart';
import { Ionicons } from '@expo/vector-icons';
import OrderNavigator from './orders';
import React from 'react';
import ShopNavigator from './shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'SourceSansPro-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.gray,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: 'Shop',
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={COLORS.secondary} />,
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: 'Carrito',
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'cart' : 'cart-outline'} size={22} color={COLORS.secondary} />,
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrderNavigator}
        options={{
          title: 'Ordenes',
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'file-tray' : 'file-tray-outline'} size={22} color={COLORS.secondary} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
