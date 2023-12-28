import { MultiSelect } from "@mantine/core";
import { FC } from "react";

import classes from "./InputDate.module.css";
import InputDataStore from "../../store/inputDataStore";
import store from "../../store/store";

interface IFacultyAry {
  value: string;
  label: string;
}

const InputFaculties: FC = () => {
  const facultyAry: IFacultyAry[] = [];
  store.faculty.map((item) => {
    if (!item.inactive) {
      facultyAry.push({ value: `${item.id}`, label: item.short_name });
    }
  });

  const setDataToStore = (facultyId) => {
    InputDataStore.setFaculty(facultyId);
  };

  return (
    <div>
      <MultiSelect
        className={classes.inputDate}
        label='Желаемые факультеты'
        placeholder='Выберите желаемые факультеты'
        data={facultyAry}
        onChange={(facultyId) => setDataToStore(facultyId)}
        clearable
        dropdownPosition='bottom'
        transitionProps={{
          duration: 150,
          transition: "pop-top-left",
          timingFunction: "ease",
        }}
        size='md'
      />
    </div>
  );
};

export default InputFaculties;
