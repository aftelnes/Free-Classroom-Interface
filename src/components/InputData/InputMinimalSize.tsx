import { NumberInput } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import classes from "./InputDate.module.css";
import inputData from "../../store/inputData";

const InputMinimalPlaceSize: FC = observer(() => {
  const [size, setSize] = useState<string | number>(1);

  useEffect(() => {
    inputData.setSize(size);
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
      clampBehavior='strict'
      allowNegative={false}
    />
  );
});

export default InputMinimalPlaceSize;
