import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useSettings } from "./hooks";

export type SettingsDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export const SettingsDialog = (props: SettingsDialogProps) => {
  const { open, handleClose } = props;

  const { handleCancel, handleDefault, handleSave } = useSettings(handleClose);

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>Here's some settings</DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleDefault}>Reset to Default</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
