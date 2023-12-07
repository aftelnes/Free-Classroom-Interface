import { useEffect, useState } from "react";
import { NumberInput } from "@mantine/core";
import { FC } from "react";

import classes from "./InputDate.module.css";
import allInputDataStore from "../../store/inputDataStore";

import lessonNumberStore from "../../store/lessonNumberStore";

const InputLessonNumber: FC<any> = ({ parentCallback }) => {
  const [lessonNumber, setLessonNumber] = useState<number | "">(0);

  useEffect(() => {
    lessonNumberStore.setLesNumber(lessonNumber);
    allInputDataStore.setLessonNum(lessonNumber);
    parentCallback(lessonNumber);
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
