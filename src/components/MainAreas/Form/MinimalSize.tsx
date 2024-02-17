import { NumberInput } from "@mantine/core";
import { FC, useEffect, useState } from "react";

import classes from "../FormArea.module.scss";
import store from "../../../store/store";

const InputMinimalPlaceSize: FC = () => {
  const [size, setSize] = useState<number | "">(1);

  useEffect(() => {
    store.setSize(size);
  }, [size]);

  return (
    <NumberInput
      value={size}
      onChange={setSize}
      className={classes.input}
      label="Минимальная вместимость"
      description="От 1 до 120"
      placeholder="Введите желаемое кол-во мест"
      min={1}
      max={120}
      size="sm"
    />
  );
};

export default InputMinimalPlaceSize;
