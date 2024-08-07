import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import PageHead from "../components/page-head"
import HeaderImage from "../components/header-image"
import SectionHeadline from "../components/section-headline"

const VeranstalterAGBPage = props => {
  const content = props.data.allFile.edges[0].node
  const { childrenMarkdownRemark } = content
  const { html } = childrenMarkdownRemark[0]
  return (
    <Layout>
      <PageHead title="Veranstalter AGB" />
      <HeaderImage banner="Banner_1">
        <SectionHeadline headline="Veranstalter AGB" subheadline="" />
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
  query VeranstalterAGBPageQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "pages" }
        name: { eq: "veranstalter-agb" }
      }
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

export default VeranstalterAGBPage
