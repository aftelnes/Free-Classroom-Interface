import { MultiSelect } from "@mantine/core";
import { FC } from "react";

import classes from "../FormArea.module.scss";
import store from "../../../store/store";

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
    store.setFaculty(facultyId);
  };

  return (
    <div>
      <MultiSelect
        className={classes.input}
        label="Желаемые факультеты"
        placeholder="Выберите желаемые факультеты"
        data={facultyAry}
        onChange={(facultyId) => setDataToStore(facultyId)}
        clearable
        dropdownPosition="bottom"
        transitionProps={{
          duration: 150,
          transition: "pop-top-left",
          timingFunction: "ease",
        }}
        size="sm"
      />
    </div>
  );
};

export default InputFaculties;
