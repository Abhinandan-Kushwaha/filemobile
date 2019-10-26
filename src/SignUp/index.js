import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import validateEmail from '../lib';

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
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.form}>
          <View style={styles.row1}>
            <View style={styles.inline}>
              <TextInput
                ref={input => (this.firstName = input)}
                style={[styles.formInputUnderlined, {marginRight: 16}]}
                placeholder="First Name"
                onChangeText={this.onFirstNameChange}
                value={firstName}
              />
              <TextInput
                ref={input => (this.lastName = input)}
                style={styles.formInputUnderlined}
                placeholder="Last Name"
                onChangeText={this.onLastNameChange}
                value={lastName}
              />
            </View>
          </View>
          <View style={styles.row1}>
            <View style={styles.inline}>
              <TextInput
                ref={input => (this.branch = input)}
                style={[styles.formInputUnderlined, {marginRight: 16}]}
                placeholder="Branch"
                onChangeText={this.onBranchChange}
                value={branch}
              />
              <TextInput
                ref={input => (this.dob = input)}
                style={styles.formInputUnderlined}
                placeholder="DOB"
                onChangeText={this.onDobChange}
                value={dob}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.inline}>
              <TextInput
                ref={input => (this.id = input)}
                style={styles.formInput}
                placeholder="Student ID"
                onChangeText={this.onIdChange}
                value={id}
              />
              <Icon color="#ff8100" name="user" size={20} />
            </View>
          </View>
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
              <Icon color="#ff8100" name="envelope" size={20} />
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
            {passErrMsg.length > 0 && (
              <Text style={styles.errStyle}>{passErrMsg}</Text>
            )}
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginBottom: 10,
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
    paddingBottom: 4,
    marginBottom: 30,
  },
  row1: {
    marginHorizontal: 20,
    paddingHorizontal: 4,
    paddingBottom: 4,
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
  formInputUnderlined: {
    flex: 1,
    fontSize: 16,
    borderBottomColor: '#ff8100',
    borderBottomWidth: 1,
    paddingLeft: 4,
  },
});
