import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import todos from "./slices/todos";

const reducer = combineReducers({
  todos,
} as const);

const persistConfig: Omit<PersistConfig<State>, "blacklist" | "whitelist"> &
  Partial<Record<"blacklist" | "whitelist", (keyof State)[]>> = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig as never, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const useDispatch = () => store.dispatch;

const persistor = persistStore(store);

declare global {
  export type Dispatch = typeof store.dispatch;
  export type State = ReturnType<typeof reducer>;
}

export { persistor, store, useDispatch };
