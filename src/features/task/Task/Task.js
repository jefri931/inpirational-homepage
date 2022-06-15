import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { OverlayButton } from "../../../components/OverlayButton/OverlayButton";
import { completeTask, removeTask } from "../tasksSlice";
import './Task.css'

const colors = ['lightcoral', 'orange', 'lightskyblue', 'green', 'purple']
const disabledColor = 'rgba(255, 255, 255, 0.3)'
const getBackgroundColor = () => {
    const color = Math.floor(Math.random() * colors.length);
    return colors[color]
}

export function Task({ id, text, complete }) {
    const [showHoverButton, setShowHoverButton] = useState(false);
    const [color, setColor] = useState(getBackgroundColor())
    const dispatch = useDispatch()
    const handleMouseEnter = () => {
        if(!complete) {
            setShowHoverButton(true)
        }
    }

    const handleMouseLeave = () => {
        if(!complete) {
            setShowHoverButton(false)
        }
    }

    const handleComplete = () => {
        dispatch(completeTask(id))
        setShowHoverButton(false)
        setColor(disabledColor)
    }

    const handleRemove = () => {
        dispatch(removeTask(id))
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
                    <span className="task-text">{text}</span>
                </div>
                <div className="col">
                    <OverlayButton 
                        visible={showHoverButton} 
                        text="Remove"
                        offsetY={35}
                        offsetX={0}
                        backgroundColor="rgba(255, 0, 0, 0.6)"
                        onClick={handleRemove}
                    />
                </div>
                <div className="col">
                    <OverlayButton 
                        visible={showHoverButton} 
                        text="Complete"
                        offsetY={-64}
                        offsetX={0}
                        backgroundColor="rgba(0, 255, 0, 0.6)"
                        onClick={handleComplete}
                    />
                </div>
            </div>
        </>
    )
}