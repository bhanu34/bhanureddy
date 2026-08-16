import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
import { projectsList } from '../data/projectsList'
import config from '../utils/config'
import { getSimplifiedPosts } from '../utils/helpers'

export default function Index({ data }) {
  const latest = data.latest.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />

      <Hero title="Hey, I'm Bhanu!" index>
        <p className="hero-description">
          I'm a simulation engineer and computational physicist. Welcome to my
          personal website and digital garden.
        </p>
      </Hero>

      <section className="segment first">
        <Heading title="Latest Articles" link="/blog" linkText="View all" />
        <Posts data={simplifiedLatest} />
      </section>

      <section className="segment">
        <Heading title="Projects" link="/projects" linkText="View all" />
        <div className="post-preview">
          <ul className="project-list">
            {projectsList.slice(0, 4).map((project) => (
              <li key={project.name}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-title"
                >
                  {project.name}
                </a>
                <div className="project-description">{project.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
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
  }
`
