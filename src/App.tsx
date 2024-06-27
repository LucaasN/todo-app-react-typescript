import { useState } from "react"
import { Todos } from "./components/Todos";
import { TODO_FILTERS } from "./const";
import { FilterValue } from "./types";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {  

  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = (id:string) => {
    const newTodos = todos.filter(todo => todo.id !== id );
    setTodos(newTodos)
  }

  const handleCompleted = (id:string) => {
    const newTodos = todos.map( todo => todo.id === id ? {...todo, completed: !todo.completed } : todo )
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const filterTodos = todos.filter(  todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo;
  })

  const activeCount = todos.filter( todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = (title: string): void =>{
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos todos={filterTodos} onRemoveTodo={handleRemove} onToggleCompleteTodo={handleCompleted}></Todos>
      <Footer 
        activeCount={ activeCount }
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  )
}

export default App
