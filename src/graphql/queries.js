import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ownerAvatarUrl
          ownerName
          stargazersCount
          ratingAverage
          forksCount
          language
          fullName
          description
          reviewCount
          id
        }
      }
    }
  }
`;
export const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository(id: $id) {
      ownerAvatarUrl
      ownerName
      stargazersCount
      ratingAverage
      forksCount
      language
      fullName
      description
      reviewCount
      id
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }`;

export const SIGN_IN = gql`
  mutation ($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CURRENT_USER = gql`
  query {
    me {
      id
      username
    }
  }
`