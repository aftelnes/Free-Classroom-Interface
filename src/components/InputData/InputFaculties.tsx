import { MultiSelect } from "@mantine/core";
import { FC, useEffect, useState } from "react";

import { IFaculty } from "../../types/types";
import getData from "../../helpers/requests/getData";
import InputDataStore from "../../store/inputDataStore";
import classes from "./InputDate.module.css";

const InputFaculties: FC = () => {
  const [facutlyFromResp, setFacultyFromResp] = useState<IFaculty[]>([]);

  const facultyAry: any[] = [];
  facutlyFromResp.map((item) => {
    facultyAry.push({ value: `${item.id}`, label: `${item.short_name}` });
  });

  const setDataToStore = (facultiesId) => {
    InputDataStore.setFaculty(facultiesId);
  };

  useEffect(() => {
    (async function setFacultyState() {
      setFacultyFromResp(await getData<IFaculty[]>("faculties"));
    })();
  }, []);

  return (
    <div>
      <MultiSelect
        className={classes.inputDate}
        label='Желаемые факультеты'
        placeholder='Выберите желаемые факультеты'
        data={facultyAry}
        // onChange={setSelectedFaculties}
        onChange={(facultiesId) => setDataToStore(facultiesId)}
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
