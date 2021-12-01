import { IJobDetail, IJobFormatted } from '../../../store/jobsSlice';
import Loader from '../loader/Loader';
import JobDetailsActions from './JobDetailsActions';
import JobDetailsCard from './JobDetailsCard';
import JobDetailsHighlight from './JobDetailsHighlight';
import { IWorker } from '../../../fake-db/db/worker-db';
import { Paper } from '@mui/material';

export const JobDetailsUi = ({
  user,
  job,
  onAccept,
  onReject,
}: {
  user: IWorker;
  job: IJobFormatted;
  onAccept: (userId: string, jobId: string) => void;
  onReject: (userId: string, jobId: string) => void;
}) => {
  return job ? (
    <div className="p-5">
      <Paper className="md:p-4 rounded" elevation={0}>
        <div className="rounded overflow-auto h-content md:h-content-md flex flex-col md:flex-row">
          <div className="w-full md:w-6/12 lg-w-4/12">
            <div
              className="w-full h-40 md:h-80 rounded-t md:rounded-b relative"
              style={{
                background:
                  '#ccc url(' +
                  job.jobTitle.imageUrl +
                  ') no-repeat center/cover',
              }}
            >
              <JobDetailsHighlight
                classes="invisible md:visible rounded w-full h-24 absolute bottom-0 bg-gradient-to-t from-black items-end p-3 pb-1 text-white"
                job={job}
              />
            </div>

            <div className="md:hidden pl-4 pr-4 pt-2 pb-2">
              <p className="font-bold">{job.jobTitle.name}</p>
              <p>{job.company.name}</p>
            </div>

            <JobDetailsHighlight classes="md:hidden" job={job} />

            <JobDetailsActions
              user={user}
              job={job}
              onAccept={onAccept}
              onReject={onReject}
              classes="hidden md:flex gap-4 pt-4"
            />
          </div>

          <div className="w-full md:w-6/12 lg:w-8/12">
            <div className="hidden md:block pl-4 pr-4">
              <p className="font-bold text-2xl lg:text-4xl">
                {job.jobTitle.name}
              </p>
              <p className="text-xl">{job.company.name}</p>
            </div>

            <div className="p-4">
              {job.details.map((detail: IJobDetail, index: number) => (
                <JobDetailsCard
                  key={detail.key}
                  detail={detail}
                  showSeparator={index < job.details.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        <JobDetailsActions
          user={user}
          job={job}
          onAccept={onAccept}
          onReject={onReject}
          classes="flex md:hidden gap-2 pl-4 pr-4 pb-4"
        />
      </Paper>
    </div>
  ) : (
    <Loader />
  );
};
