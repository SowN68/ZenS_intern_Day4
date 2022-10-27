import { Component } from "react";
import Card from "../UI/Card";
import "./Footer.css"
const actionBtn = ["All", "Active", "Complete"]
class Footer extends Component {
  state = {
    type: "All",
  }
  render() {
    const {count} = this.props
    return (
      <Card>
        <div className="todo-footer-container">
          <p className="todo-count">{count} items left</p>
          <div>
            {
              actionBtn.map((tab, index) => (
                <button key={index} 
                  onClick={() => {
                    this.setState({ type: tab })
                    this.props.onGetType(tab)
                    console.log(tab)
                  }
                  }
                  className={this.state.type === tab ? "todo-menus active" : "todo-menus"}
                >
                  {tab}
                </button>
              ))
            }
          </div>
        </div>
      </Card>
    )
  }
}
export default Footer