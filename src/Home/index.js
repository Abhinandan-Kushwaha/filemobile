import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Alert,
  FlatList,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import LinearGradient from 'react-native-linear-gradient';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      catalogueData: [
        {
          img: require('../../assets/b1.jpeg'),
          title: 'FIB 20103 Occupational Safety and Health',
          author: 'Mr Yusuf',
          isbn: '9336606401',
          code: 11,
          copies: 5,
        },
        {
          img: require('../../assets/b2.jpeg'),
          title: 'FKB 1103 Applied Calculus',
          author: 'Madam Axniab',
          isbn: '9336606402',
          code: 12,
          copies: 5,
        },
        {
          img: require('../../assets/b3.jpeg'),
          title: 'FIB 12303 Material Science',
          author: 'Madam Axwani',
          isbn: '9336606403',
          code: 13,
          copies: 5,
        },
        {
          img: require('../../assets/b4.jpeg'),
          title: 'FIB 11203 Automation Technology',
          author: 'Mr Zulkhairi',
          isbn: '9336606404',
          code: 14,
          copies: 5,
        },
        {
          img: require('../../assets/b5.jpeg'),
          title: 'FAB 20703 Robotics',
          author: 'Mr Amir Sharizam',
          isbn: '9336606405',
          code: 21,
          copies: 5,
        },
        {
          img: require('../../assets/b6.jpeg'),
          title: 'FAB 35803 Control System',
          author: 'Madam Murni',
          isbn: '9336606406',
          code: 22,
          copies: 5,
        },
        {
          img: require('../../assets/b7.jpeg'),
          title: 'FAB 30104 Mechatronics System Design',
          author: 'Madam Siti Khadija',
          isbn: '9336606407',
          code: 23,
          copies: 5,
        },
        {
          img: require('../../assets/b8.jpeg'),
          title: 'FMB 70503 Mechanics and Machine Design',
          author: 'Mr Azwan',
          isbn: '9336606408',
          code: 24,
          copies: 5,
        },
        {
          img: require('../../assets/b9.jpeg'),
          title: 'FIB 42203 Industrial Ergonomics',
          author: 'Mr Yusuf',
          isbn: '9336606409',
          code: 31,
          copies: 5,
        },
        {
          img: require('../../assets/b10.jpg'),
          title: 'FAB 30303 Mobile Robotics',
          author: 'Mr Taha',
          isbn: '9336606410',
          code: 32,
          copies: 5,
        },
        {
          img: require('../../assets/b11.jpeg'),
          title: 'FAB 30403 Modern Control',
          author: 'Mr Fadzil',
          isbn: '9336606410',
          code: 33,
          copies: 5,
        },
        {
          img: require('../../assets/b12.jpg'),
          title: 'FAB 40104 Automated System Diagnostic and Maintaenance',
          author: 'Mr Amir Sharizamam',
          isbn: '9336606410',
          code: 34,
          copies: 5,
        },
      ],
    };
  }

  getDateAndTime = date => {
    return (
      date.getDate() +
      '-' +
      date.getMonth() +
      1 +
      '-' +
      date.getYear() +
      '  ' +
      date.getHours() +
      ':' +
      date.getMinutes()
    );
  };

  bookItemPressed = (img, title, author, isbn, copies) => {
    this.setState({
      popupVisible: true,
      currentImg: img,
      currentTitle: title,
      currentAuthor: author,
      currentIsbn: isbn,
      currentCopies: copies,
    });
  };

  renderCatalogue = item => {
    const {popupVisible} = this.state;
    const {img, title, author, isbn, copies} = item.item;
    return (
      <TouchableOpacity
        onPress={() => this.bookItemPressed(img, title, author, isbn, copies)}
        disabled={popupVisible}
        style={styles.catalogueItemContainer}>
        <Image style={styles.bookCover} source={item.item.img} />
        <View style={styles.bookDetailsContainer}>
          <Text style={styles.bookTitle}>{item.item.title}</Text>
          <Text style={styles.bookDetails}>
            {'Author: ' + item.item.author}
          </Text>
          <Text style={styles.bookDetails}>{'ISBN: ' + item.item.isbn}</Text>
          <Text style={styles.availableText}>
            {item.item.copies + ' copies available'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  validateData = () => {
    let {code, issueDate, returnDate} = this.state;
    code = parseInt(code + '');
    let column = code % 10;
    let row = code / 10;
    if (code && issueDate && returnDate) {
      if (column >= 1 && column <= 3 && row >= 1 && row <= 4) {
        //code validated

        let startTime = issueDate.getTime();
        let endTime = returnDate.getTime();

        let allowedTime = 7 * 24 * 60 * 60 * 1000; //7 days (in milliseconds)

        if (endTime <= startTime) {
          Alert.alert('Return Date must lie after Issue Date!!');
          return false;
        } else if (endTime - startTime > allowedTime) {
          Alert.alert(
            'Books can be issued for a maximum duration of 7 days only!!',
          );
          return false;
        } else {
          Alert.alert('All good! Your Book can be issued now!');
          this.setState({popupVisible: false});
          return true;
        }
      } else {
        Alert.alert('Inavalid code!! Please retry.');
        return false;
      }
    } else {
      Alert.alert('Please Enter all the details first!!');
      return false;
    }
  };

  issuePressed = () => {
    this.validateData();
  };

  closePressed = () => {
    this.setState({popupVisible: false});
  };

  issueDatePressed = () => {
    this.setState({issueDatePickerVisible: true});
  };

  closeIssueDatePressed = () => {
    this.setState({issueDatePickerVisible: false});
  };

  returnDatePressed = () => {
    this.setState({returnDatePickerVisible: true});
  };

  closeReturnDatePressed = () => {
    this.setState({returnDatePickerVisible: false});
  };

  onCodeChange = code => {
    this.setState({code});
  };

  renderPopup = () => {
    const {
      issueDate,
      returnDate,
      code,
      currentImg,
      currentTitle,
      currentAuthor,
      currentIsbn,
    } = this.state;
    return (
      <View style={styles.popupContainer}>
        <TouchableOpacity style={styles.close} onPress={this.closePressed}>
          <Image
            style={styles.close}
            source={require('../../assets/cross.png')}
          />
        </TouchableOpacity>
        <View style={styles.popupBody}>
          <Text style={styles.bookTitle}>{currentTitle}</Text>
          <Text style={styles.bookDetails}>{'Author: ' + currentAuthor}</Text>
          <Text style={styles.bookDetails}>{'ISBN: ' + currentIsbn}</Text>
          <View style={styles.flexRow}>
            <Image style={styles.bookCoverSmall} source={currentImg} />
            <View style={styles.form}>
              <View style={styles.row}>
                <TextInput
                  style={{marginBottom: -14}}
                  placeholder="Enter your Code here"
                  value={code}
                  onChangeText={this.onCodeChange}
                  keyboardType="numeric"
                  maxLength={2}
                />
              </View>
              <TouchableOpacity
                onPress={this.issueDatePressed}
                style={styles.row}>
                <View style={styles.flexRow}>
                  <Text>Issue Date : </Text>
                  <Text style={styles.selectText}>
                    {issueDate ? this.getDateAndTime(issueDate) : 'Select'}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.returnDatePressed}
                style={styles.row}>
                <View style={styles.flexRow}>
                  <Text>Return Date : </Text>
                  <Text style={styles.selectText}>
                    {returnDate ? this.getDateAndTime(returnDate) : 'Select'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={this.closePressed}
          style={styles.buttonCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.issuePressed} style={styles.buttonDone}>
          <LinearGradient
            style={[styles.linearGradient, {borderRadius: 12}]}
            colors={['#ffa5cf', '#FF5EAB']}
          />
          <Text style={styles.buttonText}>Issue</Text>
        </TouchableOpacity>
      </View>
    );
  };

  handleIssueDatePicked = date => {
    this.setState({issueDate: date, issueDatePickerVisible: false});
  };
  handleReturnDatePicked = date => {
    this.setState({returnDate: date, returnDatePickerVisible: false});
  };

  render() {
    const {
      catalogueData,
      popupVisible,
      issueDatePickerVisible,
      returnDatePickerVisible,
    } = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={popupVisible ? styles.containerBlurred : styles.container}>
          <FlatList data={catalogueData} renderItem={this.renderCatalogue} />
        </View>
        {popupVisible && this.renderPopup()}
        <DateTimePicker
          isVisible={issueDatePickerVisible}
          onConfirm={this.handleIssueDatePicked}
          onCancel={this.closeIssueDatePressed}
          mode="datetime"
        />
        <DateTimePicker
          isVisible={returnDatePickerVisible}
          onConfirm={this.handleReturnDatePicked}
          onCancel={this.closeReturnDatePressed}
          mode="datetime"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#92536E',
  },
  containerBlurred: {
    flex: 1,
    backgroundColor: '#92536E',
    opacity: 0.3,
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
    borderBottomColor: '#92536E',
    borderBottomWidth: 1,
    marginBottom: 14,
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
  linkText: {
    color: '#ff8100',
    fontWeight: 'bold',
  },
  catalogueItemContainer: {
    backgroundColor: '#ffa5cf',
    flexDirection: 'row',
    borderColor: '#fff2fa',
    borderWidth: 2,
    borderRadius: 10,
    margin: 8,
  },
  bookCover: {
    height: 120,
    width: 80,
    margin: 8,
    borderRadius: 8,
  },
  bookCoverSmall: {
    height: 90,
    width: 60,
    margin: 8,
    borderRadius: 8,
    marginTop: 30,
  },
  bookDetailsContainer: {
    backgroundColor: '#fff2fa',
    marginVertical: 8,
    marginRight: 8,
    flex: 1,
    padding: 10,
    borderRadius: 8,
  },
  bookTitle: {
    color: '#92536E',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bookDetailsText: {
    fontSize: 12,
    letterSpacing: -1,
  },
  availableText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0087d6', //light blue
    marginTop: 8,
  },
  popupContainer: {
    position: 'absolute',
    height: 300,
    width: '90%',
    marginHorizontal: '5%',
    top: 120,
    borderRadius: 10,
    borderColor: '#92536E',
    borderWidth: 2,
    backgroundColor: '#FFE4F6',
  },
  close: {
    position: 'absolute',
    top: 1,
    right: 1,
    height: 24,
    width: 24,
    zIndex: 1,
  },
  popupBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
  },
  selectText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#0087d6',
  },
  buttonCancel: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    width: 80,
    height: 30,
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    zIndex: 1,
  },
  buttonDone: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    width: 80,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    zIndex: 1,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },

  flexRow: {flexDirection: 'row'},
});
