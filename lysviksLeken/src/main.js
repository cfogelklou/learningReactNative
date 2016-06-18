/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const mooseImg = require('../res/moose.jpg');

class lysviksLeken extends Component {
  render() {
    return (        
      <View style={styles.container}>
      <Image
        style={styles.moosePic}
        source={mooseImg}
      />      
        <Text style={styles.welcome}>
          Welcome to React Native!  This app is cross platform!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/main.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  moosePic: {
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = lysviksLeken;
