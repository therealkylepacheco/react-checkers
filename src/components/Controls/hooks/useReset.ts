import { useCallback } from "react";

const useReset = (handleClose: () => void) => {
  const handleReset = useCallback(() => {
    console.log("kdp handleReset");
    handleClose();
  }, [handleClose]);

  return {
    handleReset,
  };
};

export default useReset;
