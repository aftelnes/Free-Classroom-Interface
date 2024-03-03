import "@mantine/styles";
import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import ResultArea from "./components/MainAreas/ResultArea";
import FormArea from "./components/MainAreas/FormArea";
import store from "./store/store";
import classes from "./styles/UI/UI.module.scss";
import { IEquipment, IFaculty } from "./types/types";
import getData from "./helpers/requests/getData";
import LesNumErrNotification from "./components/LesNumNotification/LesNumErrNotification";
import ServError from "./components/Modal/ServError";

const App: FC = observer(() => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    try {
      (async function setFacultyDataInStore() {
        store.faculty = await getData<IFaculty[]>("faculties");
        store.equipment = await getData<IEquipment[]>("equipments");
      })();
    } catch (error) {
      console.log(`ERR = ${error}`);
    }
    if (store.getServError()) {
      setShowModal(true);
    }
  });
  useEffect(() => {
    if (store.getServError()) {
      setShowModal(true);
    }
  });

  useEffect(() => {
    if (store.getIncorrectLesNum()) {
      setShowNotification(true);
      window.setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    }
  }, [store.getIncorrectLesNum()]);

  return (
    <div className={classes.ui}>
      <FormArea />
      <ResultArea />
      {store.getServError() && <ServError value={showModal} />}
      {showNotification && <LesNumErrNotification />}
    </div>
  );
});

export default App;
