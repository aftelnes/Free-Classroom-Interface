import React from "react";
import classes from "./styles/UI/UI.module.css";
import InputDate from "./components/InputDate";
import InputLessonNumber from "./components/InputLessonNumber";
import InputMinimalCapacity from "./components/InputMinimalCapacity";
import { Button } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <div className={classes.ui}>
        <div className={classes.areas}>
          <h3 className={classes.h3}>Поиск свободной аудитории</h3>
          <InputDate />
          <InputLessonNumber />
          <InputMinimalCapacity />
          <Button variant='filled' className={classes.findbtn}>
            Найти
          </Button>
        </div>
        <div className={classes.areas}>
          <h3 className={classes.h3}>Результат</h3>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
