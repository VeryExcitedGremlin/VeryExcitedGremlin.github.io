import { createSlice } from '@reduxjs/toolkit'

// Todo filters
export const FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
}

const initialState = {
  todos: [],
  currentFilter: FILTERS.ALL,
  nextId: 1
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action) => {
      const text = action.payload.trim()
      if (text) {
        state.todos.push({
          id: state.nextId,
          text,
          completed: false
        })
        state.nextId += 1
      }
    },

    // Toggle a todo's completed status
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },

    // Edit a todo's text
    editTodo: (state, action) => {
      const { id, text } = action.payload
      const todo = state.todos.find(todo => todo.id === id)
      if (todo && text.trim()) {
        todo.text = text.trim()
      }
    },

    // Delete a todo
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },

    // Toggle all todos completed/active
    toggleAllTodos: (state) => {
      const allCompleted = state.todos.every(todo => todo.completed)
      state.todos.forEach(todo => {
        todo.completed = !allCompleted
      })
    },

    // Clear all completed todos
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed)
    },

    // Set the current filter
    setFilter: (state, action) => {
      state.currentFilter = action.payload
    }
  }
})

// Export actions
export const {
  addTodo,
  toggleTodo,
  editTodo,
  deleteTodo,
  toggleAllTodos,
  clearCompleted,
  setFilter
} = todosSlice.actions

// Selectors
export const selectTodos = (state) => state.todos.todos
export const selectCurrentFilter = (state) => state.todos.currentFilter

export const selectFilteredTodos = (state) => {
  const todos = selectTodos(state)
  const filter = selectCurrentFilter(state)

  switch (filter) {
    case FILTERS.ACTIVE:
      return todos.filter(todo => !todo.completed)
    case FILTERS.COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

export const selectActiveTodosCount = (state) => {
  return selectTodos(state).filter(todo => !todo.completed).length
}

export const selectCompletedTodosCount = (state) => {
  return selectTodos(state).filter(todo => todo.completed).length
}

export const selectAllTodosCompleted = (state) => {
  const todos = selectTodos(state)
  return todos.length > 0 && todos.every(todo => todo.completed)
}

export default todosSlice.reducer