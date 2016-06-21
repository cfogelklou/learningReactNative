//'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,  
  View
} from 'react-native';

/*
var React = require('react-native');

var {
    Text, View, StyleSheet
} = React;
*/

//var Button = require('../common/button');

module.exports = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    You can sign up here!

                </Text>

            </View>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});
