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

export default class SignUp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mailErrMsg: '',
      passErrMsg: '',
      mail: '',
      password: '',
      isPassVisible: false,
      firstName: '',
      lastName: '',
      branch: '',
      dob: '',
      id: '',
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

  onFirstNameChange = firstName => {
    this.setState({firstName: firstName});
  };

  onLastNameChange = lastName => {
    this.setState({lastName: lastName});
  };

  onIdChange = id => {
    this.setState({id: id});
  };

  onBranchChange = branch => {
    this.setState({branch: branch});
  };

  onDobChange = dob => {
    this.setState({dob: dob});
  };

  onForgotPasswordPress = () => {
    const {navigation} = this.props;
    navigation.navigate('ForgotPassword');
  };
  render() {
    const {
      mailErrMsg,
      passErrMsg,
      mail,
      password,
      isPassVisible,
      firstName,
      lastName,
      branch,
      dob,
      id,
    } = this.state;
    return (
      <View style={styles.flex1}>
        <LinearGradient
          style={styles.linearGradient}
          colors={['#FFE4F6', '#ffa5cf']}
        />
        <KeyboardAwareScrollView style={styles.flex1}>
          <View style={styles.form}>
            <View style={styles.row}>
              {mailErrMsg.length > 0 && (
                <Text style={styles.errStyle}>{mailErrMsg}</Text>
              )}
              <View style={styles.inline}>
                <TextInput
                  ref={input => (this.mail = input)}
                  style={styles.formInput}
                  placeholder="Email"
                  onChangeText={this.onMailChange}
                  value={mail}
                />
                <Icon color="#92536E" name="envelope" size={20} />
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
              {passErrMsg.length > 0 && (
                <Text style={styles.errStyle}>{passErrMsg}</Text>
              )}
            </View>
            <View style={styles.row}>
              {passErrMsg.length > 0 && (
                <Text style={styles.errStyle}>{passErrMsg}</Text>
              )}
              <View style={styles.inline}>
                <TextInput
                  ref={input => (this.passowrd = input)}
                  style={styles.formInput}
                  placeholder="Confirm Password"
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
              {passErrMsg.length > 0 && (
                <Text style={styles.errStyle}>{passErrMsg}</Text>
              )}
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <LinearGradient
                  style={[styles.linearGradient, {borderRadius: 12}]}
                  colors={['#ffa5cf', '#FF5EAB']}
                />
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/hearts.png')}
                style={styles.logoStyle}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
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
    marginBottom: 30,
  },
  row1: {
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
    borderRadius: 12,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
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
  formInputUnderlined: {
    flex: 1,
    fontSize: 16,
    borderBottomColor: '#ff8100',
    borderBottomWidth: 1,
    paddingLeft: 4,
    paddingBottom: Platform.OS === 'android' ? -10 : 2,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  logoStyle: {
    height: 100,
    width: 120,
  },
  logoContainer: {
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: '100%',
  },
});
