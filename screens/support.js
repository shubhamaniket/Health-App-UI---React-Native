import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Support extends React.Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                    <Image source={this.props.image}/>
                </View>
                <View style={{flex:5,margin:15}}>
                    <Text style={{fontSize:20,fontWeight:'bold',letterSpacing:-0.5,color:'#2D2D2D'}}>{this.props.title}</Text>
                    <Text style={{fontSize:15,color:'#BEC4C9',}}>{this.props.subtitle}</Text>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity>
                        <Image source={require('../assets/rightbutton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}