import { GET_TODO_RES } from "@/@models/todos";
import { createSlice } from "@reduxjs/toolkit";
import { reduxGetTodos } from "../actions/todos";

const initialState: InitialState = {
  todos: [],
  loading: false,
};

const todos = createSlice({
  name: "Todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(reduxGetTodos.pending, (state) => {
      state.loading = true;
    });
  },
});

type InitialState = {
  todos: GET_TODO_RES;
  loading: Loading;
};

export default todos.reducer;
