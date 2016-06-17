/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Login = require('./src/Login');

var githubbrowse = React.createClass({
  //<Login />
  render(){
    if (this.state.isLoggedIn){
      return (
        <View style={styles.container}>
          <Text style = {styles.welcome}>
          Logged In
          </Text>
        </View>
      );
    }
    return (
        <Login onLogin={this.onLogin} />
    );
  },
  onLogin: function() {
    this.setState({isLogged: true});
  },
  getInitialState(){
    return {
      isLoggedIn: false
    }
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('githubbrowse', () => githubbrowse);
