import "./Footer.css";
import TasksFilter from "../TasksFilter/TasksFilter";
import {Component} from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
    static defaultProps = {
        filter: 'all',
        onFilterChange: () => {},
        deleteCompleted: () => {},
        done: false
    };

    static propTypes = {
        filter: PropTypes.string,
        onFilterChange: PropTypes.func,
        deleteCompleted: PropTypes.func,
        done: PropTypes.bool
    }

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

