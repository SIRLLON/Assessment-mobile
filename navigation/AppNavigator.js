import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthContext } from '../contexts/AuthContext';
import { lightTheme, darkTheme } from '../utils/theme';
import * as Notifications from 'expo-notifications';

import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrdersScreen from '../screens/OrdersScreen';
import MapScreen from '../screens/MapScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import SettingsScreen from '../screens/SettingsScreen';

import LoginScreen from '../screens/LoginScreen';

const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeDashboard" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Products" component={ProductsScreen} options={({ route }) => ({ title: route.params.categoryName })} />
      <HomeStack.Screen name="Cart" component={CartScreen} options={{ title: 'Meu Carrinho' }} />
      <HomeStack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Finalizar Pedido' }} />
    </HomeStack.Navigator>
  );
}

function MapStackScreen() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="MapList" component={MapScreen} options={{ headerShown: false }} />
      <MapStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} options={{ title: 'Detalhes do Restaurante' }} />
    </MapStack.Navigator>
  );
}


function AppTabs() {
  const { theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      let rn = route.name;

      if (rn === 'Início') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (rn === 'Pedidos') {
        iconName = focused ? 'list' : 'list-outline';
      } else if (rn === 'Mapa') {
        iconName = focused ? 'map' : 'map-outline';
      } else if (rn === 'Perfil') {
        iconName = focused ? 'person' : 'person-outline';
      } else if (rn === 'Configurações') {
        iconName = focused ? 'settings' : 'settings-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: currentTheme.primary,
    tabBarInactiveTintColor: currentTheme.textSecondary,
    tabBarStyle: {
      backgroundColor: currentTheme.card,
      borderTopColor: currentTheme.border,
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Início" component={HomeStackScreen} />
      <Tab.Screen name="Pedidos" component={OrdersScreen} />
      <Tab.Screen name="Mapa" component={MapStackScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  const { theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: currentTheme.background,
      card: currentTheme.card,
      text: currentTheme.text,
      border: currentTheme.border,
      primary: currentTheme.primary,
    },
  };

  const darkAppTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: currentTheme.background,
      card: currentTheme.card,
      text: currentTheme.text,
      border: currentTheme.border,
      primary: currentTheme.primary,
    },
  };

  return (
    <NavigationContainer theme={theme === 'dark' ? darkAppTheme : appTheme}>
      <AppStack.Navigator>
        <AppStack.Screen name="Main" component={AppTabs} options={{ headerShown: false }} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

function AuthNavigator() {
  const { theme } = useContext(AuthContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const authTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: currentTheme.background,
      card: currentTheme.card,
      text: currentTheme.text,
      border: currentTheme.border,
      primary: currentTheme.primary,
    },
  };

  const darkAuthTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: currentTheme.background,
      card: currentTheme.card,
      text: currentTheme.text,
      border: currentTheme.border,
      primary: currentTheme.primary,
    },
  };

  return (
    <NavigationContainer theme={theme === 'dark' ? darkAuthTheme : authTheme}>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default function RootNavigator() {
  const { user, theme } = useContext(AuthContext);

  useEffect(() => {
    Notifications.requestPermissionsAsync().then(({ status }) => {
      if (status !== 'granted') {
        alert('Permissão para notificações é necessária para este app!');
      }
    });
  }, []);

  return user ? <AppNavigator /> : <AuthNavigator />;
}

