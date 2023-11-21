import { MultiSelect } from "@mantine/core";
import { FC, useState } from "react";
import classes from "./InputDate.module.css";
import { IEquipment } from "../../types/types";
import requests from "../../helpers/requests";

const InputEquipment: FC = () => {
  const [equipment, setEquipment] = useState<IEquipment[]>([]);
  (async function setEquipmentState() {
    setEquipment(
      await requests.getFacultiesOrEquipment<IEquipment[]>(
        "https://0ee3-85-172-29-2.ngrok-free.app/api/equipments/selection"
      )
    );
  })();

  const equipmentAry: string[] = [""];
  equipment.map((item) => {
    equipmentAry.push(item.name);
  });

  return (
    <MultiSelect
      className={classes.inputDate}
      label='Желаемое оборудование'
      placeholder='Выберите желаемое оборудование'
      data={equipmentAry}
      clearable
    />
  );
};

export default InputEquipment;
