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
import Icon from 'react-native-vector-icons/FontAwesome5';
import validateEmail from '../lib';

export default class ForgotPassword extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mailErrMsg: '',
      mail: '',
    };
  }

  onMailChange = mail => {
    this.setState({mail: mail});
    //console.log('mail', this.mail.props.value);
    if (!mail || validateEmail(mail)) {
      this.setState({mailErrMsg: ''});
    } else {
      this.setState({mailErrMsg: 'Please enter a valid email'});
    }
  };
  render() {
    const {mailErrMsg, mail} = this.state;
    return (
      <View style={styles.container}>
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
                placeholder="Enter your student ID"
                onChangeText={this.onMailChange}
                value={mail}
              />
              <Icon color="#ff8100" name="user" size={20} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.inline}>
              <TextInput
                ref={input => (this.mail = input)}
                style={styles.formInput}
                placeholder="Enter registered mail address"
                onChangeText={this.onMailChange}
                value={mail}
              />
              <Icon color="#ff8100" name="envelope" size={20} />
            </View>
            {mailErrMsg.length > 0 && (
              <Text style={styles.errStyle}>{mailErrMsg}</Text>
            )}
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
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
    paddingBottom: Platform.OS === 'android' ? -10 : 2,
  },
  row: {
    borderBottomColor: '#ff8100',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 4,
    paddingBottom: 4,
    marginBottom: 30,
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
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inline: {
    flexDirection: 'row',
  },
  errStyle: {
    color: '#ff0000',
    fontSize: 10,
  },
});
