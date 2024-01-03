import "@mantine/styles";
import { FC, useState } from "react";
import { Button } from "@mantine/core";
import { observer } from "mobx-react-lite";

import OutputDate from "./components/MainAreas/ResultArea";
import InputDataArea from "./components/MainAreas/FormArea";
import store from "./store/store";
import classes from "./styles/UI/UI.module.css";
import { IEquipment, IFaculty } from "./types/types";
import getData from "./helpers/requests/getData";

import Modal from "./components/Modal/Modal";

const App: FC = observer(() => {
  const [modal, setModal] = useState(true);

  //when App is rendering throwing requests to Faculties and Equipment
  try {
    (async function setFacultyDataInStore() {
      store.faculty = await await getData<IFaculty[]>("faculties");
    })();
    (async function setFacultyDataInStore() {
      store.equipment = await await getData<IEquipment[]>("equipments");
    })();
  } catch (error) {
    console.log(`ERR = ${error}`);
  }

  //button to refresh the page, if interface enabled with sever problems
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={classes.ui}>
      {store.requestError ? (
        <Modal visible={modal} setVisible={setModal}>
          <h2
            style={{
              textAlign: "center",
              padding: 20,
            }}>
            К сожалению сервис не доступен
          </h2>
          <Button className={classes.findbtn} onClick={refreshPage}>
            обновить
          </Button>
        </Modal>
      ) : (
        <div>
          <InputDataArea />
          <OutputDate />
        </div>
      )}

      {/* {store.requestError && (
        <Modal visible={modal} setVisible={setModal}>
          <h2
            style={{
              textAlign: "center",
              padding: 20,
            }}>
            К сожалению сервис не доступен
          </h2>
          <Button>обновить</Button>
        </Modal>
      )}

      <InputDataArea />
      <OutputDate /> */}
    </div>
  );
});

export default App;
