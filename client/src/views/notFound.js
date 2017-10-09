import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/notFound.css';

const NotFound = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Page Not Found | Shakhor Smith</title>
      </Helmet>
      <div className='my-3'>
        <h1>Danger Zone!</h1>
        <h4>The page you are looking for can not be found</h4>
      </div>
      <div id='notFound'></div>
    </div>
  )
}

export default NotFound
