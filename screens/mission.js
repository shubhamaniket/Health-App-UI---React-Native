import React from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Scroll from './scroll';
import Support from './support';

export default class Mission extends  React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}} contentContainerStyle={{width:'100%',height:'120%'}}>
                    <View style={styles.header}>
                        <Text style={styles.inline}>My Mission</Text>
                    </View>
                    <View style={styles.memos}>
                        <ScrollView 
                        horizontal={true} 
                        contentContainerStyle={{width:'200%'}}
                        showsHorizontalScrollIndicator={false}>
                            <Scroll bgcolor="#FFBE86" 
                            background={require('../assets/graphtwo.png')}
                            title="Game Of Chess"
                            month = "Sep - Nov"
                            animation = "bounceInLeft"
                            />
                             <Scroll bgcolor="#7DC9E7" 
                            background={require('../assets/graphtwo.png')}
                            title="100 Km Jogging"
                            month = "Jan - Feb"
                            animation = "bounceInLeft"
                            />
                             <Scroll bgcolor="#FFBE86" 
                            background={require('../assets/graphtwo.png')}
                            title="Netflix and Chill"
                            month = "March - April"
                            />
                             <Scroll bgcolor="#7DC9E7" 
                            background={require('../assets/graphtwo.png')}
                            title="Video Games"
                            month = "Aug - Sep"
                            />
                        </ScrollView>
                    </View>
                    <View style={styles.supportview}>
                        <Text style={styles.support}>Support</Text>
                    </View>
                    <Animatable.View animation="fadeInLeft" duration={1500} style={[styles.rectangleone,{shadowOffset: { width: 100, height: 100 },
                    shadowColor: 'rgba(138, 149, 158, 0.2)',
                    shadowOpacity: 1,
                    elevation: 30,
                    backgroundColor : "#FFFFFF"}]}>
                        <Support
                        image = {require('../assets/exercise.png')}
                        title = "Daily Exercise"
                        subtitle = "Difficulty on insensible"
                        />
                    </Animatable.View>
                    <Animatable.View animation="fadeInRight" duration={1500} style={[styles.rectangleone,{top : 580,backgroundColor:'#F4F9FC'}]}>
                        <Support
                        image = {require('../assets/apple.png')}
                        title = "Balanced Diet"
                        subtitle = "Occasional Preference fast"
                        />
                    </Animatable.View>
                    <Animatable.View animation="fadeInLeft" duration={1500} style={[styles.rectangleone,{top : 690,backgroundColor:'#F4F9FC'}]}>
                        <Support
                        image = {require('../assets/cricket.png')}
                        title = "Sports and Yoga"
                        subtitle = "Services securing health ..."
                        />
                    </Animatable.View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff'
    },
    header : {
        flex : 1,
        left : 25,
        top : 100
    },
    inline : {
        fontSize : 38,
        letterSpacing : -0.5,
        fontWeight : 'bold',
        color : '#2E2E2E'
    },
    memos : {
        height : 250,
        position : 'absolute',
        top : 160,
        width:'100%',
        marginLeft : 10
    },
    supportview : {
        position : 'absolute',
        left : 25,
        top : 420
    },
    support : {
        fontSize : 25,
        fontWeight : 'bold',
        letterSpacing : -0.5,
        color : '#2E2E2E'
    },
    rectangleone : {
        height : 85,
        width : 300,
        position : 'absolute',
        alignSelf  : 'center',
        top : 470,
        borderRadius : 18
    }
})