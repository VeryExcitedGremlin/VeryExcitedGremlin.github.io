import { useSelector, useDispatch } from 'react-redux'
import { selectFilteredTodos, selectAllTodosCompleted, selectTodos, toggleAllTodos } from '../store/todosSlice'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos)
  const allTodos = useSelector(selectTodos)
  const allCompleted = useSelector(selectAllTodosCompleted)
  const dispatch = useDispatch()

  const handleToggleAll = () => {
    dispatch(toggleAllTodos())
  }

  if (allTodos.length === 0) {
    return null
  }

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={allCompleted}
        onChange={handleToggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  )
}

export default TodoList