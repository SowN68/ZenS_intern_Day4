import { Component } from "react";
import TodoItem from "./TodoItem";
import Card from "../UI/Card";

class Todos extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     todos: [],
  //     type: 'All',
  //   }
  // }
  // addTodoHandler = (value) => {
  //   //const newTodos = [...this.state, value]
  //   const newTodos = this.state.todos
  //   newTodos.push(value)
  //   this.setState({
  //     todos: newTodos,
  //   })

  // }
  // deleteTodoHandler = (id) => {
  //   const removeTodo = this.state.todos.filter(todo => todo.id !== id)
  //   this.setState({
  //     todos: removeTodo
  //   })
  // }

  // completeTodoHandler = (id) => {
  //   const completeTodos = this.state.todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.isDone = !todo.isDone
  //     }
  //     return todo
  //   })
  //   this.setState({
  //     todos: completeTodos
  //   })
  // }
  // changeTypeHandler = (type) => {
  //   this.setState({
  //     type: type
  //   })
  // }
  // getTypeHandler = () => {
  // const {todos, type} = this.state
  //   switch (type) {
  //     case "All":
  //       return todos

  //     case "Active":
  //       return todos.filter(todo => !todo.isDone)
        

  //     case "Complete":
  //       return todos.filter(todo => todo.isDone)
  //     default:
  //       throw new Error("Invalid state")
  //   }
  // }

  render() {
    const {todos, onComplete, onDelete} = this.props
    return (
      <div>
        <Card>
          <div>
            <div >
              {
                todos.length > 0 ? (
                  todos.map((todo => {
                    return <TodoItem key={todo.id} todo={todo} onDelete={() => onDelete(todo.id)} onComplete={()=> onComplete(todo.id)} />
                  }
                  ))
                ) : (<h3>No tasks here</h3>)
              }
            </div>
          </div>
        </Card>
      </div>
    )
  }
}
export default Todos;