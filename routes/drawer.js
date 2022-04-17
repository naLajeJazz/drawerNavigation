import React from 'react';
import Tela1 from '../Screen/Tela1';
import Tela2 from '../Screen/Tela2';
import Tela3 from '../Screen/Tela3';
import {createDrawerNavigator} from '@react-navigation/drawer';

export default props=>{

const Drawer=createDrawerNavigator();

return(

<Drawer.Navigator 
        initialRouteName='Tela1'
        screenOptions={{ }}
        
        >

  <Drawer.Screen 
        name= "Tela1" 
        component={Tela1}           
        options={{title:'home'}} />

  <Drawer.Screen 
        name='Tela2' 
        component={Tela2} 
        options={{title:'sobre'}} />
  <Drawer.Screen 
        name='Tela3' 
        component={Tela3}
        options={{title:'contato'}} />
        
   </Drawer.Navigator>

)
}