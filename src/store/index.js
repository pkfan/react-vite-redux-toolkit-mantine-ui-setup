import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import jobsReducer from "@/views/jobs/jobsSlice";
import { jobsApi } from "@/views/jobs/api";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    // Add the generated reducer as a specific top-level slice
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
