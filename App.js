import React from 'react';
import { Button, View, Text, ActivityIndicator } from 'react-native';
import Login from './screens/login';
import Registro from './screens/registro'; 
import Usuario from './screens/usuario';
import Api from './screens/api';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/*function loginView(){
  return(
    <Login></Login>
  );
}

function datosValView(){
  return(
    <DatosVal></DatosVal>
  );
}

function registroView(){
  return(
    <Registro></Registro>
  );
}*/

const Stack = createStackNavigator();

const App:() => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack-Screen name="Usuario" component={Usuario}/>
        <Stack.Screen name="Api" component={Api}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;