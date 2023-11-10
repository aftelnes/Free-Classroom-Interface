import classes from "./InputDate.module.css";
import { IFaculty } from "../../types/types";
import { Select } from "@mantine/core";
import { observer } from "mobx-react-lite";

type FacultyArray = IFaculty[];

const InputFaculties: React.FC<{ faculty: FacultyArray }> = observer(
  ({ faculty }) => {
    //Создаем массив, в который добавляем исколючительно факультеты в формате string
    const facultyAry: string[] = [""];
    faculty.map((item) => {
      facultyAry.push(item.short_name);
    });

    return (
      <div>
        <Select
          className={classes.inputDate}
          label='Желаемые факультеты'
          placeholder='Выберите желаемые факультеты'
          data={facultyAry}
          clearable
          //Распечатка факультета
          onChange={(event) => console.log(event)}
        />
      </div>
    );
  }
);

export default InputFaculties;
