import { useCallback, useState } from "react";

const useControls = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleOpenReset = useCallback(() => setShowReset(true), []);
  const handleCloseReset = useCallback(() => setShowReset(false), []);

  const handleOpenSettings = useCallback(() => setShowSettings(true), []);

  const handleCloseSettings = useCallback(() => setShowSettings(false), []);

  return {
    showSettings,
    handleOpenSettings,
    handleCloseSettings,
    showReset,
    handleOpenReset,
    handleCloseReset,
  };
};

export default useControls;
