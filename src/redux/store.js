import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/missions';
import rocketsReducer from './Rockets/rockets';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
