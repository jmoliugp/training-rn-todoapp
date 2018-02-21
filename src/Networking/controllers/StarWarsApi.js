import todosFetchData from '../services/TodoListService';

const BASE_URL = 'https://swapi.co/api';

const parseStarships = (json) => {
  return json.results.map((starship) => {
    return {
      title: starship.name,
      id: Math.random(),
      pending: true,
    };
  });
};

export const getStarships = todosFetchData(`${BASE_URL}/starships`, parseStarships);
