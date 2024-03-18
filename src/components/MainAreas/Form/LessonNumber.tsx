import { useEffect, useState } from "react";
import { Select } from "@mantine/core";
import { FC } from "react";

import classes from "../FormArea.module.scss";
import store from "../../../store/store";
import checkLessonNumber from "../../../helpers/checkLessonTime/checkLessonNumber";
import { INumberInputAry } from "../../../types/types";
import convertLesTimeToLesNum from "../../../helpers/formatDate/formatLesTimeToLesNum";
import { duration } from "moment";

const InputLessonNumber: FC<any> = ({ parentCallback }) => {
  const [lessonNumber, setLessonNumber] = useState<number | "">(0);

  const lesNumAry: INumberInputAry[] = checkLessonNumber();

  useEffect(() => {
    store.setLessonNum(lessonNumber);
    parentCallback(lessonNumber);
  }, [lessonNumber]);

  const setLesNum = (lesTime: string) => {
    let lesNum = convertLesTimeToLesNum(lesTime);
    setLessonNumber(lesNum);
  };

  return (
    <Select
      withAsterisk
      className={classes.input}
      label="Номер занятия"
      placeholder="Выберите номер занятия"
      data={lesNumAry}
      onChange={(lesTime: string) => setLesNum(lesTime)}
      transitionProps={{
        duration: 150,
        timingFunction: "ease",
        transition: "pop-top-left",
      }}
    ></Select>
  );
};

export default InputLessonNumber;
