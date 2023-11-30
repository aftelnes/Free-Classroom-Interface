import { useEffect, useState } from "react";
import { NumberInput } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import InputData from "../../store/inputData";
import classes from "./InputDate.module.css";

const InputLessonNumber: FC = observer(() => {
  const [lessonNumber, setLessonNumber] = useState<number | "">(1);

  useEffect(() => {
    InputData.setLessonNum(lessonNumber);
    InputData.changeLessonNumState();
  }, [lessonNumber]);

  return (
    <NumberInput
      withAsterisk
      className={classes.inputDate}
      label='Номер занятия'
      placeholder='Выберите номер занятия'
      min={1}
      max={9}
      // clampBehavior='strict'
      // allowNegative={false}
      onChange={setLessonNumber}
    />
  );
});

export default InputLessonNumber;
