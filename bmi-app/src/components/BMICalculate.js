import React, { useState, useEffect } from "react";
import {
  BMIButton,
  BMIForm,
  BMIInput,
  BMIList,
  BMIListItem,
  BMIWrapper,
} from "../style";
import toast, { Toaster } from "react-hot-toast";

const BMICalculate = () => {
  const [bmi, setBmi] = useState({ boy: "", kilo: "" });
  const [bmiList, setBmiList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBmi({ ...bmi, [name]: value });
  };

  const getLocalStorage = () => {
    let bmis;
    if (localStorage.getItem("bmi") === null) {
      bmis = [];
    } else {
      bmis = JSON.parse(localStorage.getItem("bmi"));
    }
    return bmis;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { boy, kilo } = bmi;

    const bmiCalc = kilo / (boy ** 2 / 100 ** 2);

    const bmis = getLocalStorage();

    bmis.push(bmiCalc.toFixed(2));

    localStorage.setItem("bmi", JSON.stringify(bmis));

    if (bmiCalc < 18.5) {
      toast.success("Zayıf");
    } else if (bmiCalc >= 18.5 && bmiCalc <= 24.9) {
      toast.success("Normal");
    } else if (bmiCalc >= 25 && bmiCalc <= 30) {
      toast.success("Fazla Kilolu");
    } else if (bmiCalc >= 30 && bmiCalc <= 35) {
      toast.success("Tip 2 Obez");
    } else {
      toast.success("Tip 2 Obez");
    }
  };

  useEffect(() => {
    const bmiLists = getLocalStorage();

    setBmiList(bmiLists);
  }, []);

  return (
    <BMIWrapper>
      <Toaster />
      <BMIForm onSubmit={handleSubmit}>
        <BMIInput
          name="boy"
          value={bmi.boy}
          onChange={handleChange}
          placeholder="Boy"
          type="number"
        />
        <BMIInput
          name="kilo"
          value={bmi.kilo}
          onChange={handleChange}
          placeholder="Kilo"
          type="number"
        />
        <BMIButton type="submit">Hesapla</BMIButton>
      </BMIForm>
      <BMIList>
        {bmiList?.map((bmiListItem, i) => (
          <BMIListItem key={i}>
            {++i} - {bmiListItem}
          </BMIListItem>
        ))}
      </BMIList>
    </BMIWrapper>
  );
};

export default BMICalculate;
