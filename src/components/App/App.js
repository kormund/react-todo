import './App.css'
import { useState } from 'react'
import { nanoid } from 'nanoid'

import Footer from '../Footer/Footer'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'

const App = () => {
  const [taskData, setTaskData] = useState([])
  const [filter, setFilter] = useState('all')

  const createTask = (label, min, sec) => {
    return {
      label,
      done: false,
      edit: false,
      time: Number(+sec + min * 60),
      id: nanoid(),
      created: Date.now(),
    }
  }

  const addItem = ({ label, min, sec }) => {
    label = label.trim()
    if (label.length < 1) {
      return
    }
    const newItem = createTask(label, min, sec)
    setTaskData((prev) => {
      return [...prev, newItem]
    })
  }

  const handleDelete = (id) => {
    setTaskData((prev) => {
      const idx = prev.findIndex((el) => el.id === id)
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)]
    })
  }

  const clearCompleted = () => {
    setTaskData((prev) => {
      return prev.filter((el) => !el.done)
    })
  }

  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id)

    const newItem = { ...arr[idx], [propName]: !arr[idx][propName] }
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  const handleDone = (id) => {
    setTaskData((prev) => {
      return toggleProperty(prev, id, 'done')
    })
  }

  const showFiltered = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((el) => !el.done)
      case 'completed':
        return items.filter((el) => el.done)
      default:
        return items
    }
  }

  const handleFilterChange = (filter) => {
    setFilter(filter)
  }

  const handleEditChange = (id, newLabel) => {
    setTaskData((prev) => {
      const idx = prev.findIndex((el) => el.id === id)
      const newItem = { ...prev[idx], label: newLabel ? newLabel : prev[idx].label }
      return [...prev.slice(0, idx), newItem, ...prev.slice(idx + 1)]
    })
  }

  const handleTimeChange = (id, newTime) => {
    setTaskData((prev) => {
      const idx = prev.findIndex((el) => el.id === id)
      const newItem = { ...prev[idx], time: newTime ? newTime : prev[idx].time }
      console.log(newItem)
      console.log(newTime)
      return [...prev.slice(0, idx), newItem, ...prev.slice(idx + 1)]
    })
  }
  const doneCount = taskData.filter((el) => !el.done).length

  const visibleItems = showFiltered(taskData, filter)

  return (
    <section className="todoapp">
      <NewTaskForm addItem={addItem} />
      <section className="main">
        <TaskList
          todos={visibleItems}
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEditChange={handleEditChange}
          handleTimeChange={handleTimeChange}
        />
      </section>
      <Footer
        tasksLeft={doneCount}
        clearCompleted={clearCompleted}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
    </section>
  )
}

export default App
