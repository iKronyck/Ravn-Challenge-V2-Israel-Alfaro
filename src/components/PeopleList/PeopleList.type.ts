export type TPeopleList = {
  data: any[];
  onPressGoToPeopleDetail: (personId: string) => void;
};

type TPeopleData = {
  id: string;
  name: string;
  information: string;
};

export type TPeopleItem = {
  item: TPeopleData;
};
