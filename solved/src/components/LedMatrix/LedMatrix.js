import React ,{useState} from 'react'
import './LedMatrix.css'
import { getNormalizedColor, ERROR_MESSAGE, getEditableColors } from '../../helpers';
import {updateLedColor} from "../../api";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ColorsMenu from '../ColorsMenu/ColorsMenu';




const LedMatrix = ({ leds=[] , className}) =>
leds.length > 0 ?
    <div className={`LedMatrix ${className}`}>
        {
            
            leds.map((color, index) =>
            <Led color={getNormalizedColor(color)} index={index} key={index}/>
            )
        }
    </div> :
    <div className="LedMatrix-error">
        {ERROR_MESSAGE}
    </div>

const Led = ({color="", index}) => {
    const [open, setOpen] = useState(false);
    const onSelectColor = index => selectedColor => {
        updateLedColor(index,selectedColor)
        setOpen(false)
    }
    return (
        <ClickAwayListener onClickAway={()=>setOpen(false)}>
            <div className="LedMatrix-led-container">
                <div 
                    className="LedMatrix-led" 
                    style={color ? {backgroundColor: color}: {}} 
                    onClick={()=>setOpen(true)}
                />
                {open ? (
                    <ColorsMenu 
                        colors={getEditableColors()} 
                        className="LedMatrix-led-colors-menu"
                        onSelect={onSelectColor(index)}
                    />
                ) : null}
            </div>
      </ClickAwayListener>   
)
}
    


export default LedMatrix