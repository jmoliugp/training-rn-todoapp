import { todosFetchDataSuccess, todosLoadingStatus } from '../../Stores/Redux/actions';
import { TodosLoadingStates } from '../../Helpers';

const todosFetchData = (url, parseJson) => {
  return async (dispatch) => {
    try {
      dispatch(todosLoadingStatus(TodosLoadingStates.IN_PROGRESS));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const jsonResponse = await response.json();
      dispatch(todosFetchDataSuccess(parseJson(jsonResponse)));
      dispatch(todosLoadingStatus(TodosLoadingStates.SUCCESFUL));
    } catch (err) {
      dispatch(todosLoadingStatus(TodosLoadingStates.FAILED));
    }
  };
};

export default todosFetchData;
