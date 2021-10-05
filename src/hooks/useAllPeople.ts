import {useQuery} from '@apollo/client';
import {GET_ALL_PEOPLE} from '../graphql/queries/AllPeople';
import {peopleParser} from '../utils';

export const useAllPeople = () => {
  const {data, loading, error, fetchMore} = useQuery(GET_ALL_PEOPLE);
  const peoples = peopleParser(data?.allPeople?.people);
  const pageInfo = data?.allPeople.pageInfo;

  return {peoples, data, pageInfo, loading, error, fetchMore};
};
