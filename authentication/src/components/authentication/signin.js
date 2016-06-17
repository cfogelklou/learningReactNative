'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

var Button = require('../common/button');

module.exports = React.createClass({
    getInitialState() {
        return {
            username: '',
            password: ''
        }
    },
    render() {
        return (
            <View style={styles.container}>
            <Text>Sign In</Text>
            
            <Text style={styles.label}>Username:</Text>
            <TextInput style={styles.input} 
            autoCapitalize='none'
            autoCorrect={false} 
            value={this.state.username}
            onChangeText={(text)=>this.setState({username: text})}
            />            
            
            <Text style={styles.label}>Password:</Text>
            <TextInput 
            style={styles.input}
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            value={this.state.password} 
            onChangeText={(text)=>this.setState({password:text})}
            />
            
            <Button text={'Sign In'} onPress={this.onPress} />
            
            </View>
        )
    },
    onPress(){
        // Log the user in.
        console.log("onPress()!");
        this.setState({password: ''});
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        width: 200,
        alignSelf: 'center'
    },
    label: {
        fontSize: 18
    }
});

