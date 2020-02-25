import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.text}>Vista 1</Text>
          <Text style={styles.text}>Vista 1</Text>
          <Text style={styles.text}>Vista 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Vista 2</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.box3}>
          <Text style={styles.text}>Vista 3</Text>
        </View>
        <View style={styles.box4}>
        <Text style={styles.text}>Vista 4</Text>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#311b92',
    flexDirection: 'row',
    
  },
  container2: {
    flex: 1,
    backgroundColor: '#311b92',
    flexDirection: 'row',
    
  },
  text: {
    color:'#2e7d32',
  },
  box1: {
    flex :1,
    backgroundColor: '#f57f17',
    flexDirection: 'row'
     
    
  },
  box2: {
    flex :1,
    backgroundColor: '#00e676'
  },
  box3: {
    flex :1,
    backgroundColor: '#ff1744'
  },
  box4: {
    flex :1,
    backgroundColor: 'blue'
  }
});
