import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const gradientColors = {
  rainy: ["#00C6FB", "#005BEA"],
  sunset: ["#5f3dc4", "#845ef7", "#fd7e14"],
}

class Weather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient
        // colors={gradientColors.sunset}
        colors={gradientColors.rainy}
        style={styles.container}
      >
        <View style={styles.upper}>
          <Ionicons color="white" size={144} name="ios-rainy"/>
          <Text style={[styles.temperature, styles.text]}>30°C</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining</Text>
          <Text style={[styles.subTitle, styles.text]}>For more info look outside</Text>
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
  text: {
    color: 'white',
  },
  temperature: {
    fontSize: 40,
  },
  title: {
    fontSize: 40,
    color: 'white',
  },
  subTitle: {
    fontSize: 24,
  },
});

export default Weather;