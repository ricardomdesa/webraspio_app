import React, { useState } from 'react';
import { Switch } from 'react-native';
import { StyledView, StyledText } from './styles';
import {sendPostRequest} from '../../services/ApiService'

export const LigaDesliga = (props) => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        sendApi(isOn);
        setIsOn(!isOn);
    }
  
    return (
        <StyledView>
            <StyledText>Ligar/Desligar Saida</StyledText>
            <Switch style={[{alignItems: 'center', justifyContent: 'center', transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]}]}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isOn ? "green" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isOn}
            />
        </StyledView>
    )
  }

const sendApi = (isOn) => {
    if (!isOn){
        sendPostRequest("/on/")
            .catch(err => alert("on " + err));
    }
    else {
        sendPostRequest("/off/")
            .catch(err => alert("off " + err));
    }
}
