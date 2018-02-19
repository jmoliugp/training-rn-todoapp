import { todosFetchDataSuccess, todosIsLoading, todosHasErrored } from '../Stores/Redux/actions/index';

export const todosFetchSoloData = (url) => {
  console.log('ENTRO');
  return (dispatch) => {
    dispatch(todosIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(todosIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then((todos) => {
        dispatch(todosFetchDataSuccess(getStarships(todos)));
      })
      .catch(() => dispatch(todosHasErrored(true)));
  };
};

export const errorAfterFiveSeconds = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(todosHasErrored(true));
    }, 5000);
  };
};

const getStarships = (json) => {
  return json.results.map((starship) => {
    return {
      title: starship.name,
      id: Math.random(),
      pending: true,
    };
  });
};
