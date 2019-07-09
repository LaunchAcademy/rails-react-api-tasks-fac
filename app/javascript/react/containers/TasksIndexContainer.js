import React, { Component } from "react"

class TaskIndexContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      tasks: []
    }
  }

  componentDidMount(){
    fetch("/api/v1/tasks")
    .then(response => response.json())
    .then(taskBody => {
      this.setState({tasks: taskBody })
    })
  }

  render(){
    let tasktiles = this.state.tasks.map((task) => {

      return(
        <li key={task.id}>
          {task.name}
        </li>
      )
    })

    return(
      <div>
        <h3> Task Index Container </h3>
        {tasktiles}
      </div>
    )
  }
}

export default TaskIndexContainer
