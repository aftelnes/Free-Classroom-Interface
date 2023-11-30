import classes from "./styles/UI/UI.module.css";
import "@mantine/styles";
// import "@mantine/dates/styles.css";
import { FC } from "react";
import OutputDate from "./components/MainAreas/OutputDataArea";
import InputDataArea from "./components/MainAreas/InputDataArea";

const App: FC = () => {
  return (
    <div className={classes.ui}>
      <InputDataArea />
      <OutputDate />
    </div>
  );
};

export default App;
