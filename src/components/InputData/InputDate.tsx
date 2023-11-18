import { FC } from "react";
import { useState } from "react";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import InputData from "../../store/inputData";
import classes from "./InputDate.module.css";

const setFormattedDateInStore = (date: Date) => {
  InputData.setDate(JSON.stringify(date).slice(1, 11));
};


const InputDate: FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <DateInput
      className={classes.inputDate}
      value={date}
      onChange={setDate}
      valueFormat='YYYY/MM/DD'
      label='Дата'
      placeholder='Выберите дату'
      clearable
      withAsterisk
      onDateChange={(date: Date) => {
        setFormattedDateInStore(date);
        InputData.changeDateState();
      }}
    />
  );
};

export default InputDate;
