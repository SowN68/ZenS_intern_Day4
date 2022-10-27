import { Component } from "react"
import blacktick from "../../assets/black-tick.svg"
import greentick from "../../assets/green-tick.svg"
import deleteBtn from "../../assets/delete.svg"
import "./TodoItem.css"
class TodoItem extends Component {


  render() {
    const { todo: td } = this.props;

    return (
      <div key={td.id} className="todoItemBlock">
        <div onClick={() => this.props.onComplete(td.id)} className="todoitem-content">
          <img src={blacktick} alt="Black tick"
            className={td.isDone ? "tick isTick" : "tick"}
          />
          <img src={greentick} alt="Black tick"
            className={!td.isDone ? "tick isTick" : "tick"}
          />
          <li 
            className={td.isDone ? "todoitem-content complete" : "todoitem-content"}
          >
            {td.value}
          </li>
        </div>
        <span >
          <img src={deleteBtn} alt="Delete button" className="btn-delete" onClick={() => this.props.onDelete(td.id)} />
        </span>
      </div>

    )
  }
}
export default TodoItem 