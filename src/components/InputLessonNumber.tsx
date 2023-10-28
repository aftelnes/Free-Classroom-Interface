import { useState } from "react";
import { NativeSelect } from "@mantine/core";
import classes from "../styles/InputDate/InputDate.module.css";

const InputLessonNumber = () => {
  const [lessonNumber, setLessonNumber] = useState("");

  return (
    <NativeSelect
      className={classes.inputDate}
      value={lessonNumber}
      onChange={(event) => setLessonNumber(event.currentTarget.value)}
      data={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
      withAsterisk
      label='Номер занятия'
      placeholder='Выберите номер занятия'
    />
  );
};

export default InputLessonNumber;
