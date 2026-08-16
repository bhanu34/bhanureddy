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
                <h3 className="company-heading">
                  <a href="https://balto.ai" target="_blank" rel="noreferrer">
                    Balto AI
                  </a>
                </h3>

                <div className="role-row">
                  <span className="role-title">Principal Software Engineer</span>
                  <span className="role-date">April 2021 &ndash; Present</span>
                </div>

                <ul className="experience-bullets">
                  <li>
                    <strong>Feature ownership:</strong> Own Balto's entire front end surface across the two core products: the agent-facing real-time guidance experience in the Electron desktop app, and the manager-facing cloud application where teams search, review, and coach on calls. Deliver major features end-to-end from API contracts to release, including the call exploration suite, coaching and performance-analytics, real-time notification systems, and AI-powered authoring workflows backed by LLM endpoints.
                  </li>
                  <li>
                    <strong>Design system:</strong> Created the front end design system and component library and drove its adoption across every product surface, with consolidated theming, cross-app visual parity, and white-label branding support.
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
      sort: { frontmatter: { date: DESC } }
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
