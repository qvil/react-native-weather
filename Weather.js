import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { PropTypes } from 'prop-types';
import WeatherCases from './WeatherCases';

const Weather = ({ name, temperature }) => {
  return (
    <LinearGradient
        colors={WeatherCases[name].colors}
        style={styles.container}
      >
        <View style={styles.upper}>
          <Ionicons color="white" size={144} name={WeatherCases[name].icon}/>
          <Text style={[styles.temperature, styles.text]}>{`${temperature}°C`}</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>{WeatherCases[name].title}</Text>
          <Text style={[styles.subTitle, styles.text]}>{WeatherCases[name].subTitle}</Text>
        </View>
      </LinearGradient>
  );
};

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

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default Weather;