import { useState } from "react";
import { NumberInput } from "@mantine/core";
import classes from "../styles/InputDate/InputDate.module.css";

const InputMinimalCapacity = () => {
  return (
    <NumberInput
      className={classes.inputDate}
      label='Минимальная вместимость'
      placeholder='Введите желаемое кол-во мест'
      min={0}
      clampBehavior='strict'
      allowNegative={false}
    />
  );
};

export default InputMinimalCapacity;
