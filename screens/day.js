import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default class Day extends React.Component{
    render(){
        return(
            <View style={styles.box1}>
                <View style={{borderRadius:10,padding:5,backgroundColor: this.props.active}}>
                    <Text style={{color:'#fff'}}>{this.props.dayname}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box1 : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
})