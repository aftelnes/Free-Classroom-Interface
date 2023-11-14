import { MultiSelect } from "@mantine/core";
import classes from "./InputDate.module.css";
import { IEquipment } from "../../types/types";
import { observer } from "mobx-react-lite";


type EquipmentArray = IEquipment[];

const InputEquipment: React.FC<{ equipment: EquipmentArray }> = observer(({
  equipment,
}) => {
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
});

export default InputEquipment;
