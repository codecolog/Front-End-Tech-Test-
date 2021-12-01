import { IJobFormatted } from '../../../store/jobsSlice';
import { styled } from '@mui/system';

const StyledJobDetailsHighlight = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.secondary['500'],
      color: theme.palette.getContrastText(theme.palette.secondary['500']),
    },
  };
});

const JobDetailsHighlight = ({
  job,
  classes,
}: {
  job: IJobFormatted;
  classes: string;
}) => {
  return (
    <StyledJobDetailsHighlight
      className={
        classes + ' md:bg-transparent flex justify-between pl-4 pr-4 pt-3 pb-2'
      }
    >
      <div className="text-left">
        <p className="font-bold text-xs">Distance</p>
        <p className="font-bold text-3xl text-white">
          {+job.milesToTravel.toFixed(2)} miles
        </p>
      </div>
      <div className="text-right">
        <p className="font-bold text-xs">Hourly Rate</p>
        <p className="font-bold text-3xl text-white">
          <sup>$</sup>
          {(+job.wagePerHourInCents / 100).toFixed(2)}
        </p>
      </div>
    </StyledJobDetailsHighlight>
  );
};

export default JobDetailsHighlight;
