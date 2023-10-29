import React from "react";
import { useState, useEffect } from "react";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import classes from "../styles/InputDate/InputDate.module.css";
import axios from "axios";

function InputDate() {
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
      onDateChange={(date: Date) => console.log(`date = ${date}`)}
    />
  );
}

export default InputDate;
