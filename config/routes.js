import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {View} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import Home from '../src/Home';
import Login from '../src/Login';
import ForgotPassword from '../src/ForgotPassword';
import SignUp from '../src/SignUp';
const HomeStack = createStackNavigator({
  Home: {screen: Home},
});

const AuthStack = createStackNavigator({
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
