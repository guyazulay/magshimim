import React, { useState, useEffect } from 'react'
import './App.css'
import Header from '../components/Header/Header';
import {getSensorsState} from "../api"
import { useInterval, getReadableSensors } from '../helpers';
import Sensor from '../components/Sensor/Sensor';
import LedMatrix from '../components/LedMatrix/LedMatrix';

const POLLING_PERIOD_TIME = 5000


const App = props => {
    const [isActive, setIsActive] = useState(false)
    const [sensors={}, setSensors] = useState({})
    useInterval(()=>{
        getSensorsState()
        .then(({data={}})=>{
            setIsActive(true)
            setSensors({...data})
        })
        .catch(error =>{
            setIsActive(false)
        })
    },POLLING_PERIOD_TIME)
        return (
            <div className="App-container">
                <Header isActive={isActive} />
                <div className="App-content">
                    <Sensors sensors={sensors} />
                    <LedMatrix className="App-led-matrix" leds={sensors.led_array}/>
                </div>
            </div>
        )
    }

    const Sensors = ({sensors={}}) => 
        <div className="App-sensors">
            {getReadableSensors()
            .map(({title, name, unit}) =>
            <Sensor 
                title={title}
                value={sensors[name] || ""}
                unit={unit}
                className="App-sensors-sensor"
                valueClassName={name === "compass" && "App-compass-value"}
                unitClassName={name === "temperature" && "App-temperature-unit"}
                key={name}
            />
            )}
        </div>
    

export default App
