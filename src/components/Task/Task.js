import { useState } from "react";
import { OverlayButton } from "../OverlayButton/OverlayButton";
import './Task.css'

const colors = ['lightcoral', 'orange', 'lightskyblue', 'green', 'purple']
const getBackgroundColor = () => {
    const color = Math.floor(Math.random() * colors.length);
    return colors[color]
}

export function Task({name}) {
    const [showHoverButton, setShowHoverButton] = useState(false);
    const [color, setColor] = useState(getBackgroundColor())
    const handleMouseEnter = () => {
        setShowHoverButton(true)
    }

    const handleMouseLeave = () => {
        setShowHoverButton(false)
    }

    return (
        <>
            <div
                className="task"
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                style={{backgroundColor: color, }}
            >
                <div className="col">
                    <span className="task-text">{name}</span>
                </div>
                <div className="col">
                    <OverlayButton 
                        visible={showHoverButton} 
                        text="Remove"
                        offsetY={35}
                        offsetX={0}
                        backgroundColor="rgba(255, 0, 0, 0.6)"
                    />
                </div>
                <div className="col">
                    <OverlayButton 
                        visible={showHoverButton} 
                        text="Complete"
                        offsetY={-64}
                        offsetX={0}
                        backgroundColor="rgba(0, 255, 0, 0.6)"
                    />
                </div>
            </div>
        </>
    )
}