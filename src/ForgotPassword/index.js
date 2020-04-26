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
import LinearGradient from 'react-native-linear-gradient';

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
          <LinearGradient
            style={styles.linearGradientHigh}
            colors={['#FFE4F6', '#ffa5cf']}
          />
          <Image
            source={require('../../assets/hearts.png')}
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
              <Icon color="#92536E" name="user" size={20} />
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
              <Icon color="#92536E" name="envelope" size={20} />
            </View>
            {mailErrMsg.length > 0 && (
              <Text style={styles.errStyle}>{mailErrMsg}</Text>
            )}
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <LinearGradient
                style={[styles.linearGradient, {borderRadius: 12}]}
                colors={['#ffa5cf', '#FF5EAB']}
              />
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
    backgroundColor: '#FFE4F6',
  },
  logoContainer: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    height: 80,
    width: 96,
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
    paddingBottom: 4,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 4,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: 12,
    height: 40,
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
  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  linearGradientHigh: {
    width: '100%',
    height: 120,
    position: 'absolute',
    zIndex: -1,
  },
});
