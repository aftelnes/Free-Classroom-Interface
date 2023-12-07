import { FC } from "react";
import { DatesProvider } from "@mantine/dates";
import "dayjs/locale/ru";

import MainImageAndHeader from "../MainImageAndHeader/MainImageAndHeader";
import classes from "../../styles/UI/UI.module.css";
import Inputs from "../Inputs/Inputs";

const InputDataArea: FC = () => {
  return (
    <DatesProvider
      settings={{
        locale: "ru",
      }}>
      <div className={classes.inputDataArea}>
        <MainImageAndHeader />
        <Inputs />
      </div>
    </DatesProvider>
  );
};

export default InputDataArea;
