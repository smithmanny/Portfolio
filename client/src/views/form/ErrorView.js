import React from 'react';

const ErrorView = (props) => {
  return(
    <div className="mb-4">
      <h2 className="text-center">Get In Touch</h2>
      <p>
        I love working on unique websites, if you have any questions or
        have an interesting project you think I'm the perfect one to do,
        send me an email below:
      </p>
      <p className="text-danger py-2 mt-2"
         style={{
           border: '1px solid red',
           maxWidth: '300px'
         }}>
           {props.text}
         </p>
    </div>
  )
}

export default ErrorView
