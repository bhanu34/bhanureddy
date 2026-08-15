import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import config from '../utils/config'

export default function Index() {
  return (
    <Layout>
      <Helmet title={`Resume | ${config.siteTitle}`} />
      <SEO />

      <div className="resume-container">
        {/* Header Section */}
        <header className="resume-header">
          <h1 className="resume-name">Bhanu Pratap Reddy</h1>
          <p className="resume-tagline">Computational Physicist</p>
          <div className="resume-contact">
            <span>
              <strong>Email:</strong>{' '}
              <a href="mailto:hello@bhanureddy.com">hello@bhanureddy.com</a>
            </span>
            <span className="divider">|</span>
            <span>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/bhanu34"
                target="_blank"
                rel="noreferrer"
              >
                @bhanu34
              </a>
            </span>
          </div>
        </header>

        {/* Experience Section */}
        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>

          <div className="resume-item">
            <div className="resume-item-top">
              <h3 className="resume-company">
                <a href="https://balto.ai" target="_blank" rel="noreferrer">
                  Balto AI
                </a>
              </h3>
              <span className="resume-date">April 2021 – Present</span>
            </div>
            <div className="resume-role">Principal Software Engineer</div>
            <ul className="resume-bullets">
              <li>
                <strong>Feature ownership:</strong> Own major product features
                across web and Electron desktop applications, from API
                contracts through UI to release: a coaching and performance
                analytics experience, full-text search across playbooks and
                call transcripts, real-time notification systems, and
                AI-powered authoring workflows backed by LLM endpoints.
              </li>
              <li>
                <strong>Design system:</strong> Created the front end design
                system and component library and drove its adoption across every
                product surface, with consolidated theming, cross-app visual
                parity, and white-label branding support.
              </li>
              <li>
                <strong>Complex migrations:</strong> Planned and led
                incremental framework migrations, landed alongside normal
                feature work with no feature freezes: migrating off a legacy UI
                framework, converting the charting layer to a more performant
                library, moving the test stack from Jest to Vitest, and upgrading
                off an end-of-life Node version.
              </li>
              <li>
                <strong>Technical direction:</strong> Set the modernization
                roadmap for both applications, sequencing React, Electron, and
                tooling upgrades, scoping a monorepo extraction, and writing
                internal style guides that make AI-assisted development
                consistent across codebases.
              </li>
              <li>
                <strong>Architecture consolidation:</strong> Consolidated
                duplicate architecture, merging two audio/video player
                implementations into a single shared media system validated
                against an exhaustive test matrix covering playback, seeking,
                transcripts, and error recovery.
              </li>
              <li>
                <strong>Hackathon winner (2021):</strong> Balto Chat, where
                Balto's AI technology meets chat, helping agents by adding
                real-time guidance, clickable suggestions, notifications,
                warnings, and encouragement.
              </li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <h3 className="resume-company">Yum! Brands</h3>
              <span className="resume-date">March 2020 – April 2021</span>
            </div>
            <div className="resume-role">Senior Software Engineer</div>
            <ul className="resume-bullets">
              <li>
                Devised a strategy for migrating systems from the various Yum!
                brands (Pizza Hut, Taco Bell, KFC) to one unifying, modern
                platform for menu management.
              </li>
              <li>
                Led and mentored a team of five developers to develop and
                architect a Backend For Frontend (BFF) system to facilitate
                communication between a front end and multiple microservices.
              </li>
              <li>
                Designed and engineered a TypeScript API utilizing model view
                controller (MVC) design patterns, also serving as POC for the
                first of many TypeScript services for the company.
              </li>
              <li>
                Wrote a single sign on (SSO) authentication and authorization
                system utilizing AWS Cognito, OAuth 2.0, OpenID Connect and PKCE
                flow.
              </li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <h3 className="resume-company">DAIS Technology</h3>
              <span className="resume-date">August 2018 – March 2020</span>
            </div>
            <div className="resume-role">Lead Front End Software Engineer</div>
            <ul className="resume-bullets">
              <li>
                Architected an internal, reusable Node.js/React platform for
                implementing secure authentication and routing used across all
                DAIS front end applications.
              </li>
              <li>
                Led and mentored a team of three developers creating interactive
                and intuitive user interfaces in React and Vue.
              </li>
              <li>
                Cross-trained the automation and SDET teams to maintain and add
                new features to internal applications.
              </li>
              <li>
                Established company conventions/standards and documented all
                internal processes.
              </li>
              <li>
                <strong>Hackathon winner (2019):</strong> DAIS Hub, a
                one-stop-shop for accessing and updating repositories,
                microservices, and deployments across multiple environments.
              </li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <h3 className="company-name">RateYourSeats.com</h3>
              <span className="resume-date">January 2018 – August 2018</span>
            </div>
            <div className="resume-role">Web Developer</div>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <h3 className="company-name">
                Lettuce Entertain You Enterprises
              </h3>
              <span className="resume-date">June 2015 – June 2017</span>
            </div>
            <div className="resume-role">Web Developer</div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <ul className="resume-bullets">
            <li>
              <strong>Languages:</strong> TypeScript, JavaScript (React, Redux,
              Vue), Node.js, GraphQL, SQL, HTML5, CSS3, Python, Bash, PHP
            </li>
            <li>
              <strong>Front End:</strong> Design systems and component
              libraries, Electron desktop applications, build tooling (Vite,
              Webpack), testing (Vitest, Jest, React Testing Library),
              incremental framework migrations, performance optimization
            </li>
            <li>
              <strong>AI:</strong> AI-assisted development workflows, including
              internal style guides and master prompts for AI coding tools, and
              product features built on LLM endpoints
            </li>
            <li>
              <strong>Back End:</strong> REST API design, MVC architecture,
              Postgres, SQL
            </li>
            <li>
              <strong>Auth and Security:</strong> OAuth 2.0, OpenID Connect, SSO,
              JWT
            </li>
            <li>
              <strong>Infrastructure:</strong> AWS (EC2, Route 53, RDS, S3,
              CloudFront), Linux/UNIX administration
            </li>
          </ul>
        </section>

        {/* Open Source & Writing Section */}
        <section className="resume-section">
          <h2 className="resume-section-title">Open Source and Writing</h2>
          <ul className="resume-bullets">
            <li>
              <strong>Writing:</strong> Author of technical articles on web
              development and computational modeling.
            </li>
            <li>
              <strong>Publications:</strong> 40+ articles for digital platforms
              including series on full-stack architecture.
            </li>
            <li>
              <strong>Book:</strong> Free educational guides on Document Object
              Models and engineering workflows.
            </li>
            <li>
              <strong>Open Source:</strong> Projects with 20,000+ combined stars
              on GitHub.
            </li>
            <li>
              <strong>Talks:</strong> Technical presentations and workshops
              delivered at industry meetups and developer conferences.
            </li>
          </ul>
        </section>

        {/* Education Section */}
        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-item">
            <div className="resume-item-top">
              <h3 className="resume-company">Robert Morris University</h3>
              <span className="resume-date">2007 – 2011</span>
            </div>
            <div className="resume-role">
              Bachelor of Professional Studies, Culinary Arts
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
