import { useState } from "react";
import { NativeSelect } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import InputData from "../../store/inputData";
import classes from "./InputDate.module.css";

const InputLessonNumber: FC = observer(() => {
  const [lessonNumber, setLessonNumber] = useState("");

  const onChangeClicked = (event: any) => {
    setLessonNumber(event.currentTarget.value);
    InputData.changeLessonNumState();
  };

  return (
    <NativeSelect
      className={classes.inputDate}
      value={lessonNumber}
      onChange={(event) => onChangeClicked(event)}
      data={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
      withAsterisk
      label='Номер занятия'
      placeholder='Выберите номер занятия'
    />
  );
});

export default InputLessonNumber;
