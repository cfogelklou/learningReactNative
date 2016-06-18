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

const assignments = [
            "CHARADER",
            "CHARADER",
            "Tumme mäster",
            "Sjung",
            "Rimma",
            "Rimma",
            "Regel",
            "Saga",
            "Saga",
            "Ämne",
            "Ämne"
];

const charades = [
            "Spela fotboll",
            "Basket",
            "Hockey",
            "giraff äter löv",
            "lejon",
            "katt leker med garn",
            "elefant rädd för en mus",
            "ko",
            "mus",
            "gorilla",
            "häst",
            "kanin",
            "apa",
            "hund",
            "fisk",
            "haj",
            "ambulance",
            "Sparka tegelstenar",
            "Solglasögon",
            "Mygga",
            "Sax",
            "Klippa gräss",
            "Klippa häcken",
            "Stjärna",
            "Rymdskepp",
            "Träd",
            "Flygplan",
            "Svans",
            "Basketboll",
            "Toalett",
            "Telefon",
            "Burk",
            "Trumma",
            "Spela gitarr",
            "Spela triangel",
            "Sköldpadda",
            "vingar",
            "Docka",
            "Fågel",
            "Spindel",
            "Barn",
            "Gris",
            "Krita",
            "Ärm",
            "Kanin",
            "Kamera",
            "Sten",
            "Kyckling",
            "Robot",
            "Dryck",
            "Ballong",
            "Känguru",
            "Tandborste",
            "Dörr",
            "Alligator",
            "Dansa",
            "Hoppa",
            "Mygga",
            "Polis",
            "Nypa",
            "Sova",
            "Sova som Pippi",
            "Titta på teve",
            "Arg mamma",
            "Åka skidor",
            "Ramla från cyckeln",
            "Cykla",
            "Åka skridskor",
            "Simma",
            "Leka med iPad",
            "Såga ner träd",
            "Häst",
            "Spela Matts' Hockey Spel",
            "Spela video spel",
            "Dansa runt julgran",
            "Bebis",
            "Groda",
            "T-Rex",
            "Äta en sur äpple",
            "Tända ljus",
            "Brandbil",
            "Brandmän",
            "Darth Vader",
            "Yoda",
            "Hulk",
            "Boxning",
            "Går med hunden",
            "Duscha",
            "Bada",
            "Vattna blommorna",
            "Måla",
            "Demonstrant",
            "Programmerar appar",
            "Astronaut",
            "Präst",
            "Spela pianot",
            "Paddla kanot",
            "Trumpet",
            "Fiol",
            "Skateboard",
            "Anka",
            "Mata ankarna",
            "Pirater",
            "Grilla",
            "Fiska",
            "Morfar",
            "Mormor",
            "Kalle spelar fotboll",
            "Hund",
            "Flygande orm",
            "Leopard",
            "Flygande ekorre",
            "Indominous Rex"  
];

class lysviksLeken extends Component {

  constructor(props) {
        super(props);
        this.state = {
            charadeCountdown: 10,
            isCharade: false,
            currentAssignment: 'Press a button...'
        }
    }  

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
    return (<Text>{this.state.currentAssignment}</Text>);
  }
      //onPress={this.handleStartPress}
  //const style = this.state.running ? styles.stopButton : styles.startButton;
  //this.state.running ? styles.stopButton : styles.startButton;
  assignmentButton() {
    const style = styles.dummy; 
    return <TouchableHighlight
      underlayColor="gray"
      style={[styles.button, style]}
      onPress={this.onAssignmentPress.bind(this)}>
      <Text>
        assignment
      </Text>
    </TouchableHighlight>
  }

  onAssignmentPress(){
    console.log("On assignment press")
  }

  charadeButton() {
    const style = styles.dummy; 
    if (this.state.isCharade){
    return <TouchableHighlight
      underlayColor="gray"
      style={[styles.button, style]}>
      <Text>
        charade
      </Text>
    </TouchableHighlight>
    }
    else {
      return ;
    }
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
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },

  dummy: {

  }
});

module.exports = lysviksLeken;
