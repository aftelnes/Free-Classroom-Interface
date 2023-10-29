import { useState, useEffect } from "react";
import classes from "../styles/InputDate/InputDate.module.css";
import axios from "axios";
import { IFaculty } from "../types/types";
import { Select } from "@mantine/core";

const InputFaculties = () => {
  const [facutly, setFaculty] = useState("");

  async function RespFunc() {
    try {
      const response = await axios.get<IFaculty>(
        "https://5423-85-172-29-2.ngrok-free.app/api/faculties/selection/"
      );
      console.log(`Response = ${response.data}`);
    } catch (e) {
      console.log(`Error = ${e}`);
    }
  }

  useEffect(() => {
    RespFunc();
  }, []);

  return (
    <Select
      className={classes.inputDate}
      label='Желаемые факультеты'
      placeholder='Выберите желаемые факультеты'
      data={["ФМиКн"]}
      clearable
    />
  );
};

export default InputFaculties;
