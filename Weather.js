import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from 'expo';

class Weather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient
        colors={["#5f3dc4", "#845ef7", "#fd7e14"]}
        style={styles.container}
      >
        <View style={styles.upper}>
          <Text style={styles.icon}>Icon</Text>
          <Text style={styles.temperature}>Temp</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.subTitle}>SubTitle</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  lower: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  icon: {
  },
  temperature: {
  },
  title: {
    fontSize: 40,
  },
  subTitle: {
    fontSize: 24,
  },
});

export default Weather;