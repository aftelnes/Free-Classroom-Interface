import React from "react";
import { useState, useEffect } from "react";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import classes from "./InputDate.module.css";
import { observer } from "mobx-react-lite";
import InputDateAndLessonNumber from "../../store/inputdate";

const InputDate: React.FC = observer(() => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <DateInput
      className={classes.inputDate}
      value={date}
      onChange={setDate}
      label='Дата'
      placeholder='Выберите дату'
      clearable
      withAsterisk
      onDateChange={(date: Date) =>
        console.log(
          `date = ${date}`,
          InputDateAndLessonNumber.changeDateState(true)
        )
      }
    />
  );
});

export default InputDate;
