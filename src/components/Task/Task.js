import './Task.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import { getPadTime } from '../../assets/getPadTime'

Task.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleEdit: PropTypes.func,
  edit: PropTypes.bool,
  done: PropTypes.bool,
  date: PropTypes.number,
}

function Task({
  label = '',
  id = '',
  created = 0,
  time = 0,
  done = false,
  edit = false,
  handleDelete,
  handleDone,
  handleEditChange,
  handleTimeChange,
}) {
  const [count, setCount] = useState(false)
  const [editing, setEditing] = useState(edit)
  const [editLabel, setEditLabel] = useState(label)
  // const [newTime, setNewTime] = useState(time)
  const creationDate = formatDistanceToNow(created, { includeSeconds: true })

  let className = ''
  if (done) {
    className += 'completed'
  }

  if (editing) {
    className += 'editing'
  }

  let minutes = getPadTime(Math.floor(time / 60))
  let seconds = getPadTime(time - minutes * 60)

  useEffect(() => {
    // const interval = setTimeout(() => {
    //   count && setNewTime((time) => (time >= 1 ? time - 1 : 0))
    // }, 1000)
    // if (!time) setCount(false)
    // return () => {
    //   clearTimeout(interval)
    //   handleTimeChange(time)
    // }
    const timeout = setTimeout(() => {
      count && handleTimeChange(time >= 1 ? time - 1 : 0)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [count, time])

  const handleStart = () => {
    setCount(true)
  }

  const handleStop = () => {
    setCount(false)
  }

  return (
    <li key={id} className={className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={done}
          readOnly={true}
          onClick={() => {
            handleDone(id)
          }}
          name="label"
        />
        <label
          onClick={() => {
            handleDone(id)
            if (count) setCount(false)
          }}
          htmlFor="label"
        >
          <span className="title">{editLabel}</span>
          <span className="description">
            {count ? (
              <button
                className="icon icon-pause"
                onClick={(e) => {
                  e.stopPropagation()
                  if (done) return
                  handleStop()
                }}
              ></button>
            ) : (
              <button
                className="icon icon-play"
                onClick={(e) => {
                  e.stopPropagation()
                  if (done) return
                  handleStart()
                }}
              ></button>
            )}
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </span>
          <span className="description">created {creationDate} ago</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            setEditing((prev) => !prev)
          }}
        ></button>
        <button className="icon icon-destroy" onClick={() => handleDelete(id)}></button>
      </div>
      {editing && (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleEditChange(editLabel ? editLabel : label)
            setEditing((prev) => !prev)
          }}
        >
          <input
            type="text"
            className="edit"
            value={editLabel}
            onChange={(e) => {
              setEditLabel(e.target.value)
            }}
          />
        </form>
      )}
    </li>
  )
}

export default Task
