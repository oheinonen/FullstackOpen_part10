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
