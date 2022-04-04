import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Authentification!</Text>
      <TextInput
      style={styles.input}
      placeholder="saisie email"
      />
      <TextInput
      style={styles.input}
      placeholder="saisie Mot de pass" 
      />
      <Button title= "Valider" >
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    
    color:'blue'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'#fff'
  },
});
