import React from 'react'
import { Link } from 'gatsby'

import { ColorDropdown } from './ColorDropdown'
import mascot from '../assets/mascot.svg'
import floppyLogo from '../assets/nav-floppy.png'
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
    { targetId: 'education', label: 'Education', iconText: '🎓' },
    { targetId: 'skills', label: 'Skills', iconText: '⚡' },
    { targetId: 'projects', label: 'Projects', image: projects },
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

  const handleScroll = (e, id) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id)
      if (element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', `#${id}`)
      }
    }
  }

  return (
    <aside className="sidebar">
      {/* Title / Theme Bar */}
      <section className="sidebar-section">
        <div className="sidebar-title-link">
          <Link to="/" className="flex-align-center gap">
            <span>
              <img
                src={floppyLogo}
                className="navbar-logo"
                alt="bhanu.dev"
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

      {/* Navigation Links */}
      <section className="sidebar-section">
        <nav className="sidebar-nav-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={`#${link.targetId}`}
              onClick={(e) => handleScroll(e, link.targetId)}
              className="flex-align-center gap"
            >
              {link.image ? (
                <img
                  src={link.image}
                  alt=""
                  width="18"
                  height="18"
                  style={{ display: 'inline-block' }}
                />
              ) : (
                <span
                  style={{
                    fontSize: '1.1rem',
                    width: '18px',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {link.iconText}
                </span>
              )}
              {link.label}
            </a>
          ))}
        </nav>
      </section>

      {/* Social Links */}
      <section className="sidebar-section">
        <h2>Stay Connected</h2>
        <nav className="sidebar-links">
          {socialLinks.map(({ url, label, Icon }) => (
            <div className="tooltip-container" key={label}>
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
