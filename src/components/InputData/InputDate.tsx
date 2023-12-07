import { FC, useEffect } from "react";
import { useState } from "react";
import { DateInput } from "@mantine/dates";

import classes from "./InputDate.module.css";
import InputDataStore from "../../store/inputDataStore";

const InputDate: FC<any> = ({ parentCallback }) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    if (date != null) {
      InputDataStore.setDate(JSON.stringify(date).slice(1, 11));
      parentCallback(date);
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
