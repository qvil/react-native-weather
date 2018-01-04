import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PropTypes } from 'prop-types';
import WeatherCases from './WeatherCases';
import string from './language/en.json';

const Weather = ({ name, temperature, humidity }) => {
  return (
    <LinearGradient
      colors={WeatherCases[name].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons color="white" size={144} name={WeatherCases[name].icon} />
        <Text style={[styles.title, styles.text]}>{`${temperature}°C`}</Text>
        <Text style={[styles.subTitle, styles.text]}>{`${string.humidity} : ${humidity}%`}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{string.weather[name].title}</Text>
        <Text style={[styles.subTitle, styles.text]}>{string.moreInfo}</Text>
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
  text: {
    color: 'white',
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
  humidity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default Weather;