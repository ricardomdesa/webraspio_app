import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LigaDesliga } from './components/LigaDesliga';
import { Temperature } from './components/Temperature';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WebRaspIO app!</Text>
      <StatusBar style="auto" />
      <LigaDesliga />
      <Temperature />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: "white"
  }
});
