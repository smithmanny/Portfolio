import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Import Views */
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import About from './views/About/About';
import Projects from './views/Projects/Projects';
import Blog from './components/Blog/Posts';
import Post from './components/Blog/Post';
import NotFound from './views/404/notFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/blog' component={Blog} />
            <Route path='/blog/:id' component={Post} />
            <Route path='/projects' component={Projects} />
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default Routes
