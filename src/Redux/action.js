export const actionContants = {
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILURE: "GET_TODO_FAILURE",
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_TODO_STATUS: "TOGGLE_TODO_STATUS"
};

export const getTodoRequest = () => {
  return {
    type: actionContants.GET_TODO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const getTodoSuccess = (todos) => {
  return {
    type: actionContants.GET_TODO_SUCCESS,
    payload: {
      todos: todos
    }
  };
};

export const getTodoFailure = () => {
  return {
    type: actionContants.GET_TODO_FAILURE,
    payload: {
      isError: true
    }
  };
};

export const addTodo = ({ title, status, id }) => {
  return {
    type: actionContants.ADD_TODO,
    payload: {
      title,
      status,
      id
    }
  };
};
export const removeTodo = (id) => {
  return {
    type: actionContants.REMOVE_TODO_ITEM,
    payload: {
      id: id
    }
  };
};

export const toggleTodo = (id) => {
  return {
    type: actionContants.TOGGLE_TODO_STATUS,
    payload: {
      id: id
    }
  };
};
