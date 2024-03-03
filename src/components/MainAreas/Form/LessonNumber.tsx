import { useEffect, useState } from "react";
import { NumberInput, Select } from "@mantine/core";
import { FC } from "react";

import classes from "../FormArea.module.scss";
import store from "../../../store/store";
import checkLessonNumber from "../../../helpers/checkLessonTime/checkLessonNumber";
import { INumberInputAry } from "../../../types/types";
import formatLesTimeToLesNum from "../../../helpers/formatDate/formatLesTimeToLesNum";

const InputLessonNumber: FC<any> = ({ parentCallback }) => {
  const [lessonNumber, setLessonNumber] = useState<number | "">(0);

  const lesNumAry: INumberInputAry[] = checkLessonNumber();

  useEffect(() => {
    store.setLessonNum(lessonNumber);
    parentCallback(lessonNumber);
  }, [lessonNumber]);

  const setLesNum = (lesTime: string) => {
    let lesNum = formatLesTimeToLesNum(lesTime);
    setLessonNumber(lesNum);
  };

  return (
    <Select
      withAsterisk
      clearable
      className={classes.input}
      label="Номер занятия"
      placeholder="Выберите номер занятия"
      data={lesNumAry}
      onChange={(lesTime: string) => setLesNum(lesTime)}
    ></Select>
  );
};

export default InputLessonNumber;
