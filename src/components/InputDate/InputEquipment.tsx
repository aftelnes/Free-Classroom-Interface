import { MultiSelect } from "@mantine/core";
import classes from "./InputDate.module.css";

const InputEquipment: React.FC = () => {
  return (
    <MultiSelect
      className={classes.inputDate}
      label='Желаемое оборудование'
      placeholder='Выберите желаемое оборудование'
      data={[
        "Компьютеры",
        "Маркерная доска",
        "Меловая доска",
        "Мультимедийная доска",
        "Проектор",
      ]}
      clearable
    />
  );
};

export default InputEquipment;
