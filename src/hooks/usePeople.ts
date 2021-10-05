import {useQuery} from '@apollo/client';
import {peopleDetailParser} from '../utils';
import {GET_PERSON} from '../graphql/queries/PeopleDetail';

export const usePeople = (personId: string) => {
  const {data, loading, error} = useQuery(GET_PERSON, {
    variables: {
      id: personId,
    },
  });
  const people = peopleDetailParser(data?.person);
  return {
    data: people,
    loading,
    error,
  };
};
