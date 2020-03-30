import React from 'react';
import {View,Image,StyleSheet,Text,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
export default class Card extends React.Component{
    render(){
        return(
            <Animatable.View animation={this.props.move} duration={1500} style={styles.cardone}>
                <TouchableOpacity style={styles.box1} onPress={this.props.screenchange}>
                    <View style={{borderRadius:21,backgroundColor:'rgba(255, 190, 134, 0.2);',height:'100%',flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image source={this.props.image}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.box2}>
                    <Text style={{fontSize:20,color:'#2D2D2D',letterSpacing:-0.9}}>{this.props.title}</Text>
                    <Text style={{fontSize:15,color:'#BEC4C9',letterSpacing:-0.5,paddingVertical:5}}>{this.props.subtitle}</Text>
                </View>
                <View style={styles.box3}>
                    <View style={{height:'100%',width:'90%',borderWidth:1,borderColor:'#136DF3',borderRadius:100,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#136DF3'}}>{this.props.completed}</Text>
                    </View>
                </View>
            </Animatable.View>
        );
    }
}
const styles = StyleSheet.create({
    cardone : {
        flex : 1,
        marginBottom : 15,
        display : 'flex',
        flexDirection : 'row'
    },
    cardtwo : {
        flex : 1,
    },
    box1 : {
        flex : 1,
        paddingHorizontal : 10
    },
    box2 : {
        flex : 1,
    },
    box3 : {
        flex : 1,
    }
})