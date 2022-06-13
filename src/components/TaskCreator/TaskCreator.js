import { useState } from 'react'
import './TaskCreator.css'

export function TaskCreator() {
    const [text, setText] = useState("")
    const handleTextChange = ({target}) => {
        setText(target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setText('')
    }

    return (
        <div className='center-container light-transparent-bg'>
            <h2 className='task-text'>What's on your mind today?</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className='transparent-bg task-input'
                    value={text}
                    onChange={handleTextChange}
                    autoComplete="off"
                />
            </form>
        </div>
    )
}