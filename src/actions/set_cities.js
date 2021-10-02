import cities from '../cities';

const setCities = () => {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
};

export default setCities;
