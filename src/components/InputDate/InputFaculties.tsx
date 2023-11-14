import classes from "./InputDate.module.css";
import { IFaculty } from "../../types/types";
import { observer } from "mobx-react-lite";
import { MultiSelect } from "@mantine/core";
import InputData from "../../store/inputdata";

type FacultyArray = IFaculty[];

const setFormattedFacultiesInStore = (value: string[]) => {
  console.log(`FormFac = ${value}`);
};

const InputFaculties: React.FC<{ faculty: FacultyArray }> = observer(
  ({ faculty }) => {
    //Создаем массив, в который добавляем исколючительно факультеты в формате string
    const facultyAry: string[] = [""];
    faculty.map((item) => {
      facultyAry.push(item.short_name);
    });

    return (
      <div>
        <MultiSelect
          className={classes.inputDate}
          label='Желаемые факультеты'
          placeholder='Выберите желаемые факультеты'
          data={facultyAry}
          onChange={(event) => {
            console.log(`Event`, event);
            setFormattedFacultiesInStore(event);
          }}
          clearable
          hidePickedOptions
        />
      </div>
    );
  }
);

export default InputFaculties;
