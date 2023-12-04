import { MultiSelect } from "@mantine/core";
import { FC, useEffect, useState } from "react";

import classes from "./InputDate.module.css";
import { IEquipment } from "../../types/types";
import getFacultiesOrEquipment from "../../helpers/requests/getFacultyAndEquipment";
import inputData from "../../store/inputData";

const InputEquipment: FC = () => {
  const [equipmentFromResp, setEquipmentFromResp] = useState<IEquipment[]>([]);
  (async function setEquipmentState() {
    setEquipmentFromResp(
      await getFacultiesOrEquipment<IEquipment[]>(
        "https://0ee3-85-172-29-2.ngrok-free.app/api/equipments/selection"
      )
    );
  })();

  const equipmentAry: any[] = [""];
  equipmentFromResp.map((item) => {
    equipmentAry.push({ value: `${item.id}`, label: `${item.name}` });
  });

  const [selectedEquipment, setSelectedEquipment] = useState<
    string[] | number[]
  >([]);
  useEffect(() => {
    inputData.setEquipment(selectedEquipment);
  }, [selectedEquipment]);

  return (
    <MultiSelect
      className={classes.inputDate}
      label='Желаемое оборудование'
      placeholder='Выберите желаемое оборудование'
      data={equipmentAry}
      onChange={setSelectedEquipment}
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
