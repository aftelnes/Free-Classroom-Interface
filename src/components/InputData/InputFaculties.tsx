import { MultiSelect } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { IFaculty } from "../../types/types";
import classes from "./InputDate.module.css";
import getFacultiesOrEquipment from "../../helpers/requests/getFacultyAndEquipment";
import inputData from "../../store/inputData";

const InputFaculties: FC = () => {
  //Состояние созданное для получения факультетов с респонса
  const [facutlyFromResp, setFacultyFromResp] = useState<IFaculty[]>([]);
  //Функция записывающая в состояние ответ с респонса
  (async function setFacultyState() {
    setFacultyFromResp(
      await getFacultiesOrEquipment<IFaculty[]>(
        "https://0ee3-85-172-29-2.ngrok-free.app/api/faculties/selection"
      )
    );
  })();
  //Создаем массив, в который добавляем айдишник и название факультета в виде списка
  const facultyAry: any[] = [""];
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
      />
    </div>
  );
};

export default InputFaculties;
