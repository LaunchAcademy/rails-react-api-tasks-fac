import React, { Component } from "react"

import TextField from "../components/TextField"

class TasksFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      taskName: "",
      description: "",
      dueOn: ""
    }

    this.handleTasksNameChange = this.handleTasksNameChange.bind(this)
    this.handleTasksDescriptionChange = this.handleTasksDescriptionChange.bind(this)
    this.handleTasksDueOnChange = this.handleTasksDueOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTasksNameChange(event){
    this.setState({ taskName: event.target.value})
  }

  handleTasksDescriptionChange(event){
    this.setState({ description: event.target.value})
  }

  handleTasksDueOnChange(event){
    this.setState({ dueOn: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()

    let taskPayload = {
      task: {
        name: this.state.taskName,
        description: this.state.description,
        due_on: this.state.dueOn
      }
    }

    // debugger;

    this.props.trackNewTask(taskPayload)
  }

  render(){

    return(
      <div>
        <h3> Form Container </h3>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="taskName"
            displayName="Tasks Name:"
            value={this.state.taskName}
            handleChange={this.handleTasksNameChange}
          />
          <TextField
            label="description"
            displayName="Description:"
            value={this.state.description}
            handleChange={this.handleTasksDescriptionChange}
          />
          <TextField
            label="dueOn"
            displayName="Due On:"
            value={this.state.dueOn}
            handleChange={this.handleTasksDueOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default TasksFormContainer
