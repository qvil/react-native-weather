import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    isLoadded: false,
  };

  render() {
    const { isLoadded } = this.state;

    return (
      <View style={styles.container}>
        {isLoadded ? null : 
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Getting Weather</Text>
          </View>
            }
      </View>
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
    backgroundColor: '#ffec99',
    justifyContent: 'flex-end',
  },
  loadingText: {
    paddingLeft: 16,
    marginBottom: 32,
    fontSize: 32,
  },
});
