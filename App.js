import React from 'react';
import{View,Text,StyleSheet}from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './routes/drawer';

export default ()=>{

return(

<View style={Estilo.container}>

<NavigationContainer>

   <Drawer/>

</NavigationContainer>


</View>
)
}

const Estilo=StyleSheet.create({
container:{
  flexGrow:1
}

})