export const validateEmail = email => {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email.trim()));
};

export const getImagePath = code => {
  switch (code) {
    case '11':
      return require('../../assets/b1.jpeg');
    case '12':
      return require('../../assets/b2.jpeg');
    case '13':
      return require('../../assets/b3.jpeg');
    case '14':
      return require('../../assets/b4.jpeg');
    case '21':
      return require('../../assets/b5.jpeg');
    case '22':
      return require('../../assets/b6.jpeg');
    case '23':
      return require('../../assets/b7.jpeg');
    case '24':
      return require('../../assets/b8.jpeg');
    case '31':
      return require('../../assets/b9.jpeg');
    case '32':
      return require('../../assets/b10.jpg');
    case '33':
      return require('../../assets/b11.jpeg');
    case '34':
      return require('../../assets/b12.jpg');
  }
};

// catalogueData: [
//   {
//     img: require('../../assets/b1.jpeg'),
//     title: 'FIB 20103 Occupational Safety and Health',
//     author: 'Mr Yusuf',
//     isbn: '9336606401',
//     code: 11,
//     copies: 5,
//   },
//   {
//     img: require('../../assets/b2.jpeg'),
//     title: 'FKB 1103 Applied Calculus',
//     author: 'Madam Axniab',
//     isbn: '9336606402',
//     code: 12,
//     copies: 5,
//   },
//   {
//     img: require('../../assets/b3.jpeg'),
//     title: 'FIB 12303 Material Science',
//     author: 'Madam Axwani',
//     isbn: '9336606403',
//     code: 13,
//     copies: 5,
//   },
//   {
//     img: require('../../assets/b4.jpeg'),
//     title: 'FIB 11203 Automation Technology',
//     author: 'Mr Zulkhairi',
//     isbn: '9336606404',
//     code: 14,
//     copies: 5,
//   },
//   {
//     img: require('../../assets/b5.jpeg'),
//     title: 'FAB 20703 Robotics',
//     author: 'Mr Amir Sharizam',
//     isbn: '9336606405',
//     code: 21,
//     copies: 5,
//   },
//   {
//     img: require('../../assets/b6.jpeg'),
//     title: 'FAB 35803 Control System',
//     author: 'Madam Murni',
//     isbn: '9336606406',
//     code: 22,
//     copies: 5,
//   },
//   {
//     img: require('../../assets/b7.jpeg'),
//     title: 'FAB 30104 Mechatronics System Design',
//     author: 'Madam Siti Khadija',
//     isbn: '9336606407',
//     code: 23,
//     copies: 5,
//   },
//   {
//     img: require('../../assets/b8.jpeg'),
//     title: 'FMB 70503 Mechanics and Machine Design',
//     author: 'Mr Azwan',
//     isbn: '9336606408',
//     code: 24,
//     copies: 5,
//   },
//   {
//     img: require('../../assets/b9.jpeg'),
//     title: 'FIB 42203 Industrial Ergonomics',
//     author: 'Mr Yusuf',
//     isbn: '9336606409',
//     code: 31,
//     copies: 5,
//   },
//   {
//     img: require('../../assets/b10.jpg'),
//     title: 'FAB 30303 Mobile Robotics',
//     author: 'Mr Taha',
//     isbn: '9336606410',
//     code: 32,
//     copies: 5,
//   },
//   {
//     img: require('../../assets/b11.jpeg'),
//     title: 'FAB 30403 Modern Control',
//     author: 'Mr Fadzil',
//     isbn: '9336606410',
//     code: 33,
//     copies: 5,
//   },
//   {
//     img: require('../../assets/b12.jpg'),
//     title: 'FAB 40104 Automated System Diagnostic and Maintaenance',
//     author: 'Mr Amir Sharizamam',
//     isbn: '9336606410',
//     code: 34,
//     copies: 5,
//   },
// ],
