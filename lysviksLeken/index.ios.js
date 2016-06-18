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

var React = require('react-native');
var {AppRegistry} = React;

var Main = require('./src/main');

AppRegistry.registerComponent('lysviksLeken', () => Main);

//AppRegistry.registerComponent('lysviksLeken', () => lysviksLeken);
