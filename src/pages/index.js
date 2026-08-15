import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import config from '../utils/config'
import mascot from '../assets/mascot.svg'

export default function Index() {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />

      <section className="hero">
        <div className="hero-content">
          <h1>Bhanu Pratap Reddy</h1>
          <p className="hero-subtitle">Computational Physicist</p>
        </div>
        <div className="hero-image-container">
          <img
            src={mascot}
            className="hero-image"
            alt="Thermal Owl Mascot"
            width="220"
            height="220"
          />
          <aside className="hero-bubble">
            Curious about my career journey?{' '}
            <Link to="/resume">Explore my experience &rarr;</Link>
          </aside>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Experience Section                                                        */}
      {/* ========================================================================= */}
      <section className="segment">
        <Heading title="Experience" />

        <div className="experience-item">
          <div className="experience-header">
            <h3>Balto AI</h3>
            <span className="dates">April 2021 – Present</span>
          </div>
          <p className="role-title">Principal Software Engineer</p>
          <ul className="bullet-list">
            <li>
              <strong>Feature ownership:</strong> Own major product features across web and Electron desktop applications, from API contracts through UI to release: a coaching and performance analytics experience, full-text search across playbooks and call transcripts, real-time notification systems, and AI-powered authoring workflows backed by LLM endpoints.
            </li>
            <li>
              <strong>Design system:</strong> Created the front end design system and component library and drove its adoption across every product surface, with consolidated theming, cross-app visual parity, and white-label branding support.
            </li>
            <li>
              <strong>Complex migrations:</strong> Planned and led incremental framework migrations, landed alongside normal feature work with no feature freezes: migrating off a legacy UI framework, converting the charting layer to a more performant library, moving the test stack from Jest to Vitest, and upgrading off an end-of-life Node version.
            </li>
            <li>
              <strong>Technical direction:</strong> Set the modernization roadmap for both applications, sequencing React, Electron, and tooling upgrades, scoping a monorepo extraction, and writing internal style guides that make AI-assisted development consistent across codebases.
            </li>
            <li>
              <strong>Architecture consolidation:</strong> Consolidated duplicate architecture, merging two audio/video player implementations into a single shared media system validated against an exhaustive test matrix covering playback, seeking, transcripts, and error recovery.
            </li>
            <li>
              <strong>Hackathon winner (2021):</strong> Balto Chat, where Balto's AI technology meets chat, helping agents by adding real-time guidance, clickable suggestions, notifications, warnings, and encouragement.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Yum! Brands</h3>
            <span className="dates">March 2020 – April 2021</span>
          </div>
          <p className="role-title">Senior Software Engineer</p>
          <ul className="bullet-list">
            <li>Devised a strategy for migrating systems from the various Yum! brands (Pizza Hut, Taco Bell, KFC) to one unifying, modern platform for menu management.</li>
            <li>Led and mentored a team of five developers to develop and architect a Backend For Frontend (BFF) system to facilitate communication between a front end and multiple microservices.</li>
            <li>Designed and engineered a TypeScript API utilizing model view controller (MVC) design patterns, also serving as POC for the first of many TypeScript services for the company.</li>
            <li>Wrote a single sign on (SSO) authentication and authorization system utilizing AWS Cognito, OAuth 2.0, OpenID Connect and PKCE flow.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>DAIS Technology</h3>
            <span className="dates">August 2018 – March 2020</span>
          </div>
          <p className="role-title">Lead Front End Software Engineer</p>
          <ul className="bullet-list">
            <li>Architected an internal, reusable Node.js/React platform for implementing secure authentication and routing used across all DAIS front end applications.</li>
            <li>Led and mentored a team of three developers creating interactive and intuitive user interfaces in React and Vue.</li>
            <li>Cross-trained the automation and SDET teams to maintain and add new features to internal applications.</li>
            <li>Established company conventions/standards and documented all internal processes.</li>
            <li><strong>Hackathon winner (2019):</strong> DAIS Hub, a one-stop-shop for accessing and updating repositories, microservices, and deployments across multiple environments.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>RateYourSeats.com</h3>
            <span className="dates">January 2018 – August 2018</span>
          </div>
          <p className="role-title">Web Developer</p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Lettuce Entertain You Enterprises</h3>
            <span className="dates">June 2015 – June 2017</span>
          </div>
          <p className="role-title">Web Developer</p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Skills Section                                                            */}
      {/* ========================================================================= */}
      <section className="segment">
        <Heading title="Skills" />
        <ul className="bullet-list">
          <li><strong>Languages:</strong> TypeScript, JavaScript (React, Redux, Vue), Node.js, GraphQL, SQL, HTML5, CSS3, Python, Bash, PHP</li>
          <li><strong>Front End:</strong> Design systems and component libraries, Electron desktop applications, build tooling (Vite, Webpack), testing (Vitest, Jest, React Testing Library), incremental framework migrations, performance optimization</li>
          <li><strong>AI:</strong> AI-assisted development workflows, including internal style guides and master prompts for AI coding tools, and product features built on LLM endpoints</li>
          <li><strong>Back End:</strong> REST API design, MVC architecture, Postgres, SQL</li>
          <li><strong>Auth and Security:</strong> OAuth 2.0, OpenID Connect, SSO, JWT</li>
          <li><strong>Infrastructure:</strong> AWS (EC2, Route 53, RDS, S3, CloudFront), Linux/UNIX administration</li>
        </ul>
      </section>

      {/* ========================================================================= */}
      {/* Open Source & Writing Section                                             */}
      {/* ========================================================================= */}
      <section className="segment">
        <Heading title="Open Source and Writing" />
        <ul className="bullet-list">
          <li><strong>Writing:</strong> Author of technical articles on web development and computational modeling.</li>
          <li><strong>Publications:</strong> 40+ articles for digital platforms including series on full-stack architecture.</li>
          <li><strong>Book:</strong> Free educational guides on Document Object Models and engineering workflows.</li>
          <li><strong>Open Source:</strong> Projects with 20,000+ combined stars on GitHub.</li>
          <li><strong>Talks:</strong> Technical presentations and workshops delivered at industry meetups and developer conferences.</li>
        </ul>
      </section>

      {/* ========================================================================= */}
      {/* Education Section                                                         */}
      {/* ========================================================================= */}
      <section className="segment">
        <Heading title="Education" />
        <div className="experience-item">
          <div className="experience-header">
            <h3>Robert Morris University</h3>
            <span className="dates">2007 – 2011</span>
          </div>
          <p className="role-title">Bachelor of Professional Studies, Culinary Arts</p>
        </div>
      </section>
    </Layout>
  )
}
