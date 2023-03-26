import './Footer.css'
import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter/TasksFilter'

const Footer = ({ filter, handleFilterChange, clearCompleted, tasksLeft }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksLeft} items left</span>
      <TasksFilter filter={filter} handleFilterChange={handleFilterChange} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
  deleteCompleted: PropTypes.func,
  tasksLeft: PropTypes.number,
}

export default Footer
