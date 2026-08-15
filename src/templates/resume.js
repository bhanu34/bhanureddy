import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { PageLayout } from '../components/PageLayout'
import { Heading } from '../components/Heading'
import config from '../utils/config'

export default function ResumeTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const { 
    title, 
    description, 
    experience, 
    education, 
    skills 
  } = frontmatter

  return (
    <Layout Layout={PageLayout}>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO postNode={markdownRemark} pageSEO />

      <section>
        <Heading title={title} description={description} />

        <div className="resume-sections">
          {/* Experience Section */}
          {experience && experience.length > 0 && (
            <div className="resume-section">
              <Heading title="Experience" small />
              {experience.map((item, index) => (
                <div className="resume-item" key={`exp-${index}`}>
                  <div className="resume-item-header">
                    <Heading 
                      title={item.company} 
                      small 
                      subtitle={item.title} 
                    />
                    <div className="resume-item-meta">
                      <span className="dates">{item.dates}</span>
                      <span className="location">{item.location}</span>
                    </div>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education Section */}
          {education && education.length > 0 && (
            <div className="resume-section">
              <Heading title="Education" small />
              {education.map((item, index) => (
                <div className="resume-item" key={`edu-${index}`}>
                  <div className="resume-item-header">
                    <Heading 
                      title={item.school} 
                      small 
                      subtitle={item.degree} 
                    />
                    <div className="resume-item-meta">
                      <span className="dates">{item.dates}</span>
                    </div>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Skills Section */}
          {skills && skills.length > 0 && (
            <div className="resume-section skills">
              <Heading title="Skills" small />
              <div className="skills-grid card cards">
                {skills.map((skill, index) => (
                  <span className="skill-tag secondary small button" key={`skill-${index}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

// Graphql query to pull data from the resume.md file
export const pageQuery = graphql`
  query ResumeBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        experience {
          company
          title
          dates
          location
          description
        }
        education {
          school
          degree
          dates
          description
        }
        skills
      }
    }
  }
`
