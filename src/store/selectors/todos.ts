import { createDraftSafeSelector } from "@reduxjs/toolkit";

const todosSelector = (state: State) => state.todos;

const selectTodos = createDraftSafeSelector(todosSelector, (state) => {
  const todos = state.todos;
  const loading = state.loading;

  return { todos, loading };
});

export { selectTodos };
