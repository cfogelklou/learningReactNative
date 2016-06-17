'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
const ROUTES = {
    signin: Signin, // Refer to Signin component
    signup: Signup
};

module.exports = React.createClass({
    componentWillMount() {
        // This is where parse was initialized.
    },
    renderScene(route, navigator) {
        // route, at first, will be the object with name signin.
        // Whatever we return from this function will be what is pushed onto the stack.
        var Component = ROUTES[route.name];
        return <Component />;
    },
    render() {
        return (
            <Navigator style={styles.container}
            initialRoute = {{name: 'signin'}}
            renderScene = {this.renderScene}
            configureScene = {() => { return Navigator.SceneConfigs.FloatFromRight; } }
            />
        )

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
