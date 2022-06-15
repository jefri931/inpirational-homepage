import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: {
        items: []
    }
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, action) => {
            state.tasks.items.push(action.payload)
        },
        completeTask: (state, action) => {
            const task = state.tasks.items.find((t) => t.id === action.payload)
            task.complete = true
        },
        removeTask: (state, action) => {
            state.tasks.items = state.tasks.items.filter(t => t.id !== action.payload)
        }
    }
})

export const selectTasks = state => state.tasks.tasks.items
export const { createTask, completeTask, removeTask } = tasksSlice.actions

export default tasksSlice.reducer