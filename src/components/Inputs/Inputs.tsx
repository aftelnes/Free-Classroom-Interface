import { FC, useEffect, useState, useContext } from "react";
import { Button } from "@mantine/core";

import classes from "../../styles/UI/UI.module.css";
import InputMinimalPlaceSize from "../InputData/InputMinimalSize";
import InputFaculties from "../../components/InputData/InputFaculties";
import InputEquipment from "../../components/InputData/InputEquipment";
import InputDate from "../InputData/InputDate";
import FindBtnStore from "../../store/findBtnStore";
import InputLessonNumber from "../InputData/InputLessonNumber";

const Inputs: FC<any> = () => {
  const findButtonClicked = () => {
    FindBtnStore.setFindBtnClicked();
  };

  const renderLessonNum = () => {
    return <InputLessonNumber parentCallback={lessonNumberCallback} />;
  };

  //Этот компонент не перерисовывется
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
