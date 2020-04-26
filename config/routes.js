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
      headerTintColor: '#710035',
      headerTitle: 'Self Issueing Master File Shelf',
    },
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTintColor: '#710035',
      headerTitle: 'Self Issueing Master File Shelf',
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerTintColor: '#710035',
      headerTitle: 'Self Issueing Master File Shelf',
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerTintColor: '#710035',
      headerTitle: 'Self Issueing Master File Shelf',
    },
  },
});

const AppStack = createBottomTabNavigator({
  Stories: {
    screen: Home,
    navigationOptions: {
      headerStyle: {backgroundColor: '#ff8100'},
      headerTintColor: '#710035',
      headerTitle: 'Stories',
    },
  },
  Gallery: {
    screen: Login,
    navigationOptions: {
      headerTintColor: '#710035',
      headerTitle: 'Gallery',
    },
  },
  Upload: {
    screen: ForgotPassword,
    navigationOptions: {
      headerTintColor: '#710035',
      headerTitle: 'Upload',
    },
  },
  Profile: {
    screen: SignUp,
    navigationOptions: {
      headerTintColor: '#710035',
      headerTitle: 'Profile',
    },
  },
});

const FileMobileRoute = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack,
});

const AppContainer = createAppContainer(FileMobileRoute);
export default () => (
  <View style={{flex: 1}}>
    <AppContainer />
  </View>
);
