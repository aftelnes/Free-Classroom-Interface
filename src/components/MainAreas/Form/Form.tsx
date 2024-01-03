import { FC, useEffect, useState } from "react";
import { Button } from "@mantine/core";

import classes from "../../../styles/UI/UI.module.css";
import InputMinimalPlaceSize from "./MinimalSize";
import InputFaculties from "./Faculties";
import InputEquipment from "./Equipment";
import InputDate from "./Date";
import InputLessonNumber from "./LessonNumber";
import getPlacesFree from "../../../helpers/requests/getFreePlaces";
import { IPlacesFree } from "../../../types/types";
import store from "../../../store/store";
import { observer } from "mobx-react-lite";

const Inputs: FC = observer(() => {
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
            onClick={() => findButtonClicked()}
            loading={store.btnLoading}>
            Найти
          </Button>
        </div>
      )}
    </div>
  );
});

export default Inputs;
