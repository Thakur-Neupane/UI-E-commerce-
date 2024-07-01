import { useState } from "react";

export const useCustomModal = () => {
  const [show, setShow] = useState(false);

  return {
    show,
    setShow,
  };
};
