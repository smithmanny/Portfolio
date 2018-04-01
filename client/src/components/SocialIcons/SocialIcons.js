import React from 'react';

const SocialIcons = (props) => (
    <div className={props.location || 'header-social'} >
      {props.children}
    </div>
);

export default SocialIcons;