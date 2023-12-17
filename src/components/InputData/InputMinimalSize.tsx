import { NumberInput } from "@mantine/core";
import { FC, useEffect, useState } from "react";

import classes from "./InputDate.module.css";
import InputDataStore from "../../store/inputDataStore";

const InputMinimalPlaceSize: FC = () => {
  const [size, setSize] = useState<number | "">(1);

  useEffect(() => {
    InputDataStore.setSize(size);
  }, [size]);

  return (
    <NumberInput
      value={size}
      onChange={setSize}
      className={classes.inputDate}
      label='Минимальная вместимость'
      description='От 1 до 120'
      placeholder='Введите желаемое кол-во мест'
      min={1}
      max={120}
      size='md'
    />
  );
};

export default InputMinimalPlaceSize;
