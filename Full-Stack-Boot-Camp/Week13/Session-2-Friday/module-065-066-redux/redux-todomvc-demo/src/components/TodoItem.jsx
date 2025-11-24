import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, editTodo, deleteTodo } from '../store/todosSlice'

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditText(todo.text)
  }

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, text: editText }))
      setIsEditing(false)
    } else {
      handleDelete()
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditText(todo.text)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <li className={`${todo.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
      <div className="view">
        <input
          id={`todo-${todo.id}`}
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <label htmlFor={`todo-${todo.id}`} onDoubleClick={handleEdit}>
          {todo.text}
        </label>
        <button className="destroy" onClick={handleDelete}></button>
      </div>
      {isEditing && (
        <input
          className="edit"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}
    </li>
  )
}

export default TodoItem