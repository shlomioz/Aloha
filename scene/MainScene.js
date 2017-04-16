import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  Navigator,
  TouchableHighlight,
} from 'react-native';

import PurpleBut from '../modules/PurpleBut';
import BlueBut from '../modules/BlueBut'
import SecondScene from './SecondScene'
import ImageScene from './ImagesScene'

export default class MainScene extends Component {

OnPurpleButtonPress()
{
  this.props.navigator.push({component: SecondScene, id:'SecondScene'});
};

OnBlueButtonPress()
{
  this.props.navigator.push({component: ImageScene, id:'images'});
};

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.Topic}>
          <Text style={styles.TopicText}>
            Welcome to TestApp :]
          </Text>
        </View>
        <View style={styles.welcome}>
            <Text style={styles.welcomeText}>
              Use the slider to chose which scenes do you want to see
              </Text>
        </View>
        <View>
          <PurpleBut title='move to second scene' func={this.OnPurpleButtonPress.bind(this)}/>
          <BlueBut title='move to third scene' func={this.OnBlueButtonPress.bind(this)}/>
        </View>
      </View>
    );
  }
}

module.exports = MainScene 

const styles = StyleSheet.create({
  Topic: {  
    backgroundColor: '#16a085',
  },
  TopicText: {
    color: 'black',
    fontSize: 30,
    textAlign: "center"
    
  },
  welcomeText:{
    fontSize: 20, 
    textAlign: 'center',
    
  },

  welcome: {
    backgroundColor: "#1abc9c",
    flex: 2, flexDirection: 'column',
    justifyContent: "center"
  },
});