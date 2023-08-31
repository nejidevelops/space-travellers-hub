import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  pending: false,
  error: false,
};

export const fetchRockets = createAsyncThunk(
  'rocket/fetchRockets',
  async () => {
    const req = axios.get('https://api.spacexdata.com/v3/rockets');
    const { data } = await req;
    const result = data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    }));
    return result;
  },
);

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    handleRocket: (state, { payload }) => {
      const rockets = [];
      state.rockets.forEach((rocket) => {
        if (rocket.id === payload) {
          rockets.push({
            ...rocket,
            reserved: !rocket.reserved,
          });
        } else {
          rockets.push({ ...rocket });
        }
      });
      return {
        ...state,
        rockets,
      };
    },
    reserveRocket: (state, { payload }) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets,
      };
    },
    cancelReservation: (state, { payload }) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, { payload }) => {
      if (state.rockets.length < 1) {
        return {
          ...state,
          rockets: payload,
          pending: false,
          error: false,
        };
      }
      return {
        ...state,
        pending: false,
        error: false,
      };
    });
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      pending: true,
      error: false,
    }));

    builder.addCase(fetchRockets.rejected, (state) => ({
      ...state,
      pending: false,
      error: true,
    }));
  },
});

export default rocketsSlice.reducer;
export const { handleRocket, reserveRocket, cancelReservation } = rocketsSlice.actions;
