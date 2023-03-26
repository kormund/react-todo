import './NewTaskForm.css'
import { useState } from 'react'

const NewTaskForm = ({ addItem }) => {
  const [newTask, setNewTask] = useState({ label: '', min: '', sec: '' })

  const handleLabelChange = (e) => {
    setNewTask((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(newTask)
    setNewTask({
      label: '',
      min: '',
      sec: '',
    })
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit} className="new-todo-form">
        <input
          name="label"
          className="new-todo"
          type="text"
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleLabelChange}
          value={newTask.label}
          required
        />
        <input
          name="min"
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          type="number"
          onChange={handleLabelChange}
          value={newTask.min}
          min={0}
          max={60}
        />
        <input
          name="sec"
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          type="number"
          onChange={handleLabelChange}
          value={newTask.sec}
          min={0}
          max={60}
        />
        <button type="submit"></button>
      </form>
    </header>
  )
}

export default NewTaskForm
