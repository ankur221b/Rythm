import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';
import accessTokenReducer from './features/accessTokenReducer';

export const store = configureStore({
  reducer: {
    accessToken:accessTokenReducer,
    player: playerReducer,
  },
});
