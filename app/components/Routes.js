import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
  Resources,
  HomeNavbar,
  Homepage,
  Signup,
  Journal,
  Welcome,
  Friends,
  LossInfo,
  LossInfo2,
  LossInfo3,
  LossInfo4,
  ActivitiesForm,
  Login,
  Profile,
  Stuck,
  Need,
  Help,
  Activities,
  SelfCare,
} from './index.js'

const Routes = () => {
  return (
    <div>
      <div>
        <Route exact path="/" component={Homepage} />
        {/* <Route exact path="/modal" component={ModalTest} /> */}
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signup/loss-info" component={LossInfo} />
        <Route exact path="/signup/loss-info2" component={LossInfo2} />
        <Route exact path="/signup/loss-info3" component={LossInfo3} />
        <Route exact path="/signup/loss-info4" component={LossInfo4} />
        <Route exact path="/signup/activities" component={ActivitiesForm} />
        <Route exact path="/journal" component={Journal} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/need" component={Need} />
        <Route exact path="/stuck" component={Stuck} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/selfcare" component={SelfCare} />
        <Route exact path="/username:oliviak" component={Profile} />
      </div>
    </div>
  )
}

export default Routes
