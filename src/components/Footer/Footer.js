import "./Footer.css";
import TasksFilter from "../TasksFilter/TasksFilter";
import {Component} from "react";

export default class Footer extends Component {

    render() {

        const { filter, onFilterChange, deleteCompleted, done } = this.props

        return (
            <footer className="footer">
                <span className="todo-count">{ done } items left</span>
                <TasksFilter filter = { filter }
                             onFilterChange= { onFilterChange }
                />
                <button className="clear-completed"
                onClick={ deleteCompleted }>Clear completed</button>
            </footer>
        )
    }
}