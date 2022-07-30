import { gql, GraphQLClient } from 'graphql-request'

export const url: string = process.env.GRAPHCMS_URL!
export const apikey = `Bearer ${process.env.GRAPHCMS_KEY}`

export const graphcms = new GraphQLClient(url)

export const getProjectsList = async () => {
  const query = gql`
    query {
      projects {
        id
        title
        githubLink
        tech
        gif {
          url
        }
        description {
          raw
        }
      }
    }
  `

  const results = await graphcms.request(query)

  

  return results.projects
}
