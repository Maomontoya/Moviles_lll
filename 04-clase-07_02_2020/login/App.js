import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image style={styles.logo} source={require('./assets/login.png')}/>
      <TextInput maxLength={5} style={styles.TextInput} placeholder="Usuario"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:100,
    height: 100
  },
  TextInput: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    textAlign: 'center'
  }
});
