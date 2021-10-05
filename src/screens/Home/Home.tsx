import React, {FC} from 'react';
import {View} from 'react-native';
import {Header, LoadingCell, ErrorBoundary, PeopleList} from '@components';
import {useAllPeople} from '@hooks';
import {EAppRoutes} from '@router';
import {THomeScreen} from './Home.type';

export const Home: FC<THomeScreen> = ({navigation}) => {
  const {peoples, loading, error} = useAllPeople();

  const onPressGoToPeopleDetail = (personId: string) =>
    navigation.navigate(EAppRoutes.PEOPLE_INFORMATION, {personId});

  return (
    <View>
      <Header title="People of Star Wars" />
      <ErrorBoundary error={error}>
        <PeopleList
          onPressGoToPeopleDetail={(personId: string) =>
            onPressGoToPeopleDetail(personId)
          }
          data={peoples}
        />
      </ErrorBoundary>
      {loading ? <LoadingCell /> : null}
    </View>
  );
};
