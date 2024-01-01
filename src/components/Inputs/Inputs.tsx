import { FC, useEffect, useState } from "react";
import { Button } from "@mantine/core";

import classes from "../../styles/UI/UI.module.css";
import InputMinimalPlaceSize from "../InputData/InputMinimalSize";
import InputFaculties from "../../components/InputData/InputFaculties";
import InputEquipment from "../../components/InputData/InputEquipment";
import InputDate from "../InputData/InputDate";
import InputLessonNumber from "../InputData/InputLessonNumber";
import getPlacesFree from "../../helpers/requests/getFreePlaces";
import { IPlacesFree } from "../../types/types";
import store from "../../store/store";

const Inputs: FC = () => {
  const findButtonClicked = () => {
    store.setFindBtnClicked();
    (async function setFreePlacesState() {
      store.resultFreePlaces = await getPlacesFree<IPlacesFree[]>();
    })();
  };

  const [dateState, setDateState] = useState<Date | null>(null);
  const [lessonNumState, setLessonNumState] = useState<number | "">(0);
  const dateCallback = (date: Date) => {
    setDateState(date);
  };
  const lessonNumberCallback = (lessonNum: number | "") => {
    setLessonNumState(lessonNum);
  };
  console.log("Inputs");

  useEffect(() => {}, [dateState, lessonNumState]);

  return (
    <div>
      <InputDate parentCallback={dateCallback} />
      {dateState != undefined && (
        <InputLessonNumber parentCallback={lessonNumberCallback} />
      )}
      {lessonNumState != 0 && (
        <div>
          <InputMinimalPlaceSize />
          <InputFaculties />
          <InputEquipment />
          <Button
            variant='filled'
            className={classes.findbtn}
            onClick={() => findButtonClicked()}>
            Найти
          </Button>
        </div>
      )}
    </div>
  );
};

export default Inputs;
