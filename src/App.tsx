import "@mantine/styles";
import { FC } from "react";

import OutputDate from "./components/MainAreas/OutputDataArea";
import InputDataArea from "./components/MainAreas/InputDataArea";
import store from "./store/store";
import classes from "./styles/UI/UI.module.css";
import { IFaculty } from "./types/types";
import getData from "./helpers/requests/getData";

const App: FC = () => {
  //При отрисовки интерфейса сразу отправляем запросы на получение факультетов и оснащения
  try {
    (async function setFacultyDataInStore() {
      store.faculty = await await getData<IFaculty[]>("faculties");
    })();
    (async function setFacultyDataInStore() {
      store.equipment = await await getData<IFaculty[]>("equipments");
    })();
  } catch (error) {
    console.log(`ERR = ${error}`);
  }

  return (
    <div className={classes.ui}>
      <InputDataArea />
      <OutputDate />
    </div>
  );
};

export default App;
