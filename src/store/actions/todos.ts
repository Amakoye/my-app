import { GET_TODO_RES } from "@/@models/todos";
import { apiGetTodos } from "@/api/todos";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";

export const reduxGetTodos = createAsyncThunk<GET_TODO_RES>(
  "GET_TODOS",
  async (_, { rejectWithValue }) => {
    return apiGetTodos().catch((e) => {
      if (isAxiosError(e)) return rejectWithValue(e.response?.data);
      return Promise.reject(e);
    });
  }
);
