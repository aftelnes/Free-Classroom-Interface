import { FC } from "react";
import "dayjs/locale/ru";

import MainImageAndHeader from "./FormImageAndHeader/FormImageAndHeader";
import classes from "../../styles/UI/UI.module.scss";
import Form from "./Form/Form";

const InputDataArea: FC = () => {
  return (
    <div className={classes.formArea}>
      <MainImageAndHeader />
      <Form />
    </div>
  );
};

export default InputDataArea;
