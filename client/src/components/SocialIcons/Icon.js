import React from 'react';

const Icon = (props) => (
    <div className={props.size || 'fa-2x'}>
        <a
          href={props.link}
          alt="Youtube Channel"
          target="_blank"
          rel="noopener noreferrer">
          <i
            className={props.icon}
            alt={props.alt}
            style={{ color: props.color }}
          />
        </a>
    </div>
);

export default Icon;