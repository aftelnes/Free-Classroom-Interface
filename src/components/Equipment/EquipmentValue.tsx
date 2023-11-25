import { FC } from "react";
import classes from "./EquipmentValue.module.css";
import { IEquipmentProps } from "../../types/types";

const EquipmentValue: FC<IEquipmentProps> = ({ equipments }) => {
  return (
    <div className={classes.equipmentValue}>
      <h5 className={classes.Header}>Оснащение</h5>
      {equipments.map((item) => (
        <div>
          {item.equipment.name} :{item.amount}
        </div>
      ))}
    </div>
  );
};

export default EquipmentValue;
