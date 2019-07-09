import React from 'react'

import TaskIndexContainer from "../containers/TasksIndexContainer"

import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/tasks" component={TaskIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
