import { NumberInput } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import classes from "./InputDate.module.css";
import inputData from "../../store/inputData";

const InputMinimalPlaceSize: FC = observer(() => {
  const [size, setSize] = useState<string | number>(0);

  useEffect(() => {
    inputData.setSize(size);
  }, [size]);

  return (
    <NumberInput
      value={size}
      onChange={setSize}
      className={classes.inputDate}
      label='Минимальная вместимость'
      placeholder='Введите желаемое кол-во мест'
      min={0}
      max={100}
      clampBehavior='strict'
      allowNegative={false}
    />
  );
});

export default InputMinimalPlaceSize;
