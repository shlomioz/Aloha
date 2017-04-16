import React, {Component} from 'react';
import {
    StyleSheet,
    Image,

} from 'react-native';


export default class ImageComp extends Component
{
    render(){
       
       return(
        
        <Image
          style={{width: 200, height: 200}}
          source={{uri: this.props.url}}
        />
        );
    }
}