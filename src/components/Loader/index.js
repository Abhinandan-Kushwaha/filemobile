import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator animating size="large" />
  </View>
);

export default Loader;

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    alignSelf: 'center',
  },
});
