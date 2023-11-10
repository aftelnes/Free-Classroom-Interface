import classes from "./styles/UI/UI.module.css";
import InputDate from "./components/InputDate/InputDate";
import InputLessonNumber from "./components/InputDate/InputLessonNumber";
import InputMinimalCapacity from "./components/InputDate/InputMinimalCapacity";
import { Button } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import InputFaculties from "./components/InputDate/InputFaculties";
import { MantineProvider } from "@mantine/core";
import ResultDiv from "./components/ResultDiv/ResultDiv";
import mainicon from "./images/mainImage.svg";
import { Image } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import InputEquipment from "./components/InputDate/InputEquipment";
import InputDateAndLessonNumber from "./store/inputdate";
import axios from "axios";
import { IFaculty } from "./types/types";
import { useEffect } from "react";

const App: React.FC = observer(() => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [facutly, setFaculty] = useState<IFaculty[]>([]);

  async function RespFunc() {
    try {
      const response = await axios.get<IFaculty[]>(
        "https://08d3-85-172-29-2.ngrok-free.app/api/faculties/selection",
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log("Response lenght = ", response.data.length);
      console.log("Response = ", response.data);
      setFaculty(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    RespFunc();
  }, []);

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
        <InputMinimalCapacity />
        <InputFaculties faculty={facutly} />
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
    <MantineProvider>
      <div className={classes.ui}>
        <div className={classes.inputDataArea}>
          <Image src={mainicon} w={250} style={{ marginLeft: "5vw" }} />
          <h3 className={classes.findClass}>Поиск свободной аудитории</h3>
          <InputDate />
          <InputLessonNumber />
          {(InputDateAndLessonNumber.dateState ==
            InputDateAndLessonNumber.lessonNumState) ==
          true
            ? showNotOptionalInputsAndFindButton()
            : null}
        </div>
        <div className={classes.outputDataArea}>
          <h3 className={classes.resultClass}>Результат</h3>
          {clicked == true ? showResult() : null}
        </div>
      </div>
    </MantineProvider>
  );
});

export default App;
