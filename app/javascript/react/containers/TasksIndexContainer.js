import React, { Component } from "react"

import TasksFormContainer from "./TasksFormContainer"

class TaskIndexContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      tasks: [],
      errors: []
    }

    this.trackNewTask = this.trackNewTask.bind(this)
  }

  trackNewTask(formPayload){

    fetch('/api/v1/tasks', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(taskBody => {
        // debugger
        if (taskBody.errors){
          this.setState({ errors: taskBody.errors })
        } else {
          this.setState({ tasks: this.state.tasks.concat(taskBody.task)});
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  componentDidMount(){
    fetch("/api/v1/tasks")
    .then(response => response.json())
    .then(taskBody => {
      this.setState({tasks: taskBody.tasks })
    })
  }

  render(){
    // debugger
    let tasktiles = this.state.tasks.map((task) => {

      return(
        <li key={task.id}>
          {task.name}
        </li>
      )
    })

    let errorTiles = this.state.errors.map((error) => {

      return(
        <li key={error}>
          {error}
        </li>
      )
    })



    return(
      <div>
        {errorTiles}
        <TasksFormContainer
          trackNewTask={this.trackNewTask}
        />

        <h3> Task Index Container </h3>
        {tasktiles}
      </div>
    )
  }
}

export default TaskIndexContainer
