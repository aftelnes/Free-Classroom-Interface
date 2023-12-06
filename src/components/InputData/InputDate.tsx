import { FC, useEffect } from "react";
import { useState } from "react";
import { DateInput } from "@mantine/dates";

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
      size='md'
      minDate={new Date()}
      className={classes.inputDate}
      value={date}
      onChange={setDate}
      valueFormat='DD.MM.YYYY'
      label='Дата'
      placeholder='Выберите дату'
      clearable
      withAsterisk
    />
  );
};

export default InputDate;
