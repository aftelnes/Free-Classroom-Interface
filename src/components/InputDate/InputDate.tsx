import React from "react";
import { useState, useEffect } from "react";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import classes from "./InputDate.module.css";
import { observer } from "mobx-react-lite";
import InputData from "../../store/inputdata";

const setFormattedDateInStore = (date: Date) => {
  InputData.setDate(JSON.stringify(date));
};


//! настроить формат вывода и русифицировать
//!11.12.2023


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
      onDateChange={(date: Date) => {
        InputData.changeDateState(true);
        setFormattedDateInStore(date);
      }}
    />
  );
});

export default InputDate;
