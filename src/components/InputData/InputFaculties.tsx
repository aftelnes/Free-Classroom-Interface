import { MultiSelect } from "@mantine/core";
import { FC, useEffect, useState } from "react";

import { IFaculty } from "../../types/types";
import classes from "./InputDate.module.css";
import getData from "../../helpers/requests/getData";
import inputData from "../../store/inputData";

const InputFaculties: FC = () => {
  //Состояние созданное для получения факультетов с респонса
  const [facutlyFromResp, setFacultyFromResp] = useState<IFaculty[]>([]);
  console.log("Тут");
  //Функция записывающая в состояние ответ с респонса
  (async function setFacultyState() {
    setFacultyFromResp(await getData<IFaculty[]>("faculties"));
  })();
  //Создаем массив, в который добавляем айдишник и название факультета в виде списка
  const facultyAry: any[] = [];
  facutlyFromResp.map((item) => {
    facultyAry.push({ value: `${item.id}`, label: `${item.short_name}` });
  });

  //состояние отвечающее за выбранныые факультеты
  const [selectedFaculties, setSelectedFaculties] = useState<
    string[] | number[]
  >([]);
  //отслеживаем выбранные факультеты и записываем их в общий store
  useEffect(() => {
    inputData.setFaculty(selectedFaculties);
  }, [selectedFaculties]);

  return (
    <div>
      <MultiSelect
        className={classes.inputDate}
        label='Желаемые факультеты'
        placeholder='Выберите желаемые факультеты'
        data={facultyAry}
        onChange={setSelectedFaculties}
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
