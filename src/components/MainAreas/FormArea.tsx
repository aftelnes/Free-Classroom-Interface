import { FC } from "react";
import "dayjs/locale/ru";

import MainImageAndHeader from "./FormImageAndHeader/FormImageAndHeader";
import classes from "../../styles/UI/UI.module.scss";
import Form from "./Form/Form";
// import classes from "../../styles/UI/UI2.module.css";

const InputDataArea: FC = () => {
  return (
    <div className={classes.formArea}>
      <MainImageAndHeader />
      <Form />
    </div>
  );
};

export default InputDataArea;
