import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SettingsIcon from "@mui/icons-material/Settings";
import ResetIcon from "@mui/icons-material/ReplayCircleFilled";
import { Container } from "./Controls.styles";
import { SettingsDialog } from "./SettingsDialog";
import { ResetDialog } from "./ResetDialog";
import { useControls } from "./hooks";

export const Controls = () => {
  const {
    showSettings,
    handleOpenSettings,
    handleCloseSettings,
    showReset,
    handleOpenReset,
    handleCloseReset,
  } = useControls();

  return (
    <Container>
      <Stack direction="row" spacing={1}>
        <IconButton onClick={handleOpenSettings}>
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={handleOpenReset}>
          <ResetIcon />
        </IconButton>
      </Stack>
      <SettingsDialog open={showSettings} handleClose={handleCloseSettings} />
      <ResetDialog open={showReset} handleClose={handleCloseReset} />
    </Container>
  );
};
