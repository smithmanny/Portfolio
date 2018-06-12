import React from 'react';

const Icon = (props) => (
  <div className={props.size || 'fa-2x'}>
    {props.share 
      ?
      <a
        href={props.link}>
        <i
          className={props.icon}
          alt={props.alt}
          style={{ color: props.color }}
        />
      </a> 
      :
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer">
        <i
          className={props.icon}
          alt={props.alt}
          style={{ color: props.color }}
        />
      </a>
    }
  </div>
);

export default Icon;