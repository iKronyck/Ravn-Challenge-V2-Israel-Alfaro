import React, {FC} from 'react';
import {View} from 'react-native';
import {Header, LoadingCell, ErrorBoundary, PeopleList} from '@components';
import {useAllPeople} from '@hooks';
import {EAppRoutes} from '@router';
import {THomeScreen} from './Home.type';

export const Home: FC<THomeScreen> = ({navigation}) => {
  const {peoples, loading, error, fetchMore, pageInfo, totalCount} =
    useAllPeople();
  const [isLoading, setIsLoading] = React.useState(false);

  const onPressGoToPeopleDetail = (personId: string) =>
    navigation.navigate(EAppRoutes.PEOPLE_INFORMATION, {personId});

  const onRefetch = async () => {
    if (pageInfo?.hasNextPage && !isLoading) {
      setIsLoading(true);
      await fetchMore({
        variables: {
          after: pageInfo?.endCursor,
        },
        updateQuery: (prev: any, {fetchMoreResult}) => {
          if (!fetchMoreResult || peoples.length === totalCount) {
            return prev;
          }
          fetchMoreResult.allPeople.people = [
            ...prev.allPeople.people,
            ...fetchMoreResult.allPeople.people,
          ];
          return fetchMoreResult;
        },
      });
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (peoples?.length === 5) {
      onRefetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [peoples]);

  return (
    <View>
      <Header title="People of Star Wars" />
      <ErrorBoundary error={error}>
        <PeopleList
          onPressGoToPeopleDetail={(personId: string) =>
            onPressGoToPeopleDetail(personId)
          }
          data={peoples}
          onRefetchData={onRefetch}
          isLoadingMoreData={isLoading}
        />
      </ErrorBoundary>
      {loading ? <LoadingCell /> : null}
    </View>
  );
};
