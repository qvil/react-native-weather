import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./Weather";

export default class App extends React.Component {
  state = {
    isLoadded: true
  };

  render() {
    const { isLoadded } = this.state;

    return (
      <View style={styles.container}>
        {isLoadded ? <Weather /> : (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>
              Getting Weather{"\n"}
              Qvil
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#ffec99",
    justifyContent: "center"
  },
  loadingText: {
    paddingLeft: 32,
    // marginBottom: 32,
    fontSize: 32
  }
});
