type TPeopleInformation = {
  id: string;
  name: string;
  homeworld: {name: string};
  species: {name: string};
};

export const peopleParser = (data: TPeopleInformation[] | undefined) => {
  const peoples = data?.map(({id, name, homeworld, species}) => {
    const specie = species?.name || 'Human';
    const region = homeworld?.name;
    const information = `${specie} from ${region}`;
    return {
      id,
      name,
      information,
    };
  });
  return peoples;
};
