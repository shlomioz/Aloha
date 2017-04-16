
import React, {Component} from 'react';
import {
    StyleSheet,
    Button

} from 'react-native';


export default class BlueBut extends Component
{
    render(){
        let name = this.props.title;
        return (<Button
          onPress={this.props.func}
          title= {this.props.title}
          color="#2980b9"
          accessibilityLabel="BlueButton"
          flex= {1}
          />);
          
    }
}