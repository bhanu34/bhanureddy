import React from 'react'

import netlify from '../assets/netlify.png'
import gatsby from '../assets/gatsby.png'
import github from '../assets/nav-github.png'
import { Mail } from '../assets/Mail'
import { Rss } from '../assets/Rss'
import { LinkedIn } from '../assets/LinkedIn'
import { GitHub } from '../assets/GitHub'
import { Heart } from '../assets/Heart'

const links = [
  { url: 'mailto:bhanu93@live.com', label: 'Contact', Icon: Mail },
  { url: 'https://www.linkedin.com/in/bhanu34/', label: 'LinkedIn', Icon: LinkedIn },
  { url: 'https://github.com/bhanu34', label: 'GitHub', Icon: GitHub },
  { url: '/rss.xml', label: 'RSS feed', Icon: Rss },
]

const madeWithLinks = [
  { url: 'https://www.gatsbyjs.com', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/bhanu34', label: 'GitHub', icon: github },
  { url: 'https://www.netlify.com', label: 'Netlify', icon: netlify },
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
              <img src={link.icon} alt={link.label} width="16" height="16" />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
        <div className="footer-made-by">
          Desinged &amp; Developed by Bhanu
        </div>
      </section>
    </footer>
  )
}
