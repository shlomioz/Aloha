import React, {Component} from 'react';
import {
    StyleSheet,
    Button

} from 'react-native';

export default class PurpleBut extends Component
{
    render(){
        let name = this.props.title;
        return (<Button
          onPress={this.props.func}
          title= {this.props.title}
          color="#841584"
          accessibilityLabel="PurplrButton"
          flex= {1}
          />);
    }
}