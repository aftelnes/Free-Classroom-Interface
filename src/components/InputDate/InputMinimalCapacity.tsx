import { NumberInput } from "@mantine/core";
import classes from "./InputDate.module.css";
import { observer } from "mobx-react-lite";


const InputMinimalCapacity: React.FC = observer(() => {
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

export default InputMinimalCapacity;
