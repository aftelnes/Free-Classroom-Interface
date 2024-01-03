import { useEffect, useState } from "react";
import { NumberInput } from "@mantine/core";
import { FC } from "react";

import classes from "./Form.module.css";
import store from "../../../store/store";

const InputLessonNumber: FC<any> = ({ parentCallback }) => {
  const [lessonNumber, setLessonNumber] = useState<number | "">(0);

  useEffect(() => {
    store.setLesNumber(lessonNumber);
    store.setLessonNum(lessonNumber);
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
