import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from "./Weather";
import axios from 'axios';

import { API_KEY } from './config';

export default class App extends React.Component {
  state = {
    isLoadded: false,
    error: null,
    temperature: null,
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
          name: json.weather[0].main,
        });
        return json;
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    const { isLoadded, error, temperature, name } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        {isLoadded ?
          <Weather
            name="Rain"
            temperature={Math.round(temperature - 273.15)}
          /> :
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>
              Getting Weather{"\n"}
              Qvil
            </Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    paddingLeft: 32,
    backgroundColor: "#ffec99",
    justifyContent: "center",
  },
  loadingText: {
    // marginBottom: 32,
    fontSize: 32,
  },
  errorText: {
    color: 'red',
    fontSize: 32,
    backgroundColor: 'transparent',
  },
});
