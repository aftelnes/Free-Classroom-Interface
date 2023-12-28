import { MultiSelect } from "@mantine/core";
import { FC } from "react";

import classes from "./InputDate.module.css";
import InputDataStore from "../../store/inputDataStore";
import store from "../../store/store";

interface IEquipmentAry {
  value: string;
  label: string;
}

const InputEquipment: FC = () => {
  const equipmentAry: IEquipmentAry[] = [];
  store.equipment.map((item) => {
    equipmentAry.push({ value: `${item.id}`, label: item.name });
  });

  const setDataToStore = (equipmentId) => {
    InputDataStore.setEquipment(equipmentId);
  };

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
