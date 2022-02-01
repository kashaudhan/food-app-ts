import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View>
      <Text>Landing screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 0,
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan',
  }
});
