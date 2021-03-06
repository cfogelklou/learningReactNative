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
            password: '',
            errorMessage: '',
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
            
            <Text style={styles.label}>{this.state.errorMessage}</Text>
            <Button text={'Sign In'} onPress={this.onPress} />
            <Button text={'In need an account...'} onPress={this.onSignupPress} />
            
            </View>
        )
    },
    onPress(){
        // Log the user in.
        console.log("onPress()!");

        // TODO, do login here!!!
        
        // This is where the parse stuff would go, but we are skipping over that for now.
        if (this.state.password == "password1927") {
            this.setState({ errorMessage: ''});
        }
        else {
            this.setState({ errorMessage: 'wrong password'});
        }
    },
    onSignupPress(){
        // Navigate over to signup
        //ideal == navigator.push('signup');
        // this.props.navigator gets SET by the main.js renderScene() call, it is set in 
        //   return <Component route={route} navigator={navigator} />;
        this.props.navigator.push({name: 'signup'});
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

