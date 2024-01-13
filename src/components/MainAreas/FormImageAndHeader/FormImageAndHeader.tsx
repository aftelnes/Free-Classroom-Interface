import { FC } from "react";
import { Image } from "@mantine/core";

import mainicon from "../../../images/main_image.svg";
// import classes from "./FormImageAndHeader.module.css";
import classes from "../FormArea.module.css";

//! Добавить адаптивность - сделать верстку под весь div
const MainImageAndHeader: FC = () => {
  return (
    <div className={classes.mainImageAndHeader}>
      <Image src={mainicon} width={180} className={classes.items} />
      <h3 className={classes.items}>Поиск свободной аудитории</h3>
    </div>
  );
};

export default MainImageAndHeader;
