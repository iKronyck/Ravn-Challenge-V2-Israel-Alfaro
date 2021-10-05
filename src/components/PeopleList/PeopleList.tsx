import React from 'react';
import {FlatList} from 'react-native';
import {TPeopleList, TPeopleItem} from './PeopleList.type';
import {PersonCell} from '@components';

export const PeopleList: React.FC<TPeopleList> = ({
  onPressGoToPeopleDetail,
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
      bounces={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};
