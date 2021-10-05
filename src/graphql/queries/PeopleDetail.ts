import {gql} from '@apollo/client';

export const GET_PERSON = gql`
  query person($id: ID) {
    person(id: $id) {
      name
      birthYear
      eyeColor
      hairColor
      skinColor
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
    }
  }
`;
