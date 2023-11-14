import classes from "./styles/UI/UI.module.css";
import InputDate from "./components/InputDate/InputDate";
import InputLessonNumber from "./components/InputDate/InputLessonNumber";
import InputMinimalCapacity from "./components/InputDate/InputMinimalCapacity";
import { Button } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import InputFaculties from "./components/InputDate/InputFaculties";
import ResultDiv from "./components/ResultDiv/ResultDiv";
import mainicon from "./images/mainImage.svg";
import { Image } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import InputEquipment from "./components/InputDate/InputEquipment";
import InputData from "./store/inputdata";
import { IFaculty, IEquipment } from "./types/types";
import { useEffect } from "react";
import requests from "./helpers/requests";

const App: React.FC = observer(() => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [facutly, setFaculty] = useState<IFaculty[]>([]);
  const [equipment, setEquipment] = useState<IEquipment[]>([]);

  async function setFacultyAndEquipmentStates() {
    setFaculty(await requests.GetFaculties());
    setEquipment(await requests.GetEquipment());
    requests.GetPlacesFree();
  }
  useEffect(() => {
    setFacultyAndEquipmentStates();
  }, []);

  function showResult() {
    InputData.showInfo();
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
        <InputMinimalCapacity />
        <InputFaculties faculty={facutly} />
        <InputEquipment equipment={equipment} />
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
    // <MantineProvider>
    <div className={classes.ui}>
      <div className={classes.inputDataArea}>
        <Image src={mainicon} w={250} style={{ marginLeft: "5vw" }} />
        <h3 className={classes.findClass}>Поиск свободной аудитории</h3>
        <InputDate />
        <InputLessonNumber />
        {/* {(InputData.dateState == InputData.lessonNumState) == true
            ? showNotOptionalInputsAndFindButton()
            : null} */}
        {InputData.dateState &&
          InputData.lessonNumState &&
          showNotOptionalInputsAndFindButton()}
      </div>
      <div className={classes.outputDataArea}>
        <h3 className={classes.resultClass}>Результат</h3>
        {clicked == true ? showResult() : null}
      </div>
    </div>
    // </MantineProvider>
  );
});

export default App;
