import { GET_TODO_RES } from "@/@models/todos";
import api from "./api";

export const apiGetTodos = () => {
  return api.get<GET_TODO_RES>("/todos").then((res) => res.data);
};
