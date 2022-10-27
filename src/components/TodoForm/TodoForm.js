import { Component } from "react";
import Card from "../UI/Card";
import "./TodoForm.css"

class TodoForm extends Component{
  state = {
    todo: ""
  }
  handleChangeInput = (e) => {
    if (e.target.value === "") {  
      return
    } else {
      this.setState(
        {
          todo: e.target.value
        }
      )
    }
  }
  clearInput = () => {
    this.setState({
      todo: ""
    })
  }
  addTodo =(e) => {
    e.preventDefault();
    this.props.onAddTodo({
      id: Math.random(),
      value: this.state.todo,
      isDone: false
    })
    this.clearInput()
  }
  render() {
    return (
      <Card>
        <form onSubmit={this.addTodo}>
          <input placeholder="What need to be done?" onChange={this.handleChangeInput} value={this.state.todo} />
        </form>
      </Card>
    )
  }
}
export default TodoForm;