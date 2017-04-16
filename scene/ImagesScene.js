import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView,
} from 'react-native';
import ImageComp from '../modules/Image'

export default class ImageScene extends Component
{

    render()
    {
        var omer = 'https://o.aolcdn.com/images/dims?quality=100&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fb386937631a1f03665c1d57289070898%2F203417456%2Fsimpsons.jpg&client=cbc79c14efcebee57402&signature=14f6a6e1e447a0fc9bdbb1ea6875f386d2310ca5';
        var bart1 = 'https://c1.staticflickr.com/6/5453/9127044371_ff37714a56_z.jpg';
        var bart2 = 'https://c1.staticflickr.com/3/2150/2101058680_64fa63971e.jpg';
        return(
                <View style={styles.AllSceneContainer}>
                    <Text style={styles.Text}>Wellcome to the scorllView scene</Text>
                    <View style={styles.ScrollViewContainter}>
                        <ScrollView style={styles.ScrollView}
                         automaticallyAdjustContentInsets={true}>
                            <ImageComp url={bart1}/>
                            <ImageComp url={omer}/>
                            <ImageComp url={bart2}/>
                            <ImageComp url={bart1}/>
                            <ImageComp url={omer}/>
                            <ImageComp url={bart2}/>
                            <ImageComp url={bart1}/>
                            <ImageComp url={omer}/>
                            <ImageComp url={bart2}/>
                        </ScrollView> 
                    </View>
                </View>                     
            );
    }
}

const styles =StyleSheet.create({
    AllSceneContainer:{
        flex: 1, flexDirection: 'column'
    },
    Text:{
        flex:1,
        fontSize: 45
    },
    ScrollViewContainter:{
        flex:2, 
        alignItems: 'stretch'
    },
    ScrollView:
    {
        borderRadius: 50, 
        borderColor: '#2c3e50'
    }
})
