import "./Footer.css";
import TasksFilter from "../TasksFilter/TasksFilter";

function Footer() {
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

export default Footer;