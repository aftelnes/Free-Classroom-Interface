import { FC, useEffect, useState } from "react";
import { Button } from "@mantine/core";

import classes from "../../styles/UI/UI.module.css";
import InputMinimalPlaceSize from "../InputData/InputMinimalSize";
import InputFaculties from "../../components/InputData/InputFaculties";
import InputEquipment from "../../components/InputData/InputEquipment";
import InputDate from "../InputData/InputDate";
import FindBtnStore from "../../store/findBtnStore";
import InputLessonNumber from "../InputData/InputLessonNumber";
import freePlacesStore from "../../store/freePlacesStore";

import getPlacesFree from "../../helpers/requests/getFreePlaces";
import { IPlacesFree } from "../../types/types";

const Inputs: FC = () => {
  const findButtonClicked = () => {
    FindBtnStore.setFindBtnClicked();
    (async function setFreePlacesState() {
      freePlacesStore.resultFreePlaces = await getPlacesFree<IPlacesFree[]>();
    })();
    freePlacesStore.showInfo();
  };

  const renderLessonNum = () => {
    return <InputLessonNumber parentCallback={lessonNumberCallback} />;
  };

  const showNotOptionalInputsAndFindButton = () => {
    return (
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
    );
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
      {dateState != undefined && renderLessonNum()}
      {lessonNumState != 0 && showNotOptionalInputsAndFindButton()}
    </div>
  );
};

export default Inputs;
