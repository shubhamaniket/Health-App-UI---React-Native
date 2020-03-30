import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import Home from './screens/home';
import Mission from './screens/mission';
const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
            headerTransparent:true,
            headerLeft : () => (
              <Image source={require('./assets/drawericon.png')} style={{}}/>
            ),
            title : '',
            headerRight : () => (
              <Image source={require('./assets/user.png')} style={{marginHorizontal:20,marginTop:40}}/>
            )
            }}/>
          <Stack.Screen name="Mission" component={Mission} options={{
            headerTransparent:true,
            headerLeft : () => (
              <Image source={require('./assets/blackmenu.png')} style={{marginHorizontal:20,marginTop:40}}/>
            ),
            title : '',
            headerRight : () => (
              <Image source={require('./assets/user.png')} style={{marginHorizontal:35,marginTop:45}}/>
            )
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}