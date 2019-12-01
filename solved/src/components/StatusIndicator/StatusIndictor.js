import React from 'react'
import './StatusIndicator.css'

const StatusIndicator = ({ isActive, className }) =>{
    const backgroundClassName = isActive ?
                                "StatusIndicator-connected" : "StatusIndicator-disconnected"
    return(
        <div className={`StatusIndicator ${className}`}>
            <div className={`StatusIndicator-inner ${backgroundClassName}`}>
            </div>
        </div>
        )
        }

export default StatusIndicator
