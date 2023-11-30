import { FC } from "react";
import { Button } from "@mantine/core";
import { observer } from "mobx-react-lite";
import classes from "../../styles/UI/UI.module.css";
import InputMinimalPlaceSize from "../InputData/InputMinimalSize";
import InputFaculties from "../../components/InputData/InputFaculties";
import InputEquipment from "../../components/InputData/InputEquipment";
import InputDate from "../InputData/InputDate";
import InputData from "../../store/inputData";
import InputLessonNumber from "../InputData/InputLessonNumber";
import getPlacesFree from "../../helpers/requests/getFreePlaces";
import classesInputs from "../Inputs/Inputs.module.css";

const renderLessonNum = () => {
  return <InputLessonNumber />;
};

const Inputs: FC = observer(() => {
  const testFunc = () => {
    getPlacesFree();
    InputData.setFindBtnClicked();
  };

  function showNotOptionalInputsAndFindButton() {
    return (
      <div>
        <InputMinimalPlaceSize />
        <InputFaculties />
        <InputEquipment />
        <Button
          variant='filled'
          className={classes.findbtn}
          onClick={() => testFunc()}>
          Найти
        </Button>
      </div>
    );
  }

  return (
    <div>
      <InputDate />
      {InputData.dateState && renderLessonNum()}
      {/* {showOtherInputs()} */}
      {InputData.dateState &&
        InputData.lessonNumState &&
        showNotOptionalInputsAndFindButton()}
    </div>
  );
});

export default Inputs;
