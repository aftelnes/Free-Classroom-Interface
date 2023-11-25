import { FC, useEffect } from "react";
import { useState } from "react";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import InputData from "../../store/inputData";
import classes from "./InputDate.module.css";

const InputDate: FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    if (date != null) {
      InputData.changeDateState();
      InputData.setDate(JSON.stringify(date).slice(1, 11));
    }
  }, [date]);

  return (
    <DateInput
      minDate={new Date()}
      className={classes.inputDate}
      value={date}
      onChange={setDate}
      valueFormat='YYYY-MM-DD'
      label='Дата'
      placeholder='Выберите дату'
      clearable
      withAsterisk
    />
  );
};

export default InputDate;
