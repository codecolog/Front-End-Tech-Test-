import { Drawer } from '@mui/material';
import { Button } from '@mui/material';

const JobDetailsDrawer = ({
  infoWindow,
  setInfoWindow,
  loadNextJob,
}: {
  infoWindow: { text: string; visible: boolean; mode: string };
  setInfoWindow: any;
  loadNextJob: () => void;
}) => {
  return (
    <Drawer
      anchor="bottom"
      open={infoWindow.visible && infoWindow.mode === 'mobile'}
      onClose={() =>
        setInfoWindow({
          ...infoWindow,
          visible: false,
        })
      }
    >
      <div className="flex justify-between">
        <p className="p-4">{infoWindow.text}</p>
        <Button onClick={() => loadNextJob()}>Ok</Button>
      </div>
    </Drawer>
  );
};

export default JobDetailsDrawer;
