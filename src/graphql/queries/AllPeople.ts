import {gql} from '@apollo/client';

export const GET_ALL_PEOPLE = gql`
  query allPeople($after: String) {
    allPeople(first: 5, after: $after) {
      people {
        id
        name
        homeworld {
          name
        }
        species {
          name
        }
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
