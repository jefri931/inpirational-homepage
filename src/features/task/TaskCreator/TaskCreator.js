import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from '../tasksSlice'
import './TaskCreator.css'

export function TaskCreator() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const handleTextChange = ({target}) => {
        setText(target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text) {
            const id = new Date().getTime()
            dispatch(createTask({ id, text, complete: false }))
            setText('')
        }
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