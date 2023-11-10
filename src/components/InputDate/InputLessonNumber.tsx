import { useState } from "react";
import { NativeSelect } from "@mantine/core";
import { observer } from "mobx-react-lite";
import InputDateAndLessonNumber from "../../store/inputdate";
import classes from "./InputDate.module.css";

const InputLessonNumber: React.FC = observer(() => {
  const [lessonNumber, setLessonNumber] = useState("");

  const onChaneClicked = (event: any) => {
    setLessonNumber(event.currentTarget.value);
    InputDateAndLessonNumber.changeLessonNumState(true);
  };

  return (
    <NativeSelect
      className={classes.inputDate}
      value={lessonNumber}
      onChange={(event) => onChaneClicked(event)}
      data={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
      withAsterisk
      label='Номер занятия'
      placeholder='Выберите номер занятия'
    />
  );
});

export default InputLessonNumber;
