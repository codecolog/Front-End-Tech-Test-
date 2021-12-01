import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IWorker } from '../fake-db/db/worker-db';
import { axiosAPI } from '../fake-db/mock';

export interface IWorkerState {
  role?: Array<string>;
  data?: IWorker;
}

export const getWorker = createAsyncThunk(
  'worker/profile',
  async (params: IAuth, { dispatch }) => {
    const response = await axiosAPI.get(
      `https://test.swipejobs.com/api/worker/${params.user_id}/profile`
    );
    const data: IWorker = response.data;
    dispatch(setWorker(data));
  }
);

export const workerSlice = createSlice({
  name: 'worker',
  initialState: {},
  reducers: {
    setWorker: (state: IWorkerState, action) => {
      state.data = action.payload;
    },
  },
});

export const { setWorker } = workerSlice.actions;
export default workerSlice.reducer;
