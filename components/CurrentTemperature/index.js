import React, { useState, useEffect } from 'react';
import { StyledView, StyledTempText } from './styles';
import {sendGetRequest} from '../../services/ApiService'

export const CurrentTemperature = (props) => {
    const [temp, setTemperature] = useState(0.0);
  
    const getTemperature = () => {
        sendGetRequest("/temp/")
        .then(resp => {
            setTemperature(resp.data.temp);
        })
            .catch(err => setTemperature(0.0));
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

