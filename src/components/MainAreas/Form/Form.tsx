import { FC, useState } from "react";
import { Button } from "@mantine/core";
import { observer } from "mobx-react-lite";

import classes from "../FormArea.module.scss";
import InputMinimalPlaceSize from "./MinimalSize";
import InputFaculties from "./Faculties";
import InputEquipment from "./Equipment";
import InputDate from "./Date";
import InputLessonNumber from "./LessonNumber";
import getPlacesFree from "../../../helpers/requests/getFreePlaces";
import { IPlacesFree } from "../../../types/types";
import store from "../../../store/store";

const Form: FC = observer(() => {
  const findButtonClicked = () => {
    store.setFindBtnClicked();
    try {
      (async function setFreePlacesState() {
        store.resultFreePlaces = await getPlacesFree<IPlacesFree[]>();
      })();
    } catch (e) {
      console.log(e);
    } finally {
      store.setIncorrectLesNum(false);
    }
  };

  const [dateState, setDateState] = useState<Date | null>(null);
  const [lessonNumState, setLessonNumState] = useState<number | "">(0);

  const dateCallback = (date: Date) => {
    setDateState(date);
  };
  const lessonNumberCallback = (lessonNum: number | "") => {
    setLessonNumState(lessonNum);
  };

  return (
    <div className={classes.form}>
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
            variant="filled"
            className={classes.findbtn}
            onClick={() => findButtonClicked()}
            loading={store.btnLoading}
          >
            Найти
          </Button>
        </div>
      )}
    </div>
  );
});

export default Form;
