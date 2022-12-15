import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SettingsIcon from "@mui/icons-material/Settings";
import ResetIcon from "@mui/icons-material/ReplayCircleFilled";
import { useCallback } from "react";
import { Container } from "./Controls.styles";

export const Controls = () => {
  const handleReset = useCallback(() => console.log("kdp reset"), []);
  const handleSettings = useCallback(() => {
    console.log("kdp settings");
  }, []);

  return (
    <Container>
      <Stack direction="row" spacing={1}>
        <IconButton onClick={handleSettings}>
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={handleReset}>
          <ResetIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};
