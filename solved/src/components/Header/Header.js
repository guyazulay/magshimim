import React from 'react'
import './Header.css'
import StatusIndicator from '../StatusIndicator/StatusIndictor';

const Header = ({ isActive }) =>
    <div className="Header">
        <div className="Header-title">
            MAGSHIMIM +
        </div>
        <StatusIndicator 
            className="Header-status-indicator" 
            isActive={isActive} 
        />
    </div>
    
export default Header