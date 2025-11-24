import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todosSlice'

const TodoInput = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </header>
  )
}

export default TodoInput