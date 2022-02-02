import * as React from "react"
import { graphql, Link } from 'gatsby'

const Home = ({ data }) => {
  return (
    <>
      <h1>Recipe List</h1>
      <ul>
        {data.allMdx.edges.map(nodes => (
          <li>
            <Link to={nodes.node.slug}>{nodes.node.frontmatter.title}</Link>
          </li>)
        )}
      </ul>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {slug: {regex: "/recipes/"}}
      sort: {fields: frontmatter___title, order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`
export default Home