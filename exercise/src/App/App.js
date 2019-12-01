import React, { useState, useEffect } from 'react'
import './App.css'
import Header from '../components/Header/Header';
import { getSensorsStatePromise } from "../api"
import { useInterval, getReadableSensors } from '../helpers';
import Sensor from '../components/Sensor/Sensor';
import LedMatrix from '../components/LedMatrix/LedMatrix';

const POLLING_PERIOD_TIME = 1;

const App = () => {
    const [isActive, setIsActive] = useState(false)
    const [sensors = {}, setSensors] = useState({})
    // POLLING HERE
    useInterval(() => {
        // Remember, when getting an error - isActive should be false, true otherwise.
        // Here you can use getSensorsPromise
    }, POLLING_PERIOD_TIME) // ??? == POLLING_PERIOD_TIME
    return (
        <div className="App-container">
            <Header isActive={isActive} />
            <div className="App-content">
                <Sensors sensors={sensors} />
                <LedMatrix className="App-led-matrix" leds={sensors.led_array} />
            </div>
        </div>
    )
}

const Sensors = ({ sensors = {} }) =>
    <div className="App-sensors">
        {getReadableSensors()
            .map(sensor =>
                // render a sensor
                null
            )}
    </div>

export default App
