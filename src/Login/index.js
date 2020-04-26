import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import validateEmail from '../lib';
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mailErrMsg: '',
      passErrMsg: '',
      mail: '',
      password: '',
      isPassVisible: false,
    };
  }

  onEyePress = () => {
    const {isPassVisible} = this.state;
    this.setState({isPassVisible: !isPassVisible});
  };

  onMailChange = mail => {
    this.setState({mail: mail});
    //console.log('mail', this.mail.props.value);
    if (!mail || validateEmail(mail)) {
      this.setState({mailErrMsg: ''});
    } else {
      this.setState({mailErrMsg: 'Please enter a valid email'});
    }
  };

  onPassChange = password => {
    this.setState({password: password});
    if (!password || password.length > 5) {
      this.setState({passErrMsg: ''});
    } else {
      this.setState({passErrMsg: 'Password should be at least 8 letters long'});
    }
  };

  onForgotPasswordPress = () => {
    const {navigation} = this.props;
    navigation.navigate('ForgotPassword');
  };
  onSignUpPress = () => {
    const {navigation} = this.props;
    navigation.navigate('SignUp');
  };

  onSignInPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Stories');
    //navigation.navigate('Home');
  };
  render() {
    const {mailErrMsg, passErrMsg, mail, password, isPassVisible} = this.state;
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <LinearGradient
            style={styles.linearGradientHigh}
            colors={['#FFE4F6', '#ffa5cf']}
          />
          <Image
            source={require('../../assets/logo.jpeg')}
            style={styles.logoStyle}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.row}>
            {mailErrMsg.length > 0 && (
              <Text style={styles.errStyle}>{mailErrMsg}</Text>
            )}
            <View style={styles.inline}>
              <TextInput
                ref={input => (this.mail = input)}
                style={styles.formInput}
                placeholder="Student ID"
                onChangeText={this.onMailChange}
                value={mail}
              />
              <Icon color="#92536E" name="user-alt" size={20} />
            </View>
          </View>
          <View style={styles.row}>
            {passErrMsg.length > 0 && (
              <Text style={styles.errStyle}>{passErrMsg}</Text>
            )}
            <View style={styles.inline}>
              <TextInput
                ref={input => (this.passowrd = input)}
                style={styles.formInput}
                placeholder="Password"
                secureTextEntry={!isPassVisible}
                onChangeText={this.onPassChange}
                value={password}
              />
              <TouchableOpacity onPress={this.onEyePress}>
                <Icon
                  style={{marginRight: 10}}
                  color={password.length > 0 ? 'black' : 'grey'}
                  name={isPassVisible ? 'eye' : 'eye-slash'}
                  size={20}
                />
              </TouchableOpacity>
              <Icon color="#92536E" name="key" size={20} />
            </View>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onSignInPress}>
              <LinearGradient
                style={[styles.linearGradient, {borderRadius: 12}]}
                colors={['#ffa5cf', '#FF5EAB']}
              />
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.buttonRow}
            onPress={this.onSignUpPress}>
            <View style={styles.noButton}>
              <Text>
                Not a Member?<Text style={styles.linkText}>{' Sign Up '}</Text>
                Now
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRow}
            onPress={this.onForgotPasswordPress}>
            <View style={styles.noButton}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4F6',
  },
  logoContainer: {
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: '100%',
  },
  logoStyle: {
    height: 100,
    width: 220,
  },
  form: {
    flex: 1,
    paddingHorizontal: 10,
  },
  formInput: {
    flex: 1,
    fontSize: 16,
    paddingBottom: Platform.OS === 'android' ? -10 : 2,
  },
  row: {
    borderBottomColor: '#92536E',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 4,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 4,
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noButton: {
    width: '100%',
    height: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#92536E',
    fontWeight: 'bold',
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errStyle: {
    color: '#ff0000',
    fontSize: 10,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  linearGradientHigh: {
    width: '100%',
    height: 140,
    position: 'absolute',
    zIndex: -1,
  },
});
