import './TaskList.css'
import PropTypes from 'prop-types'

import Task from '../Task/Task'

const TaskList = ({ todos, handleDelete, handleDone, handleEditChange }) => {
  const elements = todos.map((item) => {
    const { id, label, time, edit, done, created } = item

    return (
      <Task
        label={label}
        time={time}
        key={id}
        edit={edit}
        done={done}
        created={created}
        handleDelete={() => handleDelete(id)}
        handleDone={() => handleDone(id)}
        handleEditChange={(label) => handleEditChange(id, label)}
      />
    )
  })
  return <ul className="todo-list">{elements}</ul>
}

TaskList.defaultProps = {
  todos: [],
  handleDelete: () => {},
  handleDone: () => {},
  handleEditChange: () => {},
}

TaskList.propTypes = {
  todos: PropTypes.array,
  handleDelete: PropTypes.func,
  handleDone: PropTypes.func,
  handleEditChange: PropTypes.func,
}

export default TaskList
