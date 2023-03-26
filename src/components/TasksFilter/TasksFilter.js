import './TasksFilter.css'
import PropTypes from 'prop-types'

const TasksFilter = ({ handleFilterChange, filter }) => {
  let btnFilters = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ]

  btnFilters = btnFilters.map(({ name, label }) => {
    const isActive = filter === name
    const btnClass = isActive ? 'selected' : ''
    return (
      <label key={name} className={btnClass}>
        {' '}
        {label}
        <input type={'radio'} onClick={() => handleFilterChange(name)} name="filter" checked={isActive} readOnly />
      </label>
    )
  })

  return <div className="filters">{btnFilters}</div>
}

TasksFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
}

export default TasksFilter
