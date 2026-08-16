import React from 'react'
import { Link } from 'gatsby'

import { ColorDropdown } from './ColorDropdown'
import mascot from '../assets/mascot.svg'
import floppyLogo from '../assets/nav-floppy.png'
import floppy from '../assets/floppylogo.png'
import blog from '../assets/nav-blog.png'
import projects from '../assets/nav-projects.png'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { Mail } from '../assets/Mail'
import { LinkedIn } from '../assets/LinkedIn'
import { Rss } from '../assets/Rss'
import { GitHub } from '../assets/GitHub'

export const Sidebar = ({
  theme,
  handleUpdateTheme,
  currentColor,
  setCurrentColor,
}) => {
  const links = [
    { url: '/#education', label: 'Education', iconText: '🎓' },
    { url: '/#skills', label: 'Skills', iconText: '⚡' },
    { url: '/#projects', label: 'Projects', image: projects }
  ]
  const socialLinks = [
    {
      url: 'mailto:bhanu93@live.com',
      label: 'Email',
      Icon: Mail,
    },
    { url: 'https://github.com/bhanu34', label: 'GitHub', Icon: GitHub },
    { url: 'https://www.linkedin.com/in/bhanu34/', label: 'LinkedIn', Icon: LinkedIn },
    { url: '/rss.xml', label: 'RSS feed', Icon: Rss },
  ]

  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <div className="sidebar-title-link">
          <Link to="/" className="flex-align-center gap">
            <span>
              <img
                src={floppyLogo}
                className="navbar-logo"
                alt="tania.dev"
                title="💾"
                height="16"
                width="16"
              />
            </span>
            <span className="site-name">bhanu.dev</span>
          </Link>
          <div className="flex-align-center">
            <ColorDropdown
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
            <div className="tooltip-container">
              <button
                className="navbar-button"
                onClick={() => {
                  const newTheme = theme === 'dark' ? 'light' : 'dark'

                  handleUpdateTheme(newTheme)
                }}
              >
                {theme === 'dark' ? <Sun /> : <Moon />}
              </button>
              <div className="tooltip">Theme</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sidebar-section">
        <h2>About Me</h2>
        <div className="sidebar-content">
          <p>
            I am Bhanu, computational physicist and engineering simulation 
            nerd. This is my digital garden. 🌱
          </p>
        </div>
      </section>

      <section className="sidebar-section">
        <nav className="sidebar-nav-links">
          {links.map((link) => (
            <Link key={link.url} to={link.url} activeClassName="active">
              <img src={link.image} alt={link.label} />
              {link.label}
            </Link>
          ))}
        </nav>
      </section>

      <section className="sidebar-section">
        <h2>Stay Connected</h2>
        <nav className="sidebar-links">
          {socialLinks.map(({ url, label, Icon }) => (
            <div className="tooltip-container" key={url}>
              {url.startsWith('http') ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ) : (
                <a href={url} aria-label={label}>
                  <Icon size={20} />
                </a>
              )}
              <div className="tooltip">{label}</div>
            </div>
          ))}
        </nav>
      </section>

      {/* Mascot Card Section */}
      <section className="sidebar-mascot-section">
        <img
          src={mascot}
          className="sidebar-mascot-image"
          alt="Thermal Owl Mascot"
          width="160"
          height="160"
        />
        <aside className="hero-bubble">
          Curious about my career journey?{' '}
          <Link to="/resume">Explore my experience &rarr;</Link>
        </aside>
      </section>
    </aside>
  )
}
