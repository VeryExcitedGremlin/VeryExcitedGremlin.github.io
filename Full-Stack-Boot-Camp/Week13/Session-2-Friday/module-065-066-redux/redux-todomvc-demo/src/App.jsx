import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import './App.css'

function App() {
  return (
    <section className="todoapp">
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </section>
  )
}

export default App
