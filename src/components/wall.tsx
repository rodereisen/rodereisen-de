import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import SectionWaves from "./section-waves"
import "./wall.css"

export interface Walltile {
  colspan?: number
  src?: string
  type: "image" | "text"
}

const Wall = ({tiles = []}: WallProps) => {
  const data = useStaticQuery(graphql`
    query WallTilesImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "tiles" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(height: 400, layout: CONSTRAINED)
            }
            id
            name
            extension
          }
        }
      }
    }
  `)

  const sorted = data.allFile.edges.sort(
    (a, b) =>
      parseInt(a.node.name.split("-")[0]) - parseInt(b.node.name.split("-")[0])
  )
  const t = sorted.map(({ node }) => {
    const span = node.name.split("-")[1]
    return {
      tile: getImage(node),
      span: span ? parseInt(span) : 1,
    }
  })
  return (
    <div className="bg-gradient">
      <div className="container pt-32 p-4">
        <div className="rounded shadow overflow-hidden">
          {/* <div className="wall grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 grid-rows-3 gap-0 "> */}
          <div className="wall grid gap-0 ">
            {t.map(({ tile, span }, index) => (
              <div
                key={index}
                className={`${span === 2 ? "col-span-2" : null}`}
              >
                <GatsbyImage image={tile} alt="Reisebüro Rode Gmbh" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionWaves />
    </div>
  )
}

interface WallProps {
  tiles?: Walltile[]
}

export default Wall
