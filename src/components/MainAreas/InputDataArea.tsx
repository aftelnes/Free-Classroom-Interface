import { FC } from "react";
import "dayjs/locale/ru";

import MainImageAndHeader from "../MainImageAndHeader/MainImageAndHeader";
import classes from "../../styles/UI/UI.module.css";
import Inputs from "../Inputs/Inputs";

const InputDataArea: FC = () => {
  return (
    <div className={classes.inputDataArea}>
      <MainImageAndHeader />
      <Inputs />
    </div>
  );
};

export default InputDataArea;
