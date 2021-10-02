const setActiveCity = (city) => {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city
  };
};

export default setActiveCity;
