import { Component } from 'react';
import Todos from './components/Todos/Todos';
import TodoForm from './components/TodoForm/TodoForm';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      type: 'All',
      count: 0,
    }
  }
  addTodoHandler = (value) => {
    //const newTodos = [...this.state, value]
    const newTodos = this.state.todos
    newTodos.push(value)
    this.setState({
      todos: newTodos,
    })

  }
  deleteTodoHandler = (id) => {
    const removeTodo = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: removeTodo
    })
  }

  completeTodoHandler = (id) => {
    const completeTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
    this.setState({
      todos: completeTodos
    })
  }
  changeTypeHandler = (type) => {
    this.setState({
      type: type
    })
  }
  getTypeHandler = () => {
  const {todos, type} = this.state
    switch (type) {
      case "All":
        return todos

      case "Active":
        return todos.filter(todo => !todo.isDone)
        

      case "Complete":
        return todos.filter(todo => todo.isDone)
      default:
        throw new Error("Invalid state")
    }
  }
  countTodo = () => {
    const {todos, type} = this.state
    switch (type) {
      case "All":
        return todos.length

      case "Active":
        return todos.filter(todo => !todo.isDone).length
        

      case "Complete":
        return todos.filter(todo => todo.isDone).length
      default:
        throw new Error("Invalid state")
    }
  }

  render() {
    const todos = this.getTypeHandler()
    const count = this.countTodo()
    return (
      <>
        <TodoForm onAddTodo={this.addTodoHandler} />
        <Todos todos={todos} onDelete={this.deleteTodoHandler} onComplete={this.completeTodoHandler} />
        <Footer onGetType={this.changeTypeHandler} count={count} />
      </>
    );
  }
}

export default App;
