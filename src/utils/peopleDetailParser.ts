type TVehicles = {
  vehicles: [];
};

type TPeopleData = {
  name: string;
  birthYear: string;
  hairColor: string;
  eyeColor: string;
  skinColor: string;
  vehicleConnection: TVehicles;
};

export const peopleDetailParser = (data: TPeopleData | undefined) => {
  return {
    name: data?.name,
    birthYear: data?.birthYear,
    eyeColor: data?.eyeColor,
    hairColor: data?.hairColor,
    skinColor: data?.skinColor,
    vehicles: data?.vehicleConnection?.vehicles,
  };
};
