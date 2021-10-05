import React, {FC} from 'react';
import {View} from 'react-native';
import {TPeopleDetailScreen} from './PeopleDetail.type';
import {
  Header,
  LoadingCell,
  SectionHeader,
  DataCell,
  ErrorBoundary,
} from '@components';
import {usePeople} from '@hooks';

export const PeopleDetail: FC<TPeopleDetailScreen> = ({navigation, route}) => {
  const {data, loading, error} = usePeople(route.params.personId);
  return (
    <View>
      <Header
        title={data?.name || ''}
        onPressBack={() => navigation.goBack()}
      />
      {loading ? (
        <LoadingCell />
      ) : (
        <ErrorBoundary error={error}>
          <>
            <SectionHeader message="General Information" />
            {data?.eyeColor ? (
              <DataCell title="Eye Color" information={data.eyeColor} />
            ) : null}
            {data?.hairColor ? (
              <DataCell title="Hair Color" information={data.hairColor} />
            ) : null}
            {data?.skinColor ? (
              <DataCell title="Skin Color" information={data.skinColor} />
            ) : null}
            {data?.birthYear ? (
              <DataCell title="Birth Year" information={data.birthYear} />
            ) : null}

            {data?.vehicles?.length > 0 ? (
              <>
                <SectionHeader message="Vehicles" />
                {data.vehicles.map((item: {id: string; name: string}) => (
                  <DataCell key={item.id} title={item.name} />
                ))}
              </>
            ) : null}
          </>
        </ErrorBoundary>
      )}
    </View>
  );
};
