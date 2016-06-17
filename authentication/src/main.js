'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Signin = require('./components/authentication/signin');

module.exports = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Signin />
            </View>
        )

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
