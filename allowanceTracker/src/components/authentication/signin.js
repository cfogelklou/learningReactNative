'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,  
    View,
    Image
} from 'react-native';

var Button = require('../common/button');

const userImg = require('../../../res/user.png');
const passImg = require('../../../res/lock.png');
const logoImg = require('../../../res/Icon.png');
const backgroundImg = require('../../../res/antiques.jpg');

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
                <View style={styles.logoArea}>
                    {this.logoArea() }
                </View>
                <View style={styles.fieldsArea}>
                    {this.userImage() }
            <TextInput style={styles.input} 
            autoCapitalize='none'
            autoCorrect={false} 
            value={this.state.username}
                        placeholder='username'
                        returnKeyType='next'
            onChangeText={(text)=>this.setState({username: text})}
            />            
                </View>
                <View style={styles.fieldsArea}>
                    {this.passImage() }
            <TextInput 
            style={styles.input}
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            value={this.state.password} 
                        placeholder='password'
                        returnKeyType='go'
            onChangeText={(text)=>this.setState({password:text})}
            />
                </View>
                <View style={styles.checkboxArea}>
            <Text style={styles.label}>{this.state.errorMessage}</Text>
            <Button text={'Sign In'} onPress={this.onPress} />
                    <Button text={'Sign Up...'} onPress={this.onSignupPress} />
                </View>
            </View>
        )
    },
    logoArea() {
        return (<Image
            style={styles.logoPic}
            source={logoImg}
            />);
    },
    userImage() {
        return (<Image style={styles.userPic} source={userImg} />);
    },
    passImage() {
        return (<Image style={styles.userPic} source={passImg} />);
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
        justifyContent: 'space-around',
        alignItems: 'center',
        opacity: 1.0
        //justifyContent: 'space-around',
    },
    logoArea: {
        flex: 2,
        //justifyContent: 'center',
        alignItems: 'center',
        //borderColor: 'black',
        //borderWidth: 2,
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        padding: 4,
    },
    logoPic: {
        flex: 1,
        alignSelf: 'center',    
        resizeMode: 'contain',    
        padding: 4,
    },
    fieldsArea: {
        flex: 1,
        flexDirection: 'row',
        //borderColor: 'black',
        //borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    userPic: {
        flex: 1,
        alignSelf: 'center',        
        resizeMode: 'contain',
        padding: 2,
    },
    input: {
        flex: 8,
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        alignSelf: 'center',
        justifyContent: 'space-around',
    },
    label: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
    },
    checkboxArea: {
        flex: 6,
        //borderColor: 'black',
        //borderWidth: 2,
        alignSelf: 'stretch'
    }
});

