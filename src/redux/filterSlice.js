import { createSlice } from '@reduxjs/toolkit';

const filterContactSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: '',
  },
  reducers: {
    setStatusFilter(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { setStatusFilter } = filterContactSlice.actions;
export const filtersReducer = filterContactSlice.reducer;
