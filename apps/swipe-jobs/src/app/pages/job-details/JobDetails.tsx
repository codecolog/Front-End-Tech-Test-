// Libraries
import { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

// Fake DB
import { axiosAPI } from '../../../fake-db/mock';
import { IWorker } from '../../../fake-db/db/worker-db';

// Store
import { IRootState } from '../../../store';
import { getWorker } from '../../../store/workerSlice';
import {
  getJobs,
  selectJobById,
  selectJobIds,
  IJobFormatted,
} from '../../../store/jobsSlice';

// Hooks
import useWindowSize from '../../hooks/useWindowSize';

// Context
import { AuthContext } from '../../../context';

// Components
import Header from '../../components/header/Header';
import { JobDetailsUi } from '../../components/job-details/JobDetailsUi';
import JobDetailsDrawer from '../../components/job-details/JobDetailsDrawer';
import JobDetailsDialog from '../../components/job-details/JobDetailsDialog';
import NoMoreJobs from '../../components/no-more-jobs/NoMoreJobs';

const JobDetails = () => {
  const { auth } = useContext(AuthContext) as AuthContextType;
  const rootState = useSelector((state: IRootState) => state);
  const [activeJobIndex, setActiveJobIndex] = useState(0);
  const [width] = useWindowSize();
  const [infoWindow, setInfoWindow] = useState({
    text: '',
    visible: false,
    mode: 'mobile',
  });

  const acceptJob = (userId: string, jobId: string) => {
    respondToJob(userId, jobId, true);
  };

  const rejectJob = (userId: string, jobId: string) => {
    respondToJob(userId, jobId, false);
  };

  const respondToJob = (userId: string, jobId: string, accepted: boolean) => {
    const [endpoint, message] = accepted
      ? ['accept', 'accepted']
      : ['reject', 'rejected'];
    axiosAPI
      .get(
        `https://test.swipejobs.com/api/worker/${userId}/job/${jobId}/${endpoint}`
      )
      .then((res) => {
        if (res.data.message) {
          setInfoWindow({
            text: res.data.message,
            mode: infoWindow.mode,
            visible: true,
          });
        } else {
          setInfoWindow({
            text: `Job has been ${message}`,
            mode: infoWindow.mode,
            visible: true,
          });
        }
      });
  };

  const loadNextJob = () => {
    setInfoWindow({
      text: '',
      mode: infoWindow.mode,
      visible: false,
    });

    setActiveJobIndex(activeJobIndex + 1);
  };

  // Fetch worker
  const worker = useSelector((state: IRootState) => state.worker.data);
  const workerCast: IWorker = worker as IWorker;

  // Fetch Job Ids
  const jobIds = selectJobIds(rootState);

  // Fetch Active Job
  const activeJob = selectJobById(rootState, jobIds[activeJobIndex]);
  const activeJobCast: IJobFormatted = activeJob as IJobFormatted;

  // Load data from APIs
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorker(auth));
    dispatch(getJobs(auth));
  }, [auth, dispatch]);

  // Listen to window width changes
  useEffect(() => {
    const mode = width > 768 ? 'desktop' : 'mobile';
    if (mode === infoWindow.mode) {
      return;
    }

    // Use snackbar or dialog based on screen resolution
    setInfoWindow({
      ...infoWindow,
      mode,
    });
  }, [width, infoWindow]);

  return (
    <>
      <Header user={worker} />

      {activeJobIndex > 0 && !activeJob?.jobId ? (
        <NoMoreJobs />
      ) : (
        <JobDetailsUi
          user={workerCast}
          job={activeJobCast}
          onAccept={acceptJob}
          onReject={rejectJob}
        />
      )}

      <JobDetailsDrawer
        infoWindow={infoWindow}
        setInfoWindow={setInfoWindow}
        loadNextJob={loadNextJob}
      />

      <JobDetailsDialog
        infoWindow={infoWindow}
        setInfoWindow={setInfoWindow}
        loadNextJob={loadNextJob}
      />
    </>
  );
};

const JobDetailsGuard = () => {
  const { auth } = useContext(AuthContext) as AuthContextType;

  // Redirect to Login page if not logged in
  if (!auth.isLoggedIn) {
    return <Redirect to="/login" />;
  } else {
    return <JobDetails />;
  }
};

export default JobDetailsGuard;
