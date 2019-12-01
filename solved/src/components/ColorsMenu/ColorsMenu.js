import React from "react"
import "./ColorsMenu.css"


const ColorsMenu = ({colors=[], className, onSelect}) =>
    <div className={`ColorsMenu ${className}`}>
        {colors.map(color=>
        <div 
            className="ColorsMenu-color" 
            style={{color}}
            onClick={()=>onSelect && onSelect(color)}
        >
            {color}
        </div>
        )}
    </div>

    export default ColorsMenu