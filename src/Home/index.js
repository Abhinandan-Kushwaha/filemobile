import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Home extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: '100%',
  },
  logoStyle: {
    height: 80,
    width: 180,
  },
  form: {
    flex: 1,
    paddingHorizontal: 10,
  },
  formInput: {
    flex: 1,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#ff8100',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 4,
    paddingBottom: 10,
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 4,
    paddingBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#ffa100',
    paddingVertical: 10,
    alignItems: 'center',
  },
  noButton: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#ff8100',
    fontWeight: 'bold',
  },
});
