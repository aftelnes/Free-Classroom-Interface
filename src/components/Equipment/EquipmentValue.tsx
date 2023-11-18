import classes from "./EquipmentValue.module.css";

const EquipmentValue = () => {
  return (
    <div className={classes.equipmentValue}>
      <h5 className={classes.Header}>Оснащение</h5>
      <div className={classes.equipment}>Копмьютеры: 12</div>
      <div>Проектор: 1</div>
    </div>
  );
};

export default EquipmentValue;
