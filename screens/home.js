import React from 'react';
import {View,Text,TouchableOpacity,TouchableWithoutFeedback,StyleSheet,ImageBackground} from 'react-native';
import Day from './day';
import Card from './card';
export default class Home extends  React.Component{
    state = {
        color : '#136DF3',
        activestate : 'rgba(255, 255, 255, 0.291821)'
    }
    change = () => {
        return(
            this.props.navigation.navigate('Mission')
        );
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containerone}>
                    <View style={styles.boxone}></View>
                    <View style={styles.boxtwo}>
                        <Text style={styles.name}>Hi, Anna</Text>
                        <Text style={styles.subtitle}>Here is your health</Text>
                    </View>
                    <View style={styles.boxthree}>
                        <ImageBackground source={require('../assets/graphone.png')} style={{width:360,height:'100%'}}/>
                    </View>
                    <View style={styles.boxfour}>
                        <Day dayname='Sun'/>
                        <Day dayname='Mon'/>
                        <Day dayname='Tue'/>
                        <Day dayname='Wed'/>
                        <Day dayname='Thu' active={this.state.activestate}/>
                        <Day dayname='Fri'/>
                        <Day dayname='Sat'/>
                    </View>
                </View>
                <View style={styles.containertwo}>
                    <View style={styles.line}></View>
                    <View style={styles.progress}>
                        <Text style={styles.textone}>My Progress</Text>
                    </View>
                    <View style={styles.cards}>
                        <Card 
                        move="bounceInLeft" 
                        image={require('../assets/checkbox.png')} 
                        title="Mission" 
                        subtitle="85% Completed"
                        completed="85%"
                        screenchange = {()=>this.change()}
                        />

                        <Card 
                        move="bounceInRight" 
                        image={require('../assets/checktodo.png')} 
                        title="Completed" 
                        subtitle="5 out of 10 tasks"
                        completed="75%"
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        display : 'flex',
        backgroundColor : '#136DF3'
    },
    containerone : {
        flex : 1.5,
        display : 'flex'
    },
    containertwo : {
        flex : 1,
        backgroundColor : '#fff',
        borderTopRightRadius : 60,
        borderTopLeftRadius : 60,
    },
    boxone : {
        flex : 1,
    },
    boxtwo : {
        flex : 0.8,
        marginHorizontal : 35
    },
    boxthree : {
        flex : 2.5,
    },
    boxfour : {
        flex : 0.5,
        color : '#fff',
        flexDirection : 'row'
    },
    name : {
        fontSize : 38,
        color : '#fff',
        fontWeight : 'bold',
        letterSpacing : -0.5,
    },
    subtitle : {
        fontSize : 20,
        color : '#fff'
    },
    line : {
        width : 66,
        height : 4,
        backgroundColor : '#F4F0F0',
        borderRadius : 2,
        marginVertical : 25,
        left : 150
    },
    progress : {
        left : 50
    },
    textone : {
        fontSize : 20,
        color : '#2D2D2D',
        letterSpacing : -0.5
    },
    cards : {
        flex : 1,
        display : 'flex',
        marginTop : 10,
        marginHorizontal : 30
    },
    
})