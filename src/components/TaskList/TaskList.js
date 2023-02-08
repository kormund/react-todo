import "./TaskList.css";
import Task from "../Task/Task";
import {Component} from "react";

export default class TaskList extends Component {
        render() {
                return (
                    <ul className="todo-list">
                            <Task label = 'Drink coffee' editing = 'false' completed = 'true' taskType = 'completed'/>
                            <Task label = 'Watch movie' editing = 'true' completed = 'false' taskType = 'editing'/>
                            <Task label = 'Build a react App' editing = 'false' completed = 'false' taskType = ''/>
                    </ul>
                )
        }
}
