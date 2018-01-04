import React from "react";
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from "react-native";
import Weather from "./Weather";
import axios from 'axios';
import { API_KEY } from './config';
import string from './language/en.json';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
  state = {
    isLoadded: false,
    error: null,
    temperature: null,
    humidity: null,
    name: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.error(error);
        this.setState({ error: error });
      }
    )
  }

  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoadded: true,
          temperature: json.main.temp,
          humidity: json.main.humidity,
          name: json.weather[0].main,
        });
        return json;
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    const { isLoadded, error, temperature, humidity, name } = this.state;

    return (
      <LinearGradient
        style={styles.container}
        colors={["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7"]}
      >
        <StatusBar
          barStyle="dark-content"
        />
        {isLoadded ?
          <Weather
            name={name}
            temperature={Math.round(temperature - 273.15)}
            humidity={humidity}
          /> :
          <View style={styles.loadingContainer}>
            <Text style={[styles.text, styles.appTitle]}>
              {string.appTitle}
            </Text>
            <View>
              <ActivityIndicator size="large" />
              <Text style={[styles.text, styles.loadingText]}>
                {string.loading}
              </Text>
            </View>
            <Text style={[styles.text, styles.madeBy]}>
              {string.madeBy}
            </Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        }
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    paddingLeft: 32,
    paddingRight: 32,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'transparent',
  },
  appTitle: {
    fontSize: 32,
  },
  loadingText: {
    fontSize: 24,
  },
  madeBy: {
    fontSize: 16,
    color: '#1864ab',
  },
  errorText: {
    color: 'red',
    fontSize: 32,
    backgroundColor: 'transparent',
  },
});
