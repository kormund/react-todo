import "./TasksFilter.css";

function TasksFilter(props) {
    return (
        <li>
            <button className={props.selected ? 'selected' : ''}
            >{props.description}</button>
        </li>
    )
}

export default TasksFilter;