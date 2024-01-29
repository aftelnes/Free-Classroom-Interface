import { useEffect, useState } from "react";
import { NumberInput } from "@mantine/core";
import { FC } from "react";

import classes from "../FormArea.module.scss";
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
      className={classes.input}
      label='Номер занятия'
      placeholder='Выберите номер занятия'
      min={1}
      max={9}
      onChange={setLessonNumber}
      size='sm'
    />
  );
};

export default InputLessonNumber;
