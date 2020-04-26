import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';

export default class SignUp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mail: 'atif@gmail.com',
      firstName: 'Atif',
      lastName: 'Ansari',
      branch: 'Mechatronics Engg',
      dob: '12/12/1996',
      id: '12212',
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
      ],
    };
  }
  renderCatalogue = item => {
    const {img, title, author, isbn, copies} = item.item;
    return (
      <View style={styles.catalogueItemContainer}>
        <Image style={styles.bookCover} source={img} />
        <View style={styles.bookDetailsContainer}>
          <Text style={styles.bookTitle}>{title}</Text>
          <Text style={styles.bookDetails}>{'Author: ' + author}</Text>
          <Text style={styles.bookDetails}>{'ISBN: ' + isbn}</Text>
          <Text style={styles.availableText}>{copies + ' copies issued'}</Text>
          <TouchableOpacity
            style={styles.returnButton}
            onPress={() => Alert.alert('Returned')}>
            <Text style={styles.returnText}>Return</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  logoutPressed = () => {
    const {navigation} = this.props;
    navigation.navigate('Login');
  };

  render() {
    const {
      mail,
      firstName,
      lastName,
      branch,
      dob,
      id,
      catalogueData,
    } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.linearGradient}
          colors={['#FFF6FB', '#FFE4F6']}
        />
        <View style={styles.logoContainer}>
          <LinearGradient
            style={styles.linearGradientHigh}
            colors={['#FFE4F6', '#ffa5cf']}
          />
          <Text style={styles.nameText}>{firstName + ' ' + lastName}</Text>
          <Text style={styles.mailText}>{mail}</Text>
          <View style={styles.branchRow}>
            <Icon name="book" color="#92536E" size={18} />
            <Text style={styles.valueText}>{branch}</Text>
          </View>
          <View style={styles.detailsRow}>
            <View style={styles.dobStyle}>
              <Icon name="birthday-cake" color="#92536E" size={18} />
              <Text style={styles.valueText}>{dob}</Text>
            </View>
            <View style={styles.idStyle}>
              <Text style={styles.keyText}>ID: </Text>
              <Text style={styles.valueText}>{id}</Text>
            </View>
          </View>
          <View style={styles.smallLogoContainer}>
            <Image
              style={styles.smallLogo}
              source={require('../../assets/logo.jpeg')}
            />
          </View>
          <TouchableOpacity
            onPress={this.logoutPressed}
            style={styles.logoutContainer}>
            <Icon name="power-off" color="#92536E" size={20} />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.booksIssuedHeader}>Books Issued :</Text>
        <FlatList data={catalogueData} renderItem={this.renderCatalogue} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    borderBottomColor: '#92536E',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 4,
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 4,
  },
  button: {
    width: '100%',
    height: 60,
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
    flex: 1,
    flexDirection: 'row',
  },
  dobStyle: {
    flexDirection: 'row',
  },
  idStyle: {
    flexDirection: 'row',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  logoContainer: {
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: '100%',
  },
  linearGradientHigh: {
    width: '100%',
    height: 200,
    position: 'absolute',
    zIndex: -1,
  },
  nameText: {
    marginTop: 30,
    fontSize: 28,
    color: '#0087d6',
  },
  mailText: {
    color: '#007700',
    fontWeight: 'bold',
  },
  detailsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 16,
    width: '100%',
    justifyContent: 'space-between',
  },
  branchRow: {
    flexDirection: 'row',
    marginTop: 6,
  },
  valueText: {
    fontSize: 14,
    letterSpacing: -1,
    color: '#0087d6',
    paddingLeft: 6,
  },
  booksIssuedHeader: {
    marginTop: 22,
    marginBottom: 4,
    textAlign: 'center',
    fontSize: 16,
    color: '#da5360',
    fontWeight: 'bold',
  },

  catalogueItemContainer: {
    backgroundColor: '#ffa5cf',
    flexDirection: 'row',
    borderColor: '#92536E',
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
  smallLogoContainer: {
    position: 'absolute',
    top: -26,
    left: 4,
  },
  logoutContainer: {
    position: 'absolute',
    top: -26,
    right: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallLogo: {
    width: 72,
    height: 30,
  },
  logoutText: {
    fontSize: 12,
    color: '#da5360',
    fontWeight: 'bold',
  },
  returnButton: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    backgroundColor: '#ffa5cf',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  returnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
