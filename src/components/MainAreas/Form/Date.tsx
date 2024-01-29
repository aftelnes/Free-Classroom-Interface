import { FC, useEffect } from "react";
import { useState } from "react";
import { DateInput } from "@mantine/dates";

import classes from "../FormArea.module.scss";
import store from "../../../store/store";
import moment from "moment";

const InputDate: FC<any> = ({ parentCallback }) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    if (date != null) 
    {
      store.setDate(moment(date).format('YYYY-MM-DD'));
      parentCallback(date);
    }
  }, [date]);

  return (
    <DateInput
      size='sm'
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
