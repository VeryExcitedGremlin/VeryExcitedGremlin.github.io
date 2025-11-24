import { useSelector, useDispatch } from 'react-redux'
import {
  selectActiveTodosCount,
  selectCompletedTodosCount,
  selectCurrentFilter,
  clearCompleted,
  setFilter,
  FILTERS
} from '../store/todosSlice'

const TodoFooter = () => {
  const activeTodosCount = useSelector(selectActiveTodosCount)
  const completedTodosCount = useSelector(selectCompletedTodosCount)
  const currentFilter = useSelector(selectCurrentFilter)
  const dispatch = useDispatch()

  const totalTodos = activeTodosCount + completedTodosCount

  if (totalTodos === 0) {
    return null
  }

  const handleClearCompleted = () => {
    dispatch(clearCompleted())
  }

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter))
  }

  const itemWord = activeTodosCount === 1 ? 'item' : 'items'

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodosCount}</strong> {itemWord} left
      </span>
      <ul className="filters">
        <li>
          <button
            className={currentFilter === FILTERS.ALL ? 'selected' : ''}
            onClick={() => handleFilterChange(FILTERS.ALL)}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={currentFilter === FILTERS.ACTIVE ? 'selected' : ''}
            onClick={() => handleFilterChange(FILTERS.ACTIVE)}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={currentFilter === FILTERS.COMPLETED ? 'selected' : ''}
            onClick={() => handleFilterChange(FILTERS.COMPLETED)}
          >
            Completed
          </button>
        </li>
      </ul>
      {completedTodosCount > 0 && (
        <button className="clear-completed" onClick={handleClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}

export default TodoFooter