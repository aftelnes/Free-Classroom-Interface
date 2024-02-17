import "@mantine/styles";
import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import ResultArea from "./components/MainAreas/ResultArea";
import FormArea from "./components/MainAreas/FormArea";
import store from "./store/store";
import classes from "./styles/UI/UI.module.scss";
import { IEquipment, IFaculty } from "./types/types";
import getData from "./helpers/requests/getData";
import LesNumErrNotification from "./components/MainAreas/LesNumNotification/LesNumErrNotification";
import ServError from "./components/Modal/ServError";

const App: FC = observer(() => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showNitification, setShowNitification] = useState(false);

  useEffect(() => {
    try {
      (async function setFacultyDataInStore() {
        store.faculty = await getData<IFaculty[]>("faculties1");
        store.equipment = await getData<IEquipment[]>("equipments");
      })();
    } catch (error) {
      console.log(`ERR = ${error}`);
    }
  }, []);

  useEffect(() => {
    if (store.getServError()) {
      setShowModal(true);
    }
  });

  useEffect(() => {
    if (store.getIncorrectLesNum()) {
      setShowNitification(true);
      window.setTimeout(() => {
        setShowNitification(false);
      }, 4000);
    }
  }, [store.getIncorrectLesNum()]);

  return (
    <div className={classes.ui}>
      <FormArea />
      <ResultArea />
      {store.getServError() && <ServError value={showModal} />}
      {showNitification && <LesNumErrNotification />}
    </div>
  );
});

export default App;
