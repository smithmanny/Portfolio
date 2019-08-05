import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

export default ({ children, className }) => {
  let language
  if (className) {
    language = className.replace(/language-/, '')
  } else {
    language = 'cmd'
  }
  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
