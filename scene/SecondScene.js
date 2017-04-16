import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  Navigator,
  TextInput,
} from 'react-native';

import PurpleBut from '../modules/PurpleBut';

export default class SecondScene extends Component
{
    constructor(props) {
    super(props);
    this.state = {text: ''};
  }

    render()
    {
        var name;
        return(
            <View style={styles.Container}>
                <View style= {styles.Topic}>
                    <Text style = {styles.TopicText}>
                        Second - Scene
                    </Text>
                </View>
                <View style={styles.MainContainer}>
                    <TextInput style={{flex:1}}
                    placeHolder= "Please enter your name:"
                    placeholderTextColor='#000000'
                    onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={styles.HelloText}>
                        Hello {this.state.text}
                    </Text>
                </View>                              
            </View>);
    }
}

module.exports = SecondScene

const styles = StyleSheet.create({
    Topic:{
        backgroundColor: '#2c3e50',
    },
    Container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#34495e'
    },
    TopicText:{
        color: 'black',
        fontSize: 30,
        textAlign: "center",
        
    },
    HelloText:{
        fontSize: 30, 
        flex:2,
        textAlign: 'center',
        
    },
    MainContainer:{
        flex: 1,
        justifyContent: 'center',
        
    },

})