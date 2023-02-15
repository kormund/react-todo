import './TaskList.css'
import PropTypes from 'prop-types'

import Task from '../Task/Task'

const TaskList = ({ todos, onDeleted, onToggleDone, onToggleEdit, onEditChange }) => {
  const elements = todos.map((item) => {
    const { id, label, edit, done, date } = item

    return (
      <Task
        label={label}
        key={id}
        edit={edit}
        done={done}
        date={date}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        onToggleEdit={() => onToggleEdit(id)}
        onEditChange={(label) => onEditChange(id, label)}
      />
    )
  })
  return <ul className="todo-list">{elements}</ul>

  //
}

TaskList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onToggleDone: () => {},
  onToggleEdit: () => {},
  onEditChange: () => {},
}

TaskList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleEdit: PropTypes.func,
  onEditChange: PropTypes.func,
}

export default TaskList
