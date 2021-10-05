export const peopleParser = (data: any[] | undefined) => {
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
