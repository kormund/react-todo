import "./TaskList.css";
import Task from "../Task/Task";

const TaskList = ({ todos, onDeleted }) => {

    const elements = todos.map((item) => {
       const { id, label } = item;

        return (
            <Task label = { label } key = { id }
            onDeleted = { () => onDeleted(id) }/>
        );
    });
    return (
        <ul className="todo-list">
            { elements }
        </ul>
    );

    //
};

export default TaskList;