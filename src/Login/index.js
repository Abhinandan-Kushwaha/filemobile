import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import validateEmail from '../lib';

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
  render() {
    const {mailErrMsg, passErrMsg, mail, password, isPassVisible} = this.state;
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.logoContainer}>
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
              <Icon color="#ff8100" name="user" size={20} />
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
              <Icon color="#ff8100" name="key" size={20} />
            </View>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
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
    borderBottomColor: '#ff8100',
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
    backgroundColor: '#ffa100',
    borderRadius: 6,
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
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errStyle: {
    color: '#ff0000',
    fontSize: 10,
  },
});
