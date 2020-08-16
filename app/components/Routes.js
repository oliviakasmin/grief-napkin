import React from 'react'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
  Resources,
  HomeNavbar,
  Homepage,
  Signup,
  Journal,
  Welcome,
  Friends,
  LossInfo,
} from './index.js'

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signup/loss-info" component={LossInfo} />
      <Route exact path="/journal" component={Journal} />
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/friends" component={Friends} />
    </div>
  )
}

export default Routes
