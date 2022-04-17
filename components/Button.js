import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default (props) => {
  console.log(Object.keys(props));
  return (
    <View style={Estilo.container}>
      <View style={Estilo.containerBtn}>
        <Button
          title="voltar"
          color="#05C7F2"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </View>

      <View style={Estilo.containerBtn}>
        <Button
          title="avançar"
          color="#05C7F2"
          onPress={() => {
            props.navigation.navigate(props.tela);
          }}
        />
      </View>
    </View>
  );
};
const Estilo = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerBtn: {
    flexGrow: 1,
  },
});
