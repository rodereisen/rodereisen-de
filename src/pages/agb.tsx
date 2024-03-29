import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import PageHead from "../components/page-head"
import HeaderImage from "../components/header-image"
import SectionHeadline from "../components/section-headline"

const AGBPage = props => {
  const content = props.data.allFile.edges[0].node
  const { childrenMarkdownRemark } = content
  const { html } = childrenMarkdownRemark[0]
  return (
    <Layout>
      <PageHead title="AGB" />
      <HeaderImage banner="Banner_6">
        <SectionHeadline headline="AGB" subheadline="" />
        <div
          className="container p-4 lg:p-0 lg:w-1/2"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </HeaderImage>
    </Layout>
  )
}

// We use the GraphiQL query here
export const query = graphql`
  query AgbPageQuery {
    allFile(
      filter: { sourceInstanceName: { eq: "pages" }, name: { eq: "agb" } }
    ) {
      edges {
        node {
          id
          name
          childrenMarkdownRemark {
            html
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  }
`

export default AGBPage
