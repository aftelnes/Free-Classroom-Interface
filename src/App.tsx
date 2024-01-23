import "@mantine/styles";
import { FC, useState } from "react";
import { observer } from "mobx-react-lite";

import OutputDate from "./components/MainAreas/ResultArea";
import InputDataArea from "./components/MainAreas/FormArea";
import store from "./store/store";
import classes from "./styles/UI/UI.module.scss";
import { IEquipment, IFaculty } from "./types/types";
import getData from "./helpers/requests/getData";
import Modal from "./components/Modal/Modal";


const App: FC = observer(() => {
  const [modal, setModal] = useState(true);

  //when App is rendering throwing requests to Faculties and Equipment
  try {
    (async function setFacultyDataInStore() {
      store.faculty = await await getData<IFaculty[]>("faculties");
      store.equipment = await await getData<IEquipment[]>("equipments");
    })();
  } catch (error) {
    console.log(`ERR = ${error}`);
  }

  return (
    <div className={classes.ui}>
      {store.requestError ? (
        <Modal visible={modal} setVisible={setModal} />
      ) : (
        <div>
          <InputDataArea />
          <OutputDate />
        </div>
      )}
    </div>
  );
});

export default App;
