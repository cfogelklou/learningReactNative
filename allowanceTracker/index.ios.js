/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
*/
'use strict';

//import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

var Main = require('./src/main');

AppRegistry.registerComponent('allowanceTracker', () => Main);