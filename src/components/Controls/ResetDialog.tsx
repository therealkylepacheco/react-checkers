import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useReset } from "./hooks";

export type ResetDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export const ResetDialog = (props: ResetDialogProps) => {
  const { open, handleClose } = props;

  const { handleReset } = useReset(handleClose);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Reset Game</DialogTitle>
      <DialogContent>Are you sure you want to reset?</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleReset}>Reset</Button>
      </DialogActions>
    </Dialog>
  );
};
