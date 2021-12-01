import { configureStore, EntityState } from '@reduxjs/toolkit';
import jobReducer, { IJobFormatted } from './jobsSlice';
import workerReducer, { IWorkerState } from './workerSlice';
import axios from 'axios';

export interface IRootState {
  worker: IWorkerState;
  jobs: EntityState<IJobFormatted>;
}

export default configureStore({
  reducer: {
    worker: workerReducer,
    jobs: jobReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          axios,
        },
      },
    }),
});
