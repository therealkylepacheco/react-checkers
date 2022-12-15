import { useCallback } from "react";

const useSettings = (handleClose: () => void) => {
  const handleDefault = useCallback(() => {
    console.log("kdp resetToDefault");
  }, []);

  const handleSave = useCallback(() => {
    console.log("kdp saving");
    handleClose();
  }, [handleClose]);

  const handleCancel = useCallback(() => {
    console.log("kdp cancel");
    handleClose();
  }, [handleClose]);

  return {
    handleDefault,
    handleCancel,
    handleSave,
  };
};

export default useSettings;
