import { FC, useEffect } from "react";
import { useState } from "react";
import { DateInput } from "@mantine/dates";

// import classes from "./Form.module.css";
import classes from "../FormArea.module.css";
import store from "../../../store/store";

const InputDate: FC<any> = ({ parentCallback }) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    if (date != null) {
      store.setDate(JSON.stringify(date).slice(1, 11));
      parentCallback(date);
    }
  }, [date]);

  return (
    <DateInput
      size='md'
      minDate={new Date()}
      className={classes.input}
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
