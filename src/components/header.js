import React from 'react'
import { Link } from 'gatsby'

const Header = ({ menuLinks, siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <nav
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <ul style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
        {menuLinks.map(link =>
          <li key={link.name} style={{ 'listStyleType': 'none', margin: '0 15px' }}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        )}
      </ul>

      <ul style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {menuLinks.map(link =>
          <li key={link.name} style={{ 'listStyleType': 'none' }}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        )}
      </ul>
    </nav>
  </div>
)

export default Header
