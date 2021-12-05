import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { LigaDesliga } from '../../components/LigaDesliga';
import { CurrentTemperature } from '../../components/CurrentTemperature';

export default function MainPage() {

  const [temperatureControl, setTemperatureControl] = useState(false);

    const toggleSwitch = () => {
        setTemperatureControl(!temperatureControl);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>WebRaspIO app!</Text>
        <StatusBar style="auto" />

        <Text style={[{ fontSize: 20, color: "white", margin: 30}]}>
          Controle manual
        </Text>
        <Switch style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]}}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={temperatureControl ? "green" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={temperatureControl}
                />
                
        { temperatureControl && <LigaDesliga temperatureControl={temperatureControl}/> }
        
        <CurrentTemperature temperatureControl={temperatureControl}/>
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
  