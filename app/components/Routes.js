import React from 'react'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {withRouter, Route, Switch} from 'react-router-dom'

const Routes = () => {
  console.log('my routes page')
  return (
    <Route>
      <div>
        <nav>
          <p>Welcome!</p>
        </nav>
        <main>
          <h2>hey party people</h2>
          <p>Check out the navigation bar above to move between pages</p>
        </main>
      </div>
    </Route>
  )
}

export default Routes
