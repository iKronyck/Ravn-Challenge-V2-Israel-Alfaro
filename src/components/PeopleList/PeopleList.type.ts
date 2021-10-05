type TPeopleData = {
  id: string;
  name: string;
  information: string;
};

export type TPeopleItem = {
  item: TPeopleData;
};

export type TPeopleList = {
  data: TPeopleData[];
  onPressGoToPeopleDetail: (personId: string) => void;
};
