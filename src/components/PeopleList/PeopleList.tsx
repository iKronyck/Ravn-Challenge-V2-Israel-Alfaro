import React from 'react';
import {FlatList} from 'react-native';
import {TPeopleList, TPeopleItem} from './PeopleList.type';
import {PersonCell, LoadingCell} from '@components';

export const PeopleList: React.FC<TPeopleList> = ({
  onPressGoToPeopleDetail,
  isLoadingMoreData,
  onRefetchData,
  data,
}) => {
  const renderItem = ({item: {id, name, information}}: TPeopleItem) => (
    <PersonCell
      name={name}
      profession={information}
      onPress={() => onPressGoToPeopleDetail(id)}
    />
  );

  return (
    <FlatList
      data={data}
      extraData={isLoadingMoreData}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      onEndReachedThreshold={0.1}
      onEndReached={onRefetchData}
      ListFooterComponent={isLoadingMoreData ? <LoadingCell /> : null}
    />
  );
};
