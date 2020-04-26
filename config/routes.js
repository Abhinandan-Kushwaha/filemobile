import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import createDrawerNavigator from 'react-navigation-drawer';
import {View, Image, Button, StyleSheet} from 'react-native';
import Home from '../src/Home';
import Profile from '../src/Profile';
import Login from '../src/Login';
import Issue from '../src/Issue';
import ForgotPassword from '../src/ForgotPassword';
import SignUp from '../src/SignUp';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: {backgroundColor: '#ff8100'},
      headerTintColor: '#710035',
      headerTitle: 'Self Issueing Master File Shelf',
    },
  },
  Profile: {screen: Profile},
  Issue: {screen: Issue},
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
  Catalogue: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Catalogue',
      tabBarIcon: ({focused}) => (
        <Icon
          name="shopping-cart"
          size={24}
          focused={focused}
          color={focused ? '#da5360' : 'gray'}
        />
      ),
    },
  },
  Issue: {
    screen: Issue,
    navigationOptions: {
      tabBarLabel: 'Issue',
      tabBarIcon: ({focused}) => (
        <Icon
          name="book"
          size={24}
          focused={focused}
          color={focused ? '#da5360' : 'gray'}
        />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({focused}) => (
        <Icon
          name="user-alt"
          size={24}
          focused={focused}
          color={focused ? '#da5360' : 'gray'}
        />
      ),
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
