import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    posts {
      featuredImage {
        url
      }
      createdAt
      slug
      title
      exerpt
      categories {
        name
        slug
      }
      author {
        bio
        name
        id
        photo {
          url
        }
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query);
    
  return result;
};

/*
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            exerpt
            featuredImage {
              id
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
*/
