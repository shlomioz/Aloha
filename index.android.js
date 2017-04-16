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
  Button,
  Alert,
  View,
  Navigator,
} from 'react-native';

import MainScene from './scene/MainScene';
import SecondScene from './scene/SecondScene';



export default class HelloWorld extends Component {
  
  renderFunc = (route,navigator) => {
  let RouteComponent = route.component;
  return( <RouteComponent navigator={navigator} {...this.props}/>);
}

  render() {
    return (
      <Navigator 
        styles={flex=1}
        initialRoute= {{component: MainScene, id: 'MainScene'}}
        renderScene={this.renderFunc.bind(this)}/> 
      );
  }
}



AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
