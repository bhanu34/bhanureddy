import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import { projectsList } from '../data/projectsList'
import { shelvesList } from '../data/shelvesList'
import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'
import github from '../assets/nav-github.png'
import mascot from '../assets/mascot.svg'

export default function Index({ data }) {
  const latestPosts = data.latestPosts.edges
  const postCount = data.postCount.totalCount
  const recent = useMemo(() => getSimplifiedPosts(latestPosts), [latestPosts])
  const shelfPostsBySlug = useMemo(() => {
    const map = {}

    data.shelfPosts.nodes.forEach(({ frontmatter }) => {
      map[frontmatter.slug] = frontmatter
    })

    return map
  }, [data.shelfPosts])

  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />

      <PageLayout>
        <Hero type="index">
          <div className="hero-wrapper">
            <div>
              <h1 className="flex-align-center gap">Bhanu Pratap Reddy</h1>
              <p className="hero-description hero-tagline">
                Computational Physicist
              </p>

              {/* Experience Section */}
              <h2 className="section-title">EXPERIENCE</h2>

              <div className="hero-experience">
                {/* Stryker */}
                <h3 className="company-heading">
                  <a
                    href="https://www.stryker.com/in/en/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stryker
                  </a>
                </h3>

                <div className="role-row">
                  <span className="role-title">Staff CAE Engineer</span>
                  <span className="role-date">August 2021 – Present</span>
                </div>

                <ul className="experience-bullets">
                  <li>
                    <strong>Instruments Division:</strong> Responsible for delivering modeling and simulation-driven insights for MedSurg (Medical &amp; Surgical) devices and equipment to reduce development costs, accelerate time-to-market, and drive innovation, with expertise in thermal management and reliability physics-based life prediction of medical electronic hardware early in the design process.
                  </li>
                  <li>
                    <strong>Trauma &amp; Extremities Division:</strong> Collaborated with Orthopedics R&amp;D teams to develop advanced nonlinear micromotion models for quantifying implant loosening and performed material characterization of complex materials such as UHMWPE. Developed and validated FEA methodologies using Digital Image Correlation (DIC) for implant micromotion in accordance with ASTM F2028, and supported in-silico clinical studies for bone remodeling prediction using statistical population data. Contributed to simulation-driven development and performance assessment of complex humeral reconstruction implants, robotic shoulder surgical platforms, patient-specific implants, and trauma fixation systems including nails and plates, enabling robust design decisions, improved product performance, and enhanced clinical outcomes.
                  </li>
                </ul>

                {/* CADFEM */}
                <h3 className="company-heading" style={{ marginTop: '1.75rem' }}>
                  <a
                    href="https://www.cadfem.net/en/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CADFEM
                  </a>
                </h3>

                <div className="role-row">
                  <span className="role-title">Sr. Simulation Engineer</span>
                  <span className="role-date">September 2017 – August 2021</span>
                </div>

                <ul className="experience-bullets">
                  <li>
                    <strong>Consulting:</strong> Provided CAE/FEA support for product development by translating client requirements into simulation models, validating designs through FEA and experimental correlation, and recommending design improvements. Collaborated with cross-functional and international teams, conducted engineering analysis and background research, addressed technical knowledge gaps, and applied relevant industry standards and emerging simulation methodologies to deliver effective engineering solutions.
                  </li>
                </ul>
              </div>

              {/* Education Section */}
              <h2 className="section-title" style={{ marginTop: '2.5rem' }}>
                EDUCATION
              </h2>

              <div className="hero-experience">
                {/* BITS Pilani */}
                <h3 className="company-heading">
                  <a
                    href="https://bits-pilani-wilp.ac.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BITS Pilani, WILP
                  </a>
                </h3>

                <div className="role-row">
                  <span className="role-title">
                    M.Tech in Mechanical Engineering
                  </span>
                  <span className="role-date">2019 – 2021</span>
                </div>

                {/* JNTU Hyderabad */}
                <h3 className="company-heading" style={{ marginTop: '1.75rem' }}>
                  <a
                    href="https://jntuh.ac.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    JNTU, Hyderabad
                  </a>
                </h3>

                <div className="role-row">
                  <span className="role-title">
                    B.Tech in Civil Engineering
                  </span>
                  <span className="role-date">2013 – 2017</span>
                </div>
              </div>

              {/* Skills Section */}
              <h2 className="section-title" style={{ marginTop: '2.5rem' }}>
                SKILLS
              </h2>

              <ul className="experience-bullets">
                <li>
                  <strong>Thermal Management:</strong> Battery Thermal Management, Electronics Thermal Management, Thermal Digital Twins, Thermal Control Strategies, Thermal Optimization.
                </li>
                <li>
                  <strong>Cooling Technologies:</strong> Liquid Cooling, Single- &amp; Two-Phase Flow, Air Cooling Systems, Heat Pipes, Vapor Chambers, Thermoelectric Coolers (TECs), Thermal Interface Materials (TIMs), Phase Change Materials (PCMs), Two-Phase Immersion Cooling.
                </li>
                <li>
                  <strong>Electronics &amp; Data Center Cooling:</strong> High-Power Electronics Cooling, Data Center Thermal Management, Server &amp; Rack-Level Cooling, Airflow Management, Thermal Hotspot Mitigation, Thermal Architecture.
                </li>
                <li>
                  <strong>CFD &amp; Thermal Analysis:</strong> Conjugate Heat Transfer (CHT), Steady-State &amp; Transient Thermal Analysis, Flow Distribution, Pressure Drop, Thermal Resistance Networks, Radiation in Electronics, Airflow Optimization, Baffle &amp; Flow-Guide Design.
                </li>
                <li>
                  <strong>Electronics Reliability:</strong> Reliability Physics, Physics-of-Failure (PoF), Electronics Life Prediction, Thermal Reliability, Temperature-Dependent Failure Mechanisms, Accelerated Life Testing, Reliability Modeling, Failure Analysis &amp; Root Cause Analysis.
                </li>
                <li>
                  <strong>Thermal Validation:</strong> Temperature Measurement &amp; Validation, Simulation–Test Correlation, Thermal Characterization, Thermal Test Planning &amp; Reporting, Thermal Cycling, Reliability Validation.
                </li>
                <li>
                  <strong>System-Level Engineering:</strong> HVAC, Thermal Control Algorithms, Device &amp; System-Level Thermal Optimization, Thermal Performance Modeling.
                </li>
                <li>
                  <strong>Design Optimization &amp; Automation:</strong> Design of Experiments (DoE), Statistical Analysis, Parametric &amp; Sensitivity Studies, Optimization, Python-Based DoE &amp; Optimization, Automated Thermal Post-Processing, Steady-State Temperature Tracking.
                </li>
              </ul>
            </div>

            <div className="hero-image-container">
              <img
                src={mascot}
                className="hero-image"
                alt="Thermal Owl Mascot"
                width="220"
                height="220"
                style={{ transform: 'translateY(10px)' }}
              />
              <aside className="hero-bubble">
                Curious about my career journey?{' '}
                <Link to="/resume">Explore my experience &rarr;</Link>
              </aside>
            </div>
          </div>
        </Hero>

        {shelvesList && shelvesList.length > 0 && shelvesList.map((shelf) => (
          <section className="section-index" key={shelf.title}>
            <Heading
              title={shelf.title}
              description={shelf.description}
              slug={shelf.slug}
              buttonText={shelf.buttonText}
            />
            <div className="posts shelf">
              {shelf.links.map((link) => {
                if (link.url) {
                  return (
                    <a
                      className="post"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      key={link.title}
                    >
                      <div>{link.title}</div>
                    </a>
                  )
                }

                const post = shelfPostsBySlug[link.slug.replace(/^\//, '')]
                const icon = post?.thumbnail?.publicURL

                return (
                  <Link className="post" to={link.slug} key={link.slug}>
                    <div>
                      {icon && <img src={icon} alt="" width="25" height="25" />}
                      {link.title ?? post?.title}
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        ))}

        <section className="section-index">
          <Heading title="Latest" slug="/blog" buttonText="All Posts" />
          <Posts data={recent} />
        </section>

        <section>
          <Heading
            title="Projects"
            slug="/projects"
            buttonText="All Projects"
            description="Projects and open-source software I've worked on."
            icon={github}
          />

          <div className="cards">
            {projectsList
              .filter((project) => project.highlight)
              .map((project) => {
                return (
                  <div className="card" key={`highlight-${project.slug}`}>
                    <time>{project.date}</time>
                    <div className="card-title">
                      <a
                        href={project.url || `https://github.com/bhanu34/${project.slug}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.name}
                      </a>
                    </div>
                    <p>{project.tagline}</p>
                    <div className="card-links">
                      {project.writeup && (
                        <Link
                          className="button secondary small"
                          to={project.writeup}
                        >
                          Article
                        </Link>
                      )}
                      {project.url && (
                        <a
                          className="button secondary small"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo
                        </a>
                      )}
                      <a
                        className="button secondary small"
                        href={`https://github.com/bhanu34/${project.slug}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                )
              })}
          </div>
        </section>
      </PageLayout>
    </>
  )
}

Index.Layout = Layout

export const pageQuery = graphql`
  query IndexQuery {
    latestPosts: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
    postCount: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      totalCount
    }
    shelfPosts: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      nodes {
        frontmatter {
          slug
          title
          thumbnail {
            publicURL
          }
        }
      }
    }
  }
`
