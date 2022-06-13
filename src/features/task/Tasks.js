import { Task } from "../../components/Task/Task"

const tasks = [
    { id: 1, name: 'Test test', completed: false }, 
    { id: 2, name: 'Test test 22', completed: false },
    { id: 3, name: 'Test test 33', completed: false },
    { id: 4, name: 'Test test 444444444444444', completed: false },
    { id: 5, name: 'Test 5', completed: false },
]

export function Tasks() {

    return (
        <div className='center-container light-transparent-bg' style={{ marginTop: 20 }}>
            {tasks.map(t => <Task key={t.id} name={t.name} />)}
        </div>
    )
}