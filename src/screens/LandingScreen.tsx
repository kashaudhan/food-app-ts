import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>Navigation</Text>
      </View>
      <View style={styles.body}>
        <Text>Body</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  navigation: {
    flex: 2,
    backgroundColor: 'red',
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  footer: {
    flex: 1,
    backgroundColor: "cyan",
  },
});
