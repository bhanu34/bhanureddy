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
