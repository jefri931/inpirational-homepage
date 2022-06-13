import { TaskCreator } from "../TaskCreator/TaskCreator"
import { Weather } from "../../features/weather/Weather"
import { Tasks } from "../../features/task/Tasks"
import { Quote } from "../../features/quote/Quote"
import './Wrapper.css'
export function Wrapper() {
    return (
        <div className="wrapper" style={{
                backgroundImage: `url("https://see.news/wp-content/uploads/2020/12/UK_wildbirds-01-robin.jpg")`, 
            }}>
            <Weather />
            <TaskCreator />
            <Tasks />
            <Quote />
        </div>
    )
}