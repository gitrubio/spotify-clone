import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import authSlice from './features/authSlice';
import { shazamCoreApi } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer, // [shazamCoreApi.reducerPath] is the same as shazamCoreApi: shazamCoreApi.reducer
    auth: authSlice,
    player: playerReducer,
  },
  middleware:   (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
