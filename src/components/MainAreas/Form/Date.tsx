import { FC, useEffect } from "react";
import { useState } from "react";
import { DateInput } from "@mantine/dates";

import classes from "../FormArea.module.scss";
import store from "../../../store/store";
import formatDate from "../../../helpers/formatDate/formatDate";

const InputDate: FC<any> = ({ parentCallback }) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    if (date != null) {
      store.setDate(formatDate(date));
      parentCallback(date);
    }
  }, [date]);

  return (
    <DateInput
      size="sm"
      minDate={new Date()}
      className={classes.input}
      value={date}
      onChange={setDate}
      valueFormat="DD.MM.YYYY"
      label="Дата"
      placeholder="Выберите дату"
      withAsterisk
    />
  );
};

export default InputDate;
