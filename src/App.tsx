import React from "react";
import classes from "./styles/UI/UI.module.css";
import InputDate from "./components/InputDate";

function App() {
  return (
    <div className={classes.ui}>
      <div className={classes.areas}>
        <h3 className={classes.h3}>Поиск свободной аудитории</h3>
        <InputDate />
      </div>
      <div className={classes.areas}>
        <h3 className={classes.h3}>Результат</h3>
      </div>
    </div>
  );
}

export default App;
