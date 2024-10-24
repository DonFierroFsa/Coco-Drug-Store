import { useState } from "react";

export function useConfirm() {
  const [isConfirm, setIsConfirm] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [ask, setAsk] = useState("");

  return {
    isConfirm,
    confirm,
    setConfirm,
    setIsConfirm,
    ask,
    setAsk,
  };
}
