import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const JobDetailsDialog = ({
  infoWindow,
  setInfoWindow,
  loadNextJob,
}: {
  infoWindow: { text: string; visible: boolean; mode: string };
  setInfoWindow: any;
  loadNextJob: () => void;
}) => {
  return (
    <Dialog
      open={infoWindow.visible && infoWindow.mode === 'desktop'}
      onClose={() =>
        setInfoWindow({
          ...infoWindow,
          visible: false,
        })
      }
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Job update'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {infoWindow.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => loadNextJob()}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobDetailsDialog;
