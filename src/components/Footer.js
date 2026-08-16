import React from 'react'

import gatsby from '../assets/gatsby.png'
import github from '../assets/nav-github.png'
import { Netlify } from '../assets/Netlify'
import { Mail } from '../assets/Mail'
import { FetchCFD } from '../assets/FetchCFD'
import { LinkedIn } from '../assets/LinkedIn'
import { GitHub } from '../assets/GitHub'

const links = [
  { url: 'mailto:bhanu93@live.com', label: 'Contact', Icon: Mail },
  { url: 'https://www.linkedin.com/in/bhanu34/', label: 'LinkedIn', Icon: LinkedIn },
  { url: 'https://github.com/bhanu34', label: 'GitHub', Icon: GitHub },
  { url: 'https://fetchcfd.com/', label: 'FetchCFD', Icon: FetchCFD },
]

const madeWithLinks = [
  { url: 'https://www.gatsbyjs.com', label: 'Gatsby', image: gatsby },
  { url: 'https://github.com/bhanu34', label: 'GitHub', image: github },
  { url: 'https://www.netlify.com', label: 'Netlify', Component: Netlify },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <nav className="footer-menu">
          {links.map((link) => (
            <a
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              key={link.url}
              className="footer-link"
            >
              <link.Icon size={15} />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <nav className="footer-menu-buttons">
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
              className="button small"
            >
              {link.Component ? (
                <link.Component size={16} />
              ) : (
                <img src={link.image} alt={link.label} width="16" height="16" />
              )}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="footer-made-by">
          Designed &amp; Developed by Bhanu ⚛️
        </div>
      </section>
    </footer>
  )
}
