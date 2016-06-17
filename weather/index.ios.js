/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// Whole-script strict mode syntax
"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  MapView,
  View,
  StyleSheet,
  Text,
} from 'react-native';

var Api = require('./src/api');

//class weather extends Component {
var Weather = React.createClass({
  getInitialState() {
    return {
      pin: {
        latitude: 0, 
        longitude: 0
      },
      city: '',
      temperature: '',
      description: '',
    }

  },
  // Called whenever state changes
  // Render can only return one componenet
  render() {
    var pins = [{ latitude: 59.5, longitude: 11.4 }];
    return ( <View style={styles.container}>
      <MapView
        annotations={[this.state.pin]}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={styles.map}>
      </MapView>
      <View style = {styles.textWrapper}>
      <Text style = {styles.text}>{this.state.city}</Text>
      <Text style = {styles.text}>{this.state.temperature}</Text>
      <Text style = {styles.text}>{this.state.description}</Text>
      </View>
      </View>
    );
  },

  // Callback called when region/center changes.
  onRegionChangeComplete(region) {
    console.log(region);

    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }

    });

    Api(region.latitude, region.longitude)
    //.then(function(data){  This is an anonymous function
      .then((data) => { // This makes sure that this is defined as this object!!!
        console.log(data);
      this.setState(data);
    });
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f5fcff'
  },
  map: {
    flex: 2,
    marginTop: 30
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center'

  },
  text: {
    fontSize: 30
  }
});


// Do in the root component
AppRegistry.registerComponent('weather', () => Weather);
