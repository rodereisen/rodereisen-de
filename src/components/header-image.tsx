import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import SectionWaves from "./section-waves"

const HeaderImage = (props: HeaderImageProps) => {
  const data = useStaticQuery(graphql`
    query HeaderImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "banner" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            id
            name
            extension
          }
        }
      }
    }
  `)
  const { banner, children } = props

  const bannerIndex = data.allFile.edges.findIndex(
    ({ node }) => node.name === banner
  )
  const { node } = data.allFile.edges[bannerIndex > -1 ? bannerIndex : 0]
  const image = getImage(node)
  return image ? (
    <>
      <div className={`bg-gradient ${banner}`}>
        <div className="container mt-24 lg:mt-0">
          <GatsbyImage image={image} alt={props.alt} />
        </div>
        <SectionWaves />
      </div>
      <div className="">{children ? children : null}</div>
    </>
  ) : (
    children
  )
}

interface HeaderImageProps {
  alt?: string
  banner: string
  children?: any
}

HeaderImage.defaultProps = {
  alt: `Reisebüro Rode GmbH`,
}

export default HeaderImage
