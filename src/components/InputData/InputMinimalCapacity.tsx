import { NumberInput } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import classes from "./InputDate.module.css";

const InputMinimalPlaceSize: FC = observer(() => {
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
});

export default InputMinimalPlaceSize;
