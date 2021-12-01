import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { IRootState } from '.';
import { IJob, IJobShifts } from '../fake-db/db/jobs-db';
import { axiosAPI } from '../fake-db/mock';
import { getFormattedTime } from '../utils/getFormattedTime';

export interface IJobDetail {
  key: string;
  value: Array<string> | string;
  caption?: string;
  icon?: string;
  action?: { icon: string; url: string };
}

export interface IJobFormatted extends IJob {
  details: Array<IJobDetail>;
}

export const getJobs = createAsyncThunk(
  'worker/matches',
  async (auth: IAuth, { dispatch }) => {
    const response = await axiosAPI.get(
      `https://test.swipejobs.com/api/worker/${auth.user_id}/matches`
    );
    const data: Array<IJob> = response.data;
    const jobDetails: Array<IJobFormatted> = data.map((job: IJob) => {
      const details = [];

      // Shifts
      if (job.shifts.length > 0) {
        details.push({
          key: 'Shift Dates',
          icon: 'Shift-Dates',
          value: job.shifts.map((shift: IJobShifts) =>
            getFormattedTime(shift.startDate, shift.endDate)
          ),
        });
      }

      // Location
      if (
        job &&
        job.company &&
        job.company.address &&
        job.company.address.formattedAddress
      ) {
        details.push({
          key: 'Location',
          icon: 'Location',
          value: job.company.address.formattedAddress,
          caption: job.milesToTravel + 'miles from your job search location',
          action: {
            icon: 'Chevron-Right',
            url:
              'https://www.google.com/maps/search/' +
              job.company.address.formattedAddress,
          },
        });
      }

      // Requirements
      if (job && job.requirements && job.requirements.length > 0) {
        details.push({
          key: 'Requirements',
          icon: 'Requirements',
          value: job.requirements.map((e) => '-' + e),
        });
      }

      // Report to
      if (job && job.company && job.company.reportTo) {
        let contact = job.company.reportTo.phone;
        if (contact) {
          contact = ` (${contact.slice(0, 3)}) ${contact.slice(
            3,
            6
          )} ${contact.slice(6, 10)}`;
        } else {
          contact = '';
        }
        details.push({
          key: 'Report To',
          icon: 'Report-To',
          value: job.company.reportTo.name + contact,
        });
      }

      return {
        ...job,
        details,
      };
    });

    dispatch(setJobs(jobDetails));
  }
);

const jobAdapter = createEntityAdapter<IJobFormatted>({
  selectId: ({ jobId }) => jobId,
});

export const {
  selectAll: selectJobs,
  selectById: selectJobById,
  selectIds: selectJobIds,
} = jobAdapter.getSelectors((state: IRootState) => state.jobs);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: jobAdapter.getInitialState(),
  reducers: {
    setJobs: jobAdapter.setAll,
    addJob: jobAdapter.addOne,
    addJobs: jobAdapter.addMany,
  },
});

export const { setJobs, addJob, addJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
