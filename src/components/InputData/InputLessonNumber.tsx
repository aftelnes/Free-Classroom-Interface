import { useState } from "react";
import { NumberInput } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import InputData from "../../store/inputData";
import classes from "./InputDate.module.css";

const InputLessonNumber: FC = observer(() => {
  const [lessonNumber, setLessonNumber] = useState<number | null>(null);

  const onChangeClicked = (event: any) => {
    setLessonNumber(event.currentTarget.value);
    InputData.changeLessonNumState();
  };

  return (
    <NumberInput
      className={classes.inputDate}
      label='Номер занятия'
      placeholder='Выберите номер занятия'
      min={0}
      max={9}
      clampBehavior='strict'
      allowNegative={false}
      onChange={(event) => {
        console.log(`event = ${event}, typeof = ${typeof event}`);
        InputData.changeLessonNumState();
      }}
    />
  );
});

export default InputLessonNumber;
