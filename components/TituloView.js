import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default props => {

return(
  
<View style={[Estilo.container,{backgroundColor:props.corFundo || '#000'}]}>

   <Text style={[Estilo.fs_5,{color:props.corTexto ||'#fff'}]}>
   { props.children }
   </Text>

</View>

)

}
const Estilo = StyleSheet.create({

  container:{
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
  },
  fs_5:{
fontSize:50
  }
})