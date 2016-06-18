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
          {this.moosePic()}
        </View>
        <View style={styles.buttonWrapper}>
          {this.assignmentButton()}
          {this.charadeButton()}
        </View>
        <View style={styles.whatToDoArea}>
          {this.assignmentArea()}
        </View>
      </View>
    );
  }

  moosePic(){
    return (<Image
            style={styles.moosePic}
            source={mooseImg}
            />);
  }

  assignmentArea(){
    return (<Text>ToDo!</Text>);
  }
      //onPress={this.handleStartPress}
  //const style = this.state.running ? styles.stopButton : styles.startButton;
  //this.state.running ? styles.stopButton : styles.startButton;
  assignmentButton() {
    const style = styles.dummy; 
    return <TouchableHighlight
      underlayColor="gray"
      style={[styles.button, style]}>
      <Text>
        assignment
      </Text>
    </TouchableHighlight>
  }

  charadeButton() {
    const style = styles.dummy; 
    return <TouchableHighlight
      underlayColor="gray"
      style={[styles.button, style]}>
      <Text>
        charade
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
    flex: 2,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'    
  },
  moosePic: {
    flex: 1,
    //padding: 10,
    alignSelf: 'center',
    //opacity: 0.2
  },  
  buttonWrapper: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    alignSelf: 'stretch'
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#48BBEC',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  whatToDoArea: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'blue',
    alignSelf: 'stretch'
  },

  dummy: {

  }
});

module.exports = lysviksLeken;
