import { FC } from "react";
import { useState } from "react";
import { Button } from "@mantine/core";
import { observer } from "mobx-react-lite";
import classes from "../../styles/UI/UI.module.css";
import InputMinimalPlaceSize from "../../components/InputData/InputMinimalCapacity";
import InputFaculties from "../../components/InputData/InputFaculties";
import InputEquipment from "../../components/InputData/InputEquipment";
import InputDate from "../InputData/InputDate";
import InputData from "../../store/inputData";
import InputLessonNumber from "../InputData/InputLessonNumber";
import ResultDiv from "../FreePlacesResult/FreePlacesResult";

const renderLessonNum = () => {
  return <InputLessonNumber />;
};


const Inputs: FC = observer(() => {
  const [clicked, setClicked] = useState<boolean>(false);


  function showResult() {
    return (
      <div>
        <ResultDiv />
        <ResultDiv />
        <ResultDiv />
      </div>
    );
  }

    function showNotOptionalInputsAndFindButton() {
      return (
        <div>
          <InputMinimalPlaceSize />
          <InputFaculties />
          <InputEquipment />
          <Button
            variant='filled'
            className={classes.findbtn}
            onClick={() => setClicked(true)}
          >
            Найти
          </Button>
        </div>
      );
    }

  return (
    <div>
      <InputDate />
      {InputData.dateState && renderLessonNum()}
      {InputData.dateState && InputData.lessonNumState &&
        showNotOptionalInputsAndFindButton()}
    </div>
  );
});

export default Inputs;
