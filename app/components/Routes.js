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
  ActivitiesForm,
  Login,
  Need,
  UserProfile,
  Stuck,
} from './index.js'

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signup/loss-info" component={LossInfo} />
      <Route exact path="/signup/activities" component={ActivitiesForm} />
      <Route exact path="/journal" component={Journal} />
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/friends" component={Friends} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/need" component={Need} />
      <Route exact path="/stuck" component={Stuck} />
      <Route exact path="/:username" component={UserProfile} />
    </div>
  )
}

export default Routes
