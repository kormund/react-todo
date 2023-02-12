import "./TaskList.css";
import Task from "../Task/Task";

const TaskList = ({ todos, onDeleted, onToggleDone, onToggleEdit }) => {

    const elements = todos.map((item) => {
       const { id, label, edit, done, date } = item;

        return (
            <Task
                label = { label }
                key = { id }
                edit = { edit }
                done = { done }
                date = { date }
                onDeleted = { () => onDeleted(id) }
                onToggleDone = { () => onToggleDone(id) }
                onToggleEdit = { () => onToggleEdit(id) }
            />
        );
    });
    return (
        <ul className="todo-list">
            { elements }
        </ul>
    );

    //
};

TaskList.defaultProps = {
    todos: [],
    onDeleted: () => {},
    onToggleDone: () => {},
    onToggleEdit: () => {}
}

export default TaskList;