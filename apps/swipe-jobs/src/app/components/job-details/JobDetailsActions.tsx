import { Button } from '@mui/material';
import { IWorker } from '../../../fake-db/db/worker-db';
import { IJobFormatted } from '../../../store/jobsSlice';

const JobDetailsActions = ({
  user,
  job,
  onAccept,
  onReject,
  classes,
}: {
  user: IWorker;
  job: IJobFormatted;
  onAccept: (userId: string, jobId: string) => void;
  onReject: (userId: string, jobId: string) => void;
  classes: string;
}) => {
  return (
    <div className={classes}>
      <Button
        className="flex-1 p-3 text-lg"
        variant="outlined"
        onClick={() => {
          onReject(user?.workerId, job.jobId);
        }}
      >
        No Thanks
      </Button>
      <Button
        className="flex-1 p-3 text-lg"
        variant="contained"
        onClick={() => {
          onAccept(user?.workerId, job.jobId);
        }}
      >
        I'll Take it
      </Button>
    </div>
  );
};

export default JobDetailsActions;
