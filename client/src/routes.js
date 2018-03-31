import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Import Views */
import Home from './views/Home/Home';
import NotFound from './views/404/notFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/projects' component={Projects} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Routes
