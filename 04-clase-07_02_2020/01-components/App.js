import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Vista 1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Vista 2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Vista 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#311b92',
    flexDirection: 'column'
  },
  text: {
    color:'#2e7d32',
  },
  box1: {
    flex :3,
    backgroundColor: '#f57f17'
  },
  box2: {
    flex :1,
    backgroundColor: '#00e676'
  },
  box3: {
    flex :1,
    backgroundColor: '#ff1744'
  }
});
