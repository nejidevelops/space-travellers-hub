import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/missions';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
