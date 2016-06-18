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
  Image,
  TouchableHighlight
} from 'react-native';

const mooseImg = require('../res/moose.jpg');

class lysviksLeken extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mooseArea}>
          <Image
            style={styles.moosePic}
            source={mooseImg}
            />
        </View>
        <View style={styles.buttonWrapper}>
          {this.charadeButton()}
          {this.charadeButton()}
        </View>
        <View style={styles.whatToDoArea}>
          <Text>ToDo!</Text>
        </View>
      </View>
    );
  }
      //onPress={this.handleStartPress}
  //const style = this.state.running ? styles.stopButton : styles.startButton;
  charadeButton() {
    return <TouchableHighlight
      underlayColor="gray"
      style={[styles.button]}>
      <Text>
        'assignment'
      </Text>
    </TouchableHighlight>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mooseArea: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green'
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  whatToDoArea: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'blue'
  },
  moosePic: {
    flex: 1,
    //padding: 10,
    alignSelf: 'center',
    //opacity: 0.2
  }
});

module.exports = lysviksLeken;
