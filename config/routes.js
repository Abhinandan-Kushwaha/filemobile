import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import createDrawerNavigator from 'react-navigation-drawer';
import {View, Image, Button, StyleSheet} from 'react-native';
import Home from '../src/Home';
import Login from '../src/Login';
import ForgotPassword from '../src/ForgotPassword';
import SignUp from '../src/SignUp';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: {backgroundColor: '#ff8100'},
      headerTintColor: '#ffffff',
      headerTitle: 'Self Issueing Master File Shelf',
    },
  },
});

const AuthStack = createBottomTabNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTintColor: '#ff5100',
      headerTitle: 'Self Issueing Master File Shelf',
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {headerTitle: 'Forgot Password'},
  },
  SignUp: {screen: SignUp, navigationOptions: {headerTitle: 'Sign Up'}},
});

const FileMobileRoute = createSwitchNavigator({
  Auth: AuthStack,
  Home: HomeStack,
});

const AppContainer = createAppContainer(FileMobileRoute);
export default () => (
  <View style={{flex: 1}}>
    <AppContainer />
  </View>
);
