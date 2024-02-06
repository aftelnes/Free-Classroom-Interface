import "@mantine/styles";
import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Modal, Button, Image } from "@mantine/core";

import ResultArea from "./components/MainAreas/ResultArea";
import FormArea from "./components/MainAreas/FormArea";
import store from "./store/store";
import classes from "./styles/UI/UI.module.scss";
import { IEquipment, IFaculty } from "./types/types";
import getData from "./helpers/requests/getData";

import error_icon from "./images/modal_window_image.svg";

const App: FC = observer(() => {
  const [value, setValue] = useState<boolean>(false);

  useEffect(() => {
    try {
      (async function setFacultyDataInStore() {
        store.faculty = await getData<IFaculty[]>("faculties");
        store.equipment = await getData<IEquipment[]>("equipments");
      })();
    } catch (error) {
      console.log(`ERR = ${error}`);
    }
    if (store.requestError) {
      setValue(true);
    }
  });

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={classes.ui}>
      {store.requestError && (
        <Modal
          opened={value}
          onClose={() => {}}
          withCloseButton={false}
          className={classes.modalContent}
        >
          <Image src={error_icon} width={180} className={classes.error_image} />
          <p>К сожалению сервис не доступен из-за технических неполадок.</p>
          <p>Зайдите позже</p>
          <Button className={classes.findbtn} onClick={refreshPage}>
            Перезагрузить
          </Button>
        </Modal>
      )}

      <FormArea />
      <ResultArea />
    </div>
  );
});

export default App;
