import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class App extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.jpeg')}
            style={styles.logoStyle}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.row}>
            <TextInput style={styles.formInput} placeholder="Email" />
            <Icon color="#ff8100" name="envelope" size={20} />
          </View>
          <View style={styles.row}>
            <TextInput style={styles.formInput} placeholder="Email" />
            <Icon color="#ff8100" name="key" size={20} />
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.noButton}>
              <Text>OR</Text>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign In With Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.noButton}>
              <Text>
                Not a Member?<Text style={styles.linkText}>{' Sign Up '}</Text>
                Now
              </Text>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.noButton}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </View>
          </View>
        </View>
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
