import "./Footer.css";
import TasksFilter from "../TasksFilter/TasksFilter";
import {Component} from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">1 items left</span>
                <ul className="filters">
                    <TasksFilter selected={true} description={'All'} />
                    <TasksFilter selected={false} description={'Active'} />
                    <TasksFilter selected={false} description={'Completed'} />
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}