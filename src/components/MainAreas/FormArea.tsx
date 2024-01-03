import { FC } from "react";
import "dayjs/locale/ru";

import MainImageAndHeader from "./FormImageAndHeader/FormImageAndHeader";
import classes from "../../styles/UI/UI.module.css";
import Form from "./Form/Form";

const InputDataArea: FC = () => {
  return (
    <div className={classes.inputDataArea}>
      <MainImageAndHeader />
      <Form />
    </div>
  );
};

export default InputDataArea;
