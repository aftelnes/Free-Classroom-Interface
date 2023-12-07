import { MultiSelect } from "@mantine/core";
import { FC, useEffect, useState } from "react";

import classes from "./InputDate.module.css";
import { IEquipment } from "../../types/types";
import getData from "../../helpers/requests/getData";
import InputDataStore from "../../store/inputDataStore";

const InputEquipment: FC = () => {
  const [equipmentFromResp, setEquipmentFromResp] = useState<IEquipment[]>([]);

  const equipmentAry: any[] = [];
  equipmentFromResp.map((item) => {
    equipmentAry.push({ value: `${item.id}`, label: `${item.name}` });
  });

  const setDataToStore = (equipmentId) => {
    InputDataStore.setEquipment(equipmentId);
  };

  useEffect(() => {
    (async function setEquipmentState() {
      setEquipmentFromResp(await getData<IEquipment[]>("equipments"));
    })();
  }, []);

  return (
    <MultiSelect
      className={classes.inputDate}
      label='Желаемое оборудование'
      placeholder='Выберите желаемое оборудование'
      data={equipmentAry}
      onChange={(equipmentId) => setDataToStore(equipmentId)}
      dropdownPosition='bottom'
      transitionProps={{
        duration: 150,
        transition: "pop-top-left",
        timingFunction: "ease",
      }}
      clearable
      size='md'
    />
  );
};

export default InputEquipment;
