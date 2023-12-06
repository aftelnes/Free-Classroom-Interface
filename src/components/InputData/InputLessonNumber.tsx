import { useEffect, useState } from "react";
import { NumberInput } from "@mantine/core";
import { FC } from "react";

import InputData from "../../store/inputData";
import classes from "./InputDate.module.css";

const InputLessonNumber: FC = () => {
  const [lessonNumber, setLessonNumber] = useState<number | "">(0);

  console.log("Отрисовался ");

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
      onChange={setLessonNumber}
      size='md'
    />
  );
};

export default InputLessonNumber;
