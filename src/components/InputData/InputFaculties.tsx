import { MultiSelect } from "@mantine/core";
import { FC, useState } from "react";
import { IFaculty } from "../../types/types";
import classes from "./InputDate.module.css";
import requests from "../../helpers/requests";

const setFormattedFacultiesInStore = (value: string[]) => {
  console.log(`FormFac = ${value}`);
};

const InputFaculties: FC = () => {
  const [facutly, setFaculty] = useState<IFaculty[]>([]);
  (async function setFacultyState() {
    setFaculty(await requests.GetFaculties());
  })();

  //Создаем массив, в который добавляем исколючительно факультеты в формате string
  const facultyAry: string[] = [""];
  facutly.map((item) => {
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
};

export default InputFaculties;
