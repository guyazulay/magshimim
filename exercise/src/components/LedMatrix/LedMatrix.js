import React, { useState } from 'react'
import './LedMatrix.css'
import { getNormalizedColor, ERROR_MESSAGE, getEditableColors } from '../../helpers';
import { updateLedColorPromise } from "../../api";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ColorsMenu from '../ColorsMenu/ColorsMenu';




const LedMatrix = ({ leds = [], className }) =>
    leds.length > 0 ?
        <div className={`LedMatrix ${className}`}>
            {

                leds.map((color, index) =>
                    <Led color={getNormalizedColor(color)} index={index} key={index} />
                )
            }
        </div> :
        <div className="LedMatrix-error">
            Hello Magshimim, seems we have a lot of work to do here !
    </div>

const Led = ({ color = "", index }) => {
    const [open, setOpen] = useState(false);
    const onSelectColor = index => selectedColor => {

    }
    return (
        <ClickAwayListener onClickAway={() => { }}>
            <div className="LedMatrix-led-container">

            </div>
        </ClickAwayListener>
    )
}

export default LedMatrix