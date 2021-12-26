import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  toggleTodo,
  getTodoRequest,
  getTodoSuccess,
  getTodoFailure
} from "../Redux/action";

const TodoItem = ({ title, status, onDelete, id, onToggle }) => {
  return (
    <div style={{ display: "flex", padding: "1 rem" }}>
      <div>{title} - </div>
      <div>{`${status}`}</div>
      <button onClick={() => onDelete(id)}>DELETE</button>
      <button onClick={() => onToggle(id)}>TOGGLE</button>
    </div>
  );
};

const TodoList = () => {
  const { todos } = useSelector((state) => {
    return {
      todos: state.todos
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  const getTodos = () => {
    const requestAction = getTodoRequest();
    dispatch(requestAction);
    return fetch("http://json-server-mocker-masai.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((res) => {
        //success
        const successAction = getTodoSuccess();
        dispatch(successAction);
      })
      .catch((err) => {
        //errror
        const failureAction = getTodoFailure();
        dispatch(failureAction);
      });
  };

  useEffect(() => {
    // getTodos()
    // .then(()=>)
  }, []);
  const handleToggle = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };

  return (
    <div>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};
export default TodoList;
