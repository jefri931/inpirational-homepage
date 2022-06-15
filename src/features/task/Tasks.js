import { Task } from "./Task/Task"
import { useSelector } from "react-redux/es/exports"
import { selectTasks } from "./tasksSlice"

export function Tasks() {
    const tasks = useSelector(selectTasks)

    return (
        <div className='center-container light-transparent-bg' style={{ marginTop: 20 }}>
            {tasks.map(t => 
            <Task 
                key={t.id} 
                id={t.id}
                text={t.text}
                complete={t.complete}
            />
                )}
        </div>
    )
}