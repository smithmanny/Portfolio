import React from 'react';

const SentView = (props) => {
  return(
    <div className="mb-4">
      <h2 className="text-center">Get In Touch</h2>
      <p>
        I love working on unique websites, if you have any questions or
        have an interesting project you think I'm the perfect one to do,
        send me an email below:
      </p>
      <p className="text-success py-2 mt-2"
         style={{
           border: '1px solid green',
           maxWidth: '300px'
         }}>
         Your form has been submitted
       </p>
    </div>
  )
}

export default SentView
