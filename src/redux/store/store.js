// 'use client' // যদি Next.js App Router ব্যবহার করেন, এই লাইনটি ঠিক আছে
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/baseApi";
import { authSlice } from "../features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import postSlice from "../features/post/postSlice"
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer, // 'api' state here
  user: authSlice.reducer, // ✅ authSlice should probably be authSlice.reducer
  post:postSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // ✅ Corrected Reducer Configuration
  reducer: persistedReducer, // 'persistedReducer' is the root reducer now
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(apiSlice.middleware), // RTK Query middleware is correctly added here
});

export const persistor = persistStore(store);