import { useEffect, useRef, useState } from "react";
import { getCasinoData } from "../../Services/getCasinoData";
import { useConfirm } from "../useConfirm";
import { callDb } from "../../Services/dbAppi";

export function useCasinoData() {
  const { confirm, isConfirm, setConfirm, setIsConfirm } = useConfirm();

  const defaultCasinoData = {
    bonus: 500,
    nameCasino: "CASINO MAXI",
    cashLoadLimit: 5000,
  };
  const [refresh, setRefresh] = useState(false);

  const [casinoData, setCasinoData] = useState(defaultCasinoData);

  const handleCasinoData = async () => {
    const { data, status } = await getCasinoData();
    if (status == 200) {
      return setCasinoData(data.casinoData);
    } else {
      console.log(data.error);
      return;
    }
  };
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirm(false);

    const token = JSON.parse(window.sessionStorage.getItem("loginData")).token;
    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData);
    const path = "casino/updateCasinoData";
    const method = "POST";
    const { data, status } = await callDb({ body, method, path });
    if (status == 200) {
      setIsConfirm(data.msg);
    } else {
      setIsConfirm(data.msg);
      console.log(data.error);
    }
    setRefresh(!refresh);
    form.current.reset();
  };
  useEffect(() => {
    handleCasinoData();
  }, [refresh]);
  return {
    casinoData,
    setRefresh,
    refresh,
    handleCasinoData,
    handleSubmit,
    form,
    confirm,
    isConfirm,
    setConfirm,
    setIsConfirm,
  };
}
