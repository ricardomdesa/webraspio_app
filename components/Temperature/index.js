import React, { useState, useEffect } from 'react';
import { StyledView, StyledTempText } from './styles';
import {sendGetRequest} from '../../services/ApiService'

export const Temperature = (props) => {
    const [temp, setTemperature] = useState(0.0);
  
    const getTemperature = () => {
        let temperature = 0.0;
        sendGetRequest("/temp/")
        .then(resp => {
            setTemperature(resp.data.temp);
        })
            .catch(err => setTemperature(0.0));
       return temperature;
    }
    useEffect(() => {  
        const interval = setInterval(() => {
        getTemperature()
      }, 10000);
      return () => clearInterval(interval);
     }, []);

    return (
        <StyledView>
            <StyledTempText>{ temp } ºC</StyledTempText>
        </StyledView>
    )
  }

