/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
var formatTime = require('minutes-seconds-milliseconds');

var StopWatch = React.createClass({

  // AUTOMATICALLY CALLED!
  // Sets up the initial state of the StopWatch class.
  getInitialState() {
    console.log("getInitialState()");
    return {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
  },

  // AUTOMATICALLY CALLED!
  // renders the entire view based on current state.
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header]}>
          <View style={[styles.timerWrapper]}>
            <Text style={styles.timer}>
              {formatTime(this.state.timeElapsed) }
            </Text>
          </View>
          <View style={[styles.buttonWrapper]}>
            {this.startStopButton() }
            {this.lapButton() }
          </View>
        </View>
        <View style={[styles.footer]}>
          {this.laps() }
        </View>
      </View>
    );
  },

  // Helper function, renders the laps view based on current state.
  laps() {
    // calls a for-each function and passes 
    // - the value at each entry
    // - and the array index
    // 
    //return this.state.laps.map(function(time, index){
    return this.state.laps.map((time, index) => {
      return <View style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(time) }
        </Text>
      </View>
    });
  },

  // Renders the startStopButton
  startStopButton() {
    const style = this.state.running ? styles.stopButton : styles.startButton;
    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress}
      style={[styles.button, style]}>
      <Text>
        {this.state.running ? 'Stop' : 'Start' }
      </Text>
    </TouchableHighlight>
  },

  // Renders the lap button
  lapButton() {
    return (<TouchableHighlight
      style={styles.button}
      underlayColor="gray"
      onPress={this.handleLapPress}
      >
      <Text>
        Lap
      </Text>
    </TouchableHighlight>);
  },

  // Handles the lap button being pressed.
  handleLapPress() {
    var lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap]) // Never want to change state directly!
      // The concat returns a completely new array. 
    });
  },

  // Handles the start button being pressed.
  handleStartPress() {
    if (this.state.running) {// is the timer running ? )
      clearInterval(this.interval);
      this.setState({ running: false });
      return;
    }

    var startTime = new Date();

    // setState will cause a re-render in react!
    this.setState({ startTime: new Date() });

    // Always use setState to change state, never by setting values directly.

    this.interval = setInterval(() => {
      // setState will cause a re-render in react!
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30); // Every 30 ms, setInterval will update the date.    
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    alignItems: 'stretch'
  },
  header: {  // Yellow
    flex: 1 // Fill the entire screen
  },
  footer: { // Blue
    flex: 1 // Fill the entire screen    
  },
  timerWrapper: { // Red
    flex: 5, // takes up 5/8 of the available space
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { // Green
    flex: 3, // takes up 5/8 of the available space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontFamily: 'Helvetica',
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontFamily: 'Helvetica',
    fontSize: 30
  }

});

// Our top-level app is "StopWatch"
AppRegistry.registerComponent('stopwatch', () => StopWatch);
