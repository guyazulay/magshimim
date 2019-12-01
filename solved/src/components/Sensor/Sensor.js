import React from 'react'
import './Sensor.css'
import {ERROR_MESSAGE} from "../../helpers"

const Sensor = ({ title, value, unit, className, valueClassName, unitClassName }) =>
    <div className={`Sensor ${className}`}>
        <div className="Sensor-title">
           {title}
        </div>
        {value ? 
        <div className="Sensor-content">
            <div className={`Sensor-value ${valueClassName}`}>
                {value}
            </div>
            <div className={`Sensor-unit ${unitClassName}`}>
                {unit}
            </div>
        </div>:
        <div className="Sensor-no-data">
            {ERROR_MESSAGE}
        </div>
        }
    </div>
    
export default Sensor