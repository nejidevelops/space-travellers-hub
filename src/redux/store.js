import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer from './Missions/missions';
import rocketsReducer from './Rockets/rockets';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
