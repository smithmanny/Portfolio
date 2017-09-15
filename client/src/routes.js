import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/* Import Views */
import Home from './views/Home'
import Resume from './views/Resume'
import NotFound from './views/notFound'

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/projects' component={Projects} /> */}
          <Route path='/resume' component={Resume} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Routes
