import { gql, GraphQLClient } from 'graphql-request'

export const url: string = process.env.GRAPHCMS_URL!

export const graphcms = new GraphQLClient(url)

export const getProjectsList = async () => {
  const query = gql`
    query {
      projects(orderBy: createdAt_DESC) {
        id
        title
        githubLink
        tech
        images {
          id
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
